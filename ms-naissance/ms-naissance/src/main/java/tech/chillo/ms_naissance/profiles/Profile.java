package tech.chillo.ms_naissance.profiles;

import jakarta.persistence.*;
import lombok.*;
import tech.chillo.ms_naissance.shared.entities.Address;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "profiles")
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Enumerated(EnumType.STRING)
    private Civility civility;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String password;

    /**
     * @ManyToOne signifie que plusieurs profiles(utilisateurs) peuvent avoir une adresse.
     * l'idee c'est de creer l'adresse, le stocke dans la
     dans la base de donnees, ensuite l'associer a un utilisateur (CascadeType.MERGE).
     Quand on efface l'utilisateur, on conserve l'adresse, par ce que
     l'adresse peut aussi appartenir a un autre utilisateur(CascadeType.DETACH).
    * */
    @ManyToOne(cascade = {CascadeType.MERGE, CascadeType.DETACH})
    @JoinColumn(name = "addresses_id")
    private Address address;


}
