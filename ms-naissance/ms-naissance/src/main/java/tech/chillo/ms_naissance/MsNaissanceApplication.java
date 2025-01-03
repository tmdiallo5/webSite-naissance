package tech.chillo.ms_naissance;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.actuate.autoconfigure.security.servlet.ManagementWebSecurityAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import tech.chillo.ms_naissance.security.RsaKeys;

@EnableConfigurationProperties(RsaKeys.class)
@SpringBootApplication(
		exclude = {
				SecurityAutoConfiguration.class,
				ManagementWebSecurityAutoConfiguration.class,

		}
)
public class MsNaissanceApplication {

	public static void main(String[] args) {
		SpringApplication.run(MsNaissanceApplication.class, args);
	}

}
