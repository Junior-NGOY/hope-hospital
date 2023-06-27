<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStructureRequest;
use App\Http\Resources\StructureCollection;
use App\Http\Resources\StructureResource;
use App\Models\Structure;
use Illuminate\Http\Request;

class StructureController extends Controller
{
    public function index(){
        {
            //return Structure::paginate(10);
            return new StructureCollection(Structure::orderBy('id', 'desc')->paginate(5));
        }
    }
    public function destroy(Structure $structure){
        $structure->delete();
        return response()->json('Structure Deleted');
    }
    public function store(StoreStructureRequest $request){
        Structure::create($request->validated());
        return response()->json('Structure Created');
    }
    public function update(StoreStructureRequest $request, Structure $structure){
        $structure->update($request->validated());
        return response()->json('Structure Updated');
    }
    public function show(Structure $structure){
        return new StructureResource($structure);
    }
}
