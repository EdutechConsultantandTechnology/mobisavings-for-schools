from rest_framework import generics, permissions, filters
from rest_framework.pagination import PageNumberPagination
from .models import LoanApplication
from .serializers import LoanApplicationSerializer

class LoanApplicationListCreateAPIView(generics.ListCreateAPIView):
    queryset = LoanApplication.objects.all()
    serializer_class = LoanApplicationSerializer
    permission_classes = [permissions.IsAuthenticated]
    pagination_class = PageNumberPagination

    def get_queryset(self):
        queryset = super().get_queryset()
        # Filtering by user and status (if provided)
        user = self.request.query_params.get('user')
        status = self.request.query_params.get('status')
        if user:
            queryset = queryset.filter(user_id=user)
        if status:
            queryset = queryset.filter(status=status)
        return queryset

class LoanApplicationRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = LoanApplication.objects.all()
    serializer_class = LoanApplicationSerializer
    permission_classes = [permissions.IsAuthenticated]
