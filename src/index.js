import { meets } from './meets'
import calculateMinutes from './utils/calculateMinutes'

function makeTrails(meets = []) {
  const trails = []
  let sanitizedTrails = []
  const tempMeets = [...meets]

  const MORNING_MINUTES_LIMIT = 180
  const EVENING_MINUTES_LIMIT = 240

  function getTrails() {
    while (tempMeets.length > 0) {
      trails.push({
        morning: getPeriods(tempMeets, MORNING_MINUTES_LIMIT),
        evening: getPeriods(tempMeets, EVENING_MINUTES_LIMIT)
      })
    }
  }

  function getPeriods(meets, periodLimit) {
    const periodMeets = []
    let totalDuration = 0

    for (let index = 0; index < meets.length; index++) {
      const currentDuration = meets[index].duration
      const accumulator = totalDuration + currentDuration

      if (accumulator <= periodLimit) {
        totalDuration += currentDuration
        periodMeets.push(meets[index])
        meets.splice(index, 1)
        index--

        if (accumulator === periodLimit) break
      }
    }

    return periodMeets
  }

  function makeSchedule() {
    const MORNING_START_TIME = 9
    const LUNCH_START_TIME = 12
    const EVENING_START_TIME = 13

    let hour = MORNING_START_TIME
    let minute = 0

    function setTime(targetHour, targetMinute) {
      hour = parseInt(targetHour)
      minute = parseInt(targetMinute)
    }

    function incrementTime(minutesToAdd) {
      const { hours, minutes } = calculateMinutes(minutesToAdd + minute)

      hour += hours
      minute = minutes
    }

    function formatOutput(meet) {
      const name = meet.name
      const duration = meet.duration
      const time = `${hour}:${!!minute ? minute : '00'}`
      incrementTime(duration)

      return `${time} ${name} ${duration}min`
    }

    sanitizedTrails = trails.map(trail => {
      setTime(MORNING_START_TIME, 0)
      const morning = trail.morning.map(meet => formatOutput(meet))
      const lunch = `${LUNCH_START_TIME}:00 Almoço`

      setTime(EVENING_START_TIME, 0)
      const evening = trail.evening.map(meet => formatOutput(meet))
      const network = `${hour}:00 Evento de Networking`

      return [...morning, lunch, ...evening, network]
    })
  }

  getTrails()
  makeSchedule()

  return { trails, sanitizedTrails }
}

const trails = makeTrails(meets)

console.log('meets:', meets)
console.log('raw trails:', trails.trails)
console.log('sanitized trails:', trails.sanitizedTrails)
