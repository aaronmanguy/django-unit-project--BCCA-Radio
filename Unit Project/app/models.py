from django.db import models

# Create your models here.
class Playlist(models.Model):
    name = models.CharField('Name', max_length=30)
    genre = models.CharField('Genre', max_length=30)
    desc = models.CharField('Desc', max_length=600, default="")

    def __str__(self):
        return self.name