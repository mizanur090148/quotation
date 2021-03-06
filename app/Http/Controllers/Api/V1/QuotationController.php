<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\V1\BaseController as BaseController;
use App\Http\Requests\QuotationRequest;
use App\Models\Quotation;
use App\Models\Vendor;
use DB;

class QuotationController extends BaseController
{
    
    protected $apiCrudHandler;

    public function __construct()
    {
        $this->apiCrudHandler = new ApiCrudHandler();
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $with = [
            'vendor:id,vendor_name', 
            'quotation_details'
        ];
        $modelData = $this->apiCrudHandler->index($request, Quotation::class, $where = [], $with);
        return $modelData;
    }

    /**
     * Display a a search of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {
        // Load model class object
        $with = [
            'vendor:id,vendor_name', 
            'quotation_details'
        ];
       $modelData = Quotation::with($with)
            ->join('vendors', 'quotations.vendor_id', 'vendors.id');           

            $where_fileds = explode(',', $request->search_field);
            foreach ($where_fileds as $key => $field) {
                if ($key == 0) {
                    $modelData->where($field, 'LIKE', '%'. $request->search_query .'%');
                } else {
                    $modelData->orWhere($field, 'LIKE', '%'. $request->search_query .'%');
                }
            }

        // For order by
        /*if ($request->has('sortByColumn') && $request->has('sortBy')) {
            $modelData = $modelData->orderBy($request->sortByColumn, $request->sortBy);
        } else {
            $modelData = $modelData->latest();
        }*/
         $modelData = $modelData->select('quotations.*','vendors.vendor_name');
        dd($modelData->paginate());

        try {
            $modelData = $this->getData($modelClassName, $request, $with);

        } catch (Exception $ex) {
            //otherwise return error
            return $this->apiResposeHandler->returnResponse(
                $this->apiResposeHandler->error,
                '',
                $ex->getMessage()
            );
        }
        if ($modelData) {
            //Return faculty object
            /*return [
                'status' => $this->apiResposeHandler->success,
                'message' => '',
                'content' => $modelData
            ];*/
            return $this->apiResposeHandler->returnResponse(
                $this->apiResposeHandler->success,
                '',
                $modelData
            );
        } else {
            //otherwise return error
            return $this->apiResposeHandler->returnResponse(
                $this->apiResposeHandler->responseStatus->error,
                $modelData
            );
        }
    }
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(QuotationRequest $request)
    {
        //If ID then update, else create
        try {
            DB::beginTransaction();
            if ($request->has('id')) {
                $modelId = $request->id;
                $quotation_input = [
                    'vendor_id' => $request->vendor_id,
                    'quotation_no' => $request->quotation_no,
                    'quotation_date' => $request->quotation_date,
                    'subject' => $request->subject,
                    'total_discount' => $request->total_discount ?? 0,
                    'total_without_discount' => $request->total_without_discount ?? 0
                ];
                $message = $this->apiResposeHandler->update_success;
            } else {
                $modelId = '';
                $quotation_input = [
                    'vendor_id' => $request->vendor_id,
                    'quotation_no' => $request->quotation_no,
                    'quotation_date' => $request->quotation_date,
                    'subject' => $request->subject,
                    'total_discount' => $request->total_discount ?? 0,
                    'total_without_discount' => $request->total_without_discount ?? 0        
                ];
               // $message = $this->apiResposeHandler->save_success;
            }
       
            $quotation = Quotation::findOrNew($modelId);
            $quotation->fill($quotation_input);
            $quotation->save();
           
            $quotationDetails = $this->quotationDetailsInput($quotation->id, $request);
            $quotation->quotation_details()->delete();
            $quotation->quotation_details()->createMany($quotationDetails);
            DB::commit();

            /* return $this->apiResposeHandler->returnResponse(
                $this->apiResposeHandler->success,
                $message,
                ''
            ); */
            return true;

        } catch (Exception $ex) {
            DB::rollback();
            return false;
            /* return $this->apiResposeHandler->returnResponse(
                $this->apiResposeHandler->error,
                $ex->getMessage()
            ); */
        }     
    }

    public function quotationDetailsInput($quotationId, $request)
    {
        $quotationDetails = [];
        foreach ($request->quotation_items as $key => $item) {
            $quotationDetails[] = [
                'quotation_id' => $quotationId,
                'quantity' => $item['quantity'],
                'job_description' => $item['job_description'],
                'service_per_year' => $item['service_per_year']
            ];
        }
        return $quotationDetails;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $with = [
            'vendor:id,vendor_name,address,attention,attention_designation',
            'quotation_details'
        ];

        try {
            $modelData = $this->apiCrudHandler->show($id, Quotation::class, $with);          
            return $this->sendResponse($modelData);
        } catch (Exception $e) {
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
        $modelData = $this->apiCrudHandler->delete($id, Quotation::class);
        return $modelData;
    }
}
