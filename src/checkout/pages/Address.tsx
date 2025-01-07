import { FormAddress } from "../components/FormAddress";
import { ShopLayout } from "../../layouts";

export const Address = () => {
  return (
    <ShopLayout title={"Shipping address"}>
      <FormAddress />
    </ShopLayout>
  );
};
