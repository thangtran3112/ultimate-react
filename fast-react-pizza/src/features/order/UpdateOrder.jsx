import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

const UpdateOrder = ({ order }) => {
  const fetcher = useFetcher();

  //fetcher.Form will not navigate away
  //It will just submit the form and reload the page
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
      <div className="grow">
        <label className="sm:basis-40">Update Phone (practice)</label>
        <input
          className="input w-half"
          type="tel"
          name="phone"
          required
          placeholder="xxx-xxxx-xxx"
        />
      </div>
    </fetcher.Form>
  );
};

export default UpdateOrder;

//This action be injected into createRouter() in App.tsx
//params should already have orderId as it is in URL like
// '/order/:orderId' or `http://localhost:5173/order/BRWSWX`
export async function action({ request, params }) {
  //personal tested updating phone, through an input on fetcher.Form
  const formData = await request.formData();
  const submitData = Object.fromEntries(formData);

  const data = { priority: true, phone: submitData.phone };
  await updateOrder(params.orderId, data);
  return null;
}
