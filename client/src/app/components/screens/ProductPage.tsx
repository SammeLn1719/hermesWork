import React, { Component, useContext, useEffect, useState } from 'react';

import {fetchOneProduct, fetchСharacteristics} from './../../../http/productAPI' 
import { useParams } from 'react-router-dom';
import { characteristicsResponse, ProductsResponse } from '../../../types/response/StoreResponse';
import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import { ButtonGroup, Button } from "@material-tailwind/react";
const ProductPage = () => {
    const [product, setProduct] = useState<Array<ProductsResponse>>()
    const [characteristics, setСharacteristics] = useState<Array<characteristicsResponse>>()
    const {id} = useParams()
    console.log(characteristics)
    useEffect(() => {
            fetchOneProduct(id).then(data => setProduct(data))
            fetchСharacteristics(id).then(data => setСharacteristics(data))
    }, [])
    return <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div>{product?.map((prod:any)=>
                        <div className="flex ">
                            <div className="flex w-2/3 h-96 justify-center items-center border rounded-lg"> <Carousel
                            className="rounded-xl"
                            prevArrow={({ handlePrev }) => (
                                <IconButton
                                variant="text"
                                color="white"
                                size="lg"
                                onClick={handlePrev}
                                className="!absolute top-2/4 -translate-y-2/4 left-4"
                                >
                                <ArrowLeftIcon strokeWidth={2} className="w-6 h-6" />
                                </IconButton>
                            )}
                            nextArrow={({ handleNext }) => (
                                <IconButton
                                variant="text"
                                color="white"
                                size="lg"
                                onClick={handleNext}
                                className="!absolute top-2/4 -translate-y-2/4 !right-4"
                                >
                                <ArrowRightIcon strokeWidth={2} className="w-6 h-6" />
                                </IconButton>
                            )}
                            >
                            <img
                                src={prod.img}
                                alt="image 1"
                                className=" mx-auto object-cover"
                            />
                            <img
                                src={prod.img}
                                alt="image 2"
                                className="h-full w-full object-cover"
                            />
                            <img
                                src={prod.img}
                                alt="image 3"
                                className="h-full w-full object-cover"
                            />
                            </Carousel></div>
                            
                            <div className="flex  items-center border rounded-lg">
                                
                                <div className='w-full'>
                                <p className='text-2xl pl-5'>Состав:</p>
                                    {characteristics?.map((compounds:any)=>
                                    <div className='flex w-full'><p className='w-1/2 pl-5'>{compounds.name}:</p><p className='w-1/2 pl-5'>{compounds.quantity} {compounds.dimension}</p> </div>
                                    )}
                                </div>
                            </div>
                            <div className=" w-96 h-96 justify-center items-center border rounded-lg">
                                <span className="text-2xl">Цена: {prod.cost} руб</span>
                                <ButtonGroup >
                                    <Button className='bg-slightly-dark-blue text-light-green'>+</Button>
                                    <div className='py-3 px-6 '>0</div>
                                    <Button className='bg-slightly-dark-blue text-light-green'>-</Button>
                                    <Button className='bg-slightly-dark-blue text-light-green'>Купить</Button>
                                </ButtonGroup>
                            </div>
                        </div>     
                    )}</div>
                    
    </div>;
}

export default ProductPage;