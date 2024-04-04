/**
 * CONSTANTS
 */

const SPACE = ' '


/**
 * @param {Date} startDate
 * @param {Date | undefined} endDate
 * @returns formatted string of how long a duration of time was. (e.g. 3 years, 9 months)
 */
export function getFormattedTimeDuration(startDate, endDate) {
    if (!startDate) {
        return ''
    }

    const startTime = startDate
    const endTime = endDate ? endDate : new Date()

    // calculate the number of months between the 2 dates

    // # of years in months
    let years = endTime.getFullYear() - startTime.getFullYear()
    let totalMonths = years * 12;

    // add the # of months between the 2 months of the Dates
    // add 1 to include the start month itself
    const monthDiff = endTime.getMonth() - startTime.getMonth() + 1
    totalMonths += monthDiff

    if (years >= 1) {
        // start: march, end: march ==> 1 monthDiff ==> keep the years
        // start: feb, end: march ==> 2+ monthDiff ==> keep the years
        // start: april, end: march ==> 0- monthDiff ==> decrement the years
        if (monthDiff <= 0) {
            years--
        }
        const surplusMonths = totalMonths - (years * 12)
        return (years > 0 ? years + ' yrs ' : '') + (surplusMonths > 0 ? surplusMonths + ' mos' : '')
    }
    return totalMonths > 0 ? totalMonths + ' mos' : '1 mo'
}

/**
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @returns
 */
export function getDateRange(startDate, endDate) {
    if (startDate) {
        const startTime = startDate
        const startMonth = startTime.toLocaleString('en-US', { month: 'short' })
        const startYear = startTime.getFullYear()
        let res = startMonth + SPACE + startYear + " - "

        if (endDate) {
            const endTime = endDate
            const endMonth = endTime.toLocaleString('en-US', { month: 'short' })
            const endYear = endTime.getFullYear()
            res += endMonth + SPACE + endYear
        } else {
            res += 'present'
        }
        return res
    }
    return ''
}


// ⚠️ This function uses moment which does not work on mobile web.

// import moment from 'moment'

// function getWorkDuration(exp) {
//     if (exp.startTime) {
//         const endTime = exp.endTime ? exp.endTime : new Date()
//         const startTime = exp.startTime
//         const momentStartTime = moment(`${startTime.getFullYear()}-${startTime.getMonth() + 1}-${startTime.getDay() + 1}`)
//         const momentEndTime = moment(`${endTime.getFullYear()}-${endTime.getMonth() + 1}-${endTime.getDay() + 1}`)
//         const duration = moment.duration(momentEndTime.diff(momentStartTime))
//         const durationMonths = duration.asMonths()
//         let MONTHS = Math.ceil(durationMonths)
//         MONTHS += durationMonths % 1 >= 0.8 ? 1 : 0

//         const durationYears = duration.asYears()
//         let YEARS = Math.floor(durationYears)
//         YEARS += durationYears % 1 >= 0.9 ? 1 : 0

//         if (YEARS >= 1) {
//             const surplusMonths = MONTHS - (YEARS * 12)
//             return YEARS + ' yrs ' + (surplusMonths > 0 ? surplusMonths + ' mos' : '')
//         } else {
//             return MONTHS > 0 ? MONTHS + ' mos' : '1 mo'
//         }
//     }
//     return ''
// }