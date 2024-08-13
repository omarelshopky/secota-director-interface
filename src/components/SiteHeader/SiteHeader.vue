<script setup>
import AppLogo from 'components/AppLogo/AppLogo.vue'
import NavBar from '../NavBar/NavBar.vue';
import UserWelcome from '../UserWelcome/UserWelcome.vue';

const links = [
    {
        "label": "Dashboard",
        "route": "home"
    },
    {
        "label": "Devices",
        "route": "devices"
    },
    {
        "label": "Software Updates",
        "route": "software-updates"
    },
    {
        "label": "Campaigns",
        "route": "campaigns"
    },
];
</script>

<template>
    <div :class="bem({ element: 'Wrapper' })">
        <AppLogo />
        <NavBar :links="links" />
        <UserWelcome />
    </div>
</template>

<style lang="scss">
@import './SiteHeader.style.scss';
</style>
