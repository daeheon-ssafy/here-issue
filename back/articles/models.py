from django.db import models
from django.conf import settings

# Create your models here.
class Article(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='user_articles')
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    comment_type = models.BooleanField()
    category = models.CharField(max_length=100)
    read_count = models.IntegerField(default=0)

class Hashtag(models.Model):
    article = models.ManyToManyField(Article)
    name = models.CharField(max_length=100)