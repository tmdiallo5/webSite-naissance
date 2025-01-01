package tech.chillo.ms_naissance.security.activation;

import jakarta.persistence.*;
import lombok.*;
import tech.chillo.ms_naissance.profiles.Profile;

import java.time.LocalDateTime;
import java.util.List;



@Entity
@Table(name = "activations")
public class Activation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String code;
    private boolean active;
    private LocalDateTime creation;
    private LocalDateTime desactivation;
    @Transient
    private int userCode;

    @ManyToOne(cascade = {CascadeType.MERGE, CascadeType.DETACH})
    @JoinColumn(name = "profiles_id")
    private Profile profile;

    public Activation() {
    }

    public Activation(int id, String code, boolean active, LocalDateTime creation, LocalDateTime desactivation, int userCode, Profile profile) {
        this.id = id;
        this.code = code;
        this.active = active;
        this.creation = creation;
        this.desactivation = desactivation;
        this.userCode = userCode;
        this.profile = profile;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public LocalDateTime getCreation() {
        return creation;
    }

    public void setCreation(LocalDateTime creation) {
        this.creation = creation;
    }

    public LocalDateTime getDesactivation() {
        return desactivation;
    }

    public void setDesactivation(LocalDateTime desactivation) {
        this.desactivation = desactivation;
    }

    public int getUserCode() {
        return userCode;
    }

    public void setUserCode(int userCode) {
        this.userCode = userCode;
    }

    public Profile getProfile() {
        return profile;
    }

    public void setProfile(Profile profile) {
        this.profile = profile;
    }

    // Implémentation manuelle du Builder
    public static class Builder {
        private int id;
        private int userCode;
        private String code;
        private boolean active;
        private LocalDateTime creation;
        private LocalDateTime desactivation;
        private Profile profile;

        public Builder id(int id) {
            this.id = id;
            return this;
        }

        public Builder userCode(int userCode) {
            this.userCode = userCode;
            return this;
        }

        public Builder code(String code) {
            this.code = code;
            return this;
        }

        public Builder active(boolean active) {
            this.active = active;
            return this;
        }

        public Builder creation(LocalDateTime creation) {
            this.creation = creation;
            return this;
        }

        public Builder desactivation(LocalDateTime desactivation) {
            this.desactivation = desactivation;
            return this;
        }

        public Builder profile(Profile profile) {
            this.profile = profile;
            return this;
        }

        public Activation build() {
            Activation activation = new Activation();
            activation.id = this.id;
            activation.userCode = this.userCode;
            activation.code = this.code;
            activation.active = this.active;
            activation.creation = this.creation;
            activation.desactivation = this.desactivation;
            activation.profile = this.profile;
            return activation;
        }
    }

    public static Builder builder() {
        return new Builder();
    }

}
