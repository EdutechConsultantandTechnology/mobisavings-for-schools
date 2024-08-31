from rest_framework import serializers
from .models import LoanApplication, Repayment

class RepaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Repayment
        fields = ['id', 'repayment_amount', 'repayment_date']

class LoanApplicationSerializer(serializers.ModelSerializer):
    repayments = RepaymentSerializer(many=True, read_only=True)

    class Meta:
        model = LoanApplication
        fields = ['id', 'user', 'loan_amount', 'status', 'application_date', 'approval_date', 'repayments']
