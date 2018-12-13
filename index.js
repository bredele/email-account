/**
 * List of domain and their associated online access.
 */

const accounts = {
  'gmail': 'https://gmail.com',
  'free': email => `https://webmail.free.fr?_user=${email}`,
  'yahoo': email => `https://login.yahoo.com/?username=${email}`,
  'outlook': email => `https://login.live.com?username=${email}`
}

module.exports = (address) => {
  const [left, right] = address.split('@')
  if (right) {
    const [domain] = right.split('.')
    const account = accounts[domain]
    return typeof account === 'function' ? account(address) : account
  }
}
