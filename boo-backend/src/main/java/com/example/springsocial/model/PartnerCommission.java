package com.example.springsocial.model;


import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "partnerCommission")
public class PartnerCommission implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "partner")
    private User partner;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "coffret")
    private Coffret coffret;

    @Column(name = "commission")
    private Integer commission;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getPartner() {
        return partner;
    }

    public void setPartner(User partner) {
        this.partner = partner;
    }

    public Coffret getCoffret() {
        return coffret;
    }

    public void setCoffret(Coffret coffret) {
        this.coffret = coffret;
    }

    public Integer getCommission() {
        return commission;
    }

    public void setCommission(Integer commission) {
        this.commission = commission;
    }
}
