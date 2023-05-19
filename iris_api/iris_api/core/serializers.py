from rest_framework import serializers
from . models import Iris

class IrisSerializers(serializers.ModelSerializer):
    class Meta:
        model= Iris
        fields = '__all__'