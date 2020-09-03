<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('clientcode', 20)->nullable();
            $table->string('filename', 100)->nullable();
            $table->string('filetype', 100)->nullable();
            $table->integer('filesize')->default(0);
            $table->integer('pages')->default(0);
            $table->set('status', ['NEW', 'PROCESSING', 'COMPLETED','INVALID'])->default('NEW');
            $table->integer('errorcode')->default(0);
            $table->dateTime('processstart')->nullable();
            $table->dateTime('processend')->nullable();
            $table->integer('processtime')->default(0);
            $table->string('identifier', 100)->unique();
            $table->dateTime('lastretrival')->nullable();
            $table->text('jsonout')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transactions');
    }
}
