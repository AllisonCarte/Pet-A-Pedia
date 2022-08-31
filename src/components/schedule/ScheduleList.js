import React from "react";
import { useEffect, useState } from "react";
import { Schedule } from "./Schedule";
import {useParams } from "react-router-dom"
import Table from "react-bootstrap/esm/Table";

export const ScheduleList = () => {
    const [schedule, setSchedule] = useState([])
 
    const {petId} = useParams()

    useEffect(
        () => {
            if(petId){

                // fetching what we need from the database. in this case, pets.
                
                fetch(`http://localhost:8088/pets/${petId}?_embed=schedule`)
                .then(res => res.json())
                .then((petScheduleArray) => {
                    setSchedule(petScheduleArray.schedule)
                })
            }
            else{
                
                fetch(`http://localhost:8088/schedule`)
                .then(res => res.json())
                .then((petScheduleArray) => {
                    setSchedule(petScheduleArray)
                })
            }
        },
        []
    )

    return (
        <section>
             <Table striped bordered hover>
      <thead>
        <tr>
          <th>Appt</th>
          <th>Date</th>
          <th>Task</th>
          <th>Frequency</th>
        </tr>
      </thead>
      <tbody>
    
            {
                schedule.map(
                    schedule => <Schedule scheduleObject={schedule} />
                )
            }
            </tbody>
            </Table>
            </section>
    );
};