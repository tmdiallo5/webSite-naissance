package tech.chillo.ms_naissance.security.activation;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import tech.chillo.ms_naissance.profiles.Profile;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Random;




@Service
public class ActivationsService {

    private BCryptPasswordEncoder passwordEncoder;

    public ActivationsService(BCryptPasswordEncoder passwordEncoder, ActivationsRepository activationsRepository) {
        this.passwordEncoder = passwordEncoder;
        this.activationsRepository = activationsRepository;
    }

    private ActivationsRepository activationsRepository;
    public Activation create(Profile profile){
        Random random = new Random();
        int useCode = 100000 + random.nextInt(900000);
        Activation activation = Activation.builder()
                .active(Boolean.TRUE)
                .userCode(useCode)
                .code(passwordEncoder.encode(""+useCode))
                .creation(LocalDateTime.now())
                .desactivation(LocalDateTime.now().plusMinutes(5))
                .profile(profile)
                .build();

            return this.activationsRepository.save(activation);
    }

    public Profile validateAndReturnProfile(Map<String, String> parameters) {
      List<Activation> activations =  this.activationsRepository.findAllByActiveAndDesactivationAfter(
                true,
                LocalDateTime.now()
        );
        activations = activations.stream().filter(
                activation -> passwordEncoder.matches(
                        parameters.get("code"),
                          activation.getCode()

      )).toList();
        if(activations.isEmpty()){
            throw new RuntimeException("le code est invalide ou a expire");
        }
        Activation activation = activations.getFirst();
        activation.setActive(Boolean.FALSE);
        this.activationsRepository.save(activation);
        return activation.getProfile();
    }
}
