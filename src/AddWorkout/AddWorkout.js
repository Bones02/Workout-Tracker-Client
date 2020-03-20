import React from 'react';
import ApiContext from '../ApiContext';
import config from '../config';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

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
          minutes: ''
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
        this.setState({typeId: typeId});
    }

    handleSubmit(event) {
        event.preventDefault();
        const {name, description, typeId, calories, minutes} = this.state;
        
        let options = {
            method: 'POST', 
            body: JSON.stringify({
                name: name.value, 
                description, 
                typeid: typeId, 
                calories, 
                minutes
            }),
            headers: { 'Content-Type': 'application/json'}
        }
        fetch(`${config.API_ENDPOINT}/App/workout/`, options) 
            .then(res => {
                if (!res.ok)
                return res.json().then(e => Promise.reject(e))
                return res.json()
            })
            .then((workout) => {
                this.context.addWorkout(workout)
                this.props.history.push(`/App`)
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

    validateType() {
        const type = this.state.typeID.trim();
        if (type.length === 0) {
          return "Workout type is required";
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
                    <label htmlFor="name">Name * {' '}
                    <input type="text" className="name__control" required
                        name="name" id="name" onChange={e => this.updateName(e.target.value)}/>
                    </label><br />

                    <label htmlFor="description">Add Description * {' '}
                    <input type="text" className="name__control" required
                        name="description" id="description" onChange={e => this.updateDescription(e.target.value)}/>
                    </label><br />

                    <label htmlFor="calories">Enter Number of Calories Burned * {' '}
                    <input type="text" className="name__control" required
                        name="calories" id="calories" onChange={e => this.updateCalories(e.target.value)}/>
                    </label><br />

                    <label htmlFor="minutes">Enter Number of Minutes * {' '}
                    <input type="text" className="name__control" required
                        name="minutes" id="minutes" onChange={e => this.updateMinutes(e.target.value)}/>
                    </label><br />

                    <label htmlFor="type">Select Type * {' '}
                    <select onChange={e => this.handleDropdownClick(e.target.value)}>
                        <option/>
                        {dropdownItems} 
                    </select>
                    </label>
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

AddWorkout.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    typeid: PropTypes.number,
    calories: PropTypes.string,
    minutes: PropTypes.string
};

export default AddWorkout;