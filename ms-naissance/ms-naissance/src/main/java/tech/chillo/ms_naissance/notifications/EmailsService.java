package tech.chillo.ms_naissance.notifications;

import freemarker.template.Configuration;
import freemarker.template.DefaultObjectWrapper;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import tech.chillo.ms_naissance.authentification.AuthentificationService;

import java.io.IOException;
import java.io.StringWriter;
import java.util.List;
import java.util.Map;
import java.util.Objects;


@Component
public class EmailsService {
    String senderEmail = "achille@mesnaissance.com";
    String senderName  = "Achille de mes naissance.com";

    private final MailpitClient mailpitClient;

    public EmailsService(MailpitClient mailpitClient) {
        this.mailpitClient = mailpitClient;
    }

    public void send(Map<String, String> parameters){
        String message = this.buildMessage(parameters);
        Logger logger =  LoggerFactory.getLogger(EmailsService.class);
        logger.info("le message est {}", message);

     Map<String, Object> emailsParameters = Map.of(
                "Subject", "Votre code d'activation",
                "HTML", message,
                "text", message,
                "From", Map.of("Email", senderEmail, "Name", senderName),
                "To", List.of(Map.of("Email", parameters.get("email"), "Name", parameters.get("name")))


        );
     this.mailpitClient.send(emailsParameters);

    }
    private String buildMessage(Map<String, String> parameters)  {
        Configuration configuration = new Configuration();
        configuration.setClassForTemplateLoading(this.getClass(), "/templates");
        configuration.setObjectWrapper(new DefaultObjectWrapper());
        try {
            Template template = configuration.getTemplate(parameters.get("template"));
            StringWriter stringWriter = new StringWriter();
         Map<String, String> templateParameters = Map.of("name", parameters.get("name"), "code", parameters.get("code"));
         template.process(templateParameters, stringWriter);
         return stringWriter.toString();
        } catch (IOException e) {
            throw new RuntimeException(e);
        } catch (TemplateException e) {
            throw new RuntimeException(e);
        }

    }
}
