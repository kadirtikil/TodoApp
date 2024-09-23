<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


use App\Models\Task;
use Illuminate\Auth\Events\Validated;
use Response;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Response([
            // paginate to only fetch some but potentially all.
            Task::all()->take(16),
        ]);        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $taskMetadata = $request->validate([
            "title"=> "required|max:255",
            "description" => "max:65,535",
            "pending" => "string",
            "deadline" => "string|max:255",
        ]);


        Task::create($taskMetadata);

        return Response([
            "message" => "Task has been created",
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Response([
            "data"=> Task::findOrFail($id),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $taskMetadata = $request->validate([
            "title"=> "required|max:255",
            "description" => "max:65,535",
            "pending" => "string",
            "deadline" => "string",
        ]);
    
        if(Task::where("id", $id)->first()){
            Task::createOrUpdate([
                "title" => $taskMetadata["title"],
                "description"=> $taskMetadata["description"],   
                "pending" => $taskMetadata["pending"],
                "deadline" => $taskMetadata["deadline"],
            ]);


            return Response([
                "message"=> "Task updated.",
            ]);
        }  

        return Response([
            "error" => "Task couldnt be updated.",
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if(Task::where("id", $id)->first()){
            Task::destroy($id); 
            return Response([
                "message" => "Task has been deleted.",
            ]);
        }

        return Response([
            "error"=> "Task couldnt be deleted.",
        ]);

    }
}
