/* eslint-disable no-unused-vars */
import React from 'react';
import SelectRecord from './SelectRecord';
// import AppReadme from './App.readme.md';
import 'bootstrap/dist/css/bootstrap.css'


export default {
  title: 'App/Admin/Post',
  component: SelectRecord,
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
      <SelectRecord {...args} />
    </div>
  );
};

export const ValgAfPost = Template.bind({});
ValgAfPost.args = {};