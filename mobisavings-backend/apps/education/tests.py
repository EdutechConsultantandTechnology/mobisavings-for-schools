from django.test import TestCase
from .models import EducationalResource

class EducationalResourceModelTests(TestCase):
    def setUp(self):
        self.resource = EducationalResource.objects.create(
            title='Introduction to Finance',
            content='This is a comprehensive guide to financial literacy.',
            resource_type='Article'
        )

    def test_educational_resource_creation(self):
        self.assertEqual(self.resource.title, 'Introduction to Finance')
        self.assertEqual(self.resource.resource_type, 'Article')
        self.assertIn('comprehensive guide', self.resource.content)
