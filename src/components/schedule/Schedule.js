import Table from "react-bootstrap/esm/Table";

export const Schedule = ({ scheduleObject }) => {



  return (
        <tr>
          {
            scheduleObject.isTask ?
              <td></td>
            :
            <td>{scheduleObject.details}</td>
          }
          <td>{scheduleObject.date}</td>
          {
            !scheduleObject.isTask ?
              <td></td>
            :
            <td>{scheduleObject.details}</td>
          }
          <td>{scheduleObject.frequency}</td>
        </tr>
  );
}