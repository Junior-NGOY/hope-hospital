<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePatientRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'photo',
            'prenom'=>['required', 'min:3', 'max:20'],
            'nom'=>['required'],
            'postnom'=>['required'], 
            'sexe'=>['required'], 
            'lieunais'=>['required'], 
            'datenais'=>['required'], 
            'etatcivil'=>['required'],
            'profession'=>['required'], 
            'telephone'=>['required'], 
            'email'=>['required'], 
            'adresse'=>['required'], 
            'quartier'=>['required'],
            'commune'=>['required'], 
            'ville'=>['required'], 
            'province'=>['required'], 
            'nationalite'=>['required'], 
            'categorie'=>['required'],
        ];
    }
}
