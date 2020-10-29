/* eslint-disable no-unused-vars */
import React from 'react';
import Form, {FormElementType} from './Form';
import FormReadme from './Form.readme.md';
import 'bootstrap/dist/css/bootstrap.css'


export default {
  title: 'Components/Form',
  component: Form,
  parameters: {
    readme: {
      sidebar: FormReadme
    },
    options: {}
  }
};

const Template = (args) => {
  return (
    <div>
      <Form {...args} />
    </div>
  );
};

export const Eksempel = Template.bind({});
Eksempel.args = {
  elements: [
    {type:FormElementType.TEXT,label:"Ugekode",placeholder:"UU"},
    {type:"select",label:"Ugekode",placeholder:"UU",options:[
      {value:"1",label:"1"},
      {value:"2",label:"2"},
    ]},
    {type:FormElementType.TEXT,label:"Måned",placeholder:"MM"},
    {type:FormElementType.TEXT,label:"År",placeholder:"ÅÅÅÅ"},
  ]
};
export const Tekstfelter = Template.bind({});
Tekstfelter.args = {
  elements: [
    {type:FormElementType.TEXT,label:"Ugekode",placeholder:"UU"},
    {type:FormElementType.TEXT,label:"Dag",placeholder:"DD"},
    {type:FormElementType.TEXT,label:"Måned",placeholder:"MM"},
  ]
};
export const DatoFelter = Template.bind({});
DatoFelter.args = {
  elements: [
    {type:FormElementType.DATE,label:"Dato",placeholder:"ÅÅÅÅ"}
  ]
};
export const SelectFelter = Template.bind({});
SelectFelter.args = {
  elements: [
    {type:FormElementType.SELECT,label:"Ugekode",placeholder:"UU",options:[
      {value:"1",label:"1"},
      {value:"2",label:"2"},
    ]}
  ]
};