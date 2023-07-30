
<template>
    <div class="search-input">
        <div class="search-type">
            <span class="search-type-trigger" @click="changeSearchTypeVisble">{{ currentType }}</span>
            <Transition name="selector">
                <div class="search-type-panel" v-if="state.searchTypeSelect">
                    <div v-for="t in TYPES" class="search-type-item" @click="changeSearchType(t.value)">{{ t.label }}</div>
                </div>
            </Transition>
        </div>
        <input type="text" placeholder="输入你的关键词" v-model="state.searchInput" @keyup.enter="handleSubmit">
    </div>
</template>


<script setup lang="ts">
import { computed, reactive } from 'vue';
const searchType = window.sessionStorage.getItem('searchType') || 'bing'

const TYPES = [
    {
        label: '必应',
        value: 'bing',
        url(textValue: string) {
            return `https://cn.bing.com/search?q=${textValue}`
        }
    },
    {
        label: '百度',
        value: 'baidu',
        url(textValue: string) {
            return `https://www.baidu.com/s?wd=${textValue}`
        }
    },
    {
        label: '谷歌',
        value: 'google',
        url(textValue: string) {
            return `https://www.google.com/search?q=${textValue}`
        }
    },
    {
        label: 'PHind',
        value: 'phind',
        url(textValue: string) {
            return `https://www.phind.com/agent?q=${textValue}&source=searchbox`
        }
    }
]

const state = reactive({
    searchInput: '',
    searchType: searchType,
    searchTypeSelect: false
})

const handleSubmit = () => {
    const item = TYPES.find(t => t.value === state.searchType)
    if (!item) return
    const target = item.url(state.searchInput)
    state.searchInput = ''
    window.open(target)
}

const changeSearchTypeVisble = () => {
    state.searchTypeSelect = !state.searchTypeSelect
}

const changeSearchType = (type: string) => {
    state.searchType = type

    window.sessionStorage.setItem('searchType', type)
    state.searchTypeSelect = false
}

const currentType = computed(() => {
    const t = TYPES.find(t => t.value === state.searchType)
    return t ? t.label : ''
})



</script>


<style scoped>
.search-type-item:hover {
    background-color: #efefef;
    cursor: pointer;
}

.search-type-item {
    padding: 0 10px;
    height: 28px;
    line-height: 28px;
}

.search-type {
    position: relative;
}

.search-type .search-type-panel {
    position: absolute;
    left: -10px;
    top: 200%;
    background-color: #fff;
    border-radius: 4px;
    padding: 8px 0;
}

.search-type-trigger {
    width: 50px;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    padding-right: 10px;
}

.search-input {
    width: 30%;
    height: 50px;
    min-width: 800px;
    box-shadow: 3px 3px 8px rgba(0,0,0,.5);
    border-radius: 10px;
    background-color: #fff;
    border: solid 1px #efefef;
    display: flex;
    align-items: center;
    padding-left: 10px;
    z-index: 3;
}

.search-input input {
    height: 100%;
    width: 100%;
    outline: none;
    padding-left: 10px;
    font-size: 16px;
    background: none;
    line-height: 50px;
    border-radius: 4px;
    border: none;
}
</style>