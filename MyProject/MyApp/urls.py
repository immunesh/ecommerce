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
   path('logout/',views.Logout,name='logout'),
   path('register/',views.Register,name='register'),
   path('reset_password/', auth_views.PasswordResetView.as_view(template_name='registration/password-reset.html'), name="reset_password"),
   path('reset_password_sent/', auth_views.PasswordResetDoneView.as_view(template_name='registration/password-reset-sent.html'), name="password_reset_done"),
   path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(template_name='registration/password-reset-form.html'), name="password_reset_confirm"),
   path('password_reset_complete', auth_views.PasswordResetCompleteView.as_view(template_name='registration/password-reset-complete.html'), name="password_reset_complete"),
   path('blog/',views.Blog,name='blog'),

   
] +static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)