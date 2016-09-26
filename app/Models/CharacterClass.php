<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class CharacterClass
 * @package App\Models
 */
class CharacterClass extends Model
{
    protected $fillable = [
        'name',
    ];

    public $timestamps = false;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function character()
    {
        return $this->belongsTo(Character::class);
    }
}
