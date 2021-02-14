<?php
namespace App;

use Illuminate\Database\Eloquent\Builder;
use Auth;

class ScheduleTrait {

    protected static function bootUserIdTrait()
    {
        static::addGlobalScope('UserId', function (Builder $builder) {
            $builder->where('created_by', Auth::id());
        });

        static::creating(function ($model) {
            $model->factory_id = factoryId();
            if (in_array('created_by', $model->getFillable())) {
                $model->created_by = Auth::id();
            }
        });

        static::saving(function ($model) {
            $model->created_by = Auth::id();
        });

        static::updating(function ($model) {
            if (in_array('updated_by', $model->getFillable())) {
                DB::table($model->table)->where('id', $model->id)->update([
                    'updated_by' => userId(),
                ]);
            }
        });

        static::deleting(function ($model) {
            if (in_array('deleted_by', $model->getFillable())) {
                DB::table($model->table)->where('id', $model->id)
                    ->update([
                        'deleted_by' => userId()
                    ]);
            }
        });
    }
}