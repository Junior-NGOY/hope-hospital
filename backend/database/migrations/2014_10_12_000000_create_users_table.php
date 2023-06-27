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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('prenom');
            $table->string('nom');
            $table->string('postnom')->Nullable();
            $table->enum('sexe', array('Masculin', 'Feminin'));
            $table->enum('etatcivil', array('Marié', 'Célibataire', 'Veuf', 'Divorcé'));
            $table->string('lieunais')->Nullable();
            $table->date('datenais')->Nullable();
            $table->string('telephone');
            $table->string('adresse');
            $table->enum('fonction', array('Médecin', 'Infirmier', 'Administratif'));
            $table->string('specialite')->Nullable();
            $table->string('numord')->nullable();
            $table->string('nationalite');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
