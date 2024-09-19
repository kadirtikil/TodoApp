<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

# Why another TodoApp?
The last implementation has been quite a while ago. To quantify my current skillset and get a measure of how much I've progressed I'm making another one. I'm using Laravel because the last update has been quite big.


# Database
<img src="./ ~readmeassets/TODODB.svg">

## Database seeding

Factories have been set up for each Model to seed the DB.

```php
public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => static::$password ??= Hash::make('password'),
            'remember_token' => Str::random(10),
            'created_tasks' => $this->generateRandomTasks(),
        ];
    }
```

A helper Function **generateRandomTasks()** is used to generate the array of created tasks, containing the Ids of those. The DB saves it as longtext so the Function returns it as a **json_encode()** string, such that laravel can then interpret it as an array when fetched.

```php
private function generateRandomTasks(): string
    {
        $taskCount = random_int(1, 10); 
        $tasks = [];

        for ($i = 0; $i < $taskCount; $i++) {
            $tasks[] = random_int(1, 100);
        }

        return json_encode($tasks);
    }
```

The Factory for Tasks is similar to this.


## Querying the Database (API)
Since the API only provides CRUD-Operations using Eloquent Models to Query the Database is sufficient. So building specific Queries won't be necessary (see [Laravel-Eloquent](https://laravel.com/docs/11.x/eloquent#eloquent-model-conventions)).


## Querying for Serverside Rendering
TBC



# Serverside Rendering
Blade will be used aswell, to practise serverside rendering and maybe benchmark it against the Client in Vue.

# Clientside Rendering
Vue for Clientside rendering. Its the only Framework I have not tried next to: 
- Angular
- React
- HTMX with TEMPL

# Testing
The API is testdriven developed. First there will be **Units Tests** to check the functionality of Functions, be it Functions that query the Database or functions that handle **http-Requests** and their respective **Methods**. 


If all Unit-tests pass, the feauture Tests will be implemented. The Functions will be chained to simulate Clientside behaviour. I will try to make it **monadic**, such that an error leads to an immeadiate stop of the execution chain.

# MVC
Since this Backend will be an API and Render Serverside HTML by using Blade, there will be three Controllers. 

2 for each Model for the RESTAPI, and one for both Models to render HTML. This has no specific purpose except for its structure. 

By using **--resource** like this:
```bash
php artisan make:controller Controller --resource
```
laravel will setup the Controller with its CRUD Operations structure setup. The routes for these will be set in routes/api.php.
 
## API.php
Had to add
```php
public function boot(): void
    {
        Route::middleware('api')
            ->prefix('api')
            ->group(base_path('routes/api.php'));
    }
}
```

to the **AppServiceProvider.php**, such that the Routes in the api.php were considered as well. The Routes are only available with the "api" prefix.


# Middleware
The only Middleware needet here is one for authentication and another for authorization. Such that a Client can be identified and his behaviour can be controlled.

Eloquent provides some of these which i will look into. But most likely i will use either OAUTH2  or JWT (Json Web Tokens).