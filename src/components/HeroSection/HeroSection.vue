<script setup>
import ColorfulCircle from 'components/ColorfulCircle/ColorfulCircle.vue'
import ScrollDown from 'components/ScrollDown/ScrollDown.vue'
import AppLogo from '../AppLogo/AppLogo.vue';
</script>

<template>
    <div :class="bem({ element: 'Wrapper' })">
        <div :class="bem({ element: 'Content' })">
            <div :class="bem({ element: 'LeftColumn' })">
                <span
                    :class="
                        bem({ element: 'Border', mod: { type: 'vertical', location: 'leftRight' } })
                    "
                ></span>
                <span
                    :class="
                        bem({ element: 'Border', mod: { type: 'vertical', location: 'leftLeft' } })
                    "
                ></span>
                <ColorfulCircle color="secondary" location="topLeft" />
            </div>
            <div :class="bem({ element: 'RightColumn' })">
                <span
                    :class="
                        bem({
                            element: 'Border',
                            mod: { type: 'vertical', location: 'rightRight' }
                        })
                    "
                ></span>
                <span
                    :class="
                        bem({ element: 'Border', mod: { type: 'vertical', location: 'rightLeft' } })
                    "
                ></span>
                <span :class="bem({ element: 'RightColumnFarLeftBorder' })"></span>
                <ColorfulCircle color="secondary" location="bottomRight" />
            </div>
            <div :class="bem({ element: 'UpperRow' })">
                <span
                    :class="
                        bem({ element: 'Border', mod: { type: 'horizontal', location: 'lower' } })
                    "
                ></span>
            </div>
            <div :class="bem({ element: 'LowerRow' })">
                <span
                    :class="
                        bem({ element: 'Border', mod: { type: 'horizontal', location: 'upper' } })
                    "
                ></span>
                <div :class="bem({ element: 'ScrollDown' })">
                    <ScrollDown />
                </div>
            </div>
            <div :class="bem({ element: 'CenterWrapper' })">
                <ColorfulCircle color="primary" location="bottomLeft" />
                <ColorfulCircle color="primary" location="topRight" />
                <h1 :class="bem({ element: 'Title' })">
                    {{ $t('framework.name') }}
                    <AppLogo />
                </h1>
                <h2 :class="bem({ element: 'SubTitle' })">
                    {{ $t('framework.title') }}
                    <span> {{ $t('framework.subtitle') }} </span>
                </h2>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/styles/_media.scss';
@import './HeroSection.style.scss';
</style>
