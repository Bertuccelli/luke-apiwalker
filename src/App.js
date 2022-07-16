import './App.css';
import Form from './components/Form'
import People from './views/People';
import Planets from './views/Planets';
import Error from './views/Error';
import {Route, Routes} from 'react-router-dom'


function App() {
    return (
        <div>
            <Form />

            <Routes>
                <Route path="/people/:id" element={<People />} />
                <Route path="/planets/:id" element={<Planets />} />
                <Route path="/error" element={<Error />} />

            </Routes>
        </div>
    );
}

export default App;