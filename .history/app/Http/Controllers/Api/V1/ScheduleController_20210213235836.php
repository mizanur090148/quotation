<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Api\V1\BaseController as BaseController;
use App\Http\Controllers\Api\V1\ApiCrudHandler;
use App\Http\Requests\ScheduleRequest;
use App\Models\Schedule;
use Illuminate\Http\Request;
use Carbon\Carbon;
use GrahamCampbell\ResultType\Result;

class ScheduleController extends BaseController
{
    protected $apiCrudHandler;

    public function __construct(ApiCrudHandler $apiCrudHandler)
    {
        $this->apiCrudHandler = $apiCrudHandler;
    }

    public function index(Request $request)
    {
        try {           
            $modelData = $this->apiCrudHandler->index($request, Schedule::class, $where = [], $with = []);
            return $this->sendResponse($modelData);
        } catch (\Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }

    public function categoryDropdownData(Request $request)
    {
        try {
            $select = ['id', 'name'];
            $modelData = $this->apiCrudHandler->dropdownData($request, Schedule::class, $where = [], $select);
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
    public function store(ScheduleRequest $request)
    {
        try {
            $input = $request->only('id','from_location','to_location','note', 'status','admin_comment');
            $dates = [
                'from_date' => $request->range['start'], 
                'to_date' => $request->range['end']
            ];
            $request = array_merge($input, $dates);
            $request = new \Illuminate\Http\Request($request);

            $modelData = $this->apiCrudHandler->store($request, Schedule::class);           
            return $this->sendResponse($modelData);
        } catch (\Exception $ex) {
            return $this->sendError($e->getMessage());
        }
    } 
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $modelData = $this->apiCrudHandler->show($id, Schedule::class, $with = []);
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
            $search_key = $request->search_key; //(strtolower($request->search_key) == 'pending') ? 0 : 1;
            $modelData = Schedule::where('status', 'like', "$%search_key%")
                ->orWhere('from_date', 'like', "%$search_key")
                ->orWhere('from_date', 'like', "%$search_key%")
                ->orWhere('from_location', 'like', "%$search_key%")
                ->orWhere('to_location', 'like', "%$search_key%")
                ->orWhere('note', 'like', "%$search_key%")
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
    public function delete($id)
    {
        try {
            $delete = $this->apiCrudHandler->delete($id, Schedule::class);
            return $this->sendResponse($delete);
        } catch (\Exception $e) {
            return $this->sendError($e->getMessage());
        }  
    }

    public function getVisitScheduleData(Request $request)
    {
        try {
            $modelData = Schedule::whereYear('from_date', $request->year)
                ->whereMonth('from_date', $request->month)
                ->get();
            
            $results = [];
            foreach ($modelData as $key => $data) {
                $results[$key]['title'] = $data->from_location . ' - ' .  $data->to_location;
                $results[$key]['start'] = $data->from_date;
                $results[$key]['end'] = Carbon::createFromFormat('Y-m-d', $data->to_date)->addDays(1);
            }
            return $this->sendResponse(collect($results));
        } catch (\Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }
}
