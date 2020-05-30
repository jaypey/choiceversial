
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .serializers import UserSerializer, ControSerializer, AnswersSerializer
from .models import User, Contro, Answers
from django.shortcuts import render

class UserViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)

    queryset = User.objects.all().order_by('user_id')
    serializer_class = UserSerializer

class ControViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = Contro.objects.all().order_by('contro_name')
    serializer_class = ControSerializer

class AnswersViewSet(viewsets.ModelViewSet):
    queryset = Answers.objects.all().order_by('id')
    serializer_class = AnswersSerializer
