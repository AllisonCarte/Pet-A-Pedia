import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { Form, Button } from "react-bootstrap";
import { styles } from "../styles/styles";
import Table from "react-bootstrap/esm/Table";

export const NewScheduleItem = () => {
  const navigate = useNavigate()
  const { petId } = useParams()
  const [schedule, updateSchedule] = useState({
    "date": "",
    "isTask": false,
    "appointment": "",
    "task": "",
    "frequency": "",
  })


  const handleSave = (e) => {
    e.preventDefault()

    const sendToAPI = {
      petId: +petId,
      date: schedule.date,
      isTask: schedule.isTask,
      details: schedule.details,
      frequency: schedule.frequency
    }
    return fetch(`http://localhost:8088/schedule`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendToAPI)
    })
      .then(response => response.json())
      .then(() => {
        navigate(`/pets`)
      })
  }
  return (
    <article style={styles.form}>
    <Form style={styles.form}>
      <h2 style={styles.form}>Add to Schedule</h2>
      <Table>

      <tr>
      <td >
        <Form.Control
          type="text"
          placeholder="Details"
          name="details"
          value={schedule.details}
          z    
          onChange={(evt) => {
            const clone = { ...schedule }
            clone.details = evt.target.value
            updateSchedule(clone)
          }}
          ></Form.Control>
      </td>
      <td>
        <Form.Control
          type="date"
          placeholder="Date"
          name="date"
          value={schedule.date}
          onChange={(evt) => {
            const clone = { ...schedule }
            clone.date = evt.target.value
            updateSchedule(clone)
          }}
        ></Form.Control>
      </td>
      <td>
        <Form.Control
          type="text"
          placeholder="Frequency"
          name="frequency"
          value={schedule.frequency}
          onChange={(evt) => {
            const clone = { ...schedule }
            clone.frequency = evt.target.value
            updateSchedule(clone)
          }}
        ></Form.Control>
      </td>
    </tr>
          </Table>
    <Form.Group>
                <div className="Form-group">
                    <label htmlFor="isTask">Is this a task?  </label>
                    <input type="checkbox"
                        value={schedule.isTask}
                        onChange={
                          (evt) => {
                                const clone = { ...schedule }
                                clone.isTask = evt.target.checked && clone.isTask === true
                                updateSchedule(clone)
                              }
                            } />
                </div>
            </Form.Group>
      <Button
        onClick={(clickEvent) => handleSave(clickEvent)}
        >Submit Schedule</Button>
    </Form>
        </article>
  )
}



  