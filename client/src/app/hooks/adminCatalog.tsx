import React, { Component, useEffect, useState } from 'react';



const AdminCatalog = () => {
    const[name, setName] = useState('')
    const[nameDirty, setNameDirty] = useState(false)
    const[passwordDirty, setPasswordDirty] = useState(false)
    const[emailError, setEmailError] = useState('Емейл не может быть рустым')
    const[nameError, setNameError] = useState('Поле не может быть пустым')
    const[formValid, setFormValid] = useState(false)

   
    return <section className="wrapperAdminCatalog">
        
        <form>
            <legend>Добавить категорию</legend>
            <p>Категория</p>
            <input name="name" type="text" placeholder="Добавить значение..."/>
            <p>Еще какя-то хуйня </p>
            <input name="name" type="text" placeholder="Добавить значение..."/>
            <p>Еще какя-то хуйня </p>
            <input name="name" type="text" placeholder="Добавить значение..."/>
            <button disabled={!formValid} type="submit">Добавить категорию</button>
        </form>
    </section>;
}

export default AdminCatalog;