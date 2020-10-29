<template>
  <img
    data-test-id="menyoo_logo"
    :src="require(`@/assets/images/logo-menyoo-${variant}.svg`)"
    alt="Menyoo Logo"
  />
</template>

<script>
export default {
  name: 'rsty-logo',
  props: {
    variant: {
      type: String,
      default: 'default',
    },
  },
};
</script>
