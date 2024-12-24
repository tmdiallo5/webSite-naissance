package tech.chillo.ms_naissance.profiles;

import lombok.AllArgsConstructor;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import tech.chillo.ms_naissance.Profile;

import java.util.List;

import static org.springframework.util.MimeTypeUtils.APPLICATION_JSON_VALUE;


/**
    Controlleur pour gerer les operations sur les profiles
*/


@RestController
@RequestMapping("profiles")
public class ProfilesController {

    private final ProfilesService profilesService;

    public ProfilesController(ProfilesService profilesService) {
        this.profilesService = profilesService;
    }

    Logger logger = LoggerFactory.getLogger(ProfilesController.class);
    //Logger logger =  LoggerFactory.getLogger(ProfilesService.class);
    //Logger logger =  LoggerFactory.getLogger(ProfilesService.class);

    @PostMapping(consumes = APPLICATION_JSON_VALUE)
    public void create(@RequestBody Profile profile){

       // logger.trace("Creation du compte" + profile.getEmail());
        //logger.debug("Creation du compte" + profile.getEmail());
        logger.info("Creation du compte" + profile.getEmail());
        //logger.warn("Creation du compte" + profile.getEmail());
        //logger.error("Creation du compte" + profile.getEmail());
        this.profilesService.create(profile);
    }
    @GetMapping(produces = APPLICATION_JSON_VALUE)
    public List<Profile> search(){
        return this.profilesService.search();
    }
}
