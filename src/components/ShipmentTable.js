import React from "react"
import PropTypes from 'prop-types'
import { useSortableData } from './TableUtil'
import './TableStyle.css'


export const ShipmentTable = ({products}) => {
  const { items, updateSort } = useSortableData(products)
  console.log("##props.products", products)
  return (
    <table>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => updateSort("name")}
            >
              Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => updateSort("status")}
            >
              Status
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => updateSort("destination")}
            >
              Destination
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => updateSort("total")}
            >
              Total
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.status}</td>
            <td>{item.destination}</td>
            <td>${item.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

ShipmentTable.propTypes = {
  products: PropTypes.object.isRequired
}