import React from 'react';

import Navbar from "../components/Navbar"

export default {
  title: 'UK Navbar',
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
