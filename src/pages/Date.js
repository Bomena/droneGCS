import React, { useState } from "react";
import "./style.css"


export default function Now() {
  const [timer, setTimer] = useState("00:00:00");
  const [today, setToday] = useState("0000.00.00")

  const currentTimer = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const year = date.getFullYear();
    const todayMonth = String(date.getMonth()+1).padStart(2, "0");
    const todayDate = String(date.getDate()).padStart(2, "0");
    setToday(`${year}.${todayMonth}.${todayDate}`);
    setTimer(`${hours}:${minutes}:${seconds}`)
  }

  const startTimer = () => {
    setInterval(currentTimer, 1000)
  }
  startTimer()

  return (
    <>
    <h2 className="time">{today} - {timer}</h2>
    </>
  )
}