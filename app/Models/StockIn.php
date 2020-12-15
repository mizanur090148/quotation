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
        'purchase_invoice',
        'stock_in_status',
        'stock_in_document',
        'stock_in_id',
        'supplier_id',
        'product_id',
        'unit_id',
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
        'total_tax_value',
        'total_cost',
        'purchase_date',
        'suppliers'
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
        return round($this->stockIns()->sum('product_wise_total'));
    }

    public function getTotalCostAttribute()
    {
        return round($this->total_product_cost + $this->shipping_cost + $this->others_cost);
    }

    public function getTotalTaxValueAttribute()
    {
        return round($this->stockIns()->sum('tax_value'));
    }

    public function getPurchaseDateAttribute()
    {
        return $this->created_at ? $this->created_at->format('d-M-Y') : '';
    }

    public function getSuppliersAttribute()
    {
        $suppliers = $this->stockIns()->get()->pluck('supplier.name', 'supplier.trn_no')->all();
        $result = [];        
        foreach ($suppliers as $key => $supplier) {
            $result[] = $suppliers[$key] . ' - ' . $key;
        }
        return array_unique($result);
    }

    /* public function getSuppliersAttribute()
    {
        $suppliers = $this->stockIns()->get()->pluck('supplier.name')->all();
        return array_unique($suppliers);
    } */

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

    public function unit()
    {
        return $this->belongsTo(Unit::class, 'unit_id')->withDefault();
    }
}
