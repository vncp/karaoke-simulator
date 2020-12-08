from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics, status
from .serializers import JournalEntrySerializer, CreateEntrySerializer, RemoveEntrySerializer
from .models import JournalEntry
from rest_framework.views import APIView
from rest_framework.response import Response

class JournalEntryView(generics.ListAPIView):
    queryset = JournalEntry.objects.all()
    serializer_class = JournalEntrySerializer

class RemoveJournalEntryView(APIView):
    serializer_class = RemoveEntrySerializer
    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            code = serializer.data.get('code')
            queryset = JournalEntry.objects.filter(code=code)
            if queryset.exists():
                entry = queryset[0]
                entry.delete()
                return Response({"SUCCESS": "Removed"}, status=status.HTTP_200_OK)
            else:
                return Response({"Bad Request": "Item not found"}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

class CreateJournalEntryView(APIView):
    serializer_class = CreateEntrySerializer
    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            title = serializer.data.get('title')
            body = serializer.data.get('body')
            code = serializer.data.get('code')
            queryset = JournalEntry.objects.filter(code=code)
            if queryset.exists(): #Update
                entry = queryset[0]
                entry.title = title
                entry.body = body
                entry.save(update_fields=['title', 'body'])
                return Response(JournalEntrySerializer(entry).data, status=status.HTTP_200_OK)
            else: #Add
                entry = JournalEntry(title=title, body=body)
                entry.save()
                return Response(JournalEntrySerializer(entry).data, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)