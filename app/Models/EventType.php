<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class EventType
 * @package App\Models
 */
class EventType extends Model
{
    public $table = 'event_type';

    protected $fillable = [
        'name',
    ];

    public $timestamps = false;

    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}
