#!/usr/bin/env node

// milliseconds
const minutes = minute => minute * 60 * 1000

const WORK_TIME = minutes(5)
const REST_TIME = minutes(1)

const { exec } = require('child_process')

const start_working = () => exec(`mpv "${__dirname}/Start_To_Work.aiff"`)
const get_out_of_work = () => exec(`mpv "${__dirname}/Get_Out_Of_Work.aiff"`)
const get_back_to_work = () => exec(`mpv "${__dirname}/Get_Back_To_Work.aiff"`)

// Thinking: Two timer, outer and inner, red and green
const WORK_TIMER = () => {
  get_out_of_work()
  setTimeout(REST_TIMER, REST_TIME)
}

const REST_TIMER = () => {
  get_back_to_work()
  setTimeout(WORK_TIMER, WORK_TIME)
}

start_working()
setTimeout(WORK_TIMER, WORK_TIME)
