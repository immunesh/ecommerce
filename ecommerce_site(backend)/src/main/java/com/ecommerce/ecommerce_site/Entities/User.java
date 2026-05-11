package com.ecommerce.ecommerce_site.Entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import com.ecommerce.ecommerce_site.Entities.Address;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@NoArgsConstructor
@Setter
@Getter
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;    
    private String role;
    private String mobile;
    @OneToMany(mappedBy="user",cascade=CascadeType.ALL)
    private List<Address> addresses = new ArrayList<>();

    
    @ElementCollection
    @CollectionTable(name="payment_information", joinColumns=@JoinColumn(name="user_id"))
    private List<String> paymentInformation= new ArrayList<>();

    @OneToMany(mappedBy="user",cascade=CascadeType.ALL)
    @JsonIgnore
    private List<Rating> ratings=new ArrayList<>();
    private List<String> reviews=new ArrayList<>();
    private LocalDateTime createdAt;
}
