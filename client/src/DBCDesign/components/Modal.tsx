import React from 'react'
import Modal from 'react-bootstrap/Modal'
import DBCButton from './Button'


interface ModalProps {
    title: string,
    children: React.ReactNode;
    size?: 'sm' | 'lg' | 'xl';
    onClose: () => void
}

export default function DBCModal(props : ModalProps) {
    
    const {
        onClose,
        size = "lg",
        title,
        children
    } = props

    return (
        <Modal show={true} onHide={onClose} size={size}>
            <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            <Modal.Footer>
            <DBCButton variant="secondary" onClick={onClose}>
                Luk
            </DBCButton>
            </Modal.Footer>
        </Modal>
    )
}