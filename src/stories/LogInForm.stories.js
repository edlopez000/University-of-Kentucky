import Login from "../components/Forms/LoginForm"

export default {
    title: "Example/LogIn Form",
    component: Login,
}

const Template = args => <Login {...args} />

export const LoginForm = Template.bind({})

LoginForm.args = {
    label: "Login Form",
}



