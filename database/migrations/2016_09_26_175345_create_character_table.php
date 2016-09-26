<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCharacterTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('character', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->integer('family_id')->unsigned();
            $table->integer('class_id')->unsigned();
            $table->timestamps();
        });

        $table->foreign('family_id')
            ->references('id')->on('family')
            ->onDelete('cascade');

        $table->foreign('class_id')
            ->references('id')->on('class')
            ->onDelete('cascade');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('character');
    }
}
