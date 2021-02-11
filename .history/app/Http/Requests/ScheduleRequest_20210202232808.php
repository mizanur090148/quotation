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
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {dd(request()->all());
        return [
            'from_date' => [
                'required',
                'date'
            ],
            'to_date' => [
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
