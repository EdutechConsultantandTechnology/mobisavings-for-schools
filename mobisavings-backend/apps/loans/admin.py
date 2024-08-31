from django.contrib import admin
from .models import LoanApplication, Repayment

@admin.register(LoanApplication)
class LoanApplicationAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'loan_amount', 'status', 'application_date', 'approval_date']
    search_fields = ['user__username', 'status']

@admin.register(Repayment)
class RepaymentAdmin(admin.ModelAdmin):
    list_display = ['id', 'loan_application', 'repayment_amount', 'repayment_date']
    search_fields = ['loan_application__id']
