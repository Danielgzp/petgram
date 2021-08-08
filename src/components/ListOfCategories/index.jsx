import React, { useEffect, useState } from "react";

import { Category } from "../Category";
import { List, Item } from "./styles";

function useCategoriesData() {
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

    return { categories, state };
}

const ListOfCategoriesComponent = () => {
    const { categories, state } = useCategoriesData();
    const [showFixed, setShowFixed] = useState(false);

    useEffect(
        function () {
            const onScroll = (e) => {
                const newShowFixed = window.scrollY > 200;
                showFixed !== newShowFixed && setShowFixed(newShowFixed);
            };

            document.addEventListener("scroll", onScroll);

            return () => document.removeEventListener("scroll", onScroll);
        },
        [state.fixed]
    );

    const renderList = (fixed) => (
        <List fixed={fixed}>
            {state.loading
                ? [1, 2, 3, 4, 5, 6].map((category) => (
                      <Item>
                          <Category
                              cover="https://i.imgur.com/w5MYG2v.gif"
                              emoji="Loading..."
                              path={`/pet/${category.id}`}
                          />
                          {/*Escribir Spread Operator {...category} trae todos los atributos, esto puede sustutuir la manera manual de ahcerlo asi: cover={category.cover} emoji={category.emoji}*/}
                      </Item>
                  ))
                : categories.map((category) => (
                      <Item key={category.id}>
                          <Category
                              Category
                              {...category}
                              path={`/pet/${category.id}`}
                          />
                          {/*Escribir Spread Operator {...category} trae todos los atributos, esto puede sustutuir la manera manual de ahcerlo asi: cover={category.cover} emoji={category.emoji}*/}
                      </Item>
                  ))}
        </List>
    );

    return (
        <>
            {renderList()}
            {state.fixed && renderList(true)}
        </>
    );
};

export const ListOfCategories = React.memo(ListOfCategoriesComponent);
