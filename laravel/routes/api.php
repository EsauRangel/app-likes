<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TasksController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

//Prefijo v1 para el correcto versionamiento de las APIs
Route::prefix('v1')->group(function () {

    //Prefijo tasks para todas las rutas relacionadas a tasks
    Route::prefix('tasks')->group(function () {

        Route::get("/", [TasksController::class, "show"]);
        Route::post("/", [TasksController::class, "create"]);
        Route::put("/{task}", [TasksController::class, "edit"]);
        Route::delete("/{task}", [TasksController::class, "destroy"]);

    });


});



