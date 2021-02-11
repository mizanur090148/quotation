<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ScheduleRequest extends FormRequest
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
            'range.from_date.required' => 'From date is required',
            'range.to_date.required' => 'To date is required'       
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
            'range.from_date' => [
                'required',
                'date'
            ],
            'range.to_date' => [
                'required',
                'date'
            ],
            'from_location' => [
                'required',
                'max:255'
            ], 
            'to_location' => [
                'required',
                'max:255'
            ],
            'note'=> [
                'nullable',
                'max:255'
            ]
        ];
    }
}
