/**
 * Dependencies
 */

const test = require('tape')
const account = require('..')

test('should not return anything if account is not recognized', assert => {
  assert.plan(1)
  assert.equal(account('hello@helloworld.com') == null, true)
})

test('should return free online url for given account', assert => {
  assert.plan(1)
  assert.equal(account('hello@free.fr'), 'https://webmail.free.fr?_user=hello@free.fr')
})


test('should return gmail online url for given account', assert => {
  assert.plan(1)
  assert.equal(account('hello@gmail.com'), 'https://gmail.com')
})
