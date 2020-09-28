<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Dyrynda\Database\Support\CascadeSoftDeletes;

class Outlet extends Model
{
    use SoftDeletes, CascadeSoftDeletes;
	
    protected $fillable = [
    	'name',    	
		'responsible_person',
		'mobile_no',
    	'email',		
		'address',
		'company_id'
    ];

    protected $dates = [
    	'deleted_at'
    ];
}
