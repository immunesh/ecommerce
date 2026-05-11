package com.ecommerce.ecommerce_site.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.ecommerce_site.Entities.User;

public interface UserRepository  extends JpaRepository<User,Long>{
    public User findByEmail(String email);
}
