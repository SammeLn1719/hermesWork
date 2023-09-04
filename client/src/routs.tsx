// import Basket from "./app/components/screens/Basket"
import ProductPage from "./app/components/screens/ProductPage"
import Catalog from "./app/components/ui/Catalog"
import { ADMIN_ROUTER, BASKET_ROUTE, CATALOG_ROUTE, LOGIN_ROUTER, PRODUCT_ROUTER, REGISTRATION_ROUTER, SHOP_ROUTER } from "./utils/consts"
import Admin from "./pages/Admin"
import Authorization from "./pages/Authorization"
import Main from "./pages/Main"

export const  authRouts = [
    {
        path: ADMIN_ROUTER,
        Component: Admin
    },
    // {
    //     path: BASKET_ROUTE,
    //     Component: Basket
    // },
]

export const publicRouts = [
    {
        path: SHOP_ROUTER,
        Component: Main

    },
    {
        path:LOGIN_ROUTER,
        Component: Authorization
    },
    {
        path: REGISTRATION_ROUTER,
        Component: Authorization
    },
    {
        path: CATALOG_ROUTE,
        Component: Catalog
    },
    {
        path: PRODUCT_ROUTER + '/:id',
        Component: ProductPage
    },
]