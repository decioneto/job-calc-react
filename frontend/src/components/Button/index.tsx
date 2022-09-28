import { Component } from 'react';
import utils from '@styles/utils.module.scss';
import { ButtonProps } from './types';

export class Button extends Component<ButtonProps> {
    render() {
        return (
            <button
                className={`
                    ${utils.button} 
                    ${
                        this.props.type === 'primary'
                            ? utils.primary
                            : this.props.type === 'secondary'
                            ? utils.secondary
                            : this.props.type === 'success'
                            ? utils.success
                            : this.props.type === 'danger'
                            ? utils.danger
                            : ''
                    }
                `}
                onClick={this.props.onCLick}
            >
                {this.props.icon ? this.props.icon : <></>}
                {this.props.text}
            </button>
        );
    }
}
