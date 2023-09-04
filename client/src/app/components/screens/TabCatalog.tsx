import { observer } from 'mobx-react-lite';
import { FC, useContext, useEffect } from 'react';
import { Context } from './../../../index'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
  } from "@material-tailwind/react";

const TabCatalog = observer(() => {
    const {store} =  useContext(Context)
    return <div className="flex justify-center mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                {store._types.map((store:any) =>
                    
                        <Card className="mt-6 w-96 m-3">
                            <CardHeader color="blue-gray" className="relative h-56">
                            <img src={store.img} alt={store.name} />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                {store.name}
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <Button>Посмотреть каталог</Button>
                            </CardFooter>
                            </Card>
    
                        
              
                )}

                
        </div> 
})

export default TabCatalog;