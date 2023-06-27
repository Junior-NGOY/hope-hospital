<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PatientResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=> $this->id,
            'nom'=> $this->nom,
            'prenom'=> $this->prenom,
            'postnom'=> $this->postnom,
            'sexe'=> $this->sexe,
            'lieunais'=> $this->lieunais,
            'datenais'=> $this->datenais,
            'profession'=> $this->profession,
            'telephone'=> $this->telephone,
            'adresse'=> $this->adresse,
            'etacivil'=> $this->etacivil,
            'email'=> $this->email,
            'commune'=> $this->commune,
            'quartier'=> $this->quartier,
            'ville'=> $this->ville,
            'province'=> $this->province,
            'nationalite'=> $this->nationalite,
            'categorie'=> $this->categorie,
        ];
    }
}
