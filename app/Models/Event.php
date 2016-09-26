<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Event
 * @package App\Models
 */
class Event extends Model
{
    protected $fillable = [
        'description',
    ];

    protected $dates = [
        'event_datetime'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function eventType()
    {
        return $this->hasOne(EventType::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function family()
    {
        return $this->belongsToMany(Family::class, 'family_event', 'event_id', 'family_id');
    }
}
