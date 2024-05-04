import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const now = new Date();
    if (selectedDate <= now) {
      alert('Please choose a date in the future');
    } else {
      startButton.disabled = false;
      startButton.dataset.start = selectedDate;
    }
  },
};

const startButton = document.querySelector('button[data-start]');
const daysText = document.querySelector('span[data-days]');
const hoursText = document.querySelector('span[data-hours]');
const minutesText = document.querySelector('span[data-minutes]');
const secondsText = document.querySelector('span[data-seconds]');

flatpickr('#datetime-picker', options);

startButton.addEventListener('click', () => {
  const startTime = new Date(startButton.dataset.start);
  let interval = setInterval(() => {
    const now = new Date();
    const timeLeft = startTime - now;

    if (timeLeft >= 0) {
      const timeLeftObj = convertMs(timeLeft);
      daysText.textContent = String(timeLeftObj.days).padStart(2, '0');
      hoursText.textContent = String(timeLeftObj.hours).padStart(2, '0');
      minutesText.textContent = String(timeLeftObj.minutes).padStart(2, '0');
      secondsText.textContent = String(timeLeftObj.seconds).padStart(2, '0');
    } else {
      clearInterval(interval);
      startButton.disabled = true;
    }
  }, 1000);
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor((ms % hour) / minute);
  const seconds = Math.floor((ms % minute) / second);

  return { days, hours, minutes, seconds };
}
