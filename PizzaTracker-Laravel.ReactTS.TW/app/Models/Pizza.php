<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Pizza extends Model
{
    use HasFactory;

    // The $guarded property allows you to specify which attributes should not be mass-assignable.
    // Here, it is set to an empty array, meaning all attributes are mass-assignable.
    protected $guarded = [];

    // The $casts property is used to convert attributes to a specific type.
    // Here, the 'toppings' attribute is cast to an array, allowing you to store JSON data in the database.
    protected $casts = [
        'toppings' => 'array', // Cast 'toppings' attribute to an array
    ];

    // Define a relationship method. This method specifies that each Pizza belongs to a User.
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class); // Define a belongsTo relationship with the User model
    }
}
