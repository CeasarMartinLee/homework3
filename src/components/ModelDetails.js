import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ModelDetails extends Component {
    static propTypes = {
        models: PropTypes.arrayOf(PropTypes
        .shape({
            name: PropTypes.string.isRequired,
            manufacturer: PropTypes.string.isRequired,
            year: PropTypes.number.isRequired,
            origin: PropTypes.string.isRequired,
        }))
    }

    render() {
        return (
            <div>
                {this.props.models.map((model, index)=> (
                    <ul key={index}>
                        <li>Name: {model.name}</li>
                        <li>Manufacturer: {model.manufacturer}</li>
                        <li>Year: {model.year}</li>
                        <li>Origin: {model.origin}</li>
                    </ul>
                ))}
            </div>
        )
    }
}