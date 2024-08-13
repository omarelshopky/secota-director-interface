<script setup>
import AppLogo from 'components/AppLogo/AppLogo.vue'
</script>

<template>
    <div :class="bem({ element: 'Wrapper' })">
        <div :class="bem({ element: 'LogoWrapper' })">
            <AppLogo />
        </div>
        <div :class="bem({ element: 'TextWrapper' })">
            <span :class="bem({ element: 'Text', mod: { color: 'black' } })">
                Welcome
            </span>
            <span :class="bem({ element: 'Text', mod: { color: 'primary' } })">
                Omar Elshopky
            </span>
        </div>
    </div>
</template>

<style lang="scss">
@import './UserWelcome.style.scss';
</style>
