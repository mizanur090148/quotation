<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\UniqueCheck;
use App\Models\Supplier;

class SupplierRequest extends FormRequest
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
            'name.required' => 'This is required',            
            'address.required' => 'This is required',
            'mobile_no.required' => 'This is required',
            'telephone_no.required' => 'This is required',
            'fax_no.required' => 'This is required',
            'email.required' => 'This is required',
            'responsible_person.required' => 'This is required'           
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
            'name' => [
                'required',
                'max:60',
                new UniqueCheck(Supplier::class)
            ],
            'trn_no' => [
                'required',
                'max:30',
                new UniqueCheck(Supplier::class)
            ],
            /* 'address' => [
               // 'required',
                'max:100',
            ], */
            'telephone_no' => [
                'required',
                'max:20'
            ],          
            /* 'email'=> [
                'required',  
                'email',
                'max:40',
                new UniqueCheck(Supplier::class)
            ], */
            'responsible_person'=> [
                'required',
                'max:50'
            ]
        ];
    }
}
