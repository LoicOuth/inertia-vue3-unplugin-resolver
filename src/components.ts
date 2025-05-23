const inertiaComponents = ["Deferred", "Head", "Link", "WhenVisible"]

export const InertiaVueComponentResolver = () => {
  return (name: string) => {
    if (inertiaComponents.includes(name)) {
      return {
        name,
        from: "@inertiajs/vue3",
      }
    }
  }
}
