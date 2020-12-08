from django.db import models
import uuid
# Create your models here.
# class User(model.Model):
#     id = models.CharField(max_length=9, default=gen_id(9), unique=True, primary_key = True)
#     journal = ArrayField(JournalEntry)

class JournalEntry(models.Model):
    code = models.CharField(max_length=40, default=uuid.uuid4)
    date = models.DateField(auto_now_add=True)
    title = models.CharField(max_length=30, default="")
    body = models.CharField(max_length=1200, default="")
    