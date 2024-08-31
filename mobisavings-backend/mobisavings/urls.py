from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('apps.users.urls')),  # Including URLs from the users app
    path('api/', include('apps.savings.urls')), # Including URLs from the savings app
    path('api/', include('apps.payments.urls')), # Including URLs from the payments app
    path('api/', include('apps.investments.urls')), # Including URLs from the investments app
    path('api/', include('apps.education.urls')), # Including URLs from the education app
    path('api/', include('apps.loans.urls')), # Including URLs from the loans app
]

