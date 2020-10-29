import React, { useState } from 'react';
import DBCTable from '../DBCDesign/components/Table'
import DBCButton, {DBCButtonGroup} from '../DBCDesign/components/Button'
import DBCModal from '../DBCDesign/components/Modal'
import DBCForm, {FormElementType} from '../DBCDesign/components/Form'
import DBCAutoSuggest from '../DBCDesign/components/AutoSuggest'
import {Container, Row, Col} from 'react-bootstrap'
import PromatProvider from './PromatProvider';

interface SelectReviewerProps {
    reviewers: []
    onSelect: (reviewer: any) => {}
}

function PickSubjectArea(props) {
  return (
    <DBCForm onChange={props.onChange} elements={[
      {
        type:FormElementType.SELECT,
        label:"Emne",
        name:"subject",
        placeholder:"Søg eller vælg emne",
        options:Object.keys(props.optionSubjectAreas).map((key) => ({
          value: key,
          label: props.optionSubjectAreas[key]
        }))
      }
  ]}></DBCForm>
  )
}


function FindReviewer(props : SelectReviewerProps) {
    
    // selecting the reviewer
    const [selectedReviewer, setSelectedReviewer] = useState<any>({})
    
    // Builing the query
    const [queryReviewers, setReviewerQuery] = useState<any>({})

    const {
        onSelect,
    } = props


    const buildReviewerQuery = (filterKey : string, filterValue : string) => {
      if (queryReviewers[filterKey] && queryReviewers[filterKey] === filterValue) {
        setReviewerQuery(Object.keys(queryReviewers).reduce((obj : any, prop) => {
          if (prop !== filterKey) {
            obj[filterKey] = queryReviewers[filterKey]
          }
          return obj
        },{}))
      }
      else {
        setReviewerQuery({...queryReviewers, [filterKey]:filterValue})
      }
    }

    const removeFromReviewerQuery = (filterKey: string) => {
      setReviewerQuery(Object.keys(queryReviewers).reduce((obj : any, prop) => {
        if (prop !== filterKey) {
          obj[filterKey] = queryReviewers[filterKey]
        }
        return obj
      },{}))
    }

    return (  
      <Container>
        <Row>
          
          <Col sm={12}>
            <h1>Anmelder</h1>
          </Col>
  
          <Col sm={6}>
            <p>Vælg område</p>
            <DBCButtonGroup>
              <DBCButton onClick={() => buildReviewerQuery("area","adult")}>Voksen</DBCButton>
              <DBCButton onClick={() => buildReviewerQuery("area","children-school")}>Børn / skole</DBCButton>
              <DBCButton onClick={() => buildReviewerQuery("area","adult-kids")}>Voksen og børn</DBCButton>
            </DBCButtonGroup>
          </Col>
  
          <Col sm={6}>
            <PromatProvider resource="optionSubjectAreas">
              <PickSubjectArea onChange={(e) => buildReviewerQuery("subject",e.target.value)} />
            </PromatProvider>
          </Col>
  
          <Col sm={12}>
            <div className="create-case-reviewer-query bg-light-grey padding-20">
              {
                queryReviewers && Object.keys(queryReviewers).map((queryKey,i) => (
                <DBCButton className="margin-right-10" key={i} onClick={() => removeFromReviewerQuery(queryKey)}>{queryReviewers[queryKey]} &times;</DBCButton>
                ))
              }
            </div>
          </Col>
  
          <Col sm={12}>
            <DBCForm className="inline-form-elements" onChange={(e) => buildReviewerQuery("a","b")} elements={[
              {type:FormElementType.CHECKBOX, name:"modtager-expres",label:"Modtager ekspres"},
              {type:FormElementType.CHECKBOX, name:"modtager-ebooks",label:"Modtager ebøger"},
              {type:FormElementType.CHECKBOX, name:"modtager-bkm",label:"Modtager BKM"},
              {type:FormElementType.CHECKBOX, name:"show-ferie",label:"Vis anmeldere på ferie"},
              {type:FormElementType.CHECKBOX, name:"show-exceeded-quote",label:"Vis anmeldere med max kvote"},
            ]}></DBCForm>
          </Col>
  
          <Col>
          <pre>{JSON.stringify(queryReviewers)}</pre>
          </Col>
  
          <Col sm={12}>
            <DBCTable searchable={true} searchableCol={"reviewer"} onClickRow={(row) => onSelect(row)} header={[
              {name:"reviewer",label:"Anmelder"},
              {name:"quote",label:"Kvote"},
              {name:"ebooks",label:"Ebøger"},
              {name:"express",label:"Ekspres"},
              {name:"bkm",label:"BKM"},
              {name:"notes",label:"Noter"},
              {name:"profile",label:"Se profil"},
            ]} data={props.reviewers} />
          </Col>
  
          {/* <Col>
            <DBCButton onClick={() => onSelect(selectedReviewer)}>Vælg anmelder</DBCButton>
          </Col> */}
        
        </Row>
      </Container>
    )
  }


  function SelectReviewer(props) {
    return (
      <DBCAutoSuggest placeholder="Søg efter anmelder"  onChange={props.onSelect} options={props.reviewers.map((k) => ({id:k.id,label:k.reviewer}))} />
    )
  }


interface SelectedAssignee {
    name: string
}
interface AssignCaseProps {
    selected?: SelectedAssignee;
    onSelect: (reviewer : boolean | string) => {}
}

export default function AssignCase(props : AssignCaseProps) {
    const [show, setShow] = useState(false);

    // dev hook
    const [assigned, setAssigned] = useState(false);


    const {
      selected,
      onSelect
    } = {
      selected:assigned,
      onSelect:setAssigned,
      ...props
    }

  if (selected) {
    return (
      <div>
        <p>{selected.reviewer}</p>
        <DBCButton onClick={() => onSelect(false)}>Vælg anden anmelder</DBCButton>
      </div>
    )
  }
  else if ( ! show) {
    return (
      <Row>
        <Col sm={6}>
        <PromatProvider resource="reviewers" asProp="options">
          <SelectReviewer onSelect={onSelect} />
        </PromatProvider>
        </Col>
        <Col sm={6}>
          <DBCButton className="margin-bottom-20" onClick={() => setShow(true)}>Find anmelder</DBCButton>
        </Col>
      </Row>
    )
  }

  return (
    <DBCModal title="Anmelder" size="xl" onClose={() => setShow(false)}>
      <PromatProvider resource="reviewers">
        <FindReviewer onSelect={(reviewer) => onSelect(reviewer)} />
      </PromatProvider>
    </DBCModal>
  )
}