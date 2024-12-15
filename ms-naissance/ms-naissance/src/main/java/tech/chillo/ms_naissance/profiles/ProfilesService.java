package tech.chillo.ms_naissance.profiles;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import tech.chillo.ms_naissance.Profile;
@Service
public class ProfilesService {

    private final ProfilesRepository profilesRepository;

    public ProfilesService(ProfilesRepository profilesRepository) {
        this.profilesRepository = profilesRepository;
    }

    public void create(Profile profile){
        Logger logger =  LoggerFactory.getLogger(ProfilesController.class);
        logger.info("Nouveau compte avec l'email {}", profile.getEmail() );
        this.profilesRepository.save(profile);

    }
}
