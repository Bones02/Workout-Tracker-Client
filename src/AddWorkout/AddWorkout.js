import React from 'react';
import ReactDOM from 'react-dom';
import ApiContext from '../ApiContext';
import config from '../config';
import { Link } from 'react-router-dom'
import { runInNewContext } from 'vm';
import PropTypes from 'prop-types';
import ValidationError from '../AddWorkout/ValidationError';


class AddWorkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: {
            value: '',
            touched: false
          },
          description: '',
          typeId: '',
          calories: '',
          minutes: '',
        }
    } 
    static contextType = ApiContext

    updateName(name) {
        this.setState({name: {value: name, touched: true}});
    }

    updateDescription(description) {
        this.setState({description: description });
    }

    updateCalories(calories) {
        this.setState({calories: calories });
    }
    updateMinutes(minutes) {
        this.setState({minutes: minutes });
    }

    handleDropdownClick(typeId) { 
        console.log(typeId)
        this.setState({typeId: typeId});
    }

    handleSubmit(event) {
        event.preventDefault();
        const {name, description, typeId, calories, minutes} = this.state;

        console.log('handle submit variables name', name );
        console.log('handle submit variables description', description ); 
        console.log('handle submit variables typeId',typeId );
        console.log('handle submit variables calories', calories );
        console.log('handle submit variables minutes', minutes );
        
        const workout = {name, description, typeId, calories, minutes}
        this.context.addWorkout(workout)
        //* Not using yet because no backend*
        // let options = {
        //     method: 'POST', 
        //     body: JSON.stringify({name: name.value, description: description, type: type, calories: calories, minutes: minutes}),
        //     headers: { 'Content-Type': 'application/json'}
        // }
        // fetch(`${config.API_ENDPOINT}/Add/workout`, options) 
        //     .then(res => res.json())
        //     .then((result) => {
        //         console.log()
        //    this.context.addWorkout(result)
        //     })
    }

    validateName() {
        const name = this.state.name.value.trim();
        if (name.length === 0) {
          return "Name is required";
        } else if (name.length < 3) {
          return "Name must be at least 3 characters long";
        }
    }

    validateType() {
        const type = this.state.typeID.trim();
        if (type.length === 0) {
          return "Folder is required";
        }
    }

    render() { 
        const {types} = this.props
        const dropdownItems = types.map(item => { 
            return <option key={item.id} value={item.id}>{item.name}</option>
        })

        return (
            <form className="addworkout" onSubmit={e => this.handleSubmit(e)}>
                <h2>Add Workout</h2>
                <div className="addworkout__hint">* required field</div>  
                <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input type="text" className="name__control"
                        name="name" id="name" onChange={e => this.updateName(e.target.value)}/>
                    {this.state.name.touched && <ValidationError message={'Validation Error'} />}

                    <label htmlFor="description">Add Description *</label>
                    <input type="text" className="name__control"
                        name="description" id="description" onChange={e => this.updateDescription(e.target.value)}/>

                    <label htmlFor="calories">Enter Number of Calories Burned *</label>
                    <input type="text" className="name__control"
                        name="calories" id="calories" onChange={e => this.updateCalories(e.target.value)}/>
                    
                    <label htmlFor="minutes">Enter Number of Minutes *</label>
                    <input type="text" className="name__control"
                        name="minutes" id="minutes" onChange={e => this.updateMinutes(e.target.value)}/>

                    <label htmlFor="type">Select Type *</label>
                    <select onChange={e => this.handleDropdownClick(e.target.value)}>
                        <option/>
                        {dropdownItems} 
                    </select>

                </div>

                <div className="addtype__button__group">
                    <button 
                        tag={Link}
                        to='/App'
                        type="reset" 
                        className="addworkout__button">
                        Cancel
                    </button>
            
                    <button 
                        tag={Link}
                        to='/App'
                        type="submit" 
                        className="addworkout__button"
                        disabled={this.validateName()}>
                        Save
                    </button>
                </div>
            </form>
        )
    }
}

export default AddWorkout;