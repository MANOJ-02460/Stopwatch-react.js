// Write your code here

import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timeInSeconds: 0}

  componentWillUnmount = () => {
    clearInterval(this.timerID)
  }

  updateTime = () => {
    this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
  }

  onClickStartButton = () => {
    this.timerID = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  onClickStopButton = () => {
    clearInterval(this.timerID)
    this.setState({isTimerRunning: false})
  }

  onClickResetButton = () => {
    clearInterval(this.timerID)
    this.setState({isTimerRunning: false, timeInSeconds: 0})
  }

  renderMinutes = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {timeInSeconds} = this.state
    const seconds = Math.floor(timeInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  render() {
    const {isTimerRunning} = this.state
    const secs = this.renderSeconds()
    const mins = this.renderMinutes()
    const time = `${mins}:${secs}`
    return (
      <div className="app-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="stopwatch-container">
          <div className="timer-container">
            <div className="img-timer-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-img"
              />
              <h1 className="timer">Timer</h1>
            </div>

            <h1 className="stopwatch">{time}</h1>
            <div className="button-container">
              <button
                type="button"
                className="button start-btn"
                onClick={this.onClickStartButton}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                type="button"
                className="button stop-btn"
                onClick={this.onClickStopButton}
              >
                Stop
              </button>
              <button
                type="button"
                className="button reset-btn"
                onClick={this.onClickResetButton}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
