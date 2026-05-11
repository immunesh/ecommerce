package com.ecommerce.ecommerce_site.Service;

import com.ecommerce.ecommerce_site.Entities.User;
import com.ecommerce.ecommerce_site.Exception.UserException;

public interface UserService {
    public User findUserById(Long userid) throws UserException;
    public User findUserProfileByJwt(String jwt) throws UserException;
}
