from django.db import models
from django.conf import settings

class LoanApplication(models.Model):
    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('Approved', 'Approved'),
        ('Rejected', 'Rejected'),
    ]
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    loan_amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='Pending')
    application_date = models.DateField(auto_now_add=True)
    approval_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return f"Loan {self.id} for {self.user.username}"

class Repayment(models.Model):
    loan_application = models.ForeignKey(LoanApplication, related_name='repayments', on_delete=models.CASCADE)
    repayment_amount = models.DecimalField(max_digits=10, decimal_places=2)
    repayment_date = models.DateField()

    def __str__(self):
        return f"Repayment {self.id} for Loan {self.loan_application.id}"
