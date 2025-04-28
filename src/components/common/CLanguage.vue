<script lang="ts" setup>
import { NPopover, NCheckbox } from 'naive-ui'
import en from '@/assets/icons/en.svg'
import zh from '@/assets/icons/zh.svg'

import i18n from '@/i18n'
const showPopover = ref(false)
const languages = [
    { name: 'English', code: 'en', icon: en },
    { name: 'Chinese ', code: 'zh', icon: zh },
]

const currentLang = ref(localStorage.getItem('app-lang') || 'en')
const changeLanguage = (lang: string) => {
    localStorage.setItem('app-lang', lang)
    i18n.global.locale.value = lang as 'en' | 'zh' | 'km'
    currentLang.value = lang
    showPopover.value = false
}

const languageIcon = computed(() => {
    const selectedLanguage = languages.find((lang) => lang.code === currentLang.value)
    return selectedLanguage ? selectedLanguage.icon : ''
})

</script>

<template>
    <div class="flex items-center gap-10 p-6 mr-40 md:mr-0">
        <img :src="languageIcon" :alt="currentLang" class="w-32 h-32 ml-10" />
        <span class="cursor-pointer text-16 font-500">{{
            languages.find((lang) => lang.code === currentLang)?.name
            }}</span>
        <n-popover trigger="hover" placement="bottom-end" class="cursor-pointer">
            <template #trigger>
                <div class="group">
                    <SvgIcon name="arrow-down" size="12"
                        class="transition-transform duration-300 group-hover:rotate-180" color="#ffff" />
                </div>
            </template>
            <div class="flex flex-col gap-16 p-4">
                <div v-for="lang in languages" :key="lang.code" class="flex items-center gap-10 cursor-pointer">
                    <img :src="lang.icon" :alt="lang.name" class="w-24 h-24" />
                    <span class="text-16 font-500">{{ lang.name }}</span>
                    <n-checkbox :value="currentLang" :checked="currentLang === lang.code" class="ml-auto cursor-pointer"
                        @update:checked="changeLanguage(lang.code)"></n-checkbox>
                </div>
            </div>
        </n-popover>
    </div>
</template>