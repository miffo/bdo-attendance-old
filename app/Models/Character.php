<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Character extends Model
{
    protected $fillable = [
        'name',
    ];

    public function family()
    {
        $this->belongsTo(Family::class);
    }

    public function characterClass()
    {
        $this->belongsTo(CharacterClass::class);
    }
}
