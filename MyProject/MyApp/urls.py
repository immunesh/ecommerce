from django.urls import path
from django.shortcuts import redirect,render
from django.conf import settings
from django.conf.urls.static import static
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
   path('',views.Home,name='home'),
   path('base/',views.Base,name='base'),
   path('shop/',views.Shop,name='shop'),
   path('product/',views.Product_des,name='product'),
   path('login/',views.Login,name='login'),
   path('register/',views.Register,name='register'),
   path('password_reset/', auth_views.PasswordResetView.as_view(), name='password_reset'),
   path('password_reset/done/', auth_views.PasswordResetDoneView.as_view(), name='password_reset_done'),
   path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
   path('reset/done/', auth_views.PasswordResetCompleteView.as_view(), name='password_reset_complete'),

   
] +static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)