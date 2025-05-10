import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/api/content')
            .then((response) => response.json())
            .then((data) => setContent(data.content))
            .catch((error) => console.error('Error fetching data:', error))
    }, []);

    console.log(content);
    return(
       <div className="main">
            <p className='head'>Connectify</p>

            <div className="content">
                <p className='title'>{content.title}</p>
                <p className='message'>{content.message}</p>
            </div>
       </div>
    )
}

export default App