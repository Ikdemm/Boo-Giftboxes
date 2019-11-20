package com.example.springsocial.modelDto;

import com.example.springsocial.model.Cheque;
import com.example.springsocial.model.Coffret;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Map;
import java.util.Set;

public class DetailCommandeDto {
    @NotBlank
    private Long quantite;
    @NotBlank
    private Long price;
    @NotBlank
    private Coffret coffret;
    @NotBlank
    private Map<Long,ChequeDto> chequeDtos;

    public Long getQuantite() {
        return quantite;
    }

    public void setQuantite(Long quantite) {
        this.quantite = quantite;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public Coffret getCoffret() {
        return coffret;
    }

    public void setCoffret(Coffret coffret) {
        this.coffret = coffret;
    }

    public Map<Long, ChequeDto> getChequeDtos() {
        return chequeDtos;
    }

    public void setChequeDtos(Map<Long, ChequeDto> chequeDtos) {
        this.chequeDtos = chequeDtos;
    }
}
