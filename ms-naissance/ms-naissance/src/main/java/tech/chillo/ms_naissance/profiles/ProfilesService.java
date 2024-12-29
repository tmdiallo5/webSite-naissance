package tech.chillo.ms_naissance.profiles;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tech.chillo.ms_naissance.shared.services.AddressesService;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;


@Service
public class ProfilesService {

    private final AddressesService addressesService;
    private final ProfilesRepository profilesRepository;
    private final ProfileMapper profileMapper;

    public ProfilesService(AddressesService addressesService, ProfilesRepository profilesRepository, ProfileMapper profileMapper) {
        this.addressesService = addressesService;
        this.profilesRepository = profilesRepository;
        this.profileMapper = profileMapper;
    }
// Logger logger =  LoggerFactory.getLogger(ProfilesService.class);

    // si il y a des doublons ne retourner qu'un seul
    // Nous avons mapper chaque.
    // profile : .map(profile -> this.profileMapper.entityToDTO(profile))
    public Set<ProfileDTO> search() {
        List<Profile> profiles = this.profilesRepository.findAll();
      return   profiles.stream().map(this.profileMapper::entityToDTO).collect(Collectors.toSet());
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
