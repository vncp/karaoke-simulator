from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .serializer import JournalEntrySerializer
from .models import JournalEntry

# Create your views here.
class JournalEntryView(generics.ListAPIView):
    queryset = JournalEntry.objects.all()
    serializer_class = JournalEntrySerializer
    