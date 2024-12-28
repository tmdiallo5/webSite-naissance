package tech.chillo.ms_naissance.profiles;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jdbc.EmbeddedDatabaseConnection;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.util.Assert;

import java.util.List;
import java.util.Optional;

@DataJpaTest
@AutoConfigureTestDatabase(connection = EmbeddedDatabaseConnection.H2)
public class ProfilesRepositoryTest {

    @Autowired
    ProfilesRepository profilesRepository;

    @BeforeEach
    void setUp(){
        // Arrange
        Profile profileOne = Profile.builder().email("one@email.test").build();
        Profile profileTwo = Profile.builder().email("two@email.test").build();
        this.profilesRepository.saveAll(List.of(profileOne, profileTwo));

    }
    @AfterEach
    void tearDown(){        //pour le reset

        this.profilesRepository.deleteAll();

    }

    @Test
    void shouldReturnEmptyProfilesByEmail(){
        // Act
        Optional<Profile> profiles = this.profilesRepository.findByEmail("mavi@gmail.com");

        // Assert
        Assertions.assertTrue(profiles.isEmpty());
    }
    @Test
    void shouldReturnProfilesByEmail(){
        // Act
        Optional<Profile> profiles = this.profilesRepository.findByEmail("one@email.test");

        // Assert
        Assertions.assertTrue(profiles.isPresent());
    }


    @Test
    void shouldReturnListOfProfiles(){


        // Act
        List<Profile> profiles = this.profilesRepository.findAll();

        // Assert
        Assertions.assertEquals(2, profiles.size());
    }
}
