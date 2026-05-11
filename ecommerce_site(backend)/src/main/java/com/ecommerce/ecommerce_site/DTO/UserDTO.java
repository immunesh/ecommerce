package com.ecommerce.ecommerce_site.DTO;

import java.time.LocalDateTime;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
     private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String role;
    private String mobile;
    private LocalDateTime createdAt;
    
    // We typically include IDs or simplified versions of addresses 
    // to avoid sending the entire heavy object structure
    // private List<AddressDTO> addresses; 
}
