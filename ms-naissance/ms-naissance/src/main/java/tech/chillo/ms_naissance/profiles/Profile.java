package tech.chillo.ms_naissance.profiles;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import tech.chillo.ms_naissance.shared.entities.Address;

import java.util.Collection;


@Builder
@Entity
@Table(name = "profiles")
public class Profile implements UserDetails {

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
    private boolean active = false;

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

    @ManyToOne(cascade = {CascadeType.MERGE, CascadeType.DETACH})
    @JoinColumn(name = "roles_id")
    private Role role;

    public Profile() {
    }

    public Profile(int id, Civility civility, String firstName, String lastName, String email, String phone, String password, Address address, Role role) {
        this.id = id;
        this.civility = civility;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.address = address;
        this.role = role;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Civility getCivility() {
        return civility;
    }

    public void setCivility(Civility civility) {
        this.civility = civility;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return this.active;
    }

    @Override
    public boolean isAccountNonLocked() {
        return this.active;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return this.active;
    }

    @Override
    public boolean isEnabled() {
        return this.active;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
