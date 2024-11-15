export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()

  return {
    message: runtimeConfig.MESSAGE,
  }
})
