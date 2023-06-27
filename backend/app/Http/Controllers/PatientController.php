<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePatientRequest;
use App\Http\Resources\PatientCollection;
use App\Http\Resources\PatientResource;
use App\Models\Patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    public function index(){
       
          //  return new PatientCollection(Patient::orderBy('id', 'desc')->paginate(5));
          return Patient::orderBy('id', 'desc')->paginate(10);
         
    }
    public function destroy(Patient $patient){
        $patient->delete();
        return response()->json('Patient Deleted');
    }
    public function store(StorePatientRequest $request){
        Patient::create($request->validated());
        return response()->json('Patient Created');
    }
    public function update(StorePatientRequest $request, Patient $patient){
        $patient->update($request->validated());
        return response()->json('Patient Updated');
    }
    public function show(Patient $patient){
        return new PatientResource($patient);
        //return response()->json([
        //    'patient'=>$patient
        //]);
    }
}
