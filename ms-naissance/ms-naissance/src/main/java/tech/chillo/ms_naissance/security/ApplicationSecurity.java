package tech.chillo.ms_naissance.security;

import com.nimbusds.jose.jwk.JWK;
import com.nimbusds.jose.jwk.JWKSet;
import com.nimbusds.jose.jwk.RSAKey;
import com.nimbusds.jose.jwk.source.ImmutableJWKSet;
import com.nimbusds.jose.jwk.source.JWKSource;
import com.nimbusds.jose.proc.SecurityContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.jwt.*;
import tech.chillo.ms_naissance.authentification.AuthentificationService;


@EnableWebSecurity
@Configuration
public class ApplicationSecurity {
    private final RsaKeys rsaKeys;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final AuthentificationService authentificationService;

    public ApplicationSecurity(RsaKeys rsaKeys, AuthentificationService authentificationService, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.rsaKeys = rsaKeys;
        this.authentificationService = authentificationService;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Bean
    AuthenticationManager authenticationManager(HttpSecurity httpSecurity) throws Exception {
     AuthenticationManagerBuilder authenticationManagerBuilder = httpSecurity.getSharedObject(AuthenticationManagerBuilder.class);
        authenticationManagerBuilder.authenticationProvider(this.authenticationProvider());
        return authenticationManagerBuilder.build();
    }

    @Bean
    AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
        daoAuthenticationProvider.setPasswordEncoder(bCryptPasswordEncoder);
        daoAuthenticationProvider.setUserDetailsService(this.authentificationService);
        return daoAuthenticationProvider;
    }

    @Bean
    JwtDecoder jwtDecoder() {
        return NimbusJwtDecoder
                .withPublicKey(this.rsaKeys.rsaPublicKey())
                .build();
    }

    @Bean
    JwtEncoder jwtEncoder() {
        final JWK jwk = new RSAKey
                .Builder(this.rsaKeys.rsaPublicKey())
                .privateKey(this.rsaKeys.rsaPrivateKey())


                .build();
        JWKSource<SecurityContext> jwkSource = new ImmutableJWKSet<>(new JWKSet(jwk));
        return new NimbusJwtEncoder(jwkSource);
    }
}
