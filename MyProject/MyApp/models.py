from django.db import models

class Products(models.Model):
    brand=models.CharField(max_length=100)
    product_name=models.CharField(max_length=500)
    price=models.IntegerField(null=True,default=0)
    image=models.ImageField(upload_to="Media/featured_img",null=True)
    rating=models.IntegerField(default=0)
    
    def __str__(self):
        return self.product_name


class NewArrivals(models.Model):
    brand=models.CharField(max_length=100)
    product_name=models.CharField(max_length=500)
    price=models.IntegerField(null=True,default=0)
    image=models.ImageField(upload_to="Media/featured_img",null=True)
    rating=models.IntegerField(default=0)
    
    def __str__(self):
        return self.product_name