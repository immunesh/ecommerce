from django.shortcuts import render,HttpResponse,redirect
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








