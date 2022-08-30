export const EditableRow = ({
    schedule, changeState
  }) => {
    return (
      <tr>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Task"
            name="fullName"
            value={editFormData}
            onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Appt"
            name="address"
            value={editFormData}
            onChange={handleEditFormChange}
          ></input>
        </td>
      </tr>
    );
  };