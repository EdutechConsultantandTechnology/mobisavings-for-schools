from django.test import TestCase
from django.contrib.auth.models import User
from .models import Payment

class PaymentModelTests(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='testpass')
        self.payment = Payment.objects.create(
            user=self.user,
            amount=500,
            payment_type='School Fee'
        )

    def test_payment_creation(self):
        self.assertEqual(self.payment.user.username, 'testuser')
        self.assertEqual(self.payment.amount, 500)
        self.assertEqual(self.payment.payment_type, 'School Fee')
