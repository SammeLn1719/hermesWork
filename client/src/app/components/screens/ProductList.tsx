
import { log } from 'console';
import { observer } from 'mobx-react-lite';
import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../../index'
import { ProductsResponse } from '../../../types/response/StoreResponse';
import { PRODUCT_ROUTER } from '../../../utils/consts';
import {BsBasket2Fill} from 'react-icons/bs'

const ProductList = observer(() => {
    
    const store = useContext(Context)
 
    const navigate = useNavigate()
    return <div className="grid grid-cols-3 gap-2"  >
                 {store.store._products.map((store:ProductsResponse) =>
                  <div className="flex rounded-lg shadow-lg scale-100 w-full h-auto border flex-col cursor-pointer" key={store.id} onClick={()=> navigate(PRODUCT_ROUTER + '/' + store.id)}>
                    <div className="flex w-full h-56 justify-center items-center border-b-2 "><img className="max-w-48 max-h-48"  src={store.img} alt={store.name} /></div>
                    <span className="text-center">{store.info}</span>
                      <div className='flex'>
                        <div className="w-2/3 flex flex-col ml-5">
                          <span>{store.type}</span>
                          <span>Цена: {store.cost} руб</span>
                        </div>
                      <div className="flex w-1/3 flex-row-reverse pr-5 pt-5">
                        <button className="rounded-full flex justify-center items-center bg-gray-700 w-8 h-8 "><BsBasket2Fill className='fill-white'/></button>
                      </div>
                    </div>
                  </div>
              )}      
        </div>
})

export default ProductList;