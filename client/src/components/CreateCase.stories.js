/* eslint-disable no-unused-vars */
import React from 'react';
import CreateCase from './CreateCase';
// import AppReadme from './App.readme.md';
import 'bootstrap/dist/css/bootstrap.css'
import mockRecords from '../../../mockdata/records'

export default {
  title: 'App/Admin/Sag',
  component: CreateCase,
  parameters: {
    readme: {
    //   sidebar: AppReadme
    },
    options: {}
  }
};

const Template = (args) => {
  return (
    <div>
      <CreateCase {...args} />
    </div>
  );
};


export const OpretSag = Template.bind({});
OpretSag.args = {
  identifier:"1234",
  record: mockRecords.data[0]
};

