import React from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { ButtonVariant } from 'react-bootstrap/esm/types'

interface ButtonGroupProps {
    children: React.ReactNode;
    ARIAlabel?: string;
}

export const DBCButtonGroup: React.FC<ButtonGroupProps> = (props) => (
    <ButtonGroup aria-label={props.ARIAlabel}>
        {props.children}
    </ButtonGroup>
)

interface ButtonProps {
    children: React.ReactNode;
    variant?: ButtonVariant;
    className?:string,
    onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
};

const DBCButton: React.FC<ButtonProps> = (props) => (
    <Button variant={props.variant || "primary"}
            onClick={props.onClick}>
                {props.children}</Button>
    )


export default DBCButton