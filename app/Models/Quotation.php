<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Dyrynda\Database\Support\CascadeSoftDeletes;

class Quotation extends Model
{
    use HasFactory, SoftDeletes, CascadeSoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'vendor_id',   
        'quotation_no',  
        'quotation_date',
        'subject',
        'total_discount',
        'total_without_discount',        
        'created_by',
        'updated_by',
        'deleted_by',
        'factory_id'
    ];

    protected $appends = ['quotation_total'];

    protected $dates = [
        'deleted_at'
    ];

    protected $cascadeDeletes = [
        'quotation_details'
    ];

    public function vendor()
    {
    	return $this->belongsTo(Vendor::class, 'vendor_id')->withDefault([
            'vendor_name' => 'N/A'
        ]);
    }

    public function quotation_details()
    {
        return $this->hasMany(QuotationDetail::class, 'quotation_id');
    }    

    public function getQuotationTotalAttribute()
    {
        return $this->quotation_details()->sum('service_per_year');
    }
}
