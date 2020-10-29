/* eslint-disable no-unused-vars */
import React from 'react';
import AutoSuggest from './AutoSuggest';
import 'bootstrap/dist/css/bootstrap.css'


export default {
  title: 'Components/AutoSuggest',
  component: AutoSuggest,
  parameters: {
    readme: {
    //   sidebar: AutoSuggestReadme
    },
    options: {}
  }
};

const Template = (args) => {
  return (
    <div style={{ width: '30%' }}>
      <AutoSuggest {...args} />
    </div>
  );
};

export const Simpel = Template.bind({});
Simpel.args = {
  placeholder:"Søg efter...",
  options: [
      {id:"1",label:"Isak Dinesen"},
      {id:"12",label:"Vsak Dinesen"},
      {id:"13",label:"Vasak Dinesen"},
      {id:"14",label:"Losak Dinesen"},
      {id:"15",label:"Misak Dinesen"},
  ]
};