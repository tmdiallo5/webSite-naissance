package tech.chillo.ms_naissance.declarations;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "declarations")
public class DeclarationController {
    private DeclarationService declarationService;

    public DeclarationController(DeclarationService declarationService) {
        this.declarationService = declarationService;
    }
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public void create(@RequestBody Declaration declaration) {
        this.declarationService.create(declaration);
    }
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Declaration> search(@RequestBody Declaration declaration) {
        return this.declarationService.search();
    }
}
