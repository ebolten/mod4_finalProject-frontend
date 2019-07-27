// component-name-container.js is your business logic and state management as handled before being sent to the stateless view Template.
import React from 'react';
import styles from './Template.module.scss';
import TemplateView from './TemplateView';

class TemplateContainer extends React.Component {

  render() {
    return (
      <TemplateView message={"Template!"} styles={styles} />
    )
  }
}

export default TemplateContainer


