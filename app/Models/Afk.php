<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Afk
 * @package App\Models
 */
class Afk extends Model
{
    protected $fillable = [
        'comment',
    ];

    protected $dates = [
        'start_date',
        'end_date',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function family()
    {
        return $this->belongsTo(Family::class);
    }
}
