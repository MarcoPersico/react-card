import React from 'react';

import Card from './modules/components/card/';

// App Config
import AppConfiguration from './services/AppConfiguration';
import frontendConfig from '../../config/frontend/frontend.config';

// Component style
import './app.scss';

// Set app config
AppConfiguration.setConfig(frontendConfig);

// Services
import ApiService from './services/api';

export default class App extends React.Component {
  constructor(porps) {
    super(porps);

    this.ApiService = new ApiService();
    this.state = { cardData: [], cardDataAmount: 0, isLoading: false }
    this.renderCrap = this.renderCrap.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.ApiService.getEvents()
      .then((res) => {
        this.setState({ cardData: res.data});
      })
      .catch((err) => {
        this.setState({
          error: {
            status: true,
            message: err.message
          }
        });
      })
      .finally(() => {
        this.setState({ isLoading: false })
      })
    }, 2500)
  }

  renderPlaceholder() {
      for (let i=0; i < this.state.cardData+1; i++) {
        return <Card />
      }
  }

  renderCrap() {
    return (
      this.state.cardData.map((item, index) => {
        return <Card key={index}><p>{item.nombre}</p></Card>
      })
    );
  }

  render() {
    return (
      <div className='app'>
        {this.state.isLoading ? this.renderPlaceholder(): this.renderCrap()}
      </div>
    );
  }
}
