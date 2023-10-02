<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Task;

class TasksController extends Controller
{

    // Esta funcion va a traer las tareas, search es la variable que hara el filto.
    //active() y search son scopes para generar mas limpia la consulta y son reutilizables.
    public function show(){

        $search = request()->q;

        $task = Task::active()->search($search)->orderBy("created_at", "ASC")->get();

        return response()->json(["success" => $task], 200);
    }

    public function create(){
        // dd(request()->all());
        request()->validate([
            "title" => "required|string",
            "description" => "required|string",
            "mexican_state" => "required|string|in:" . join(",", Task::MEXICAN_STATES),
            "user_name" => "required|string|",
            "creation_date" => "required|date"

        ]);

        $task = Task::create([
            "title" => request()->title,
            "description" => request()->description,
            "mexican_state" => request()->mexican_state,
            "user_name" => request()->user_name,
            "creation_date" => request()->creation_date
        ]);

        return response()->json(["success" => $task], 201);
    }

    public function edit(Task $task){
        if(!$task){
            return response()->json(["error" => ["msg" => "No existe el recurso."]]);
        }

        $task->likes += 1;
        $task->save();

        return response()->json(["success" => $task]);
    }

    public function destroy(Task $task){
        if(!$task->active){
            return response()->json(["error" => ["msg" => "No existe el recurso."]]);
        }

        if($task->likes > 0){
            return response()->json(["error" => ["msg" => "No se puede eliminar el recurso."]]);
        }

        $task->active = false;
        $task->save();

        return response()->json(["success" => $task]);
    }
}
