
const backendPort = "5000";
const location = window.location;

const URL = `${location.protocol}//${location.hostname.replace('-3000', `-${backendPort}`)}${location.port ? `:${backendPort}` : ""}`;
console.log(URL);

export {
  URL
}