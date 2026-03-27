from decimal import Decimal

from django.core.validators import MinValueValidator
from django.db import models


class Tour(models.Model):
    reference = models.CharField(max_length=64, unique=True)
    title = models.CharField(max_length=255)
    summary = models.TextField(blank=True)
    description = models.TextField(blank=True)
    duration = models.CharField(max_length=64, blank=True)
    category = models.CharField(max_length=64, blank=True)
    tour_type = models.CharField(max_length=32, blank=True)
    origin = models.CharField(max_length=64, blank=True)
    max_guests = models.CharField(max_length=32, blank=True)
    reviews = models.CharField(max_length=64, blank=True)
    rating = models.CharField(max_length=8, blank=True)
    price_display = models.CharField(max_length=64, blank=True)
    price_currency = models.CharField(max_length=4, blank=True, default='USD')
    price_amount = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        blank=True,
        null=True,
        validators=[MinValueValidator(Decimal('0.00'))],
    )
    child_price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        blank=True,
        null=True,
        validators=[MinValueValidator(Decimal('0.00'))],
    )
    detail_url = models.URLField(blank=True)
    image_url = models.URLField(blank=True)
    tags = models.JSONField(blank=True, default=list)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['title']

    def __str__(self):
        return self.title
