<?php

namespace App\Http\Controllers;

use App\Provider;
use App\User; 
use App\Transaction;
use App\TransactionDocument;

use Validator;
use Exception;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; 
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Http;

class FileUploadController extends Controller
{
    public function upload(Request $request) {

        $user = Auth::user(); 

        if($request->hasFile('file')) {
            Log::debug('have file ' . public_path() . ' ' . storage_path());

            $file = $request->file('file');
            $clientCode = $request->get('clientcode');
            //$name = $file->getClientOriginalName().'.'.$file->getClientOriginalExtension();
            $uuid = strtoupper(uniqid("", true));
            $name = $uuid . '.' . $file->getClientOriginalExtension();
            $savedFile = $file->move(public_path().'/uploads/', $name);

            session(['uploadfile' => $uuid]);

            $transaction = new Transaction;
            $transaction->clientcode = $clientCode;
            $transaction->filename = $file->getClientOriginalName();
            $transaction->filetype = $file->getClientMimeType();
            $transaction->filesize = $savedFile->getSize();
            $transaction->identifier = $uuid;
            $transaction->user_id = Auth::id();
            $transaction->status = "PROCESSING";
            $transaction->save();

            $tdoc = new TransactionDocument;
            $tdoc->transaction_id = $transaction->id;
            $tdoc->file = file_get_contents($savedFile->getRealPath());
            $tdoc->filetype = $savedFile->getMimeType();
            $tdoc->save();

            Log::debug('user_id ' . Auth::id());
            Log::debug('transaction id ' . $transaction->id);

            // calling backend process 
            //$response = Http::get('http://flask:5000/process?id=' . $transaction->id . '&name=' . $uuid);
            //return $response->body();
            return $transaction;

        }
        else {
            return "Error";
        }

    }

    public function info(Request $request) {
        $uploadFile = session('uploadfile');
        return array("name" => $uploadFile, "url" => "/" );
    }

    public function clientCode() {

        $providers = Provider::get();
        return $providers;
        

        //return $clientCode;
    }
}
