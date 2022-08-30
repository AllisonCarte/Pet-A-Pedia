export const Schedule = ({scheduleObject}) => {


    return (
        <tr>
          <td>{scheduleObject.task} </td>
    
          <td>{scheduleObject.frequency}</td>
        </tr>
      );
}