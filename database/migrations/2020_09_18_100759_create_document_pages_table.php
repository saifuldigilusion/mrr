<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDocumentPagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('document_pages', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->unsignedBigInteger('transaction_id');
            $table->integer('pageno')->default(0);
            $table->string('filetype', 100)->nullable();  
            $table->binary('file')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('document_pages');
    }
}
