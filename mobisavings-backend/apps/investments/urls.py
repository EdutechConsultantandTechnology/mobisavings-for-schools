from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import InvestmentViewSet, InvestmentTransactionViewSet

router = DefaultRouter()
router.register(r'investments', InvestmentViewSet)
router.register(r'investment-transactions', InvestmentTransactionViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
