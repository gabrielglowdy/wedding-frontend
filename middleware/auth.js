const { login } = useStrapiAuth();
const token = useStrapiToken();
const runtimeConfig = useRuntimeConfig();
const router = useRouter();

const loginAuth = async (to) => {
  const res = await login({ identifier: runtimeConfig.public.user, password: runtimeConfig.public.code });
};
export default defineNuxtRouteMiddleware(async (to, from) => {
  if (!token.value) {
    loginAuth()
  }
})