import React from "react";

import { useInputValue } from "../../hooks/useInputValue";
import { Error, Form, Input, Button, Title, Spinner } from "./styles";

export const UserForm = ({ disabled, error, onSubmit, title }) => {
    const email = useInputValue("");
    const password = useInputValue("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({
            email: email.value,
            password: password.value,
        });
    };

    return (
        <>
            <Form disabled={disabled} onSubmit={handleSubmit}>
                <Title>{title}</Title>
                <Input disabled={disabled} placeholder="Email" {...email} />
                {/*Es lo mismo <input placeholder="Email" value={email.value} onChange={email.onChange} required />  */}
                <Input
                    disabled={disabled}
                    placeholder="Password"
                    type="password"
                    {...password}
                />
                {disabled ? (
                    <Button disabled={disabled}>
                        <Spinner></Spinner>
                    </Button>
                ) : (
                    <Button disabled={disabled}>{title}</Button>
                )}
                {/* <Button disabled={disabled}>{title}</Button> */}
            </Form>
            {error && <Error>{error}</Error>}
        </>
    );
};
