from .views import JournalEntryView, CreateJournalEntryView
from django.urls import path
from django.conf.urls import url


urlpatterns = [
    path('entry', JournalEntryView.as_view()),
    path('create-entry', CreateJournalEntryView.as_view()),
]
