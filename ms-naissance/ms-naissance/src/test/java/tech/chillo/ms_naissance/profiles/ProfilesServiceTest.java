package tech.chillo.ms_naissance.profiles;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;


@ExtendWith(MockitoExtension.class)
class ProfilesServiceTest {

    @InjectMocks
    ProfilesService profilesService;
    @Mock
    ProfilesRepository profilesRepository;

    @Test
    void shouldReturnAllProfiles() {
        // Arrange

        when(this.profilesRepository.findAll())
                .thenReturn(
                        List.of(
                            Profile.builder()
                                    .email("test@test.com")
                                    .firstName("test")
                                    .lastName("UNKNOW")
                                    .build()
                        )

        );

        //Act
        List<Profile> profiles = this.profilesService.search();

        // Assert
        assertEquals(1, profiles.size());
    }
}