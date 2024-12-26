package tech.chillo.ms_naissance.shared.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import tech.chillo.ms_naissance.shared.entities.Address;
import tech.chillo.ms_naissance.shared.repository.AddressesRepository;


@Component
public class AddressesService {
        private final AddressesRepository addressesRepository;

    public AddressesService(AddressesRepository addressesRepository) {
        this.addressesRepository = addressesRepository;
    }

    public Address create(Address address){
        return this.addressesRepository.save(address);

    }
}
