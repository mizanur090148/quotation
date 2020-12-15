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
        'code',
        'category_id',
        'brand_id',
        'model_id',       
        'unit_id',
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

    protected $appends = [
        'purchase_tax_value',
        'sale_tax_value'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [       
        'avaialble_product'
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

    public function unit()
    {
        return $this->belongsTo(Unit::class)->withDefault();
    }

    public function stock_ins()
    {
        return $this->hasMany(StockIn::class);
    }

    public function sales()
    {
        return $this->hasMany(Sale::class);
    }

    public function getPurchaseTaxValueAttribute()
    {
        return ($this->purchase_price * ($this->tax_percentage / 100));
    }

    public function getSaleTaxValueAttribute()
    {
        return ($this->sale_price * ($this->tax_percentage / 100));
    }
}
