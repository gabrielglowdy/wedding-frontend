export default defineNuxtRouteMiddleware(async (to, from) => {
  const token = useStrapiToken();
  const { login } = useStrapiAuth();
  
  if (!token.value) {
    const runtimeConfig = useRuntimeConfig();
    const res = await login({ identifier: runtimeConfig.public.user, password: runtimeConfig.public.code })
  }
})