<?php

namespace App\Http\Controllers\Api\V1\Services;

class ImageUploadService
{
    public function fileUpload($request)
    {
        $productImage = $request->file('image');      
        $imageTitle = $request->name.'_'.time().'.';
        $imageName = $imageTitle.$productImage->getClientOriginalExtension(); 
        $productImage->storeAs('product_images/', $imageName);
        $input = $request->all();
        $input['image'] = $imageName;

        return $input;
    }    
}