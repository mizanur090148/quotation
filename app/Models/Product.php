<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Dyrynda\Database\Support\CascadeSoftDeletes;

class Product extends Model
{
    use HasFactory, SoftDeletes, CascadeSoftDeletes;

    protected $fillable = [
        'category_id',
        'brand_id',
        'model_id',
        'name',
        'product_code',
        'unit',
        'sale_unit',
        'tax',
        'outlet_id',
    	'created_by',
        'updated_by',
        'deleted_by'
    ];

    protected $dates = [
    	'deleted_at'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class)->withDefault();       
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class)->withDefault();       
    }

    public function model()
    {
        return $this->belongsTo(Modell::class)->withDefault();       
    }
}
