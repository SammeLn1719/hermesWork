import { Link, Route, Router, Routes } from "react-router-dom";
import AdminCatalog from "../app/hooks/adminCatalog";
import style  from "./../app/assets/styles/standard.module.scss";
import admin  from "./../app/assets/styles/admin.module.scss";
import { HiArrowCircleRight } from 'react-icons/hi';

const Admin = () => {
    let activWindow = 'AdminCatalog'
    try {
        
    } catch (error) {
        
    }
    return <section className={admin.wrapperAdmin}>
        <ul className={admin.AdminMenuWrapper}>
            <li className={admin.AdminMenuItem}>Каталог<span ><HiArrowCircleRight/></span></li>
            <li className={admin.AdminMenuItem}>Отчет<span><HiArrowCircleRight/></span></li>
            <li className={admin.AdminMenuItem}>Импорт<span><HiArrowCircleRight/></span></li>
            <li className={admin.AdminMenuItem}>Настройка<span><HiArrowCircleRight/></span></li>
        </ul>
        
        <div className={admin.AdminConWrapper}>
            <div className={admin.NavAdminWrapper}>Каталог</div>
            <hr />
                <AdminCatalog/>
            
            
        </div>
        
    </section>;
}

export default Admin;