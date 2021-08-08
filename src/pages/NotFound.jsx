import React from 'react'
import { Link } from '@reach/router';

export const NotFound = () => {
    return (
        <>
            <div>
                <h2>Error 404 Page Not Found</h2>
                <Link to="/">Volver al inicio</Link>
            </div>
            
        </>
    );
}
