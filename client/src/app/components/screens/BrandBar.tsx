
import { observer } from 'mobx-react-lite';
import { FC, useContext } from 'react';
import { Context } from '../../../index'
import { ProductsResponse } from '../../../types/response/StoreResponse';

import style from './../../assets/styles/standard.module.scss'


const BrandBar = observer(() => {
    const {store} =  useContext(Context)

    return <ul className='flex '>
                {store._brands.map((store:any) =>
                    <li className="w-40 p-3 mr-6 mb-3 border rounded-lg hover:bg-slightly-dark-blue hover:text-light-green cursor-pointer" >
                        {store.name}
                    </li>
                )}
        </ul> 
})

export default BrandBar;