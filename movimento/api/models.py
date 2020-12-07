from django.db import models
import string
import random

def gen_id(length):
    while JournalEntry.objects.filter(code = code).count > 0:
        res = ''.join(random.choices(string.ascii_upercase, k=length))
    return res

# Create your models here.
class JournalEntry(models.Model):
    id = models.CharField(max_length=9, default="", unique=True, primary_key = True)
    date = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=30, default="")
    body = models.CharField(max_length=1200, default="")
    datePassed = models.BooleanField(null=False, default=False)

