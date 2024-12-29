package tech.chillo.ms_naissance.profiles;

import lombok.AllArgsConstructor;
import lombok.Data;


public record ProfileDTO(
        Civility civility,
         String firstName,
         String lastName,
         String email,
         String phone,
         String password

) {
}
