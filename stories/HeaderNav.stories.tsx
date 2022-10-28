import React from "react";

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { HeaderNav } from '../src/components/HeaderNav';

export default {
    title: 'Components/HeaderNav',
    component: HeaderNav
} as ComponentMeta<typeof HeaderNav>

const Template: ComponentStory<typeof HeaderNav> = (props) => <HeaderNav {...props}/>;

export const Primary = Template.bind({});