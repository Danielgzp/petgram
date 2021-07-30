import React from "react";

import { Anchor, Image } from "../Category/styles";

const DEFAULT_IMAGE = "https://i.imgur.com/w5MYG2v.gif";

export const Loader = ({ cover = DEFAULT_IMAGE, emoji ="?" }) => (
    <Anchor href="#">
        <Image src={cover} />
        {emoji}
    </Anchor>
);
