from django.urls import path
from .views import (
    SavingsAccountListCreateView,
    SavingsAccountRetrieveUpdateDestroyView,
    TransactionListCreateView,
    TransactionRetrieveUpdateDestroyView
)

urlpatterns = [
    path('savings-accounts/', SavingsAccountListCreateView.as_view(), name='savings-account-list-create'),
    path('savings-accounts/<int:pk>/', SavingsAccountRetrieveUpdateDestroyView.as_view(), name='savings-account-detail'),
    path('transactions/', TransactionListCreateView.as_view(), name='transaction-list-create'),
    path('transactions/<int:pk>/', TransactionRetrieveUpdateDestroyView.as_view(), name='transaction-detail'),
]
