<?php

class UserTrant {
    protected static function bootUserIdTrait()
    {
        static::addGlobalScope('UserId', function (Builder $builder) {
            if (\Request::segment(1) != 'production-dashboard') {
                $table = $builder->getModel()->getTable();
                $builder->where(($table ? $table.'.' : '').'factory_id', factoryId());
                //$builder->where('factory_id', factoryId());
                //$builder->where('factory_id', Session::get('factoryId'));
            }
        });

        static::creating(function ($model) {
            $model->factory_id = factoryId();
            if (in_array('created_by', $model->getFillable())) {
                $model->created_by = userId();
            }
        });

        static::saving(function ($model) {
            $model->factory_id = factoryId();            
            $model->created_at = Carbon::now()->isFriday() ? Carbon::now()->subDay() : Carbon::now();
            $model->updated_at = Carbon::now()->isFriday() ? Carbon::now()->subDay() : Carbon::now();
        });

        static::deleting(function ($model) {
            if (in_array('deleted_by', $model->getFillable())) {
                DB::table($model->table)->where('id', $model->id)
                    ->update([
                        'deleted_by' => userId()
                    ]);
            }
        });

        static::updating(function ($model) {
            if (in_array('updated_by', $model->getFillable())) {
                DB::table($model->table)->where('id', $model->id)->update([
                    'updated_by' => userId(),
                ]);
            }
        });
    }
}