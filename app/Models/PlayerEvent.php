<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PlayerEvent extends Model
{
    protected $fillable = [
        'attending',
        'comment',
    ];

    protected $dates = ['signup_datetime', 'arrive_datetime'];
}
