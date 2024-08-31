from django.db import models

class EducationalResource(models.Model):
    RESOURCE_TYPE_CHOICES = [
        ('Article', 'Article'),
        ('Video', 'Video'),
        ('Tool', 'Tool'),
    ]

    title = models.CharField(max_length=255)
    content = models.TextField()
    resource_type = models.CharField(max_length=10, choices=RESOURCE_TYPE_CHOICES)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
