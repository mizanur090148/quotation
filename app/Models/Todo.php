<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Dyrynda\Database\Support\CascadeSoftDeletes;
use Carbon\Carbon;

class Todo extends Model
{
    use HasFactory, SoftDeletes, CascadeSoftDeletes;
	
    protected $fillable = [
        'title',
    	'description',    	
		'status',
    	'completed_date_time',		
		'created_by',
		'branch_id',
        'created_by',
        'updated_by',
        'deleted_by'
    ];

    protected $dates = [
    	'deleted_at'
    ];

    protected $appends = [
        'todo_created',
    ];

    public function getTodoCreatedAttribute()
    {
        return $this->created_at->toDateTimeString();
    }
}
