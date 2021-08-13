import React from "react";

import { useInputValue } from "../../hooks/useInputValue";
import { Error, Form, Input, Title, Spinner, Link, Sesion } from "./styles";
import { SubmitButton } from "../SubmitButton";

export const UserForm = ({ disabled, error, onSubmit, title, buttonTitle, path = "!#", name = "", register = "" }) => {
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
                    <SubmitButton disabled={disabled}>
                        <Spinner></Spinner>
                    </SubmitButton>
                ) : (
                    <SubmitButton disabled={disabled}>
                        {buttonTitle}
                    </SubmitButton>
                )}
                {/* <Button disabled={disabled}>{title}</Button> */}
            </Form>
            {error && <Error>{error}</Error>}
            <Sesion>
                {name}
                <Link to={path}>{register}</Link>
            </Sesion>
        </>
    );
};
