import React from 'react';

class Fieldset extends React.Component {
    constructor(props) {
        super(props);
        this.functionColapsable=this.functionColapsable.bind(this);
        }
    render() {
        return (
            <fieldset className={this.props.fieldsetClass+" collapsable "} functionColapsable={this.props.functionColapsable}>
                {this.props.children}
            </fieldset>
        )
    }
}

export default Fieldset;