<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Supplier extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'trn_no',
        'address',
        'mobile_no',
        'telephone_no',
        'fax_no',
        'email',
        'responsible_person',
        'created_by',
        'updated_by',
        'deleted_by',
        'company_id'
    ];

    protected $dates = [
    	'deleted_at'
    ];
}
