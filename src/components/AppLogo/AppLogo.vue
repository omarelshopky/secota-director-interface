<script setup>
// eslint-disable-next-line no-unused-vars
const unusedVariableCreatedToEnableTheBemMixin = false
</script>

<template>
    <img :class="bem({ element: 'Logo' })" src="/secota-logo.png" />
</template>

<style lang="scss">
@import './AppLogo.style.scss';
</style>
