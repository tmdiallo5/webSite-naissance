package tech.chillo.ms_naissance.authentification;

import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;
import tech.chillo.ms_naissance.profiles.Profile;
import tech.chillo.ms_naissance.profiles.ProfileDTO;
import tech.chillo.ms_naissance.profiles.ProfilesService;

import java.util.Map;

import static org.springframework.util.MimeTypeUtils.APPLICATION_JSON_VALUE;


@RequestMapping(consumes = APPLICATION_JSON_VALUE)
@RestController
public class AuthentificationController {
    private final AuthenticationManager authenticationManager;
    private AuthentificationService authentificationService;


    public AuthentificationController(AuthenticationManager authenticationManager, AuthentificationService authentificationService) {
        this.authenticationManager = authenticationManager;
        this.authentificationService = authentificationService;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(path = "sign-up")
    public void create(@RequestBody ProfileDTO profileDTO){
        this.authentificationService.create(profileDTO);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(path = "sign-in")
    public void login(@RequestBody Map<String, String> parameters){
            this.authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            parameters.get("email"),
                            parameters.get("password")
                    )
            );
        Logger logger =  LoggerFactory.getLogger(AuthentificationController.class);
        logger.info("{} est connecte", parameters.get("email"));
    }

    @ResponseStatus(HttpStatus.ACCEPTED)
    @PostMapping(path = "activate")
    public void activate(@RequestBody Map<String, String> parameters){
        this.authentificationService.activate(parameters);
    }
}
