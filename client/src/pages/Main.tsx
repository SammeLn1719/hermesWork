import { FC, useContext } from "react";
import { Context } from "..";
import Header from "../app/components/layout/Header/Header";

import { ProductsResponse } from '../../src/types/response/StoreResponse';
import { observer } from "mobx-react-lite";
import TabCatalog from "../app/components/screens/TabCatalog";
import BrandBar from "../app/components/screens/BrandBar";
import BrandSlider from "../app/components/screens/BrandSlider";
const Main = observer(() => {
    
    return <section > 
      <Header/>
      <TabCatalog/>
      <BrandSlider/>
    </section>;
})

export default Main;