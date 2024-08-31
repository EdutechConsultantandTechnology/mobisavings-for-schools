from django.db import models
from django.contrib.auth.models import User

class Payment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=[('pending', 'Pending'), ('completed', 'Completed'), ('failed', 'Failed')])

    def __str__(self):
        return f"Payment of {self.amount} by {self.user.username} on {self.payment_date}"

class LoanApplication(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount_requested = models.DecimalField(max_digits=10, decimal_places=2)
    amount_approved = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    application_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=[('pending', 'Pending'), ('approved', 'Approved'), ('rejected', 'Rejected')])
    repayment_schedule = models.TextField(null=True, blank=True)  # JSON or CSV format

    def __str__(self):
        return f"Loan Application by {self.user.username} for {self.amount_requested}"

class LoanRepayment(models.Model):
    loan = models.ForeignKey(LoanApplication, on_delete=models.CASCADE)
    repayment_amount = models.DecimalField(max_digits=10, decimal_places=2)
    repayment_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=[('pending', 'Pending'), ('completed', 'Completed')])

    def __str__(self):
        return f"Repayment of {self.repayment_amount} for loan ID {self.loan.id} on {self.repayment_date}"
