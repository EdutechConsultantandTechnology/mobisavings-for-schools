from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Investment, InvestmentTransaction
from .serializers import InvestmentSerializer, InvestmentTransactionSerializer

class InvestmentViewSet(viewsets.ModelViewSet):
    queryset = Investment.objects.all()
    serializer_class = InvestmentSerializer

    @action(detail=True, methods=['get'])
    def track_performance(self, request, pk=None):
        investment = self.get_object()
        # Assuming performance tracking logic is implemented here
        performance_data = {
            "investment_id": investment.id,
            "current_value": investment.current_value,
            "initial_value": investment.initial_value,
            "performance": investment.current_value - investment.initial_value
        }
        return Response(performance_data)

class InvestmentTransactionViewSet(viewsets.ModelViewSet):
    queryset = InvestmentTransaction.objects.all()
    serializer_class = InvestmentTransactionSerializer

    @action(detail=True, methods=['post'])
    def add_transaction(self, request, pk=None):
        investment = self.get_object()
        data = request.data
        # Logic for adding a new investment transaction
        serializer = self.get_serializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({'status': 'Transaction added'})
        return Response(serializer.errors, status=400)
