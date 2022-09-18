import { BrowserRouter } from 'react-router-dom';
import PartnerRoutes from './routes/PartnerRoutes';
import UserRoutes from './routes/UserRoutes';

const App = () => {

  
  return (
    <div className={"bg-[#F5F5F5] select-none dark:bg-gray-500"}>
      <BrowserRouter>
        <PartnerRoutes />
        <UserRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App;
