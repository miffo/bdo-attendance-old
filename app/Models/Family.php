<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Family
 * @package App\Models
 */
class Family extends Model
{
    protected $fillable = [
        'name',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function character()
    {
        return $this->hasMany(Character::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function event()
    {
        return $this->belongsToMany(Event::class, 'family_event', 'family_id', 'event_id');
    }
}
