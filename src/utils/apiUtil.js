import { shipmentURL, GET, PATCH } from "./constants";

/**
 * Factory function to inject fetch dependency for testing
 *
 * @param {String} page for pagination
 * @returns {Promise} API call promise
 */
export const getShipmentReport = async (page = 1) =>
  getShipmentReporttDI(fetch, GET, `page=${page}`);

export const updateShipmentData = async (data = {}) =>
  getShipmentReporttDI(fetch, PATCH, data);

/**
 * Function to make async call to get shipment details
 *
 * @param {function} fetch Dependency Injection for testing
 * @param {String} page for pagination
 * @returns {Promise} API call promise
 */
export async function getShipmentReporttDI(fetch, method = GET, data = {}) {
  let requestURL = shipmentURL;
  const requestObject = {
    method,
    headers: {
      "Content-Type": "application/json"
    }
  };
  if (method === GET) {
    requestURL = `${requestURL}?${data}`;
  } else {
    requestObject.body = JSON.stringify(data);
  }
  return await fetch(requestURL, requestObject).then(
    async response => await response.json()
  );
}
