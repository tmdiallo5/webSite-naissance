package tech.chillo.ms_naissance.profiles;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class ProfilesServiceTest {

    @InjectMocks
    ProfilesService profilesService;
    @Mock
    ProfilesRepository profilesRepository;

    @Test
    void shouldReturnAllProfiles() {
        // Arrange


        //Act
        List<Profile> profiles = this.profilesService.search();

        // Assert
        assertTrue(profiles.isEmpty());
    }
}