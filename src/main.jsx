import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

import { DataProvider } from './context/DataContext';

root.render(
    <DataProvider>
        <App />
    </DataProvider>
);
