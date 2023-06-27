<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    protected $fillable = [
        'photo', 'prenom', 'nom', 'postnom', 'sexe', 'lieunais', 'datenais', 'etatcivil',
         'profession', 'telephone', 'email', 'adresse', 'quartier',
         'commune', 'ville', 'province', 'nationalite', 'categorie'
     ];
 
     public $Age;
 
     public function age()
     {
         $this->Age= Carbon::parse($this->attributes['datenais'])->age;
         //return Carbon::parse($this->attributes['datenais'])->age;
 
     }
     public function getAge()
     {
         //$birthday = $user->date_of_birth;
         return Carbon::parse($this->attributes['datenais'])->diff(Carbon::now())->format('%y ans, %m mois et %d jours');
     }
     public function rendezvous()
     {
         return $this->hasMany(Rdv::class);
     }
 
     public function consultations()
     {
         return $this->hasMany(Consultation::class);
     }
}
