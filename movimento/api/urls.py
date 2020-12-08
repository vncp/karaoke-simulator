from .views import JournalEntryView, CreateJournalEntryView, RemoveJournalEntryView
from django.urls import path
from django.conf.urls import url


urlpatterns = [
    path('entries', JournalEntryView.as_view()),
    path('create-entry', CreateJournalEntryView.as_view()),
    path('remove-entry', RemoveJournalEntryView.as_view())
]
