from rest_framework import generics
from .models import EducationalResource
from .serializers import EducationalResourceSerializer

class EducationalResourceListCreateView(generics.ListCreateAPIView):
    queryset = EducationalResource.objects.all()
    serializer_class = EducationalResourceSerializer

class EducationalResourceRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = EducationalResource.objects.all()
    serializer_class = EducationalResourceSerializer
