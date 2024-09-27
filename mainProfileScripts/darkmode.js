const options = {
  time: '0.5s', // default: '0.3s'
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}
function addDarkmodeWidget() {
    new Darkmode(options).showWidget();
  }
  window.addEventListener('load', addDarkmodeWidget);
