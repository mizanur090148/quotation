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
        'name',
        'product_code',
        'category_id',
        'brand_id',
        'model_id',       
        'product_unit',
        'purchase_price',
        'sale_price',
        'warning_quantity',
        'tax_percentage',
        'product_detail',
        'image',        
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
