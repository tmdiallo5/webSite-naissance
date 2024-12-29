package tech.chillo.ms_naissance.authentification;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import tech.chillo.ms_naissance.profiles.Profile;
import tech.chillo.ms_naissance.profiles.ProfileDTO;
import tech.chillo.ms_naissance.profiles.ProfileMapper;
import tech.chillo.ms_naissance.profiles.ProfilesRepository;
import tech.chillo.ms_naissance.shared.services.ValidationService;



@Service
public class AuthentificationService {

    private final ProfilesRepository profilesRepository;
    private final ValidationService validationService;
    private final BCryptPasswordEncoder passwordEncoder;
    private ProfileMapper profileMapper;

    public AuthentificationService(ProfilesRepository profilesRepository, ValidationService validationService, BCryptPasswordEncoder passwordEncoder, ProfileMapper profileMapper) {
        this.profilesRepository = profilesRepository;
        this.validationService = validationService;
        this.passwordEncoder = passwordEncoder;
        this.profileMapper = profileMapper;
    }

    public void create(ProfileDTO profileDTO){
        Logger logger =  LoggerFactory.getLogger(AuthentificationService.class);
        logger.info("Nouveau compte avec l'email {}", profileDTO.email());
        Profile profile = this.profileMapper.DtoToEntity(profileDTO);


        String userPassword = profile.getPassword();
        String encodPassword = this.passwordEncoder.encode(userPassword);
        profile.setPassword(encodPassword);
        this.validationService.validateEmail(profile.getEmail());
        this.validationService.validatephone(profile.getPhone());
        this.profilesRepository.save(profile);


    }
}
