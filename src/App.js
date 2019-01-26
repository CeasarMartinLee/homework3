import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addModel } from './actions/model'
import ModelDetails from './components/ModelDetails';



const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}

class App extends Component {
  state = {}


  updateSelection = (event) => {
    this.setState({
      model: event.target.value
    })
  }

  addHandler = () => {
    data[this.state.model].name=this.state.model
    this.props.addModel(data[this.state.model])
  }

  render() {
    return (
      <div className="App">
        <ModelDetails models={this.props.models}/>
        <select value={this.state.model} onChange={this.updateSelection}>
          <option>-- pick a model --</option>
          {Object.keys(data).map((model, index) => {
            return (<option value={model} key={index}>{model} ({data[model].year})</option>)
          })}
        </select>
        <button onClick={this.addHandler}>Add</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      models: state
    }
}

export default connect(mapStateToProps, { addModel })(App)
