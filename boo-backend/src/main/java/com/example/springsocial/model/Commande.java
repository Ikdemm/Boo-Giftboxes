package com.example.springsocial.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "commande")
public class Commande implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Date date;
    @Column(nullable = false)
    private String addresse;
    @Column(nullable = false)
    private Long prix_totale;
    @Column(nullable = false)
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
        return addresse;
    }

    public void setAddresse(String addresse) {
        this.addresse = addresse;
    }

    public Long getPrix_totale() {
        return prix_totale;
    }

    public void setPrix_totale(Long prix_totale) {
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
