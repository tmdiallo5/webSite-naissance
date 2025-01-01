package tech.chillo.ms_naissance.profiles;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;


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

    public Role() {
    }

    public Role(int id, String name, String description, List<Permission> permissions) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.permissions = permissions;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Permission> getPermissions() {
        return permissions;
    }

    public void setPermissions(List<Permission> permissions) {
        this.permissions = permissions;
    }
}
