<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Company extends Model
{
    use SoftDeletes;
	
    protected $fillable = [
		'name',
		'trn_no',
    	'address',
    	'responsible_person',
    	'email',
    	'mobile_no'
    ];

    protected $dates = [
    	'deleted_at'
    ];
}
