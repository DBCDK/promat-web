import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DBCButton, { DBCButtonGroup } from '../DBCDesign/components/Button';
import DBCForm, {FormElementType} from '../DBCDesign/components/Form';
import DBCTable from '../DBCDesign/components/Table';
import PromatProvider, {SearchRecords} from './PromatProvider';


export default function SelectRecord(props) {
  
    const [query, setQuery] = useState(false);
    const [results, setResults] = useState(props.results);
    const [materialeSource, setMaterialeSource] = useState(false);

    const selectMaterialSource = (row) => {
        if (materialeSource) {
            setMaterialeSource([...materialeSource,row])
        }
        else {
            setMaterialeSource([row])
        }
    }
  
    if (props.identifier) {
      if (props.show === "reviewer") {
        return (
        <PromatProvider resource="reviewers">
          <SelectReviewer {...props} />
        </PromatProvider>
        )
      }
      return <CreateCaseWithMaterial {...props} />
    }
  
    return (
      <Container>
        <Row>
          
          <Col sm={6}>
            <h1>Valg af post</h1>
              <DBCForm elements={[
                {type:"text",name:"identifier",label:"Faustnr. / ISBN / Stregkode"}
              ]} submitLabel={"Søg efter materiale"} onSubmit={(formData) => {
                
                setResults(false) // reset results
  
                const queryId = formData && formData.identifier
                SearchRecords(queryId).then((rsp) => setResults(rsp.data)).catch((err) => {
                    setResults(-1)
                })
              
              }}></DBCForm>
          </Col>
          
          <Col sm={6} className="align-right">
            <DBCForm elements={[
                {type:"text", name:"author",label:"Forfatter", placeholder:"Hovedforfatter eller medforfattere"}, 
                {type:"text", name:"title", label:"Titel", placeholder:"Hele titlen eller dele af den"}
              ]} onSubmit={(formData) => {}}></DBCForm>
          </Col>
  
          {
            results === -1 ? <Col><h2>Ingen resultater</h2></Col> : results && (
              <Col>
  
              <DBCTable rowCheckbox={true} onClickRow={(row) => selectMaterialSource(row)} header={[
                {label:"Titel",name:"title"},
                {label:"Forfatter",name:"author"},
                {label:"Faustnr",name:"faust"},
                {label:"Materialetype",name:"type"},
                {label:"Status",name:"status"},
              ]} data={results}></DBCTable>
  
              <p>Vælg de poster, som skal indgå i sagen</p>

                <pre>{JSON.stringify(materialeSource,null,2)}</pre>

              {
                  materialeSource && (
                      <Link to={"/create-case/"+"28692765"}><DBCButton>Start oprettelse af sag</DBCButton></Link>
                  )
              }
            
              </Col>
            )
          }
        </Row>
      </Container>
    )
  }