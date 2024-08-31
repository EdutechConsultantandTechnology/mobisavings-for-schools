from django.db import models
from django.contrib.auth.models import User

class InvestmentOpportunity(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    amount_required = models.DecimalField(max_digits=12, decimal_places=2)
    expected_return = models.DecimalField(max_digits=5, decimal_places=2)  # Percentage
    start_date = models.DateField()
    end_date = models.DateField()
    status = models.CharField(max_length=20, choices=[('active', 'Active'), ('closed', 'Closed')])

    def __str__(self):
        return self.title

class Investment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    investment_opportunity = models.ForeignKey(InvestmentOpportunity, on_delete=models.CASCADE)
    amount_invested = models.DecimalField(max_digits=12, decimal_places=2)
    investment_date = models.DateTimeField(auto_now_add=True)
    expected_return = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)  # Percentage
    status = models.CharField(max_length=20, choices=[('pending', 'Pending'), ('completed', 'Completed')])

    def __str__(self):
        return f"Investment of {self.amount_invested} by {self.user.username} in {self.investment_opportunity.title}"

