export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()

  const { customMessage, sendersMessage } = await readBody<{ customMessage: string, sendersMessage: string }>(event)

  return {
    customMessage,
    receiversMessage: runtimeConfig.MESSAGE,
    sendersMessage,
  }
})
