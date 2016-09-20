import React from 'react';
import VisibleTodoList from '../containers/VisibleTodoList';
import AddTodo from './AddTodo';
import Footer from '../components/Footer';

const App = ({store}) => (
    <div>
    <h1>Todos</h1>
        <AddTodo/>
        <VisibleTodoList/> 
        <Footer/>
    </div>
)

export default App;
