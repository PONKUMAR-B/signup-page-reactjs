from xmlrpc.client import ResponseError
from django.shortcuts import render
from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView


# Create your views here.

class UserView(APIView):

    def post(self,request):
        try:
            data = request.data
            serializer = UserSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors)
        except Exception as e:
            return Response({"Error":str(e)},status=status.HTTP_400_BAD_REQUEST)

    def get(self,request):
        try:
            data = request.GET.get('id')
            model = User.objects.get(id=data)
            serializer = UserSerializer(model)
            return Response(serializer.data)
        except Exception as e:
            return Response({"Error":str(e)},status=status.HTTP_400_BAD_REQUEST)