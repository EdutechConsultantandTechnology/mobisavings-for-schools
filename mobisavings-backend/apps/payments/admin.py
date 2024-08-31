from django.contrib import admin
from .models import Payment

@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'amount', 'payment_type', 'timestamp')
    search_fields = ('user__username', 'payment_type')
