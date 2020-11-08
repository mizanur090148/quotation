<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\V1\ApiCommonProcessHandler;
use App\Http\Controllers\Api\V1\ApiResponseHandler;
use App\Http\Controllers\Api\V1\Services\ImageUploadService;
use App\Http\Requests\ProductRequest;
use App\Models\Product;

class ProductController extends BaseController
{
    protected $apiCrudHandler;

    public function __construct()
    {
        $this->apiCrudHandler = new ApiCrudHandler();
    }

    public function index(Request $request)
    {
        try {
            $with = [
                'category:id,name',
                'model:id,name',
                'brand:id,name'
            ];
            $modelData = $this->apiCrudHandler->index($request, Product::class, $where = [], $with);
            return $this->sendResponse($modelData);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }

    public function getProductsByCategory($categoryId)
    {
        try {            
            $modelData = Product::where('category_id', $categoryId)->get();
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
    public function productDropdowndata(Request $request)
    {       
        try {
            $select = ['id', 'name'];        
            $modelData = $this->apiCrudHandler->dropdownData($request, Product::class, $where = [],  $with = [], $select);
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
    public function store(ProductRequest $request, ImageUploadService $service)
    {
        try {          
            // file upload
            if ($request->hasFile('image')) {
                $destinationPath = 'public/product_images';
                $productImage = $request->file('image');
                $imageTitle = $request->name.'_'.time().'.';
                $imageName = $imageTitle.$productImage->getClientOriginalExtension(); 
                $dbStoreName = '/storage/product_images/'.$imageName;
                $productImage->storeAs($destinationPath, $imageName);
                $input = $request->all();
                $input['image'] =  $dbStoreName;
                $request = new \Illuminate\Http\Request($input);
            }
            // save or update
            $modelData = $this->apiCrudHandler->store($request, Product::class);
            return $this->sendResponse($modelData);
        } catch (Exception $ex) {
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
            $with = [
                'category:id,name',
                'model:id,name',
                'brand:id,name'
            ];
            $modelData = $this->apiCrudHandler->show($id, Product::class, $with);
            return $this->sendResponse($modelData);
        } catch (Exception $ex) {
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
            $with = [
                'category:id,name',
                'model:id,name',
                'brand:id,name'
            ];
            $modelData = Product::with($with)
                ->where('name', 'like', "%$request->search_key%")
                ->orWhere('code', 'like', "%$request->search_key%")
                ->orWhere('purchase_price', 'like', "%$request->search_key%")
                ->orWhere('sale_price', 'like', "%$request->search_key%")
                ->orWhere('product_detail', 'like', "%$request->search_key%")
                ->orderBy($request->sortByColumn ?? 'id', $request->sortBy ?? 'desc')
                ->paginate();
            return $this->sendResponse($modelData);
        } catch (Exception $ex) {
            return $this->sendError($e->getMessage());
        }
    }

    /**
     *
     * @return \Illuminate\Http\Response
     */
    public function searchProductInPurchase(Request $request)
    {
        try {            
            $modelData = Product::where('name', 'like', "%$request->search_product%")            
                ->get();
            return $this->sendResponse($modelData);
        } catch (Exception $ex) {
            return $this->sendError($e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id, Product $Product)
    {
        try {
            $delete = $this->apiCrudHandler->delete($id, Product::class);
            return $this->sendResponse($delete);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }  
    }
}