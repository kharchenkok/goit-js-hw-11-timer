class CountdownTimer{
    constructor({selector,targetDate}){
       this.selector = selector
       this.targetDate=targetDate
        this.refs = {
            days: document.querySelector('[data-value="days"]'),
            hours: document.querySelector('[data-value="hours"]'),
            mins: document.querySelector('[data-value="mins"]'),
            secs: document.querySelector('[data-value="secs"]'),
        }
        this.start()
    }
    calcTime(time){
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        this.changeDateElements(days,hours,mins,secs)

    }
    pad (value){
        return String(value).padStart(2,'0')
    }
    changeDateElements(days,hours,mins,secs){
        this.refs.days.innerHTML=days
        this.refs.hours.innerHTML=hours
        this.refs.mins.innerHTML=mins
        this.refs.secs.innerHTML=secs
    }

    changeDate(){
        const time=this.targetDate.getTime()-new Date().getTime()
        time>0 ? this.calcTime(time) : this.viewError()
        
    }
    start(){
        this.changeDate()
        setInterval(()=>{
            this.changeDate()
        },1000)
    }
    viewError(){
        document.querySelector(this.selector).innerHTML='Time is over'
    }

}

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 15, 2020'),
  });