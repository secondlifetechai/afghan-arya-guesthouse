import payload from 'payload'
import config from '../payload.config' // adjust to your actual config path

let initialized = false

export const initPayload = async () => {
  if (!initialized) {
    await payload.init({ config })
    initialized = true
  }
}

export default payload
