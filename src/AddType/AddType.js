import React from 'react';
import ReactDOM from 'react-dom';
import config from '../config';
import PropTypes from 'prop-types';
import ApiContext from '../ApiContext';



class AddType extends React.Component {
    state = {
        name: {
            value: '',
            touched: false
        }
    } 

    static contextType = ApiContext;

    updateName(name) {
        this.setState({name: {value: name, touched: true}});
    }

    handleSubmit(event) {
        event.preventDefault();
        const {name,typeid} = this.state;
    
        console.log(name);
        let options = {
            method: 'POST', 
            body: JSON.stringify({name: name.value }),
            headers: { 'Content-Type': 'application/json'}
        }
        fetch(`${config.API_ENDPOINT}/App/type/`, options) 
        .then(res => {
            if (!res.ok)
            return res.json().then(e => Promise.reject(e))
            return res.json()
        })
        .then((respJson) => {
            this.context.addFolder({name: respJson.name, id: respJson.id})
            this.props.history.push(`/type/${typeid}`)
        })
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

export default AddType;