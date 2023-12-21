import axios from "axios";

const getCustomer = async () => {
  const data = await axios.get("http://localhost:3001/customers");
  console.log(data.data);
};

const postCustomer = async (customer) => {
  console.log(customer.phoneNumber, customer.email);
  console.log("cus", customer);

  const body = {
    phone_number: customer?.phoneNumber,
    email: customer?.email,
    name: customer?.displayName,
  };
  await axios.post("http://localhost:3001/customers/send", body);
};

export { getCustomer, postCustomer };
