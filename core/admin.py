from django.contrib import admin

from .models import Tour


@admin.register(Tour)
class TourAdmin(admin.ModelAdmin):
    list_display = ('reference', 'title', 'category', 'tour_type', 'is_active')
    search_fields = ('reference', 'title', 'tags')
    list_filter = ('category', 'tour_type', 'is_active')
