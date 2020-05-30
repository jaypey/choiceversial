
from rest_framework import serializers

from .models import User, Answers, Contro

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('user_id', 'device_id')

class AnswersSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Answers
        fields = ('id', 'c', 'u', 'answer')

class ControSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Contro
        fields = ('contro_id', 'contro_name', 'nb_yes', 'nb_no')