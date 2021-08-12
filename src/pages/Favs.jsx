import React from "react";
import styled from "styled-components";

import { RenderProp } from "../containers/GetFavorites";
import { Layout } from "../components/Layout";

const Image = styled.img`
    width: 90px;
    margin: 0 auto;
`
export const Favs = () => (
    <Layout title="Tus favoritos" subtitle="These are your liked post">
        <Image src="https://i.imgur.com/8py0kJS.png" alt="Heart" />
        <RenderProp />
    </Layout>
);
