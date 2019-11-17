package com.example.springsocial.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
@Table(name = "coffret", uniqueConstraints = {
        @UniqueConstraint(columnNames = "name")
})

public class Coffret implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String description;
    @Column(nullable = false)
    private Long priceClient;

    /*@Column(nullable = false)
    private Long pricePartner;*/

    @Column(nullable = true)
    private String fileUrl;
    @Column(nullable = true)
    private String imageUrl;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "Coffret_Partners",
            joinColumns = @JoinColumn(name = "COFFRET_ID"), inverseJoinColumns = @JoinColumn(name = "USER_ID"))
    private Set<User> partners;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

    public Long getPriceClient() {
        return priceClient;
    }

    public void setPriceClient(Long priceClient) {
        this.priceClient = priceClient;
    }

    /*public Long getPricePartner() {
        return pricePartner;
    }

    public void setPricePartner(Long pricePartner) {
        this.pricePartner = pricePartner;
    }*/

    public String getFileUrl() {
        return fileUrl;
    }

    public void setFileUrl(String fileUrl) {
        this.fileUrl = fileUrl;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Set<User> getPartners() {
        return partners;
    }

    public void setPartners(Set<User> partners) {
        this.partners = partners;
    }
}
