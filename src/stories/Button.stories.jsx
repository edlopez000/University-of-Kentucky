import NButton from "../components/Button"

export default {
    title: 'Button',
    component: NButton,
    argTypes: {OnClick: {action: "onClick"}}
}

const Template = args => <NButton {...args} />

export const Success = Template.bind({})

Success.args = {
    background: 'red',
    size: "small",
    onClick: function(e) {
        console.log(e.target.value)
    }
}




