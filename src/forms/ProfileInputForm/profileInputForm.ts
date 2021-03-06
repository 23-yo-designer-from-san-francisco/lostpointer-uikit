import { Component } from 'components/Component/component';

import ProfileInputFormTemplate from './profileInputForm.hbs';
import './profileInputForm.scss';

export class ProfileInputForm extends Component<null> {
    private input: string;

    constructor(props) {
        super(props);
        this.input = props.input;
    }

    render() {
        return ProfileInputFormTemplate(this.props);
    }
}
