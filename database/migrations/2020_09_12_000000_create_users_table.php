<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('email', 60);
            $table->string('password');
            $table->string('access_token')->nullable();
            $table->string('first_name', 40);
            $table->string('last_name', 40)->nullable();
            $table->string('picture')->nullable();
            $table->string('screen_name', 50)->nullable();
            $table->string('mobile_no', 50)->nullable();
            $table->string('address', 120)->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->timestamp('last_login')->nullable();
            $table->smallInteger('status')->default(0)->comment('0=inactive, 1=active, 2=blocked');
            $table->smallInteger('role')->default(0)->comment('0=user, 1=admin, 2=super admin');
            $table->unsignedBigInteger('role_id')->nullable();
            $table->unsignedBigInteger('created_by')->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->unsignedBigInteger('deleted_by')->nullable();
            $table->unsignedBigInteger('factory_id')->nullable();
            $table->rememberToken();
            $table->softDeletes();
            $table->timestamps();

            $table->foreign('role_id')->references('id')->on('roles');
            $table->foreign('factory_id')->references('id')->on('factories');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
