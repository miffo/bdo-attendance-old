<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Character
 * @package App\Models
 */
class Character extends Model
{
    protected $fillable = [
        'name',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function family()
    {
        return $this->belongsTo(Family::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function characterClass()
    {
        return $this->hasOne(CharacterClass::class);
    }
}
