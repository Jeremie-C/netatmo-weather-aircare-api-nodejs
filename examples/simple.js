const { NetatmoClient, SCOPE_FULL } = require('.././lib/index')
const clientId = '62f39d314c6246033c54775c'
const clientSecret = '0bSpJ8L3srpGp59ItdozjN4LFUnQx3yrij8'
const username = 'cw.domo@gmail.com'
const password = 'Le@L@e1718'
let refreshToken = ''
let accessToken = ''
let expiresInTimestamp = 0

// create client
const client = new NetatmoClient(clientId, clientSecret, SCOPE_FULL, { timeout: 1000 })

async function main () {
  console.log('Starting netatmo API')
  try {
    // authenticate
    ({ accessToken, refreshToken, expiresInTimestamp } = await client.authenticate(accessToken, refreshToken, expiresInTimestamp, username, password))
    // get Homes
    const homes = await client.getHomes()
    console.log(JSON.stringify(homes))
    console.log('##############################################')
    // get Station Data
    const station = await client.getStationsData()
    console.log(JSON.stringify(station))
    console.log('##############################################')
  } catch (error) {
    console.log(error)
  }
  console.log('Stopping netatmo API')
}

// Call the main code
main()
