from django.shortcuts import render,HttpResponse,redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from django.contrib import messages
from MyApp.EmailBackend import EmailBackEnd
from . models import *

def Base(request):
    return render(request,'base.html')

def Home(request):
    product=Products.objects.all()[0:4]
    new=NewArrivals.objects.all()[0:4]
    context={
        'product': product,
        'new_arrivals': new,
    }
    return render(request,'home.html',context)

def Shop(request):
    product=Products.objects.all()
    context={
        'product':product,
    }
    return render(request,'shop.html',context)

def Product_des(request):
    product=Products.objects.all()
    
    context={
        'product':product,
    }
    return render(request,'product.html',context)

def Register(request):
    if request.method=="POST":
        username=request.POST.get('name')
        email=request.POST.get('email')
        password=request.POST.get('password')
      
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

def Logout(request):
    logout(request)
    return redirect('home') 


# def PasswordReset(request):
    # if request.method=="POST":
    #     form=info(request.POST)
    #     if form.is_valid():
    #         data = form.cleaned_data["email"]
    #         associated_users = User.objects.filter(email=data)
    #         if associated_users.exists():
    #             for user in associated_users:
    #                 subject = "Password Reset Requested"
    #                 email_template_name = "password_reset_email.txt"
    #                 c = {
    #                     "email": user.email,
    #                     "domain": request.META["HTTP_HOST"],
    #                     "site_name": "Ecommerce",
    #                     "uid": urlsafe_base64_encode(force_bytes(user.pk)),
    #                     "user": user,
    #                     "token": default_token_generator.make_token(user),
    #                     "protocol": "http",
    #                 }
    #                 email = render_to_string(email_template_name, c)
    #                 try:
    #                     send_mail(subject, email, "golapoonam87@gmail.com", [user.email], fail_silently=False)
    #                 except BadHeaderError:
    #                     return HttpResponse("Invalid header found.")
    #     return redirect('password_done')
    # else:
    #     form=info()
#     return render(request,'password_reset_form.html')

def Blog(request):
        return render(request,'blog.html')
    
def About(request):
        return render(request,'about.html')
    
def Contact(request):
        return render(request,'contact.html')











