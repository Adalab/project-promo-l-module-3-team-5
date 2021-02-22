import React from 'react';

class Fieldset extends React.Component {
    render() {
        return (
            <fieldset className={this.props.fieldsetClass+" collapsable "+this.props.classCollapsable}>
                {this.props.children}
            </fieldset>
        )
    }
}

export default Fieldset;