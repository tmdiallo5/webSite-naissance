package tech.chillo.ms_naissance.exceptions;

import java.time.LocalDateTime;

public record ErrorEntity(
        LocalDateTime time,
        String status,
        String code,
        String message
) {

}
