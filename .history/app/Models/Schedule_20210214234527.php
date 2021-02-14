<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;
use App\Traits\ScheduleTrait;

class Schedule extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'from_date',
        'to_date',
        'from_location',
        'to_location',
        'note',
        'admin_comment',
        'status',
        'created_by',
        'updated_by',
        'deleted_by',
        'company_id'
    ];

    protected $dates = [
    	'deleted_at'
    ];

    public function setFromDateAttribute($value)
    {
        $this->attributes['from_date'] = Carbon::parse($value)->format('Y-m-d');
    }

    public function setToDateAttribute($value)
    {
        $this->attributes['to_date'] = Carbon::parse($value)->format('Y-m-d');
    }

    public function created_by()
    {
        return $this->belongsTo(User::class, 'created_by', 'id')->withDefault();
    }
}
