from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics, status
from .serializers import JournalEntrySerializer, CreateEntrySerializer
from .models import JournalEntry
from rest_framework.views import APIView
from rest_framework.response import Response

class JournalEntryView(generics.ListAPIView):
    queryset = JournalEntry.objects.all()
    serializer_class = JournalEntrySerializer

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