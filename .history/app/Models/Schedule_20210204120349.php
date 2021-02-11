<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Schedule extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'from_date',
        'to_date',
        'from_location',
        'to_location',
        'details',
        'admin_comment',
        'created_by',
        'updated_by',
        'deleted_by',
        'company_id'
    ];

    protected $dates = [
    	'deleted_at'
    ];

    public function created_by()
    {
        return $this->belongsTo(User::class, 'created_by', 'id')->withDefault();
    }
}
