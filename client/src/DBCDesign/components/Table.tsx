import React, {useState} from 'react'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import {Row, Col} from 'react-bootstrap'

interface TableHeader {
    label: string;
    name: string;
}

interface TableProps {
    data: Object[];
    header: TableHeader[];
    onClickRow: (row: any) => void;
    searchable?: boolean;
    searchableCol?: string;
    rowCheckbox?: boolean;
    rowCheckboxAs?: string;
}

export default function DBCTable(props : TableProps) {

    const [queryTable, setQueryTable] = useState<any>(false)

    const {
        data = [],
        header = [],
        searchable = false,
        searchableCol = false,
        rowCheckbox = false,
        rowCheckboxAs = "checkbox",
        onClickRow = (row: any) => {}
    } = props

    const filterData = (child : any) => (searchableCol && child[searchableCol])
        ? child[searchableCol].toLowerCase().includes(queryTable)
        : false

    const tableData = queryTable
        ? data.filter(filterData)
        : data

    
    return (
        <Row>
            <Col sm={8}></Col>
            
            {
                searchable && (
                    <Col sm={4}>
                        <Form.Control type="text" placeholder="Filtrer på anmeldere" onChange={(e) => setQueryTable(e.target.value.toLowerCase())} />
                    </Col>
                )
            }
            
            <Col sm={12}>
            <Table responsive>
            <thead>
                <tr>
                {header.map((el, index) => (
                    <th key={index} className="font-bold">{el.label}</th>
                ))}
                </tr>
            </thead>
            <tbody>

            {tableData.map((el,i) => {
                return (
                    <tr key={i} {...onClickRow ? ({onClick:() => onClickRow(el)}) : {}}>
                        {header.reduce((sorted, key) => {
                            sorted.push(el[key.name])
                            return sorted
                        },[]).map((e, index) =>  index === 0 && rowCheckbox ? (
                            <th key={index}><Form.Check type={rowCheckboxAs} onChange={() => props.onClickRow(el)} label={e} /></th>
                        ) :  (
                            <th key={index}>{e}</th>
                        ))}
                    </tr>
                )
            })}

            </tbody>
            </Table>
            </Col>
        </Row>
    )
}