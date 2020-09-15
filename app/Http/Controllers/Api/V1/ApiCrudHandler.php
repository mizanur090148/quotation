<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class ApiCrudHandler
{
    /**    
     * @param String $modelClassName
     * @param Request $request
     *
     * @return Array
     */
    public function index(Request $request, $modelClassName, array $where, array $with)
    {
        // Load model class object
        $modelData = new $modelClassName();        
        // where
        if (count($where)) {
            $modelData = $modelData->where($where);
        }
        // eager load data
        if (count($with)) {
            $modelData = $modelData->with($with);
        }
        $modelData = $modelData->orderBy($request->sortByColumn ?? 'id', $request->sortBy ?? 'desc');       
        return $modelData->paginate();
    }

    /**    
     * @param Request $request
     * @param String $moduleName
     * @param String $modelClassName
     * @param Array $arrFieldsToSave
     *
     * @return Array
     */
    public function store(Request $request, $modelClassName)
    {
        $obj = $modelClassName::findOrNew($request->id);
        $obj->fill($request->all());
        $obj->save();

        return $obj;
    }

    /**     
     * @param Request $request
     * @param String $moduleName
     * @param String $modelClassName
     * @param Array $arrFieldsToSave
     *
     * @return Array
     */
    public function update(Request $request, $modelClassName)
    { 
        $obj = $modelClassName::find($request->id);     
        $obj->fill($request->all());
        $obj->save();

        return $obj;
    }   

    /**    
     * @param String $modelClassName
     * @param String $id
     *
     * @return Boolean
     */
    public function delete($id, $modelClassName)
    {
        return $modelClassName::destroy($id);
    }    
}
