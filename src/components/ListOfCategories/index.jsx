import React, { useEffect, useState } from "react";

import { Category } from "../Category";
import { List, Item } from "./styles";

export const ListOfCategories = () => {
    const [categories, setCategories] = useState([]);
    const [state, setState] = useState({
        loading: false,
        error: null,
    });

    useEffect(async function () {
        setState({ loading: true, error: null });
        try {
            const response = await fetch(
                "https://petgram-danielgzp.vercel.app/categories"
            );
            const data = await response.json();
            setCategories(data);
            setState({ loading: false, error: null });
        } catch (error) {
            console.log(error);
            setState({ loading: false, error: error });
        }
    }, []);

    if (state.loading) {
        <h2>cargando</h2>;
    }
    if (state.error) {
        <h2>Ocurrio un errorsito 😎</h2>;
    }

    return (
        <List>
            {categories.map((category) => (
                <Item key={category.id}>
                    <Category {...category} />
                    {/*Escribir Spread Operator {...category} trae todos los atributos, esto puede sustutuir la manera manual de ahcerlo asi: cover={category.cover} emoji={category.emoji}*/}
                </Item>
            ))}
        </List>
    );
};
