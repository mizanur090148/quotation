<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Dyrynda\Database\Support\CascadeSoftDeletes;

class Sale extends Model
{
    use HasFactory, SoftDeletes, CascadeSoftDeletes;

    protected $fillable = [
        'sale_id',
        'invoice_number',
        'payment_status',
        'customer_id',
        'product_id',
        'quantity',
        'sale_price', 
        'tax_percentage', 
        'tax_value', 
        'discount_percentage',
        'product_wise_total',
        'delivery_cost',
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
        'total_product_price', 
        'invoice_wise_total_price',
        'total_tax_value',
        'sale_date',
        'sale_date_time',
    ];

    protected $cascadeDeletes = [
        'sales'
    ];

    public function sales()
    {
        return $this->hasMany(self::class, 'sale_id');
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id')->withDefault();
    }

    public function getTotalProductPriceAttribute()
    {
        return round($this->sales()->sum('product_wise_total'));
    }

    public function getTotalTaxValueAttribute()
    {
        return round($this->sales()->sum('tax_value'));
    }

    public function getInvoiceWiseTotalPriceAttribute()
    {
        return round($this->total_product_price + $this->delivery_cost + $this->others_cost);
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

    public function getSaleDateAttribute()
    {
        return $this->created_at->format('d-M-Y');
    }

    public function getSaleDateTimeAttribute()
    {
        return $this->created_at->format('Y-m-d H:i:s');
    }
}
