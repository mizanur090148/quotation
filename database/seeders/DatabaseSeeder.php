<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
	        GroupsTableSeeder::class,
	        FactoriesTableSeeder::class,
	        RolesTableSeeder::class,
	        UsersTableSeeder::class
	    ]);
    }
}
