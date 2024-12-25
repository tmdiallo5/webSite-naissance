package tech.chillo.ms_naissance.profiles;

import jakarta.persistence.EntityNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import tech.chillo.ms_naissance.Profile;

import java.util.List;
import java.util.Optional;

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


    public Profile read(int id) {
       Optional<Profile> profileOptional = this.profilesRepository.findById(id);
       return profileOptional.orElseThrow(() -> new EntityNotFoundException(
               "Aucune entite ne correspond aux parametres fournis "));
    }

    public Profile update(int id, Profile profile) {
        Profile profileInDatabase = this.read(id);

        profileInDatabase.setFirstName(profile.getFirstName());
        profileInDatabase.setLastName(profile.getLastName());
        profileInDatabase.setEmail(profile.getEmail());
        profileInDatabase.setPhone(profile.getPhone());
        profileInDatabase.setPassword(profile.getPassword());

        profileInDatabase = this.profilesRepository.save(profileInDatabase);
        return profileInDatabase;
    }

    public void delete(int id){
        Profile profile = this.read(id);
        this.profilesRepository.delete(profile);
    }
}
