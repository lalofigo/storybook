import { Avatar } from "./Avatar";
import styles from "./Avatar.module.css";
import { options } from "./constants";
import {  getTemplate, getListTemplate, getOptionsArgTypes } from "@/helpers/storybook";

const Template = getTemplate(Avatar, styles);
const ListTemplate = getListTemplate(Avatar, styles);

export default {
    title: "Avatar",
    component: Avatar,
    args : {
        src:"https://picsum.photos/id/1027/200/200",
    },
    argTypes: {
        size: getOptionsArgTypes(options.sizes),
    },
    parameters: {
        __sb: {fd: "row"},
    }
}

export const Default = Template.bind({});

export const Sizes = ListTemplate.bind({});
Sizes.args = {
    items: options.sizes.map(size => ({ size })),
}
