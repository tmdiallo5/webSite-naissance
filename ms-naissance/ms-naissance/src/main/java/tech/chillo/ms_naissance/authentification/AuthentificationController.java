package tech.chillo.ms_naissance.authentification;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import tech.chillo.ms_naissance.profiles.Profile;
import tech.chillo.ms_naissance.profiles.ProfileDTO;
import tech.chillo.ms_naissance.profiles.ProfilesService;

import java.util.Map;

import static org.springframework.util.MimeTypeUtils.APPLICATION_JSON_VALUE;


@RequestMapping(consumes = APPLICATION_JSON_VALUE)
@RestController
public class AuthentificationController {
    private AuthentificationService authentificationService;


    public AuthentificationController(AuthentificationService authentificationService) {
        this.authentificationService = authentificationService;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(path = "sign-up")
    public void create(@RequestBody ProfileDTO profileDTO){
        this.authentificationService.create(profileDTO);
    }

    @ResponseStatus(HttpStatus.ACCEPTED)
    @PostMapping(path = "activate")
    public void activate(@RequestBody Map<String, String> parameters){
        this.authentificationService.activate(parameters);
    }
}
