from rest_framework import serializers
from .models import JournalEntry

#Serialize Response
class JournalEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = JournalEntry
        fields = ('__all__')

#Serialize Request
class CreateEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = JournalEntry
        fields = ('code', 'title', 'body')

class RemoveEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = JournalEntry
        fields = ('code','id')