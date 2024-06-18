from django.shortcuts import render,HttpResponse,redirect
from . models import *
from django.contrib.auth.models import User
from django.contrib import messages
# from MyApp.EmailBackend import EmailBackEnd
from django.contrib.auth import authenticate,login,logout
from django.core.mail import send_mail
from django.contrib.auth import views as auth_views
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.core.mail import send_mail, BadHeaderError
from django.template.loader import render_to_string
# from .forms import info
from django.contrib.auth.tokens import default_token_generator


def Base(request):
    return render(request,'base.html')

def Home(request):
    product=Products.objects.all()
    new=NewArrivals.objects.all()
    context={
        'product': product,
        'new_arrivals': new,
    }
    return render(request,'home.html',context)

def Login(request):
    if request.method=="POST":
        email=request.POST.get('email')
        password=request.POST.get('password')
        
        user=EmailBackEnd.authenticate(request,username=email,password=password)
        if user!=None:
            login(request,user)
            return redirect('home')
        else:
            messages.error(request,'Email and Password are invalid!!!')
            return redirect('login')
    return render(request,'login.html')

def Register(request):
    if request.method=="POST":
        username=request.POST.get('username')
        email=request.POST.get('email')
        password=request.POST.get('password')
        #check username and email
        if User.objects.filter(username=username).exists():
            messages.warning(request,'Username already exists')
            return redirect('register')
        if User.objects.filter(email=email).exists():
            messages.warning(request,'Email already exists')
            return redirect('register')
        user=User(username=username,email=email)
        user.set_password(password)
        user.save()
        return redirect('login')
    return render(request,'register.html')

def Logout(request):
    logout(request)
    return redirect('home') 

def PasswordDone(request):
    return render(request,'password_reset_done.html')


def PasswordReset(request):
    if request.method=="POST":
        form=info(request.POST)
        if form.is_valid():
            data = form.cleaned_data["email"]
            associated_users = User.objects.filter(email=data)
            if associated_users.exists():
                for user in associated_users:
                    subject = "Password Reset Requested"
                    email_template_name = "password_reset_email.txt"
                    c = {
                        "email": user.email,
                        "domain": request.META["HTTP_HOST"],
                        "site_name": "Learning Management System",
                        "uid": urlsafe_base64_encode(force_bytes(user.pk)),
                        "user": user,
                        "token": default_token_generator.make_token(user),
                        "protocol": "http",
                    }
                    email = render_to_string(email_template_name, c)
                    try:
                        send_mail(subject, email, "golapoonam87@gmail.com", [user.email], fail_silently=False)
                    except BadHeaderError:
                        return HttpResponse("Invalid header found.")
        return redirect('password_done')
    else:
        form=info()
    return render(request,'password_reset_form.html',{'form':form})



def PasswordConfirm(request):
    return render(request,'password_reset_confirm.html')

def PasswordComplete(request):
    return render(request,'password_reset_complete.html')

