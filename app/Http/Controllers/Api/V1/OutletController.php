<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Api\V1\BaseController as BaseController;
use App\Http\Controllers\Api\V1\ApiCrudHandler;
use App\Http\Requests\OutletRequest;
use App\Models\Outlet;
use Validator;

class OutletController extends BaseController
{
    protected $apiCrudHandler;

    public function __construct(ApiCrudHandler $apiCrudHandler)
    {
        $this->apiCrudHandler = $apiCrudHandler;
    }

    public function index(Request $request)
    {
        try {
            $modelData = $this->apiCrudHandler->index($request, Outlet::class, $where = [], $with = []);
            return $this->sendResponse($modelData);
        } catch (\Exception $e) {
            return $this->sendError($e->getMessage());
        }        
    }

    /**
    *
     * @param Request $request
     * @param String $moduleName
     * @param String $modelClassName   
     *
     * @return Array
     */
    public function store(OutletRequest $request)
    {       
        try {
            $modelData = $this->apiCrudHandler->store($request, Outlet::class);
            return $this->sendResponse($modelData);
        } catch (\Exception $ex) {
            return $this->sendError($e->getMessage());
        }
    } 
    
    /**    
     *
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {
        try {            
            $modelData = Outlet::where('name', 'like', "%$request->search_key%")               
                ->orWhere('address', 'like', "%$request->search_key%")
                ->orWhere('mobile_no', 'like', "%$request->search_key%")
                ->orWhere('telephone_no', 'like', "%$request->search_key%")
                ->orWhere('responsible_person', 'like', "%$request->search_key%")
                ->orWhere('email', 'like', "%$request->search_key%")
                ->orderBy($request->sortByColumn ?? 'id', $request->sortBy ?? 'desc')
                ->paginate();
            return $this->sendResponse($modelData);
        } catch (\Exception $ex) {
            return $this->sendError($e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id, Outlet $outlet)
    {
        try {
            $delete = $this->apiCrudHandler->delete($id, Outlet::class);
            return $this->sendResponse($delete);
        } catch (\Exception $e) {
            return $this->sendError($e->getMessage());
        }  
    }
}
