package tech.chillo.ms_naissance.profiles;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import tech.chillo.ms_naissance.shared.services.AddressesService;
import tech.chillo.ms_naissance.shared.services.ValidationService;

import java.util.List;
import java.util.Optional;
@AllArgsConstructor
@Slf4j
@Service
public class ProfilesService {

    private final AddressesService addressesService;
    private final ProfilesRepository profilesRepository;
    private final ValidationService validationService;


   // Logger logger =  LoggerFactory.getLogger(ProfilesService.class);
    public void create(Profile profile){
        log.info("Nouveau compte avec l'email {}", profile.getEmail());
        if (profile.getAddress() != null){
            this.addressesService.create(profile.getAddress());
        }

        this.validationService.validateEmail(profile.getEmail());
        this.validationService.validatephone(profile.getPhone());
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
