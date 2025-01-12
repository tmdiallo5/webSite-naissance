package tech.chillo.ms_naissance.declarations;

import jakarta.persistence.*;
import tech.chillo.ms_naissance.profiles.Profile;

import java.time.LocalDateTime;

@Entity
@Table(name = "declarations")
public class Declaration {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private LocalDateTime creation;

    // Creer declaration et creer père
    @ManyToOne(cascade = { CascadeType.PERSIST, CascadeType.REMOVE })
    @JoinColumn(name = "father_id")
    private Profile father;

    // Creer declaration et utiliser la mère
    @ManyToOne(cascade = {CascadeType.MERGE, CascadeType.DETACH})
    @JoinColumn(name = "mother_id")
    private Profile mother;

    // Creer declaration et utiliser l'enfant
    @ManyToOne(cascade = {CascadeType.MERGE, CascadeType.DETACH})
    @JoinColumn(name = "child_id")
    private Profile child;

    public Declaration() {
    }

    public Declaration(int id, LocalDateTime creation, Profile father, Profile mother, Profile child) {
        this.id = id;
        this.creation = creation;
        this.father = father;
        this.mother = mother;
        this.child = child;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public LocalDateTime getCreation() {
        return creation;
    }

    public void setCreation(LocalDateTime creation) {
        this.creation = creation;
    }

    public Profile getFather() {
        return father;
    }

    public void setFather(Profile father) {
        this.father = father;
    }

    public Profile getMother() {
        return mother;
    }

    public void setMother(Profile mother) {
        this.mother = mother;
    }

    public Profile getChild() {
        return child;
    }

    public void setChild(Profile child) {
        this.child = child;
    }
}
