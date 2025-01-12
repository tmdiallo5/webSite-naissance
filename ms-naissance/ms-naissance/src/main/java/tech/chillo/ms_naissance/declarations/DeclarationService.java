package tech.chillo.ms_naissance.declarations;

import org.springframework.stereotype.Service;
import tech.chillo.ms_naissance.profiles.ProfilesService;

import java.util.List;

@Service
public class DeclarationService {

    private DeclarationRepository declarationRepository;
    private ProfilesService profilesService;

    public DeclarationService(DeclarationRepository declarationRepository, ProfilesService profilesService) {
        this.declarationRepository = declarationRepository;
        this.profilesService = profilesService;
    }

    public void create(Declaration declaration) {

            this.declarationRepository.save(declaration);
    }

    public List<Declaration> search(){
        return this.declarationRepository.findAll();
    }
}
