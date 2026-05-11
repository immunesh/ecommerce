package com.ecommerce.ecommerce_site.Entities;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Locale.Category;
import java.util.Set;

import org.hibernate.engine.jdbc.Size;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@Entity
public class Product {
    @Id
@GeneratedValue(strategy = GenerationType.AUTO)
private Long id;
    private String title;
    private String description;
    @Column(name = "price")
    private int price;
    @Column(name = "discounted_price")
    private int discountedPrice;
    @Column(name = "discount_persent")
    private int discountPersent;
    @Column(name = "quantity")
    private int quantity;
    @Column(name = "brand")
    private String brand;
    @Column(name = "color")
    private String color;
    @Embedded
    @ElementCollection
    @Column(name = "sizes")
    private Set<Size> sizes=new HashSet<>();
    @Column(name = "image_url")
    private String imageUrl;
    @OneToMany(mappedBy = "product",cascade=CascadeType.ALL,orphanRemoval=true)
    private List<Rating>ratings=new ArrayList<>();

    @OneToMany(mappedBy = "product",cascade = CascadeType.ALL,orphanRemoval=true)
    private List<Review>reviews=new ArrayList<>();

    @Column(name = "num_ratings")
    private int numRatings;

    private Category category;
    private LocalDateTime createdAt;


   
    



}
