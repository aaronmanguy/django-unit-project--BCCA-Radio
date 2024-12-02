from django.contrib import admin
from django.urls import path
from app.views import *

urlpatterns = [
    path('', main, name="home"),
    path('search/', search, name="search"),
    path('<name>', main, name="<name>"),
    path('admin/', admin.site.urls),
]