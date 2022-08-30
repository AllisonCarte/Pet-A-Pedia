import React from "react";
import { useEffect, useState } from "react";
import { Schedule } from "./Schedule";

export const ReadOnlyRow = ({ }) => {
    const [schedule, setSchedule] = useState([])
    const [filteredSchedule, setFilteredSchedule] = useState([])

    const localPAPUser = localStorage.getItem("PAP_user")
    const PAPUserObject = JSON.parse(localPAPUser)

    useEffect(
        () => {
            // fetching what we need from the database. in this case, pets.
            fetch(`http://localhost:8088/schedule`)
                .then(res => res.json())
                .then((petScheduleArray) => {
                    setSchedule(petScheduleArray)
                })
        },
        []
    )

    return (
        <section>
            {
                schedule.map(
                    schedule => <Schedule scheduleObject={schedule} />
                )
            }</section>
    );
};