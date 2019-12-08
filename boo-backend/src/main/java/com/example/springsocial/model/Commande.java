package com.example.springsocial.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "commande")
public class Commande implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Date cannot't be null")
    private Date date;
    @NotNull(message = "Prix Totale cannot't be null")
    private float prix_totale;
    //@NotNull(message = "Adresse cannot't be null")
    private String adresse;
    @NotNull(message = "Status cannot't be null")
    private String status;
    @OneToMany
    @JoinColumn(name = "COMMANDE_ID")
    private Set<DetailCommande> detailCommandes;
    // lazily fetch the owner
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getAddresse() {
        return adresse;
    }

    public void setAddresse(String addresse) {
        this.adresse = addresse;
    }

    public float getPrix_totale() {
        return this.prix_totale;
    }

    public void setPrix_totale(float prix_totale) {
        this.prix_totale = prix_totale;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Set<DetailCommande> getDetailCommandes() {
        return detailCommandes;
    }

    public void setDetailCommandes(Set<DetailCommande> detailCommandes) {
        this.detailCommandes = detailCommandes;
    }
}
