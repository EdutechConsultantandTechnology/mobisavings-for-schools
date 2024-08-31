from django.test import TestCase
from .models import Investment

class InvestmentModelTests(TestCase):
    def setUp(self):
        self.investment = Investment.objects.create(
            investment_name='Farm Project',
            investment_type='Farming',
            investment_amount=10000.00,
            returns=15000.00
        )

    def test_investment_creation(self):
        self.assertEqual(self.investment.investment_name, 'Farm Project')
        self.assertEqual(self.investment.investment_type, 'Farming')
        self.assertEqual(self.investment.investment_amount, 10000.00)
        self.assertEqual(self.investment.returns, 15000.00)
