package tech.chillo.ms_naissance.shared.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.chillo.ms_naissance.shared.entities.Address;

public interface AddressesRepository extends JpaRepository<Address, Integer> {
}
