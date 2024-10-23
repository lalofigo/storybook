import { getListTemplate, getOptionsArgTypes, getTemplate } from "../../helpers/storybook";
import {Card} from "./Card";
import styles from "./Card.module.css"
import { options } from "./constants";

const Template = getTemplate(Card, styles);
const ListTemplate = getListTemplate(Card, styles);

export default {
    title: "Card",
    component: Card,
    args : {
        children: "Im a card",
    },
    argTypes: {
        color: getOptionsArgTypes(options.colors),
        size: getOptionsArgTypes(options.sizes),
       
    },
    // parameters: {
    //     __sb: {fd: "row", fw: "no-wrap"},
    // }
}

// const Template = (args) => <Card {...args} />;
// const ListTemplate = ({ items, ...args }) => items.map
// ((item, index) => <Card key={index} {...item} {...args} />);

export const Default = Template.bind({});
export const Clickable = Template.bind({});
Clickable.args = {
    isClickable: true,
}
export const Dragable  = Template.bind({});
Dragable.args = {
    isDragable: true,
}

// export const Colors = () => 
//     options.colors.map((color, index) => {
//         return <Card key={index} color={color} />
//     });

// export const Sizes = () => 
//     options.sizes.map((size, index) => {
//         return <Card key={index} size={size} />
//     });

export const Colors = ListTemplate.bind({});
Colors.args = {
    items: options.colors.map(color => ({ color })),
}

export const Sizes = ListTemplate.bind({});
Sizes.args = {
    items: options.sizes.map(size => ({ size })),
}


