from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db import models
class User(AbstractUser):
    photo = models.URLField(blank=True)
    def __str__(self):
        return self.username