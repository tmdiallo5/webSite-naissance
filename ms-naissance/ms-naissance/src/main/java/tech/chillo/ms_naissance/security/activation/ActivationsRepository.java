package tech.chillo.ms_naissance.security.activation;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ActivationsRepository extends JpaRepository<Activation, Integer> {

}
