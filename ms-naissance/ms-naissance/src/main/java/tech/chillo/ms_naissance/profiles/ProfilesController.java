package tech.chillo.ms_naissance.profiles;

import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.chillo.ms_naissance.Profile;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
    Controlleur pour gerer les operations sur les profiles
*/

@RestController
@RequestMapping("profiles")
public class ProfilesController {

    Logger logger =  LoggerFactory.getLogger(ProfilesController.class);

    @PostMapping
    public void create(@RequestBody Profile profile){
        logger.trace("Creation du compte" + profile.getEmail());
        logger.debug("Creation du compte" + profile.getEmail());
        logger.info("Creation du compte" + profile.getEmail());
        logger.warn("Creation du compte" + profile.getEmail());
        logger.error("Creation du compte" + profile.getEmail());
    }
}
