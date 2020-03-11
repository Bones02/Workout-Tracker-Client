import React from 'react';
import ReactDOM from 'react-dom';
import config from '../config';
import PropTypes from 'prop-types';



class AddType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: {
            value: '',
            touched: false
          }
        }
    } 

    updateName(name) {
        this.setState({name: {value: name, touched: true}});
    }

    handleSubmit(event) {
        event.preventDefault();
        const {name, id} = this.state;
    
        console.log(name);
        // let options = {
        //     method: 'POST', 
        //     body: JSON.stringify({name: name.value }),
        //     headers: { 'Content-Type': 'application/json'}
        // }
        // fetch(`${config.API_ENDPOINT}/Add/type`, options) 
        //     .then(res => res.json())
        //     .then((result) => {
        //         console.log(result)
        //     this.props.routeProps.history.push('/')
        //     })
        const type = {name, id}
        this.context.addType(type)
    }

    validateName() {
        const name = this.state.name.value.trim();
        if (name.length === 0) {
          return "Name is required";
        } else if (name.length < 3) {
          return "Name must be at least 3 characters long";
        }
    }

    render() {
        const nameError = this.validateName();
        
        return (
            <form className="registration" onSubmit={e => this.handleSubmit(e)}>
                <h2>Add Type</h2>
                <div className="addtype__hint">* required field</div>  
                <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input type="text" className="name__control"
                    name="name" id="name" onChange={e => this.updateName(e.target.value)}/>
                {this.state.name.touched}
                </div>
    
                <div className="addType__button__group">
                <button type="reset" className="addtype__button">
                    Cancel
                </button>
                <button type="submit" className="addtype__button" disabled={this.validateName()}>
                    Save
                </button>
                </div>
            </form>
        )
    }
}

AddType.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    touched: PropTypes.bool
};

export default AddType;