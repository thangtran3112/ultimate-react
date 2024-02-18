import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';

import Header from './Header';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  //console.log(navigation);

  //grid with 3 row, first row and last row are 'auto' (size equal content)
  //second row '1fr' will take up the remaining space
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll bg-green-100">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
