package tech.chillo.ms_naissance.profiles;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProfilesRepository extends JpaRepository<Profile, Integer> {

    Optional<Profile> findByEmail(String email);
}
