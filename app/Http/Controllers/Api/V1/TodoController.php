<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Api\V1\BaseController as BaseController;
use App\Http\Controllers\Api\V1\ApiCrudHandler;
use App\Http\Requests\TodoRequest;
use App\Models\Todo;
use Carbon\Carbon;
use Exception;

class TodoController extends BaseController
{
    protected $apiCrudHandler;

	public function __construct(ApiCrudHandler $apiCrudHandler)
    {
        $this->apiCrudHandler = $apiCrudHandler;      
    }

    public function index(Request $request)
    {
        try {
        	$modelData = $this->apiCrudHandler->index($request, Todo::class, $where = [], $with = []);
        	return $this->sendResponse($modelData);
        } catch (Exception $e) {
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
    public function store(TodoRequest $request)
    {
        //If ID then update else create
        try {
            $modelData = $this->apiCrudHandler->store($request, Todo::class);
			return $this->sendResponse($modelData);
        } catch (Exception $e) {
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
    public function update($id, TodoRequest $request)
    {
    	//If ID then update, else create
        try {  
        	$request->request->add(['id' => $id]);
        	$modelData = $this->apiCrudHandler->update($request, Todo::class);
        	return $this->sendResponse($modelData);
        } catch (Exception $e) {
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
            $modelData = $this->apiCrudHandler->show($id, Todo::class, $with = []);
            return $this->sendResponse($modelData);
        } catch (Exception $e) {
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
            $modelData = Todo::where('title', 'like', "%$request->search_key%")
                ->orderBy($request->sortByColumn ?? 'id', $request->sortBy ?? 'desc')
                ->paginate();
            return $this->sendResponse($modelData);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }

    /**   
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        try {  
        	$response = $this->apiCrudHandler->delete($id, Todo::class);
        	return $this->sendResponse($response);
        } catch (Exception $e) {
        	return $this->sendError($e->getMessage());
        }  
    }

    public function pendingTodos()
    {
        try {
        	$data = Todo::whereYear('created_at', date('Y'))
                ->whereMonth('created_at', date('m'));

            $completed_data = clone $data;
            $result['pending_todos'] = $data->where('status', 0)->get();
            $result['completed_todos'] = $completed_data->whereDate('completed_date_time', date('Y-m-d'))->get();  
        	return $this->sendResponse($result);
        } catch (Exception $e) {
        	return $this->sendError($e->getMessage());
        }
    }

    public function changeTodoStatus(Request $request)
    {
        try {  
        	$todo = Todo::find($request->id);
            if ($todo->status == 0) {
                $todo = $todo->update([
                    'status' => 3,
                    'completed_date_time' => Carbon::now()->toDateTimeString()
                ]);
            } else {
                $todo = $todo->update([
                    'status' => 0,
                    'completed_date_time' => null
                ]);
            }
        	return $this->sendResponse($todo);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }
}
