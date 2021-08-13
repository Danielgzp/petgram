import React from "react";
import styled from "styled-components";

import { RenderProp } from "../containers/GetFavorites";
import { Layout } from "../components/Layout";
import { useAuthContext } from "../hooks/Context";
import { Image, Link, Container, Subtitle } from "./styles/Favs";

import miFavs from '../assets/images/mi-fav.png'




export const Favs = () => {
    const { isAuth } = useAuthContext();

    return (
        <Layout>
            <Image src={miFavs} alt="Heart" />
            <Subtitle>These are your liked post</Subtitle>
            {!isAuth ? (
                <Container>
                    <p>
                        Para ver tus fotos favoritas primero tienes que <Link to="/sesion">Iniciar Sesion</Link> 
                    </p>
                </Container>
            ) : (
                <RenderProp />
            )}
        </Layout>
    );
};
