export default defineEventHandler(async (event) => {
  const { host, customMessage } = await readBody<{ host: string, customMessage: string }>(event)

  const runtimeConfig = useRuntimeConfig()

  // get message request
  const getMessageResult = await $fetch(`${host}/api/message`)

  // post message request
  const postMessageResult = await $fetch(`${host}/api/message`, {
    method: 'POST',
    body: {
      customMessage,
      sendersMessage: runtimeConfig.MESSAGE,
    }
  })

  return {
    getMessageResult,
    postMessageResult,
  }
})
