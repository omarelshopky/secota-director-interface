<script setup>
import { onMounted, ref } from 'vue'
import LanguageButton from 'components/LanguageButton/LanguageButton.vue'
import translation from '@/i18n/translation'

const wrapper = ref(null)

const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const header = entry.target.querySelector('.LanguageSelector-Header')
                const selector = entry.target.querySelector('.LanguageSelector-LanguagesContainer')

                if (header) {
                    header.classList.add('LanguageSelector-Header_inView')
                }

                if (selector) {
                    selector.classList.add('LanguageSelector-LanguagesContainer_inView')
                }

                observer.unobserve(entry.target) // To Trigger only once
            }
        })
    },
    {
        threshold: 0.5 // Trigger when 50% of the wrapper on the view port
    }
)

onMounted(() => observer.observe(wrapper.value))
</script>

<template>
    <div ref="wrapper" :class="bem({ element: 'Wrapper' })">
        <div :class="bem({ element: 'Content' })">
            <div :class="bem({ element: 'LanguagesContainer' })">
                <LanguageButton
                    v-for="(locale, index) in translation.supportedLocales"
                    :key="index"
                    :locale="locale"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/styles/_media.scss';
@import './LanguageSelector.style.scss';
</style>
