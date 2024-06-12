from django.urls import path
from django.shortcuts import redirect,render
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
   path('',views.Home,name='home'),
   path('base/',views.Base,name='base'),

   
] +static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)