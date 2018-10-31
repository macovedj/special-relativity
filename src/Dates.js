class Dates {
    constructor(hour, minute, second, milli) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.milli = milli;
    }

    increment = (amount) => {
        let nextDate = {
            'hour': this.hour,
            'minute': this.minute,
            'second': this.second,
            'milli': this.milli
        };

        console.log('next date before increment', nextDate);
        if (Number(nextDate.milli) + amount < 1000) {
            nextDate.milli = Number(nextDate.milli) + amount;
        } else if(Number(nextDate.milli) + amount < 60000) {
            nextDate.second = Number(nextDate.second) + 1;
            nextDate.milli = 1000 - Number(nextDate.milli);
        }

        console.log('next date after increment', nextDate);
        
        return new Dates(nextDate.hour, nextDate.minute, nextDate.second, nextDate.milli);
    }

}

export default Dates;
