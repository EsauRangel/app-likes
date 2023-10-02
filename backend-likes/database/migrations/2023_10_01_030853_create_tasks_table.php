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
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            //String titulo
            $table->string("title");
            //String descripcion
            $table->string("description");
            //Estado de la republica mexicana
            $table->string("mexican_state");
            //Fecha de creacion
            $table->string("creation_date");
            //Nombre del creador
            $table->string("user_name");
            //Contador de likes
            $table->integer("likes")->default(0);
            //Booleano para borrado logico
            $table->boolean("active")->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
