<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\UniqueCheck;
use App\Models\Outlet;

class OutletRequest extends FormRequest
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
            'phone_no.required' => 'This is required',           
            'email.required' => 'This is required',
            'email.email' => 'This is invalid email',
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
                new UniqueCheck(Outlet::class)
            ],
            'responsible_person' => [
                'required',
                'max:30'
            ],
            'address' => [
                'required',
                'max:150',
            ],
            'phone_no' => [
                'required',
                'max:20'
            ],
            'email'=> [
                'email',
                'max:30',
                new UniqueCheck(Outlet::class)
            ]
        ];
    }
}
