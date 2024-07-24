<?php

namespace App\Http\Controllers;

use App\Models\Pizza;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PizzaController extends Controller
{
    //gets and returns a pizzas data
    public function index(){
        $pizzas = Pizza::all();
                                //component
        return Inertia::render('Pizzas/All', [
            'pizzas' => $pizzas
        ]);
    }
}
