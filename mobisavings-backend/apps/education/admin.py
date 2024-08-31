from django.contrib import admin
from .models import EducationalResource

@admin.register(EducationalResource)
class EducationalResourceAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'resource_type', 'timestamp')
    search_fields = ('title', 'resource_type')
