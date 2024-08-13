<script setup>
import translation from '@/i18n/translation'

defineProps({
    links: {
        type: Array,
        required: true
    },
    style: {
        type: String,
        default: "primary"
    }
});
</script>

<template>
    <div :class="bem({ element: 'Wrapper', mod: { style } })" v-if="style === 'primary'">
        <RouterLink
            v-for="link in links"
            :key="link.route"
            :to="translation.route({ name: link.route })"
            :class="bem({ element: 'Link' })"
            :activeClass="`NavBar-Link_active_${style}`"
            :exactActiveClass="`NavBar-Link_active_${style}`"
        >
            {{ link.label }}
        </RouterLink>
    </div>
    <div :class="bem({ element: 'Wrapper' })" v-else>
        <RouterView
            v-for="link in links"
            :key="link.route"
            :name="link.route"
            :class="bem({ element: 'Link' })"
            :activeClass="`NavBar-Link_active_${style}`"
            :exactActiveClass="`NavBar-Link_active_${style}`"
        >
            {{ link.label }}
        </RouterView>
    </div>
</template>

<style lang="scss">
@import './NavBar.style.scss';
</style>
