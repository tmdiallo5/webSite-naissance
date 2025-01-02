package tech.chillo.ms_naissance.security.activation;

import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface ActivationsRepository extends JpaRepository<Activation, Integer> {
    List<Activation> findAllByActiveAndDesactivationAfter(boolean active, LocalDateTime desactivation);

}
