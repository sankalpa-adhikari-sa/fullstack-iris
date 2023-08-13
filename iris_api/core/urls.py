from django.urls import path, include
from rest_framework import routers
from .views import IrisPrediction, PredictionList

router = routers.DefaultRouter()
router.register('predict', IrisPrediction, basename='predict')

urlpatterns = [
    path('', include(router.urls)),
    path('predictions/', PredictionList.as_view(), name='prediction-list'),
]