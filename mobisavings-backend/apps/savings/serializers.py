from rest_framework import serializers
from .models import SavingsAccount, Transaction

class SavingsAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = SavingsAccount
        fields = ['id', 'user', 'account_name', 'balance', 'goal', 'created_at', 'updated_at']
        read_only_fields = ['user', 'created_at', 'updated_at']

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ['id', 'savings_account', 'amount', 'transaction_type', 'timestamp']
        read_only_fields = ['timestamp']
