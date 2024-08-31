from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from django.contrib.auth.models import User
from .models import LoanApplication, Repayment

class LoanApplicationTests(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='testpass')
        self.client.login(username='testuser', password='testpass')
        self.loan = LoanApplication.objects.create(user=self.user, loan_amount=1000)

    def test_create_loan_application(self):
        url = reverse('loan-application-list-create')
        data = {'user': self.user.id, 'loan_amount': 5000}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_list_loan_applications(self):
        url = reverse('loan-application-list-create')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_update_loan_application(self):
        url = reverse('loan-application-detail', args=[self.loan.id])
        data = {'status': 'Approved'}
        response = self.client.patch(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['status'], 'Approved')

    def test_delete_loan_application(self):
        url = reverse('loan-application-detail', args=[self.loan.id])
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(LoanApplication.objects.filter(id=self.loan.id).exists())
