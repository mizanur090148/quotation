<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Vendor extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'vendor_name',   
        'vendor_no',  
        'trn_no',
        'address',
        'telephone_no',
        'fax_no',
        'email',
        'attention',
        'attention_designation',
        'mobile_no',
        'created_by',
        'updated_by',
        'deleted_by',
        'factory_id'
    ];

    protected $dates = [
    	'deleted_at'
    ];
}
