const isServer = typeof window === 'undefined';

const logger = (type, args) => {
  const argsArr = [].slice.call(args);
  let log;
  if (isServer) {
    log = argsArr.map((arg) => (arg === undefined ? 'undefined' : JSON.stringify(arg))).join(' @ ');
    // eslint-disable-next-line no-console
    console.log(`${type} ${log}`);
  } else {
    log = argsArr.length === 1 ? argsArr[0] : argsArr;
    // eslint-disable-next-line no-console
    console.log(type, log);
  }
};

function error() {
  // eslint-disable-next-line no-undef, prefer-rest-params
  logger('Error:', arguments);
}

function info() {
  // eslint-disable-next-line no-undef, prefer-rest-params
  logger('Info:', arguments);
}

module.exports = {
  error,
  info,
};
