from rest_framework import generics, status
from rest_framework.response import Response
from .models import SavingsAccount, Transaction
from .serializers import SavingsAccountSerializer, TransactionSerializer

class SavingsAccountListCreateView(generics.ListCreateAPIView):
    queryset = SavingsAccount.objects.all()
    serializer_class = SavingsAccountSerializer

    def get(self, request, *args, **kwargs):
        """
        List all savings accounts.
        """
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        """
        Create a new savings account.
        """
        return self.create(request, *args, **kwargs)

class SavingsAccountRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = SavingsAccount.objects.all()
    serializer_class = SavingsAccountSerializer

    def get(self, request, *args, **kwargs):
        """
        Retrieve a specific savings account.
        """
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        """
        Update a specific savings account.
        """
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        """
        Delete a specific savings account.
        """
        return self.destroy(request, *args, **kwargs)

class TransactionListCreateView(generics.ListCreateAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

    def get(self, request, *args, **kwargs):
        """
        List all transactions.
        """
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        """
        Create a new transaction.
        """
        return self.create(request, *args, **kwargs)

class TransactionRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

    def get(self, request, *args, **kwargs):
        """
        Retrieve a specific transaction.
        """
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        """
        Update a specific transaction.
        """
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        """
        Delete a specific transaction.
        """
        return self.destroy(request, *args, **kwargs)
