package com.example.springsocial.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Set;

@Entity
@Table(name = "DetailCommande")
public class DetailCommande implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull(message = "Quantité cannot't be null")
    private Long quantite;
    @NotNull(message = "Prix cannot't be null")
    private float prix;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "COFFRET_ID")
    private Coffret coffret;
    @OneToMany
    @JoinColumn(name = "DETAILCOMMANDE_ID")
    private Set<Cheque> cheques;

    public Set<Cheque> getCheques() {
        return cheques;
    }

    public void setCheques(Set<Cheque> cheques) {
        this.cheques = cheques;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getQuantite() {
        return quantite;
    }

    public void setQuantite(Long quantite) {
        this.quantite = quantite;
    }

    public float getPrix() {
        return this.prix;
    }

    public void setPrix(float price) {
        this.prix = price;
    }

    public Coffret getCoffret() {
        return coffret;
    }

    public void setCoffret(Coffret coffret) {
        this.coffret = coffret;
    }
}
