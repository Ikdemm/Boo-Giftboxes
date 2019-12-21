package com.example.springsocial.model;

import com.example.springsocial.model.enumClasses.ChequeStatusEnum;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "Cheque")
public class Cheque {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Date cannot't be null")
    private Date date;

    @NotNull(message = "Status cannot't be null")
    @Enumerated(EnumType.STRING)
    private ChequeStatusEnum status;

    @NotNull(message = "Code cannot't be null")
    @Type(type="org.hibernate.type.UUIDCharType")
    @Column(unique = true,updatable = false)
    private UUID code;

    @NotNull(message = "email should be not null")
    @Email
    private String email;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "client_id")
    private User client;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "partner_id")
    private User partner;



    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "coffret_id")
    private Coffret coffret;
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public UUID getCode() {
        return code;
    }

    public void setCode(UUID code) {
        this.code = code;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public ChequeStatusEnum getStatus() {
        return status;
    }

    public void setStatus(ChequeStatusEnum status) {
        this.status = status;
    }
    public User getClient() {
        return client;
    }

    public void setClient(User client) {
        this.client = client;
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
}
