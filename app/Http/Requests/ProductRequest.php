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
            'unit.required' => 'Unit is required',
            'unit.numeric' => 'Unit must be numeric',
            'unit.min' => 'Must be greater than 0',
            'unit.max' => 'Out of range',
            'sale_unit.required' => 'Sale unit be required',
            'sale_unit.numeric' => 'Sale unit must be numeric',
            'sale_unit.min' => 'Must be greater than 0',
            'sale_unit.max' => 'Out of range',
            'tax.required' => 'Tax is required',
            'tax.numeric' => 'Tax unit must be numeric',
            'tax.min' => 'Must be greater than 0',
            'tax.max' => 'Out of range',
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
            'brand_id' => 'required',
            'model_id' => 'required',
            'name' => [
                'required',
                'max:100'
            ],
            'product_code' => [
                'required',
                'max:30'
            ],
            'unit' => [
                'required',
                'numeric',
                'digits_between:1,8'
            ],                    
            'sale_unit'=> [
                'required',
                'numeric',
                'digits_between:1,8'
            ],
            /* 'tax'=> [
                'required',
                'numeric',
                'digits_between:1,8'
            ],   */          
        ];
    }
}
