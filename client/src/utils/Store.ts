
import { makeAutoObservable, observable } from "mobx"
import { $host } from "../http";
import { BrandsResponse, TypesResponse, ProductsResponse } from "../types/response/StoreResponse";

export default class Store{
    _types = [] as Array<TypesResponse>;
    _brands = [] as Array<BrandsResponse> 
    _products = [] as Array<ProductsResponse>;

    constructor(){
        this.resTypes()
        this.resBrands()
        this.resProduct()
        makeAutoObservable(this)
    }

    setTypes(types:Array<TypesResponse>){
        this._types = types
    }
  
    async resTypes(){
        const {data} = await $host.get('api/types', {})
        this.setTypes(data)
    }
    
    setBrands(brands:Array<BrandsResponse>){
        this._brands = brands
    }
  
    async resBrands(){
        const {data} = await $host.get('api/brands', {})
        this.setBrands(data)
    }

    setProducts(products:Array<ProductsResponse>){
        this._products = products
    }
  
    async resProduct(){
        const {data} = await $host.get('api/product/all', {})
        this.setProducts(data)
    }
    

    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get products(){
        return this._products
    }

}