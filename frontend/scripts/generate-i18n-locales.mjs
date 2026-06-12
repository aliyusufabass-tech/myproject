import fs from 'node:fs'
import path from 'node:path'

const projectRoot = fs.existsSync(path.resolve(process.cwd(), 'src'))
  ? process.cwd()
  : path.resolve(process.cwd(), 'frontend')
const srcRoot = path.join(projectRoot, 'src')
const localesDir = path.join(srcRoot, 'locales')
const manifestPath = path.join(srcRoot, 'i18n', 'translation-manifest.json')
const sourceExtensions = new Set(['.js', '.jsx'])
const languageCodes = ['en', 'es', 'it', 'pt', 'fr', 'de', 'sw']

const explicitKeyPattern = /\b(?:t|ariaT)\(\s*(['"`])([a-z][a-z0-9]*(?:[._-][a-z0-9]+)+)\1/g
const legacyStringPattern = /\b(?:textKey|tr)\(\s*(['"`])((?:\\.|(?!\1)[\s\S])*?)\1/g

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      if (['assets', 'locales', 'i18n'].includes(entry.name)) return []
      return walk(fullPath)
    }

    return sourceExtensions.has(path.extname(entry.name)) ? [fullPath] : []
  })
}

function readJson(filePath, fallback = {}) {
  if (!fs.existsSync(filePath)) return fallback

  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'))
  } catch {
    return fallback
  }
}

function decodeString(quote, raw) {
  try {
    return quote === '`' ? raw : JSON.parse(`${quote}${raw}${quote}`)
  } catch {
    return raw.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\n/g, '\n')
  }
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '.')
    .replace(/(^\.|\.$)/g, '')
    .split('.')
    .filter(Boolean)
    .slice(0, 8)
    .join('.')
}

function namespaceFor(filePath) {
  const relative = path.relative(srcRoot, filePath).replaceAll(path.sep, '/')
  const withoutExtension = relative.replace(/\.[^.]+$/, '')

  return withoutExtension
    .replace(/^components\//, 'component.')
    .replace(/^pages\//, 'page.')
    .replace(/^data\//, 'data.')
    .replace(/\//g, '.')
    .replace(/([a-z0-9])([A-Z])/g, '$1.$2')
    .toLowerCase()
}

function humanizeKey(key) {
  const lastSegment = key.split('.').at(-1) || key

  return lastSegment
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
}

function addUniqueKey(entries, key, defaultMessage, filePath, generated = false) {
  const existing = entries.get(key)
  const source = path.relative(projectRoot, filePath).replaceAll(path.sep, '/')

  if (existing) {
    existing.sources.add(source)
    if (!existing.defaultMessage && defaultMessage) existing.defaultMessage = defaultMessage
    return
  }

  entries.set(key, {
    key,
    defaultMessage,
    generated,
    sources: new Set([source]),
  })
}

function collectEntries() {
  const entries = new Map()
  const existingEnglish = readJson(path.join(localesDir, 'en.json'))

  for (const [key, defaultMessage] of Object.entries(existingEnglish)) {
    if (typeof defaultMessage === 'string') {
      addUniqueKey(entries, key, defaultMessage, path.join(srcRoot, 'locales', 'en.json'))
    }
  }

  for (const filePath of walk(srcRoot)) {
    const source = fs.readFileSync(filePath, 'utf8')
    let match

    while ((match = explicitKeyPattern.exec(source))) {
      addUniqueKey(entries, match[2], '', filePath)
    }

    while ((match = legacyStringPattern.exec(source))) {
      const defaultMessage = decodeString(match[1], match[2]).trim()
      if (!defaultMessage || defaultMessage.includes('${')) continue

      const baseKey = `${namespaceFor(filePath)}.${slugify(defaultMessage)}`
      addUniqueKey(entries, baseKey, defaultMessage, filePath, true)
    }
  }

  return [...entries.values()].sort((a, b) => a.key.localeCompare(b.key))
}

function writeLocales(entries) {
  fs.mkdirSync(localesDir, { recursive: true })

  const existingLocales = Object.fromEntries(
    languageCodes.map((language) => [
      language,
      readJson(path.join(localesDir, `${language}.json`)),
    ]),
  )

  const baseEnglish = {}
  for (const entry of entries) {
    baseEnglish[entry.key] =
      existingLocales.en[entry.key] || entry.defaultMessage || humanizeKey(entry.key)
  }

  fs.writeFileSync(path.join(localesDir, 'en.json'), `${JSON.stringify(baseEnglish, null, 2)}\n`)

  for (const language of languageCodes.filter((code) => code !== 'en')) {
    const nextLocale = {}

    for (const key of Object.keys(baseEnglish)) {
      nextLocale[key] = existingLocales[language][key] || baseEnglish[key]
    }

    fs.writeFileSync(
      path.join(localesDir, `${language}.json`),
      `${JSON.stringify(nextLocale, null, 2)}\n`,
    )
  }
}

function writeManifest(entries) {
  fs.mkdirSync(path.dirname(manifestPath), { recursive: true })

  const manifest = Object.fromEntries(
    entries.map((entry) => [
      entry.key,
      {
        defaultMessage: entry.defaultMessage || humanizeKey(entry.key),
        generated: entry.generated,
        sources: [...entry.sources].sort(),
      },
    ]),
  )

  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`)
}

const entries = collectEntries()
writeManifest(entries)
writeLocales(entries)

console.log(`Generated ${entries.length} i18n keys for ${languageCodes.join(', ')}.`)
console.log(`Manifest: ${path.relative(projectRoot, manifestPath).replaceAll(path.sep, '/')}`)
