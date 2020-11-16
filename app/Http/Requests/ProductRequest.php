<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\UniqueCheck;
use App\Models\Product;

class ProductRequest extends FormRequest
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
            'category_id.required' => 'Category is required',
            'brand_id.required' => 'Brand is required',
            'model_id.required' => 'Model is required',
            'name.required' => 'Product name is required',
            'product_unit.required' => 'Product_unit is required',
            'product_unit.numeric' => 'Product_unit must be numeric',
            'product_unit.min' => 'Must be greater than 0',
            'product_unit.max' => 'Out of range',            
            'purchase_price.required' => 'Purchase price is required',
            'purchase_price.numeric' => 'Purchase price must be numeric',
            'purchase_price.min' => 'Must be greater than 0',
            'purchase_price.max' => 'Out of range',
            'sale_price.required' => 'Sale price be required',
            'sale_price.numeric' => 'Sale price must be numeric',
            'sale_price.min' => 'Must be greater than 0',
            'sale_price.max' => 'Out of range',
            'tax_percentage.required' => 'Tax percentage is required',
            'tax_percentage.numeric' => 'Tax percentage must be numeric',
            'tax_percentage.min' => 'Must be greater than 0',
            'tax_percentage.max' => 'Out of range',
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
            'category_id' => 'required',
            //'brand_id' => 'required',
            //'model_id' => 'required',
            'name' => [
                'required',
                'max:100'
            ],
            'code' => [
                'required',
                'max:20'
            ],
            'product_unit' => [
                'required',
                'numeric',
                'digits_between:1,8'
            ], 
            'purchase_price' => [
                'required',
                'numeric',
                'gt:0'
               // 'digits_between:1,8'
            ],
            'sale_price'=> [
                'required',
                'numeric',
                'gt:0'
                //'digits_between:1,8'
            ],
            'tax_percentage'=> [
                'required',
                'numeric',
                'gt:0'
                //'digits_between:1,8'
            ],
            'product_detail' => [
                'nullable',
                'max:1000'
            ],
            'warning_quantity' => [
                'nullable',
                'numeric'              
            ],
            
            /* 'image' => [
                'nullable',
                'image',
                'mimes:jpeg,jpg,png,gif',
                'max:2048'
            ] */
        ];
    }
}
