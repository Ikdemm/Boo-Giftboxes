package com.example.springsocial.modelDto;

import javax.validation.constraints.NotBlank;
import java.util.Set;

public class CommandeDto {
    @NotBlank
    private String addresse;
    private Set<DetailCommandeDto> detailCommandeDtos;

    public String getAddresse() {
        return addresse;
    }

    public void setAddresse(String addresse) {
        this.addresse = addresse;
    }

    public Set<DetailCommandeDto> getDetailCommandeDtos() {
        return detailCommandeDtos;
    }

    public void setDetailCommandeDtos(Set<DetailCommandeDto> detailCommandeDtos) {
        this.detailCommandeDtos = detailCommandeDtos;
    }
}
