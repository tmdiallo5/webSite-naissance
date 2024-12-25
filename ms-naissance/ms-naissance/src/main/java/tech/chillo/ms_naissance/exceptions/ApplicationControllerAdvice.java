package tech.chillo.ms_naissance.exceptions;

import jakarta.persistence.EntityNotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import tech.chillo.ms_naissance.profiles.ProfilesController;

import java.time.LocalDateTime;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@Slf4j
@ControllerAdvice
public class ApplicationControllerAdvice {


    @ResponseStatus(value = NOT_FOUND)
    @ExceptionHandler(EntityNotFoundException.class)
    public @ResponseBody ErrorEntity entityNotFoundException(EntityNotFoundException exception){
      //  exception.printStackTrace();
        log.error("erreur {}", exception.getMessage(), exception);
        return new ErrorEntity(
                LocalDateTime.now(),
                NOT_FOUND.name(),
                null,
                exception.getMessage());
        /*return new ErrorEntity(
                String.valueOf(HttpStatus.NOT_FOUND.value()), // Code HTTP en tant que chaîne
                exception.getMessage() // Message de l'exception);*/

    }
}
