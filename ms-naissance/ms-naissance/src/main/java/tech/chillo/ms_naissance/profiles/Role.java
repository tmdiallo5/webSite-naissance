package tech.chillo.ms_naissance.profiles;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "roles")
public class Role {
    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Getter
    private String name;
    @Getter
    private String description;
    @ManyToMany
    @JoinTable(
            name = "roles_permissions",
            joinColumns = @JoinColumn(name ="roles_id"),
            inverseJoinColumns = @JoinColumn(name = "permissions_id")
    )
    private List<Permission> permissions;


}
