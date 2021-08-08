import React from "react";

import { RenderProp } from "../containers/GetFavorites";

export const Favs = () => (
    <Layout
        title="Tus favoritos"
        subtitle="Aquí puedes encontrar tus favoritos"
    >
        <RenderProp />
    </Layout>
);
