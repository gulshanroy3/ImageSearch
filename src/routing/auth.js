import React, { PureComponent } from 'react';
import Loader from "../components/Loader"

export function withAuthentication(Component) {
    return class extends PureComponent {
        state = {
            isLoading: true,
        };
        componentDidMount() {
            //build for authentication purse 
            this.setState({ isLoading: false });
            this.props.history.push('/home');

        }
        render() {
            const { isLoading } = this.state;
            if (isLoading) return <Loader />;
            return <Component {...this.props} />;
        }
    };
}
