package tech.chillo.ms_naissance.declarations;


import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("declarations")
public class DeclarationController {
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Declaration> search(){
        return new ArrayList<>();
    }
}
