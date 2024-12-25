package tech.chillo.ms_naissance.profiles;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfilesRepository extends JpaRepository<Profile, Integer> {
}
