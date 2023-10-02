<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    public const MEXICAN_STATES = [
        'Aguascalientes',
        'Baja California',
        'Baja California Sur',
        'Campeche',
        'Chiapas',
        'Chihuahua',
        'Coahuila',
        'Colima',
        'Durango',
        'Estado de México',
        'Guanajuato',
        'Guerrero',
        'Hidalgo',
        'Jalisco',
        'Michoacán',
        'Morelos',
        'Nayarit',
        'Nuevo León',
        'Oaxaca',
        'Puebla',
        'Querétaro',
        'Quintana Roo',
        'San Luis Potosí',
        'Sinaloa',
        'Sonora',
        'Tabasco',
        'Tamaulipas',
        'Tlaxcala',
        'Veracruz',
        'Yucatán',
        'Zacatecas'
    ];


    protected $fillable = [
        "title",
        "description",
        "mexican_state",
        "creation_date",
        "user_name",
        "likes",

    ];

    protected $hidden = [
        "active"
    ];

    //Este scope traera las tareas activas, (Se estara haciendo borrado logico)
    function scopeactive($query){
        return $query->where("active", true);
    }

    //Este scope hara el filtado por titulo y estado
    function scopeSearch($query, $search){
        return $query
        ->where("title", "LIKE", "%$search%")
        ->orWhere("mexican_state", "LIKE", "%$search%");
    }
}
