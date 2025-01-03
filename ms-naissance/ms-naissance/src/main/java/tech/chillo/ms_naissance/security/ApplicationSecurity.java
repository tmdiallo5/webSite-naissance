package tech.chillo.ms_naissance.security;

import com.nimbusds.jose.jwk.JWK;
import com.nimbusds.jose.jwk.JWKSet;
import com.nimbusds.jose.jwk.RSAKey;
import com.nimbusds.jose.jwk.source.ImmutableJWKSet;
import com.nimbusds.jose.jwk.source.JWKSource;
import com.nimbusds.jose.proc.SecurityContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.oauth2.jwt.*;

@Configuration
public class ApplicationSecurity {
    private RsaKeys rsaKeys;

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
