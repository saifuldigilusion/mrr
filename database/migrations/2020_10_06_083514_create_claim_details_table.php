<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClaimDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('claim_details', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('provider_code', 50)->nullable();
            $table->string('invoice_number', 30)->nullable();
            $table->string('billing_code', 30)->nullable();
            $table->string('billing_description', 250)->nullable();
            $table->dateTime('transaction_date')->nullable();
            $table->decimal('unit_price', 8, 2)->default(0.00)->nullable();
            $table->decimal('quantity', 8, 2)->default(0.00)->nullable();
            $table->decimal('amount', 8, 2)->default(0.00)->nullable();
            $table->decimal('discount', 8, 2)->default(0.00)->nullable();
            $table->string('gst_code', 10)->nullable();
            $table->decimal('gst_amount', 8, 2)->default(0.00)->nullable();
            $table->string('mma_code', 30)->nullable();
            $table->string('description', 250)->nullable();
            $table->unsignedBigInteger('transaction_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('claim_details');
    }
}
