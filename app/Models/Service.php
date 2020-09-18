<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Dyrynda\Database\Support\CascadeSoftDeletes;

class Service extends Model
{
    use HasFactory, SoftDeletes, CascadeSoftDeletes;
	
    protected $fillable = [
    	'name',
    	'parent_id',
    	'created_by',
        'updated_by',
        'deleted_by',
        'factory_id'
    ];

    protected $dates = [
    	'deleted_at'
    ];

    protected $cascadeDeletes = [
    	'services'
    ];

    public function services()
    {
    	return $this->hasMany(self::class, 'parent_id');
    }

    public function service_category()
    {
        return $this->belongsTo(self::class, 'parent_id', 'id');
    }
}
