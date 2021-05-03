import React from 'react';
import {Navbar} from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import {TodosPages} from "./pages/TodosPage";
import {AboutPage} from "./pages/AboutPage";

const App: React.FC = () => {

    return (
    <BrowserRouter>
        <Navbar />
        <div className="container">
            <Switch>
                <Route path="/" exact><TodosPages /></Route>
                <Route path="/about"><AboutPage /></Route>
            </Switch>
        </div>
    </BrowserRouter>
    );
}

export default App;
