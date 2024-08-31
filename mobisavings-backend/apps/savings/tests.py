from django.test import TestCase
from .models import SavingsAccount, Transaction
from django.contrib.auth.models import User

class SavingsAccountModelTests(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='testpass')
        self.savings_account = SavingsAccount.objects.create(
            user=self.user,
            account_name='Test Account',
            balance=1000,
            goal=2000
        )

    def test_savings_account_creation(self):
        self.assertEqual(self.savings_account.account_name, 'Test Account')
        self.assertEqual(self.savings_account.balance, 1000)

class TransactionModelTests(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='testpass')
        self.savings_account = SavingsAccount.objects.create(
            user=self.user,
            account_name='Test Account',
            balance=1000,
            goal=2000
        )
        self.transaction = Transaction.objects.create(
            savings_account=self.savings_account,
            amount=100,
            transaction_type='Deposit'
        )

    def test_transaction_creation(self):
        self.assertEqual(self.transaction.amount, 100)
        self.assertEqual(self.transaction.transaction_type, 'Deposit')
