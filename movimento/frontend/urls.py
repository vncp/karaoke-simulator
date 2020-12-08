from .views import index
from django.urls import path


urlpatterns = [
    path('', index),
    path('about', index),
    path('write', index)
]
