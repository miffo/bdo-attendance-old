<?php

use App\Models\Afk;
use App\Models\Event;
use App\Models\Family;
use App\Models\Character;
use App\Models\EventType;
use App\Models\CharacterClass;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        factory(CharacterClass::class, 10)->create()->each(function ($class) {
            // $class->save();
        });

        factory(Family::class, 25)->create()->each(function ($family) {
            // $family->save();
        });

        factory(Character::class, 30)->create()->each(function ($character) {
            // $family->save();
        });

        factory(EventType::class, 3)->create()->each(function ($event) {
            // $event->save();
        });

        factory(Event::class, 25)->create()->each(function ($event) {
            // $event->save();
        });

        factory(Afk::class, 5)->create()->each(function ($event) {
            // $event->save();
        });

    }
}
