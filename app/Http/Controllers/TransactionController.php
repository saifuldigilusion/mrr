<?php

namespace App\Http\Controllers;

use App\User; 
use App\Transaction;
use App\TransactionDocument;
use App\Claim;
use App\ClaimDetail;
use App\ClaimException;

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

    public function result($identifier) {

        $transaction = Transaction::select('id', 'clientcode', 'filename', 'filetype', 'filesize', 'identifier','user_id', 'status', 'line_item_ok', 'line_item_ex','updated_at', 'created_at')->where('identifier', $identifier)->first();
        if($transaction) {
            if($transaction->status != "COMPLETED") {
                return $transaction;
            }

            $ta = $transaction->toArray();

            $claim = Claim::where('transaction_id', $transaction->id)->first();
            if($claim) {
                $ta["claim"] = $claim->toArray();

                $claimDetail = ClaimDetail::select('provider_code', 'invoice_number', 'billing_code', 'billing_description', 'transaction_date', 'unit_price', 'quantity', 'amount', 'discount', 'gst_code', 'gst_amount', 'mma_code', 'description')->where('transaction_id', $transaction->id)->get();
                if($claimDetail) {
                    $ta["claim"]["claim_detail"] = $claimDetail->toArray();
                }

                $claimException = ClaimException::select('content')->where('transaction_id', $transaction->id)->get();
                if($claimException) {
                    $ta["claim"]["claim_exception"] = $claimException->toArray();
                }
            }

            return $ta;
        }

        abort(404);

    }

    public function getSvg($identifier) {
        $transaction = Transaction::where('identifier', $identifier)->first();
        if($transaction) {
            $json = $transaction->jsonout;
            $svg = TransactionDocument::select('svg')->where('id', $transaction->id)->first();
            if($svg) {
                $_svg = "data:image/svg+xml;base64," . base64_encode($svg->svg);
                $o = (object) array("svg" => $_svg, "json" => $json);
                return json_encode($o);
            }
        }

        abort(404);
    }
}
