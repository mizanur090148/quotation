<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\UniqueCheck;
use App\Models\Sale;

class SaleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation messages that apply to the erroneous request.
     *
     * @return bool
     */
    public function messages()
    {
        return [
            'customer_id.required' => 'Customer is required',
            'invoice_number.required' => 'This is required',
            'delivery_cost.numeric' => 'Delivery cost must be numeric',
            'others.numeric' => 'Others cost must be numeric',
            'quantity.required' => 'This is required',
            'quantity.numeric' => 'Quantity must be numeric',
            'quantity.min' => 'Must be greater than 0'           
        ];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'customer_id' => 'required',
            'invoice_number' => [
                'required',           
                'max:30',
                new UniqueCheck(Sale::class)
            ],            
            'quantity.*'=> [
                'required',  
                'numeric',
                'min:1'
            ],
            'discount_percentage.*'=> [
                'numeric',
                'min:0'
            ],
            'delivery_cost'=> [
                'numeric',
                'min:0',
                'digits_between:0,8'
            ],
            'others_cost'=> [
                'numeric',
                'min:0',
                'digits_between:0,8'
            ],
            'note'=> [             
                'nullable',             
                'max:255'
            ]
        ];
    }
}
