export default defineNuxtRouteMiddleware((to, from) => {
  const { status } = useAuth();

  if (status.value === 'authenticated' && to.path !== '/admin/login') {
    return true;
  } else if (to.query.callbackUrl) {
    return navigateTo('/admin/login');
  }
});
