<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStockInsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stock_ins', function (Blueprint $table) {
            $table->id();
            $table->string('purchase_invoice', 30)->nullable();
            $table->tinyInteger('stock_in_status')->default(1)->comment('pending = 0, received = 1');
            $table->string('stock_in_document', 30)->nullable();
            $table->unsignedBigInteger('stock_in_id')->nullable();
            $table->unsignedBigInteger('supplier_id')->nullable(); 
            $table->unsignedBigInteger('product_id')->nullable();
            $table->integer('quantity')->default(0);
            $table->integer('tax_percentage')->default(0);
            $table->double('tax_value', 12,4)->default(0);
            $table->integer('discount_percentage')->default(0);
            $table->double('product_wise_total', 12,4)->default(0);
            $table->double('shipping_cost', 12,4)->default(0);
            $table->double('others_cost', 12,4)->default(0);
            $table->string('note')->nullable();           
            $table->unsignedBigInteger('outlet_id')->nullable();
            $table->unsignedBigInteger('created_by')->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->unsignedBigInteger('deleted_by')->nullable();
            $table->softDeletes();
            $table->timestamps();

            $table->foreign('supplier_id')->references('id')->on('suppliers')->onDelete('cascade');
            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
            $table->foreign('outlet_id')->references('id')->on('outlets')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('stock_ins');
    }
}
