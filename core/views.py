from django.db.models import Q
from django.http import Http404, JsonResponse
from django.views import View

from .models import Tour
from .serializers import serialize_tour, serialize_tours


class TourListView(View):
    def get(self, request):
        queryset = Tour.objects.filter(is_active=True)
        serializer_data = serialize_tours(queryset)
        return JsonResponse(serializer_data, safe=False)


class TourDetailView(View):
    def _get_identifier_filter(self, identifier):
        if identifier.isdigit():
            return Q(pk=identifier) | Q(reference__iexact=identifier)
        return Q(reference__iexact=identifier)

    def get(self, request, identifier):
        identifier_filter = self._get_identifier_filter(identifier)
        tour = Tour.objects.filter(is_active=True).filter(identifier_filter).first()
        if not tour:
            raise Http404('Tour not found.')
        return JsonResponse(serialize_tour(tour))
