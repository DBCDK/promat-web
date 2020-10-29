/* eslint-disable no-unused-vars */
import React from 'react';
import AssignCase from './AssignCase';
// import AppReadme from './App.readme.md';
import 'bootstrap/dist/css/bootstrap.css'


export default {
  title: 'App/Admin/Anmelder',
  component: AssignCase,
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
      <AssignCase {...args} />
    </div>
  );
};

export const ValgAfAnmelder = Template.bind({});
ValgAfAnmelder.args = {};