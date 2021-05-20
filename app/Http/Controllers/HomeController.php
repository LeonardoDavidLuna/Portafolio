<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    public function index()
    { return view('home'); }
    
    public function biography()
    { return view('biography'); }

    public function proyects()
    { return view('proyect'); }
    
    public function games()
    { return view('games'); }

    public function hobbies()
    { return view('hobbies'); }

    public function others()
    { return view('other'); }

    public function contact()
    { return view('contact'); }
    
    public function privacy()
    { return view('privacy'); }
    
    public function terms()
    { return view('terms'); }
}