<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
           // $table->string('photo')->Nullable();
            $table->string('prenom');
            $table->string('nom');
           // $table->string('postnom')->Nullable();
           // $table->enum('sexe', array('Masculin', 'Feminin'));
           // $table->string('lieunais',50)->Nullable();
           // $table->date('datenais');
           // $table->enum('etatcivil', array('Marié', 'Célibataire', 'Veuf', 'Divorcé'));
           // $table->string('profession')->Nullable();
           // $table->string('telephone');
           // $table->string('email')->Nullable();
           // $table->string('adresse');
           // $table->string('quartier')->Nullable();
           // $table->string('commune')->Nullable();
           // $table->string('ville')->Nullable();
           // $table->string('province')->Nullable();
           // $table->string('nationalite')->Nullable();
           // $table->enum('categorie', array('Abonné', 'Indépendant'));
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('patients');
    }
};
