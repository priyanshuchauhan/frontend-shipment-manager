import React, { useState, useEffect } from "react";
import { getShipmentReport } from "./utils/apiUtil";
import { ShipmentTable } from "./components/ShipmentTable";
import { ShipmentDetail } from "./components/ShipmentDetail";
import { Title, Wrapper } from "./styles/AppStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [shipmentData, setShipmentData] = useState([]);

  useEffect(() => {
    // Using an async function makes the callback function return a Promise instead of a cleanup function. Hence IIFE
    (async function anyNameFunction() {
      const shipmentList = await getShipmentReport(currentPage);
      shipmentList && setShipmentData(shipmentList);
    })();
  }, [currentPage]);

  return (
      <Router>
        <Wrapper>
          <Title>Track and update Shipment !</Title>
        </Wrapper>
        <Switch>
          <Route path="/shipment-details/:id">
            <ShipmentDetail />
          </Route>
          <Route path="/">
            <ShipmentTable products={shipmentData} setCurrentPage={setCurrentPage}/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
