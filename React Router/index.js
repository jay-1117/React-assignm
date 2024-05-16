

import ReactDOM from 'react-dom/client'
import App from './App'

const LazyCom =React.lazy(() => import ('./LazyCom'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<App/>
);


reportWebVitals();
