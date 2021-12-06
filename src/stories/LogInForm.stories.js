import Login from "../components/Forms/LoginForm"

export default {
    title: "LogIn Form",
    component: Login,
    argTypes: {OnClick: {action: "onClick"}}
}

const Template = args => <Login {...args} />

export const LoginForm = Template.bind({})

LoginForm.args = {
    label: "Login Form",
    onClick: function(e) {
        console.log(e)
    }
}



