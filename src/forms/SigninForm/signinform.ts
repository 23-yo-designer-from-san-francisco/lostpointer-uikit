import { Component } from 'components/Component/component';
import { InputComponent } from 'forms/Input/input';

import SigninFormTemplate from './signinform.hbs';
import './signinform.scss';

interface ISigninAuthFormProps {
    fail_msg: string;
    p_redirect_msg: string;
    a_redirect_msg: string;
    inputs: Array<string>;
}

export class SigninAuthForm extends Component<ISigninAuthFormProps> {
    private data: ISigninAuthFormProps;

    constructor() {
        super();
        this.data = {
            fail_msg: 'Authentication failed',
            p_redirect_msg: "Don't have an account?",
            a_redirect_msg: 'Sign up',
            inputs: [
                new InputComponent({
                    class: 'auth-form__input form__input',
                    name: 'email',
                    type: 'email',
                    placeholder: 'Email',
                }).render(),
                new InputComponent({
                    class: 'auth-form__input form__input',
                    name: 'password',
                    type: 'password',
                    placeholder: 'Password',
                }).render(),
            ],
        };
    }

    render(): string {
        return SigninFormTemplate(this.data);
    }
}
