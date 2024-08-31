from django.contrib import admin
from .models import SavingsAccount, Transaction

@admin.register(SavingsAccount)
class SavingsAccountAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'account_name', 'balance', 'goal', 'created_at', 'updated_at')
    search_fields = ('user__username', 'account_name')

@admin.register(Transaction)
class TransactionAdmin(admin.ModelAdmin):
    list_display = ('id', 'savings_account', 'amount', 'transaction_type', 'timestamp')
    search_fields = ('savings_account__account_name', 'transaction_type')
