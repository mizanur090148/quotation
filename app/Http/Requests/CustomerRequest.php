<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\UniqueCheck;
use App\Models\Customer;

class CustomerRequest extends FormRequest
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
                'max:60'               
            ],
            'trn_no' => [
                'required',
                'max:30',
                new UniqueCheck(Customer::class)
            ],
            'address' => [
                'nullable',
                'max:150',
            ],
            'telephone_no' => [
                'required',
                'max:20'
            ],          
            'email'=> [
                'nullable',  
                'email',
                'max:30',
                new UniqueCheck(Customer::class)
            ],
            'attention'=> [
                'nullable',
                'max:40'
            ]
        ];
    }
}
