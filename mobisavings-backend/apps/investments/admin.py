from django.contrib import admin
from .models import Investment

@admin.register(Investment)
class InvestmentAdmin(admin.ModelAdmin):
    list_display = ('id', 'investment_name', 'investment_type', 'investment_amount', 'returns', 'timestamp')
    search_fields = ('investment_name', 'investment_type')
