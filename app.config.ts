export default defineAppConfig({
  icon: {
    mode: 'svg',
  },
  ui: {
    colors: {
      primary: 'amber',
      neutral: 'neutral',
    },
    button: {
      slots: {
        base: ['justify-center cursor-pointer'],
      },
      variants: {
        size: {
          xl: {
            leadingIcon: 'size-4',
            trailingIcon: 'size-4',
          },
        },
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: 'solid',
          class: 'text-neutral-950',
        },
      ],
    },
  },
})
