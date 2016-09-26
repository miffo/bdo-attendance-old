<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Family extends Model
{
    protected $fillable = [
        'name',
    ];

    protected $dates = ['join_datetime'];
}
