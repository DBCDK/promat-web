import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import DBCButton from './Button'

export enum FormElementType {
    TEXT = "TEXT",
    TEXTAREA = "TEXTAREA",
    DATE = "DATE",
    NUMBER = "NUMBER",
    EMAIL = "EMAIL",
    PASSWORD = "PASSWORD",
    CHECKBOX = "CHECKBOX",
    SELECT = "SELECT"
}
const elementInputType: {[key in FormElementType]: string} = {
    [FormElementType.TEXT]:"text",
    [FormElementType.TEXTAREA]:"textarea",
    [FormElementType.DATE]:"date",
    [FormElementType.NUMBER]:"number",
    [FormElementType.SELECT]:"select",
    [FormElementType.CHECKBOX]:"checkbox",
    [FormElementType.EMAIL]:"email",
    [FormElementType.PASSWORD]:"password",
}
interface FormSelectOptions {
    label: string,
    value: string
}
interface FormElement {
    type: FormElementType;
    name: string;
    label: string;
    placeholder?:string;
    value?:string;
    options?:FormSelectOptions[]
}

declare type FormControlElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

interface FormProps {
    elements?: FormElement[];
    className?: string;
    submitLabel?: string;
    onSubmit?: (state: {}) => void;
    onChange?: (e: React.ChangeEvent<FormControlElement>) => void;
    onSelect?: (e: React.ChangeEventHandler<FormControlElement> | string) => void;
}


export default function DBCForm(props: FormProps) {

    // if onSubmit, save the form state and dump it on submitButton click
    const [state, setState] = useState(false)

    // default prop values
    const {
        onSubmit,
        onChange,
        onSelect,
        className = "",
        submitLabel = "Gem",
        elements = []
    } = props


    // Render the formElement
    const FormElement = (child : FormElement, index: number) => {

        // Wrap the element with a label
        const wrapChild = (childComp : React.ReactNode) => (
            <div key={index}>
                {child.label && (
                <Form.Label>{child.label}</Form.Label>
                )}
                {childComp}
            </div>
        )

        const updateChildValue = (e) => {
            if (onSubmit) { // Save state if onSubmit
                setState({...state, [child.name]: e.target.value})
            }
            else if (onChange) { // If onChange, pass the name and value
                onChange({[child.name]: e.target.value})
            }
            else if (onSelect) { // If onSelect, pass the event
                onSelect(e)
            }
        }

        // Match the element type
        switch (child.type) {
            
            case FormElementType.SELECT: return wrapChild(
                <Form.Control
                    as={"select"}
                    className="mr-sm-2"
                    id="inlineFormCustomSelect"
                    onChange={onChange}
                    custom>
                    {
                        child.options
                        ? child.options.map((op) => (<option key={op.value} value={op.value}>{op.label}</option>))
                        : []
                    }
                </Form.Control>
            )

            case FormElementType.CHECKBOX: return (
                <Form.Check type={"checkbox"} onChange={updateChildValue} label={child.label} />
            )

            case FormElementType.TEXTAREA: return wrapChild(
                <Form.Control as="textarea" placeholder={child.placeholder} onChange={updateChildValue}></Form.Control>
            )
    
            default: return wrapChild(
            <Form.Control type={elementInputType[child.type]}
                          placeholder={child.placeholder}
                          onChange={updateChildValue} />)
        }
    }
    
    // Loop through elements
    return (
        <Form className={className}>
            <Form.Group>
            {
                elements.map(FormElement)
            }
            {
                onSubmit && state && (
                <DBCButton variant="primary" onClick={() => onSubmit(state)}>
                    {submitLabel}
                </DBCButton>
                )
            }
            </Form.Group>

        </Form>
    )
}