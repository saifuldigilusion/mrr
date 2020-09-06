<?php

namespace App\Http\Controllers;

use App\User; 
use App\Transaction;
use App\TransactionDocument;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; 
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Http;

class TransactionController extends Controller
{
    public function data(Request $request) {
        
        $transactions = Transaction::orderBy('id', 'DESC')->get();
        return $transactions;

    }

    public function detail($identifier) {
        $transaction = Transaction::where('identifier', $identifier)->first();
        if($transaction) {
            return $transaction;
        }

        abort(404);
    }
}
