from django.urls import path
from django.shortcuts import redirect,render
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
   path('',views.Home,name='home'),
   path('base/',views.Base,name='base'),
   path('login/',views.Login,name='login'),
   path('register/',views.Register,name='register'),
   path('logout/',views.Logout,name='logout'),
   path('password_reset/',views.PasswordReset,name='password_reset'),
   path('password_done/',views.PasswordDone,name='password_done'),
   path('password_confirm/',views.PasswordConfirm,name='password_confirm'),
   path('password_complete/',views.PasswordComplete,name='password_complete'),

   
] +static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)