package tech.chillo.ms_naissance.profiles;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import tech.chillo.ms_naissance.Profile;

import java.util.List;

@Service
public class ProfilesService {

    private final ProfilesRepository profilesRepository;

    public ProfilesService(ProfilesRepository profilesRepository) {
        this.profilesRepository = profilesRepository;
    }
    Logger logger =  LoggerFactory.getLogger(ProfilesService.class);
    public void create(Profile profile){

        logger.info("Nouveau compte avec l'email {}", profile.getEmail() );
        this.profilesRepository.save(profile);

    }

    public List<Profile> search() {
        return this.profilesRepository.findAll();
    }
}
