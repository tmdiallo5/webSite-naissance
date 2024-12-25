package tech.chillo.ms_naissance.shared.services;

import org.springframework.stereotype.Component;

@Component
public class ValidationService {
    public void validateEmail(String email){
        if (email == null){
            throw new RuntimeException("L'email est requis");
        }
        if (email.indexOf('@') == -1 || email.indexOf('@') == email.length()){
            throw new RuntimeException("L'email est invalide");
        }
    }

    public void validatephone(String phone){
        if (phone == null){
            throw new RuntimeException("Le telephone  est requis");
        }
        if (phone.length() > 22){
            throw new RuntimeException("Le telephone est invalide");
        }
    }
}
