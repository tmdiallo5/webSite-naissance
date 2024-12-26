package tech.chillo.ms_naissance.shared.services;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;
@ExtendWith(MockitoExtension.class)
class ValidationServiceTest {
    @InjectMocks
    ValidationService validationService;
    @Test
    void shouldTestThatEmailIsValid() {
        // (Arrange) Definir les variables
        String email = "test@gmail.com";

        // (Act) Effectuer le test
        this.validationService.validateEmail(email);

        // (Assert) Afficher les resultats
    }

    @Test
    void validatephone() {
    }
}