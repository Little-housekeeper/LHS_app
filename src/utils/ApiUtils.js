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
  return data.data;
};

const checkIfCustomerExists = async (customer) => {
  const customers = await axios.get("http://localhost:3001/customers");
  const filteredCustomers = customers.filter(
    (item) =>
      (item.phone_number == customer?.phoneNumber && customer?.phoneNumber) ||
      (item.email == customer?.email && customer?.email)
  );
  console.log(filteredCustomers.length == 0);
  return filteredCustomers.length == 0;
};

const postCustomer = async (customer) => {
  const body = {
    phone_number: customer?.phoneNumber,
    email: customer?.email,
  };
  console.log(body);

  const customers = await getCustomer(); // Wait for customers to load
  const filteredCustomers = customers.filter(
    (item) =>
      (item.phone_number == customer?.phoneNumber && customer?.phoneNumber) ||
      (item.email == customer?.email && customer?.email)
  );
  console.log(filteredCustomers);

  if (filteredCustomers.length == 0) {
    console.log("setn");
    await axios.post("http://localhost:3001/customers/send", body);
  }
};

const postRequest = async (customer, request) => {
  console.log(request);
  const { email, phoneNumber } = customer;

  if (email || phone_number) {
    const { data } = await axios.post("http://localhost:3001/customers/id", {
      email: email,
      phone_number: phoneNumber,
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
  waitForCustomerData,
  checkIfCustomerExists,
};
