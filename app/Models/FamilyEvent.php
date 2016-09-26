<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class FamilyEvent
 * @package App\Models
 */
class FamilyEvent extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'attending',
        'comment',
    ];

    protected $dates = [
        'signup_datetime',
        'arrive_datetime',
    ];
}
