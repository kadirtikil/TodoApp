<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    // For the fields that can be created or updated. 
    // Id is an auto inc and timestamps are Now() so these fields dont have to be mentioned.
    // The DB will take care of those.
    protected $filable = [
        "title",      
        "description",
        "participants",      
        "deadline",
        "ispending",
    ];


    protected function casts(): array
    {
        return [
            'deadline' => 'datetime',
        ];
    }
}
