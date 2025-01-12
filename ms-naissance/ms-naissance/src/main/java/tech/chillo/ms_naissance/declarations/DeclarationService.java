package tech.chillo.ms_naissance.declarations;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeclarationService {

    private DeclarationRepository declarationRepository;

    public DeclarationService(DeclarationRepository declarationRepository) {
        this.declarationRepository = declarationRepository;
    }

    public void create(Declaration declaration) {
            this.declarationRepository.save(declaration);
    }

    public List<Declaration> search(){
        return this.declarationRepository.findAll();
    }
}
