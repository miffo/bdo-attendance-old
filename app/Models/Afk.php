<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Afk extends Model
{
    protected $fillable = [
        'comment',
    ];

    protected $dates = [
        'start_date',
        'end_date',
    ];
}
