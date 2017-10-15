import React, {Component} from 'react';

export default (OriginalComponent) => class WrappedComponent extends Component {

    render() {
        return <OriginalComponent {...this.props} {...this.state} />
    }

}
//делаем что-то в декораторе