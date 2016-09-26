<?php

namespace App\Models;

use App\Models\Family;
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

    public function family()
    {
        return $this->belongsTo(Family::class);
    }
}
