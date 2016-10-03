<?php

use App\Models\Afk;
use Faker\Generator;
use App\Models\Event;
use App\Models\Family;
use App\Models\Character;
use App\Models\EventType;
use App\Models\CharacterClass;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(Character::class, function (Generator $faker) {
    return [
        'name' => $faker->name,
        'family_id' => Family::inRandomOrder()->first()->id,
        'class_id' => CharacterClass::inRandomOrder()->first()->id,
    ];
});

$factory->define(CharacterClass::class, function (Generator $faker) {
    return [
        'name' => $faker->name,
    ];
});

$factory->define(Event::class, function (Generator $faker) {
    return [
        'description' => $faker->text,
        'event_type_id' => EventType::inRandomOrder()->first()->id,
        'event_datetime' => $faker->dateTime,
    ];
});

$factory->define(EventType::class, function (Generator $faker) {
    return [
        'name' => $faker->name,
    ];
});

$factory->define(Family::class, function (Generator $faker) {
    return [
        'name' => $faker->name,
    ];
});

$factory->define(Afk::class, function (Generator $faker) {
    return [
        'family_id' => Family::inRandomOrder()->first()->id,
        'comment' => rand(1, 0) ? $faker->text : '',
        'start_date' => $faker->dateTime,
        'end_date' => $faker->dateTime,
    ];
});
