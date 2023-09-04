import Auth from "../app/components/ui/Auth";
import style from "./../app/assets/styles/admin.module.scss"
const Authorization = () => {
    return <div className={style.wrapperAuthorization}>
        <Auth/>
    </div>;
}

export default Authorization;