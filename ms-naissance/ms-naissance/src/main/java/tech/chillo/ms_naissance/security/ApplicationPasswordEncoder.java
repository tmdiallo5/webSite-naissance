package tech.chillo.ms_naissance.security;

import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
public class ApplicationPasswordEncoder {

    // Un Bean est une classe instanciee par Spring qu'on peut utiliser partout
    @Bean
    public BCryptPasswordEncoder passwordEncoder(){     // return un algorithme qui permet de crypter le password
        return  new BCryptPasswordEncoder();
    }
}
