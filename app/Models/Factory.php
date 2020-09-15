<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Factory extends Model
{
    use HasFactory, SoftDeletes;
	
    protected $fillable = [
    	'name',
    	'address',
    	'responsible_person',
    	'email',
    	'mobile_no',
        'group_id'
    ];

    protected $dates = [
    	'deleted_at'
    ];
}
