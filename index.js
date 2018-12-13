/**
 * List of domain and their associated online access.
 */

const accounts = {
  'gmail': 'https://gmail.com',
  'free': email => `https://webmail.free.fr?_user=${email}`,
  'yahoo': email => `https://login.yahoo.com/?username=${email}`,
  'outlook': email => `https://login.live.com?username=${email}`,
  'hotmail': email => `https://login.live.com?username=${email}`,
  'aol': email => `https://login.aol.com/?username=${email}`,
  'live': email => `https://login.live.com?username=${email}`,
  'msn': email => `https://login.live.com?username=${email}`,
  'orange': email => `https://login.orange.fr?login=${email}`,
  'wanadoo': email => `https://login.orange.fr?login=${email}`,
  'freeserve': email => `https://login.orange.fr?login=${email}`
}

/**
 * Give online url for given account.
 *
 * Autofill email if possible.
 *
 * @param {String} address
 * @return {String}
 * @api public
 */

module.exports = (address) => {
  const [left, right] = address.split('@')
  if (right) {
    const [domain] = right.split('.')
    const account = accounts[domain]
    return typeof account === 'function' ? account(address) : account
  }
}
