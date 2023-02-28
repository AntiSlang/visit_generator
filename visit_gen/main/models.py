from django.db import models

# Create your models here.


class VisitCard(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, blank=False)
    phone_number = models.CharField(max_length=12, blank=False)
    email = models.EmailField(blank=False)
    telegram = models.URLField(blank=True, max_length=255)
    vk = models.URLField(blank=True, max_length=255)
    youtube = models.URLField(blank=True, max_length=255)

    def __str__(self):
        return f' ( " id " --> {self.id} ) - - - - - ( " ФИО " --> {self.name} ) - - - - - ( " email " --> {self.email} ) '
