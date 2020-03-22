import React, { useState, useEffect } from "react";
import { getShipmentReport, updateShipmentData } from "./utils/apiUtil";
import { ShipmentTable } from "./components/ShipmentTable";
import { Title, Wrapper } from "./styles/AppStyles";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [shipmentData, setShipmentData] = useState([]);

  useEffect(() => {
    // Using an async function makes the callback function return a Promise instead of a cleanup function. Hence IIFE
    (async function anyNameFunction() {
      const shipmentList = await getShipmentReport(currentPage);
      setShipmentData(shipmentList);
    })();
  }, [currentPage]);
  console.log("##shipmentData", shipmentData);

  return (
    <div>
      <Wrapper>
        <Title>Track and update Shipment !</Title>
      </Wrapper>

      {!shipmentData && "Loading..."}

      {shipmentData && (
        <div>
          <div handlePageChange={page => setCurrentPage(page)} />
          <div shipmentData={shipmentData} currentPage={currentPage} />
          <ShipmentTable products={shipmentData} />
        </div>
      )}
    </div>
  );
}

export default App;
