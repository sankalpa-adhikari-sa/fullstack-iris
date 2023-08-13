from django.shortcuts import render
from rest_framework import viewsets, mixins, generics
from rest_framework.response import Response
from . models import Iris
from .serializers import IrisSerializers
import joblib
import pickle
import numpy as np

# Create your views here.

# class IrisPrediction(mixins.CreateModelMixin, viewsets.GenericViewSet):
#     serializer_class=IrisSerializers

#     def create(self, request, *args, **kwargs):
#         model = joblib.load('core/iris_model.pickle')

#         # Get the input data from the request
#         sepal_length = request.data['sepal_length']
#         sepal_width = request.data['sepal_width']
#         petal_length = request.data['petal_length']
#         petal_width = request.data['petal_width']

#         # Do the prediction
#         input_data= np.array([sepal_length, sepal_width, petal_length, petal_width])
#         input_data = input_data.astype(float).reshape(1, -1)
#         predicted_class = model.predict(input_data)[0]
#         if predicted_class == 0:
#             predicted_class ='Iris-sentosa'
#         elif predicted_class == 1:
#             predicted_class ='Iris-versicolor'
#         else:
#             predicted_class ='Iris-virginica'
#         # Create a new prediction object and save it to the database
#         prediction = Iris.objects.create(
#             sepal_length=sepal_length,
#             sepal_width=sepal_width,
#             petal_length=petal_length,
#             petal_width=petal_width,
#             predicted_class=predicted_class
#         )

#         # Serialize the prediction object and return it in the response
#         serializer = self.get_serializer(prediction)
#         return Response(serializer.data)

class IrisPrediction(viewsets.ModelViewSet):
    serializer_class= IrisSerializers

    def get_queryset(self):
        iris= Iris.objects.all()
        return iris
    def create(self, request, *args, **kwargs):
        model = joblib.load('core/iris_model.pickle')
        sepal_length = request.data['sepal_length']
        sepal_width = request.data['sepal_width']
        petal_length = request.data['petal_length']
        petal_width = request.data['petal_width']


        input_data= np.array([sepal_length, sepal_width, petal_length, petal_width])
        input_data = input_data.astype(float).reshape(1, -1)
        predicted_class = model.predict(input_data)[0]
        if predicted_class == 0:
            predicted_class ='Iris-sentosa'
        elif predicted_class == 1:
            predicted_class ='Iris-versicolor'
        else:
            predicted_class ='Iris-virginica'

        prediction = Iris.objects.create(
            sepal_length=sepal_length,
            sepal_width=sepal_width,
            petal_length=petal_length,
            petal_width=petal_width,
            predicted_class=predicted_class
        )
        serializer = self.get_serializer(prediction)
        return Response(serializer.data)



class PredictionList(generics.ListAPIView):
    queryset = Iris.objects.all()
    serializer_class = IrisSerializers

