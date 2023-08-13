from django.db import models

# Create your models here.
class Iris(models.Model):
    sepal_length = models.FloatField()
    sepal_width = models.FloatField()
    petal_length = models.FloatField()
    petal_width = models.FloatField()
    predicted_class = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)