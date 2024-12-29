package tech.chillo.ms_naissance.authentification;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import tech.chillo.ms_naissance.profiles.Profile;
import tech.chillo.ms_naissance.profiles.ProfilesRepository;
import tech.chillo.ms_naissance.shared.services.ValidationService;



@Service
public class AuthentificationService {

    private final ProfilesRepository profilesRepository;
    private final ValidationService validationService;
    private final BCryptPasswordEncoder passwordEncoder;

    public AuthentificationService(ProfilesRepository profilesRepository, ValidationService validationService, BCryptPasswordEncoder passwordEncoder) {
        this.profilesRepository = profilesRepository;
        this.validationService = validationService;
        this.passwordEncoder = passwordEncoder;
    }

    public void create(Profile profile){
        Logger logger =  LoggerFactory.getLogger(AuthentificationService.class);
        logger.info("Nouveau compte avec l'email {}", profile.getEmail());

        String userPassword = profile.getPassword();
        String encodPassword = this.passwordEncoder.encode(userPassword);
        profile.setPassword(encodPassword);
        this.validationService.validateEmail(profile.getEmail());
        this.validationService.validatephone(profile.getPhone());
        this.profilesRepository.save(profile);


    }
}
