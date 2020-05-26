import React from 'react'
import AddTodo from '../containers/AddItem'
import VisibleTodoList from '../containers/ItemTable'

const App = () => (
    <div>
        <div className="container my-5">
            <div className="row mb-5">
                <div className="col text-center">
                    <h2>Shopping cart app</h2>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col">
                    <AddTodo/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <VisibleTodoList/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                </div>
            </div>
        </div>
    </div>
);

export default App
