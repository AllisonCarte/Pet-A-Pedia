import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

export const NewScheduleItem = () => {
  const navigate = useNavigate()
  const { petId } = useParams()
  const [schedule, updateSchedule] = useState({
    "date": "",
    "isTask": false,
    "appointment": "",
    "task": "",
    "frequency": "",
    "petId": 0
  })


  const handleSave = (e) => {
    e.preventDefault()

    const sendToAPI = {
      petId: schedule.petId,
      date: schedule.date,
      isTask: schedule.isTask,
      details: schedule.details,
      frequency: schedule.frequency
    }
    return fetch(`http://localhost:8088/schedule?petId=${petId}&_expand=pet`, {
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
    <form>
      <h2>Add to Schedule</h2>
      <tr>
      <td>
        <input
          type="text"
          placeholder="Details"
          name="details"
          value={schedule.details}
          onChange={(evt) => {
            const clone = { ...schedule }
            clone.details = evt.target.value
            updateSchedule(clone)
        }}
        ></input>
      </td>
      <td>
        <input
          type="date"
          placeholder="Date"
          name="date"
          value={schedule.date}
          onChange={(evt) => {
            const clone = { ...schedule }
            clone.date = evt.target.value
            updateSchedule(clone)
        }}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Frequency"
          name="frequency"
          value={schedule.frequency}
          onChange={(evt) => {
            const clone = { ...schedule }
            clone.frequency = evt.target.value
            updateSchedule(clone)
        }}
        ></input>
      </td>
    </tr>
    <fieldset>
                <div className="form-group">
                    <label htmlFor="isTask">Is this a task? </label>
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
            </fieldset>
      <button
        onClick={(clickEvent) => handleSave(clickEvent)}
      >Submit Schedule</button>
    </form>
  )
}



  