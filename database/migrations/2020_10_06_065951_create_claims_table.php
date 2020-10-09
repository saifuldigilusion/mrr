<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClaimsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('claims', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('provider_code', 50)->nullable();
            $table->enum('transaction_type',['NS', 'CN', 'DN'])->default('NS');
            $table->string('doc_no', 50)->nullable();
            $table->string('membership_id', 50)->nullable();
            $table->string('patient_name', 100)->nullable();
            $table->string('patient_ic_number', 30)->nullable();
            $table->string('patient_other_id', 30)->nullable();
            $table->string('gl_no', 30)->nullable();
            $table->string('invoice_number', 30)->nullable();
            $table->dateTime('invoice_date')->nullable();
            $table->enum('claim_type',['OP', 'IP'])->default('IP');
            $table->enum('service_type_code',['SP', 'MT', 'HP'])->default('HP');
            $table->dateTime('admission_date')->nullable();
            $table->dateTime('discharge_date')->nullable();
            $table->decimal('claim_amount', 8, 2)->default(0.00);
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
        Schema::dropIfExists('claims');
    }
}
