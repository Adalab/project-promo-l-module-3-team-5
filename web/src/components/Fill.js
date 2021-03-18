import React from 'react';
import Input from './Input';
import GetAvatar from './GetAvatar';
// import PropTypes from 'prop-types';
import '../stylesheets/layout/_fill.scss';

class Fill extends React.Component {
  render() {
    return (
      <div className="collapsable--hide">
        <Input
          forId="completeName"
          text="Nombre completo"
          placeText="Ej: Sally Jill"
          name="name"
          handleInputChange={this.props.handleInputChange}
          value={this.props.data.name}
        />

        <Input
          forId="position"
          text="Puesto"
          placeText="Ej: Front-end unicorn"
          name="job"
          handleInputChange={this.props.handleInputChange}
          value={this.props.data.job}
        />

        <GetAvatar name="photo" avatar={this.props.avatar} getAvatar={this.props.getAvatar} />

        <Input
          forId="emailAddress"
          text="Email"
          placeText="Ej: sally.hill@gmail.com"
          type="email"
          name="email"
          handleInputChange={this.props.handleInputChange}
          value={this.props.data.email}
        />

        <Input
          forId="telephone"
          text="Teléfono"
          placeText="Ej: 555-55-55-55"
          type="tel"
          name="phone"
          asterisk=""
          required={false}
          handleInputChange={this.props.handleInputChange}
          value={this.props.data.phone}
        />

        <Input
          forId="linkedin"
          text="Linkedin"
          placeText="Ej: linkedin.com/in/sally-hill"
          name="linkedin"
          handleInputChange={this.props.handleInputChange}
          value={this.props.data.linkedin}
        />

        <Input
          forId="github"
          text="Github"
          placeText="Ej: sally-hill"
          name="github"
          handleInputChange={this.props.handleInputChange}
          value={this.props.data.github}
        />
      </div>
    );
  }
}

export default Fill;
