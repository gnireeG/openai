<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use OpenAI\Laravel\Facades\OpenAI;

class AI extends Controller
{
    function test(Request $request){
        
        $response = OpenAI::completions()->create([
            'model' => 'text-davinci-003',
            'prompt' => $request->input('input'),
        ]);
        return ['dataFromApi' => $response['choices'][0]['text']];
    }
}
