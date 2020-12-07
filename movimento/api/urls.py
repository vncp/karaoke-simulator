from .views import JournalEntryView
from django.urls import path
from django.conf.urls import url


urlpatterns = [
    url('', JournalEntryView.as_view()),
]
