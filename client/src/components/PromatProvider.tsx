import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

// const resources = {
//     cases:`http://localhost:3001/cases`,
//     reviewers:`http://localhost:3001/reviewers`,
// }

import MOCK_reviewers from '../../../mockdata/reviewers'
import MOCK_records from '../../../mockdata/records'
import MOCK_subjectAreas from '../../../mockdata/subjectAreas'

function mockFetch(resource) {
    switch (resource) {
        case "records": return MOCK_records
        case "reviewers": return MOCK_reviewers
        case "optionSubjectAreas": return MOCK_subjectAreas
    }
}

export function SearchRecords(query) {
    return new Promise((resolve,reject) => {
        resolve(mockFetch("records"))
    })
    // if ( ! query) return
    // const url = "http://localhost:3001/records/?id="+encodeURIComponent(query)
    // return fetch(url).then((rsp) => rsp.json())
  }

export default class PromatProvider extends React.Component {
    constructor() {
        super()
        this.fetch = async () => {

            const {resource} = this.props
            
            // INJECT MOCKDATA
            console.log(mockFetch(resource))
            this.setState({[this.props.resource]:mockFetch(resource)})
            // return

            // const rsp = await fetch(resources[resource])
            // const data = await rsp.json()
            // this.setState({[this.props.resource]:data.data})
        }
    }
    componentDidMount() {
        if (this.props.resource) {
            this.fetch()
        }
    }
    render() {
        
        const RenderChild = (withState) => React.cloneElement(this.props.children, {
            ...this.props,
            [this.props.resource]:withState})
        
        if ( ! this.state || (this.state && ! this.state[this.props.resource])) {
            return (
                <div>
                <Spinner animation="border" role="status">
                <span className="sr-only">Henter...</span>
                </Spinner>
                {this.props.loading && this.props.loading()}
                </div>
            ) 
        }
        switch (this.props.resource) {
            case "reviewers": return RenderChild(this.state[this.props.resource].data)
            default: return RenderChild(this.state[this.props.resource])
        }

    }
}