import axios from "axios";

const getDriver = async () => {
  const data = await axios.get("http://localhost:3001/drivers");
  return data.data;
};

const getRequestByid = async (id) => {
  const data = await axios.get(`http://localhost:3001/request/${id}`);
  return data.data;
};

const getCustomer = async () => {
  const data = await axios.get("http://localhost:3001/customers");
  console.log(data.data);
};

const postCustomer = async (customer) => {
  console.log("cus", customer);

  const body = {
    phone_number: customer?.phoneNumber,
    email: customer?.email,
    name: customer?.displayName,
  };
  await axios.post("http://localhost:3001/customers/send", body);
};

const postRequest = async (customer, request) => {
  const phone_number = null;
  const email = "customer2@example.com";
  if (email || phone_number) {
    const { data } = await axios.post("http://localhost:3001/customers/id", {
      email: email,
      phone_number: phone_number,
    });
    const body = {
      customer_id: data.id,
      ...request,
    };
    await axios.post("http://localhost:3001/request", body);
    console.log("sent ", body);
  }
};

const getCustomersFromDriverPhone = async (phone_number) => {
  const { data } = await axios.post("http://localhost:3001/drivers/customers", {
    phone_number: phone_number,
  });
  console.log(phone_number);
  return data;
};

const startRide = async (id) => {
  await axios.put(`http://localhost:3001/request/start/${id}`);
};

const cancelRide = async (id) => {
  await axios.put(`http://localhost:3001/request/cancel/${id}`);
};

const waitForCustomerData = async () => {
  const customerData = await axios.get("http://localhost:3001/customers/data");
  await postRequest(customerData, { request: "example" });
};

export {
  getCustomer,
  postCustomer,
  getDriver,
  postRequest,
  getCustomersFromDriverPhone,
  getRequestByid,
  startRide,
  cancelRide,
  waitForCustomerData
};
