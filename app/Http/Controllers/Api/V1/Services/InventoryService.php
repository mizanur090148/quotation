<?php

namespace App\Http\Controllers\Api\V1\Services;

use App\Models\Product;
use App\Models\Sale;
use App\Models\StockIn;
use DB, Config;

class InventoryService
{
    public function getAvailableProducts($request)
    {        
        /* 
        Config::set('database.connections.mysql.strict', false);
        DB::reconnect(); 
        */
        
        /* return Product::with([
            'category:id,name',
            'model:id,name',
            'brand:id,name',
            'stock_ins' => function($query) {
                $query->selectRaw('product_id,sum(quantity) as stock_in_qty');
            },
            'sales' => function($query) {
                $query->selectRaw('product_id,sum(quantity) as sale_qty');                
            }])->get(); */

       /*  return Destination::addSelect(['last_flight' => Flight::select('name')
            ->whereColumn('destination_id', 'destinations.id')
            ->orderBy('arrived_at', 'desc')
            ->limit(1)
        ])->get(); */

        /* return Product::addSelect([
            'stock_ins' => StockIn::selectRaw('sum(quantity)'),
            'sale_qty' => Sale::selectRaw('sum(quantity)')            
        ])->get(); */

        /* $query = Product::select('products.*'); 
        $query->addSelect([
            'stock_ins1' => StockIn::selectRaw('sum(quantity)'),
            'sale_qty' => Sale::selectRaw('sum(quantity)')
          //  'sale_qty1' => StockIn::selectRaw('sum(quantity)') - Sale::selectRaw('sum(quantity)')
        ]);
        $query->having('sale_qty - stock_ins1',  '>', 1)->get(); */

        /* $with = with([
            'category:id,name',
            'model:id,name',
            'brand:id,name'
        ]);
        
        return Product::with($with)
            ->has('stock_ins')
            ->leftJoin('stock_ins', 'products.id', 'stock_ins.product_id')
            ->join('sales', 'products.id', 'sales.product_id')
            ->selectRaw('
                products.name,
                products.code,
                products.category_id,
                products.model_id,
                products.brand_id,
                sum(IFNULL(stock_ins.quantity, 0)) stk_qty,
                sum(IFNULL(sales.quantity,0)) sale_qty,
                (sum(IFNULL(stock_ins.quantity, 0)) - sum(IFNULL(sales.quantity,0))) as available_qty
            ')
            ->groupBy('products.id')
            ->whereNotNull('sales.sale_id')
            //->having('available_qty', '<' , $request->amount)
            ->get(); */

        $with = with([
            'category:id,name',
            'model:id,name',
            'brand:id,name',
            'stock_ins:product_id,quantity',
            'sales:product_id,quantity'
        ]);
        
        $query = Product::query(); 
        $query = $query->with($with)->has('stock_ins');
        $query = $query->when(request('search_key') != null, function($query) {
            $query->where('name', 'LIKE', '%' . request('search_key') . '%');
            $query->orWhere('code', 'LIKE', '%' . request('search_key') . '%');
        }); 
        $products = $query->get();

        $products = $products->reject(function ($product, $key) {
            return ($product->stock_ins->sum('quantity') - $product->sales->sum('quantity')) > request('amount');
        });

        foreach ($products as $key => $product) {
            $products[$key]->available_qty = $product->stock_ins->sum('quantity') - $product->sales->sum('quantity');
        }

        return $products;
    }
}