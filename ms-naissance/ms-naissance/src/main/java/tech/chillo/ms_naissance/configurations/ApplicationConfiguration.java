package tech.chillo.ms_naissance.configurations;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.support.RestClientAdapter;
import org.springframework.web.service.invoker.HttpServiceProxyFactory;
import tech.chillo.ms_naissance.notifications.MailpitClient;

import static org.springframework.web.service.invoker.HttpServiceProxyFactory.builderFor;
@Configuration
public class ApplicationConfiguration {
    String mailClientUrl = "http://training.mails.chillo.fr";
    @Bean
    MailpitClient mailpitClient (){
        RestClient client = RestClient.create(mailClientUrl);
        HttpServiceProxyFactory httpServiceProxyFactory = HttpServiceProxyFactory
                .builderFor(RestClientAdapter.create(client))
                .build();
        return httpServiceProxyFactory.createClient(MailpitClient.class);
    }
}
