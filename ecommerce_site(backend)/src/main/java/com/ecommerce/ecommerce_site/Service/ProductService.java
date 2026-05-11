package com.ecommerce.ecommerce_site.Service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.ecommerce.ecommerce_site.Entities.Product;
import com.ecommerce.ecommerce_site.Exception.ProductException;
import com.ecommerce.ecommerce_site.Request.CreateProductRequest;

public interface ProductService {
    public Product createProduct(CreateProductRequest req);
    public String deleteProduct(Long productid) throws ProductException;
    public Product updateProduct(Long productid, Product product) throws ProductException;
    public Product getProductById(Long productid) throws ProductException;
    public List<Product> findProductByCategory(String category) throws ProductException;
    public Page<Product> getAllProducts(String category,List<String>colors, List<String> brands, List<String> sizes, int pageNo, int pageSize,Integer minPrice , Integer maxPrice, Integer minDiscount, String sort , String stock) throws ProductException;


}
