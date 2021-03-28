<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\UniqueCheck;
use App\Models\Todo;

class TodoRequest extends FormRequest
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
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => [
                'required',
                'max:100',
              //  new UniqueCheck(PhoneBook::class)
            ],
           /* ,'description' => [
                'required',
                'max:255'
            ]
            'email' => [
                'nullable',
                'email',
                'max:50',
                new UniqueCheck(PhoneBook::class)
            ],
            'designation'=> [
                'nullable',
                'max:60'
            ],
            'address'=> [
                'nullable',
                'max:150'
            ] */
        ];
    }
}
