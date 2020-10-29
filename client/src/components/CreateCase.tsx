import '../App.css';

import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DBCButton, { DBCButtonGroup } from '../DBCDesign/components/Button';
import DBCForm, {FormElementType} from '../DBCDesign/components/Form';
import AssignCase from './AssignCase'

function SetDeadline(props) {
return (
    <div className="set-deadline column-count-4">
    <DBCForm onSelect={props.onSelect} elements={[
        // {type:"text",label:"Dag",placeholder:"DD"},
        // {type:"text",label:"Måned",placeholder:"MM"},
        // {type:"text",label:"År",placeholder:"ÅÅÅÅ"},
        {type:FormElementType.DATE},
    ]} />
</div>
)
}


const casesContainTypes = ["BKM vurdering","Metakompas","Emneord","Bibliografisk note","Alder","Niveau / målgruppe"]
function CaseContains(props) {
    return (
        <DBCForm onChange={props.onSelect} elements={
            casesContainTypes.map((el, key) => ({
                type:FormElementType.CHECKBOX,
                name:el,
                label:el
            }))} />
    )
}

const billingCodes = ["0-99 sider","100-199 sider","200-499 sider","500+ sider","BKM-vurdering","Note uden anmeldese"]
function BillingCodes(props) {
    return (
        <DBCButtonGroup>
        {
            billingCodes.map((code, key) => (
            <DBCButton key={key} variant={props.selected === code ? "primary" : "secondary"} onClick={() => props.onSelect(code)}>{code}</DBCButton>
            ))
        }
        </DBCButtonGroup>
    )
}

function MaterialMetadata(props) {
    const metafields = [
      {
        label:"Titel",
        name:"title",
        value:"Dokter Kold og eventyr"
      },
      {
        label:"Serie",
        name:"series",
        value:"–"
      },
      {
        label:"Forfatter",
        name:"author",
        value:"–"
      },
      {
        label:"Forlag",
        name:"publisher",
        value:"–"
      },
      {
        label:"Materialetype",
        name:"mediaType",
        value:"–"
      },
      {
        label:"ISBN",
        name:"isbn",
        value:"–"
      },
      {
        label:"Faustnr",
        name:"faust",
        value:"–"
      },
      {
        label:"Ugekode",
        name:"weekCode",
        value:"–"
      },
      {
        label:"Status",
        name:"status",
        value:"–"
      },
      {
        label:"Tildelt dato",
        name:"assignedDate",
        value:"–"
      },
      {
        label:"Sideantal",
        name:"pageCount",
        value:"–"
      },
      {
        label:"Redaktør",
        name:"editor",
        value:"–"
      },
      {
        label:"Anmelder",
        name:"reviewer",
        value:"–"
      }
    ].map((field) => {
      if (field && props.record && props.record[field.name]) {
        return ({...field, value:props.record[field.name]})
      }
      else {
        return field
      }
    })
    return (
      <dl className="row padding-20">
        {
          metafields.map((field,i) => (
            <>
              <dt className="col-sm-3">{field.label}</dt>
              <dd className="col-sm-3">{field.value}</dd>
            </>
          ))
        }
      </dl>
    )
  }

  export default function CreateCase(props) {

    const [newCase, setNewCase] = useState({})
  
    return (
      <Container>
      <Row>
        
        <Col sm={12}>
          <h1>Opret sag – Anmelder og afregning</h1>
        </Col>
        
        
        <Col sm={12} className="bg-light-grey">
          <MaterialMetadata record={props.record} />
        </Col>
  
        <Col sm={12} className="padding-20">
          <h2>Afleveringsfrist</h2>
          <SetDeadline selected={newCase.deadline} onSelect={(e) => setNewCase({...newCase, deadline:e.target.value})} />
        </Col>
  
        <Col sm={12} className="bg-light-grey padding-20">
          <h2>Anmelder</h2>
          <AssignCase selected={newCase.reviewer} onSelect={(reviewer) => setNewCase({...newCase, reviewer})} />
        </Col>
  
  
        <Col sm={12} className="padding-20">
          <h2>Anmeldelsens indhold</h2>
          <CaseContains selected={newCase.tasks} onSelect={(tasks) => {
            console.log(tasks)
            if (newCase.tasks && newCase.tasks.find((task) => task === tasks)) {
              
            }
            else if (newCase.tasks) {
              setNewCase({...newCase, tasks:[...newCase.tasks, tasks]})
            }
            else {
              setNewCase({...newCase, tasks:[tasks]})
            }
          }} />
        </Col>
  
        <Col sm={12} className="bg-light-grey padding-20">
          <h2>Betalingskoder</h2>
          <BillingCodes selected={newCase.paycode} onSelect={(paycode) => setNewCase({...newCase, paycode})} />
        </Col>
  
        {/* <Col sm={12} className="padding-20">
          <h2>Besked</h2>
          <CaseMessage messsage={newCase.message} onSelect={(message) => setNewCase({...newCase, message})} />
        </Col> */}

      <pre>{JSON.stringify({record:props.record, ...newCase},null,2)}</pre>
  
        <Col sm={12}>
          <DBCButton onClick={() => props.onSubmit(newCase)}>Opret sag</DBCButton>
        </Col>
       
      
      </Row>
    </Container>
    )
  }