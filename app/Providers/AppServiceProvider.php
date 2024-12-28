<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route;
// use Laravel\Passport\Passport;

use App\Models\Sanctum\PersonalAccessToken;
use Laravel\Sanctum\Sanctum;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Route::middleware('api')
            ->prefix('api')
            ->group(base_path('routes/api.php'));


        // if i want to use individual stuff i can do so by uncommenting following line
        // and by impolementing intended behaviviour in that class.
        // Class does not exist as of now.
        //Sanctum::usePersonalAccessTokenModel(PersonalAccessToken::class);
        
        
        // uncommenting not necessary since keys are in env
        // Passport::loadKeysFrom(__DIR__.'/../secrets/oauth');
        
        
        // if client should be hashed uncomment this jit
        // Passport::hashClientSecrets();

        // set token life expectancies
        // Passport::tokensExpireIn(now()->addDays(15));
        // Passport::refreshTokensExpireIn(now()->addDays(30));
        // Passport::personalAccessTokensExpireIn(now()->addMonths(6));

    }
}
