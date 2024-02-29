import { getMenu } from '../../services/apiRestaurant';
import { useLoaderData } from 'react-router-dom';
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();
  // console.log(menu);
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

/*
 * React Router will load data at the same time as rendering
 * It is faster than useEffect(), which load data after component rendered
 */
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
