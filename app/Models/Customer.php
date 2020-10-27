<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Customer extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'trn_no',
        'attention_name',
        'telephone_no',
        'mobile_no',        
        'fax_no',
        'email',
        'address',
        'created_by',
        'updated_by',
        'deleted_by',
        'company_id'
    ];

    protected $dates = [
    	'deleted_at'
    ];
}
