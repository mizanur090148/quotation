<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Dyrynda\Database\Support\CascadeSoftDeletes;

class PhoneBook extends Model
{
    use HasFactory, SoftDeletes, CascadeSoftDeletes;
	
    protected $fillable = [
        'phone_no',
    	'name',    	
		'email',
    	'designation',		
		'address',
		'branch_id',
        'created_by',
        'updated_by',
        'deleted_by'
    ];

    protected $dates = [
    	'deleted_at'
    ];
}