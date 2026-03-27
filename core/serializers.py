from decimal import Decimal
from django.forms.models import model_to_dict

DEFAULT_FIELDS = [
    'id',
    'reference',
    'title',
    'summary',
    'description',
    'duration',
    'category',
    'tour_type',
    'origin',
    'max_guests',
    'reviews',
    'rating',
    'price_display',
    'price_currency',
    'price_amount',
    'child_price',
    'detail_url',
    'image_url',
    'tags',
    'is_active',
    'created_at',
    'updated_at',
]


def _normalize_decimal(value):
    if value is None:
        return None
    if isinstance(value, Decimal):
        return float(value)
    return value


def serialize_tour(tour):
    data = model_to_dict(tour, fields=DEFAULT_FIELDS)
    data['price_amount'] = _normalize_decimal(data['price_amount'])
    data['child_price'] = _normalize_decimal(data['child_price'])
    data['tags'] = data.get('tags') or []
    return data


def serialize_tours(queryset):
    return [serialize_tour(tour) for tour in queryset]
