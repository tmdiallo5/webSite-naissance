package tech.chillo.ms_naissance.profiles;


import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.hamcrest.Matchers.containsString;

import static org.mockito.Mockito.when;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@AutoConfigureMockMvc(addFilters = false)
@WebMvcTest(ProfilesController.class)
class ProfilesControllerTest {

    @MockBean
    ProfilesService profilesService;

    @Autowired
    MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        // Arrange
        Profile profileOne = Profile.builder().email("one@email.test").build();
        Profile profileTwo = Profile.builder().email("two@email.test").build();
        when(profilesService.search()).thenReturn(List.of(profileOne, profileTwo));


    }


    @Test
    void search() throws Exception {
        this.mockMvc.perform(get("/profiles"))
                .andExpect(status().isOk())
                .andDo(print())
                .andExpect(content().string(containsString("one@email.test")))
                .andExpect(content().string(containsString("two@email.test")));

    }
}