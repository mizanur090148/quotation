<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Dyrynda\Database\Support\CascadeSoftDeletes;

class StockIn extends Model
{
    use HasFactory, SoftDeletes, CascadeSoftDeletes;

    protected $fillable = [
        'stock_in_challan',
        'stock_in_status',
        'stock_in_document',
        'stock_in_id',
        'supplier_id',
        'product_id',
        'quantity', 
        'tax_percentage', 
        'tax_value', 
        'discount_percentage',
        'product_wise_total',
        'shipping_cost',
        'others_cost',
        'note',
        'outlet_id',
        'created_by',
        'updated_by',
        'deleted_by'     
    ];

    protected $dates = [
    	'deleted_at'
    ];

    protected $appends = [
        'total_product_cost', 
        'total_cost',
        'created_date'
    ];

    protected $cascadeDeletes = [
        'stockIns'
    ];

    public function stockIns()
    {
        return $this->hasMany(self::class, 'stock_in_id');
    }

    public function supplier()
    {
        return $this->belongsTo(Supplier::class, 'supplier_id', 'id')->withDefault();
    }

    public function getTotalProductCostAttribute()
    {
        return $this->stockIns()->sum('product_wise_total');
    }

    public function getTotalCostAttribute()
    {
        return ($this->total_product_cost + $this->shipping_cost + $this->others_cost);
    }

    public function getCreatedDateAttribute()
    {
        return $this->created_at->toDateString();
    }

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id')->withDefault();
    }

    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by')->withDefault();
    } 

    public function outlet()
    {
        return $this->belongsTo(Outlet::class, 'outlet_id')->withDefault();
    }
}
