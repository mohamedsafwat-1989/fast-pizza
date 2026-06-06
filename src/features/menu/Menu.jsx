import { getMenu } from '../../services/apiRestaurant';
import { useLoaderData } from 'react-router-dom';
import MenuItem from './MenuItem';
function Menu() {
  // useLoaderData is a hook that allows us to access the data returned from the loader function (see below) in our component. This is useful because it allows us to load data before the component is rendered, which can improve performance and user experience. The data returned from the loader function is then available in the component via the useLoaderData hook, which we can use to render the menu items.
  const menu = useLoaderData();
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}
// loader function, which is used in the router (see App.jsx) to load data before the component is rendered. The data returned from this function is then available in the component via the useLoaderData hook
export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
