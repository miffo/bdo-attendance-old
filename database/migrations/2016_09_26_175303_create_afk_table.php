<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAfkTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('afk', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('family_id')->unsigned();
            $table->dateTimeTz('start_date');
            $table->dateTimeTz('end_date');
            $table->timestamps();
        });

        $table->foreign('family_id')
            ->references('id')->on('family')
            ->onDelete('cascade');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('afk');
    }
}
