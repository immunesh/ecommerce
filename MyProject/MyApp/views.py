from django.shortcuts import render,HttpResponse
from . models import *

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


