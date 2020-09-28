<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Dyrynda\Database\Support\CascadeSoftDeletes;

class Category extends Model
{
    use HasFactory, SoftDeletes, CascadeSoftDeletes;
	
    protected $fillable = [
    	'name',    
    	'created_by',
        'updated_by',
        'deleted_by',
        'outlet_id'
    ];

    protected $dates = [
    	'deleted_at'
    ];
}
