package tech.chillo.ms_naissance.profiles;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.util.MimeTypeUtils.APPLICATION_JSON_VALUE;


/**
    Controlleur pour gerer les operations sur les profiles
*/


@RestController
@RequestMapping("profiles")
public class ProfilesController {

    private  ProfilesService profilesService;

    public ProfilesController(ProfilesService profilesService) {
        this.profilesService = profilesService;
    }

    Logger logger = LoggerFactory.getLogger(ProfilesController.class);
    //Logger logger =  LoggerFactory.getLogger(ProfilesService.class);
    //Logger logger =  LoggerFactory.getLogger(ProfilesService.class);

    @ResponseStatus(HttpStatus.CREATED)
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
    @GetMapping(path = "{id}")
    public Profile read(@PathVariable("id") int id){
        return this.profilesService.read(id);
    }

    @PutMapping(path = "{id}")
    public Profile update(@PathVariable ("id")  int id, @RequestBody Profile profile){
        return this.profilesService.update(id, profile);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping(path = "{id}")
    public void delete (@PathVariable ("id") int id){
        this.profilesService.delete(id);
    }
}
