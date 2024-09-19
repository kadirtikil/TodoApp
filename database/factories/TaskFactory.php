<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->title(),
            'description'=> fake()->text(),
            'participants' => $this->generateUserIDs(),
            'deadline' => fake()->dateTime(),
            'pending' => fake()->boolean(),
        ];
    }

    private function generateUserIDs(): string {
        $result = [];

        for($i = 0; $i < 33; $i++){
            $result[] = random_int(1, 33);
        }

        return json_encode($result);
    }
}
