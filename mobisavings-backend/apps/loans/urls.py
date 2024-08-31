from django.urls import path
from .views import LoanApplicationListCreateAPIView, LoanApplicationRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('loan-applications/', LoanApplicationListCreateAPIView.as_view(), name='loan-application-list-create'),
    path('loan-applications/<int:pk>/', LoanApplicationRetrieveUpdateDestroyAPIView.as_view(), name='loan-application-detail'),
]
