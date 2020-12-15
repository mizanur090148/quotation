<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('sale_id')->nullable();
            $table->string('invoice_number', 30)->nullable();
            $table->tinyInteger('payment_status')->default(1)->comment('due = 0, cash = 1');;
            $table->unsignedBigInteger('customer_id')->nullable();
            $table->unsignedBigInteger('product_id')->nullable();           
            $table->double('sale_price', 12,4)->default(0);
            $table->integer('quantity')->default(0);
            $table->integer('tax_percentage')->default(0);
            $table->double('tax_value', 12,4)->default(0);
            $table->integer('discount_percentage')->default(0);
            $table->double('product_wise_total', 12,4)->default(0);
            $table->double('delivery_cost', 12,4)->nullable();
            $table->double('others_cost', 12,4)->nullable();
            $table->string('note')->nullable();
            $table->unsignedBigInteger('outlet_id')->nullable();
            $table->unsignedBigInteger('created_by')->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->unsignedBigInteger('deleted_by')->nullable();
            $table->softDeletes();
            $table->timestamps();

            $table->foreign('customer_id')->references('id')->on('customers')->onDelete('cascade');
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
        Schema::dropIfExists('sales');
    }
}
