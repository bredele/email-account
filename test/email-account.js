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

test('should return yahoo online url for given account', assert => {
  assert.plan(1)
  assert.equal(account('hello@yahoo.com'), 'https://login.yahoo.com/?username=hello@yahoo.com')
})

test('should return outlook online url for given account', assert => {
  assert.plan(1)
  assert.equal(account('hello@outlook.com'), 'https://login.live.com?username=hello@outlook.com')
})

test('should return hotmail online url for given account', assert => {
  assert.plan(1)
  assert.equal(account('hello@hotmail.com'), 'https://login.live.com?username=hello@hotmail.com')
})

test('should return live online url for given account', assert => {
  assert.plan(1)
  assert.equal(account('hello@live.com'), 'https://login.live.com?username=hello@live.com')
})


test('should return msn online url for given account', assert => {
  assert.plan(1)
  assert.equal(account('hello@msn.com'), 'https://login.live.com?username=hello@msn.com')
})

test('should return orange online url for given account', assert => {
  assert.plan(1)
  assert.equal(account('hello@orange.fr'), 'https://login.orange.fr?login=hello@orange.fr')
})

test('should return wanadoo online url for given account', assert => {
  assert.plan(1)
  assert.equal(account('hello@wanadoo.fr'), 'https://login.orange.fr?login=hello@wanadoo.fr')
})
test('should return freeserve online url for given account', assert => {
  assert.plan(1)
  assert.equal(account('hello@freeserve.net'), 'https://login.orange.fr?login=hello@freeserve.net')
})
