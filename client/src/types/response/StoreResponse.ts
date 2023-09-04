import { ICharacteristic } from "../ICharacteristic";


export interface TypesResponse {
    id: number;
    name: string;
    img:string;
    createdAt: string;
    updatedAt: string;
}

export interface BrandsResponse {
    id: number;
    name: string;
    img:string;
    createdAt: string;
    updatedAt: string;
}

export interface ProductsResponse{
    id: number;
    name: string;
    info: string;
    cost: number;
    type: string;
    quantity:number;
    brand: string;
    img:string;
    amount_in_package: number;
    number_of_servings: number;
    createdAt: string;
    updatedAt: string;
    compounds: ICharacteristic;

}

export interface characteristicsResponse{
        id: number,
        name: string,
        quantity: number,
        dimension: string,
        createdAt: string,
        updatedAt: string,
        productId: number
}
