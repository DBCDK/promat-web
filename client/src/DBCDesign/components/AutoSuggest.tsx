import React from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'
import 'react-bootstrap-typeahead/css/Typeahead.css';

interface SuggestOptions {
    id: string,
    label: string
}
interface AutoSuggestProps {
    onChange: () => {}
    options: SuggestOptions[]
    selected: string,
}

const DBCAutoSuggest: React.FC<AutoSuggestProps> = (props) => (
    <Typeahead id="dbcautosuggest" placeholder={props.placeholder} onChange={props.onChange} options={props.options} selected={props.selected} />
)


export default DBCAutoSuggest