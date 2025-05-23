const inertiaComposables = [
  "useForm",
  "usePage",
  "useRemember",
  "usePrefetch",
  "router",
]

export const InertiaVueResolver = () => {
  return (name: string) => {
    if (inertiaComposables.includes(name)) {
      return {
        name,
        from: "@inertiajs/vue3",
      }
    }
  }
}
