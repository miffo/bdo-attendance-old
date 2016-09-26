<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlayerEventTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('player_event', function (Blueprint $table) {
            $table->integer('family_id')->unsigned();
            $table->integer('event_id')->unsigned();

            $table->boolean('attending');
            $table->dateTime('signup_datetime');
            $table->dateTime('arrive_datetime');
            $table->string('description', 255);

            $table->foreign('family_id')
                ->references('id')->on('family')
                ->onDelete('cascade');

            $table->foreign('event_id')
                ->references('id')->on('family')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('player_event');
    }
}
