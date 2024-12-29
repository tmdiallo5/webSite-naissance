package tech.chillo.ms_naissance.profiles;

import org.springframework.stereotype.Component;

@Component
public class ProfileMapping {
    public Profile DtoToEntity(ProfileDTO dto){
        Profile entity = new Profile();
        entity.setPassword(dto.password());
        entity.setPhone(dto.phone());
        entity.setEmail(dto.email());
        entity.setFirstName(dto.firstName());
        entity.setLastName(dto.lastName());
        return entity;
    }
}
