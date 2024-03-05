from django.contrib import admin
from django.urls import path

from app import view


urlpatterns = [
    path('api/upload/', view.upload_file),
    path('api/list/', view.file_name_list),
]
