package tech.chillo.ms_naissance.shared.exceptions;

import jakarta.persistence.EntityNotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.time.LocalDateTime;

import static org.springframework.http.HttpStatus.BAD_REQUEST;
import static org.springframework.http.HttpStatus.NOT_FOUND;

@Slf4j
@ControllerAdvice
public class ApplicationControllerAdvice {


    @ResponseStatus(value = NOT_FOUND)
    @ExceptionHandler(EntityNotFoundException.class)
    public @ResponseBody ErrorEntity entityNotFoundExceptionHandler(EntityNotFoundException exception){
      //  exception.printStackTrace();
        log.error("erreur {}", exception.getMessage(), exception);
        return new ErrorEntity(
                LocalDateTime.now(),
                NOT_FOUND.name(),
                null,
                exception.getMessage());
    }
    @ResponseStatus(BAD_REQUEST)
    @ExceptionHandler(RuntimeException.class)
    public @ResponseBody ErrorEntity RuntimeExceptionHandler(RuntimeException exception){
        log.error("erreur {}", exception.getMessage(), exception);
        return new ErrorEntity(
                LocalDateTime.now(),
                BAD_REQUEST.name(),
                null,
                exception.getMessage());
    }

    @ResponseStatus(BAD_REQUEST)
    @ExceptionHandler(DataIntegrityViolationException.class)
    public @ResponseBody ErrorEntity dataIntegrityViolationExceptionHandler(DataIntegrityViolationException exception){
        log.error("erreur {}", exception.getMessage(), exception);
        return new ErrorEntity(
                LocalDateTime.now(),
                BAD_REQUEST.name(),
                null,
                "Une donnees que vous avez saisi est invalide"
        );
    }
}
