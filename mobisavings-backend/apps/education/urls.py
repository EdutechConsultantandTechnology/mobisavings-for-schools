from django.urls import path
from .views import EducationalResourceListCreateView, EducationalResourceRetrieveUpdateDestroyView

urlpatterns = [
    path('resources/', EducationalResourceListCreateView.as_view(), name='educational-resource-list-create'),
    path('resources/<int:pk>/', EducationalResourceRetrieveUpdateDestroyView.as_view(), name='educational-resource-detail'),
]
