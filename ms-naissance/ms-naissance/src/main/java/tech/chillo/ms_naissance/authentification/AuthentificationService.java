package tech.chillo.ms_naissance.authentification;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import tech.chillo.ms_naissance.notifications.EmailsService;
import tech.chillo.ms_naissance.profiles.*;
import tech.chillo.ms_naissance.security.activation.Activation;
import tech.chillo.ms_naissance.security.activation.ActivationsService;
import tech.chillo.ms_naissance.shared.services.ValidationService;

import java.util.Map;


@Service
public class AuthentificationService {

    private final ProfilesRepository profilesRepository;
    private final RolesRepository rolesRepository;
    private final EmailsService emailsService;
    private final ActivationsService activationsService;
    private final ValidationService validationService;
    private final BCryptPasswordEncoder passwordEncoder;
    private final ProfileMapper profileMapper;

    public AuthentificationService(ProfilesRepository profilesRepository, EmailsService emailsService , ValidationService validationService, BCryptPasswordEncoder passwordEncoder, ActivationsService activationsService, ProfileMapper profileMapper, RolesRepository rolesRepository) {
        this.profilesRepository = profilesRepository;
        this.validationService = validationService;
        this.passwordEncoder = passwordEncoder;
        this.profileMapper = profileMapper;
        this.rolesRepository = rolesRepository;
        this.activationsService = activationsService;
        this.emailsService = emailsService;
    }

    public void create(ProfileDTO profileDTO){
        Logger logger =  LoggerFactory.getLogger(AuthentificationService.class);
        logger.info("Nouveau compte avec l'email {}", profileDTO.email());
        Profile profile = this.profileMapper.DtoToEntity(profileDTO);


        String userPassword = profile.getPassword();
        String encodPassword = this.passwordEncoder.encode(userPassword);
        profile.setPassword(encodPassword);

        Role role = this.rolesRepository.findByName("PUBLIC");
        profile.setRole(role);
        this.validationService.validateEmail(profile.getEmail());
        this.validationService.validatephone(profile.getPhone());
        profile = this.profilesRepository.save(profile);
        Activation activation = this.activationsService.create(profile);
        logger.info("Le code d'activation pour {} est {}", profile.getEmail(), activation.getUserCode());

        this.emailsService.send(
                Map.of(
                        "email", profile.getEmail(),
                        "name", String.format("%s %s", profile.getFirstName(), profile.getLastName()),
                        "code", ""+ activation.getUserCode(),
                        "template","activation-code.ftl"

                )
        );

    }

    public void activate(Map<String, String> parameters) {
       Profile profile = this.activationsService.validateAndReturnProfile(parameters);
       profile.setActive(true);
       this.profilesRepository.save(profile);
    }
}
