import React, { FC, useContext, useEffect } from "react";
import  styleCatalog  from './../../assets/styles/standard.module.scss';


import TypeBar from "../screens/TypeBar";
import BrandBar from "../screens/BrandBar";
import ProductList from "../screens/ProductList";
import { observer } from "mobx-react-lite";
import { Context } from "../../..";
import { Breadcrumbs } from "@material-tailwind/react";
import { fetchBrands, fetchProduct, fetchTypes } from "../../../http/productAPI.js";

const Catalog: FC = observer(() => {
    const {store} = useContext(Context) 
    //   useEffect(()=>{
    //     //  fetchTypes().then(data => store.setTypes(data))
    //      //  fetchBrands().then(data => store.setBrands(data))
    //      fetchProduct().then(data => store.setProducts(data.toRow))
    //  }, [])
 
    return <div className="max-w-screen-xl mx-auto">
            <Breadcrumbs className="bg-wight">
                <a href="#" className="opacity-60">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                </a>
                <a href="#" className="opacity-60">
                    <span>Components</span>
                </a>
                <a href="#">Breadcrumbs</a>
            </Breadcrumbs>
            <div className="flex mx-auto w-full max-w-screen-xl  pb-6 lg:pb-8">
            <TypeBar/>
            <div><BrandBar/>
            <ProductList/></div>
        </div>
        </div>
})

export default Catalog;