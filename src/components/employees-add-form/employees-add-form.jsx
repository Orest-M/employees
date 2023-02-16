import React, { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault()
        if (this.state.name === '' || this.state.salary === '') {
            return
        } else {
            this.props.onAddItem(this.state.name, this.state.salary)
        }
    }

    render() {
      const { name, salary } = this.state
        
      return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
              <form className="add-form d-flex" onSubmit={this.onSubmitForm}>
                <input type="text"
                      className="form-control new-post-label"
                      placeholder="Как его зовут?"
                      name="name"
                      value={name}
                      onChange={this.onValueChange} />
                <input type="number"
                      className="form-control new-post-label"
                      placeholder="З/П в $?"
                      name="salary"
                      value={salary}
                      onChange={this.onValueChange} />
                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
      )
    }
}

export default EmployeesAddForm;