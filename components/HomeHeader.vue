<template>
    <div class="header flex-column">
        <div class=" flex-row flex-items-center flex-between" style="margin: 53px 15px 20px 15px;">
            <van-image height="32px" src="/img/home/home-nav-logo.png" />
            <div class=" flex-row flex-items-center">
                <VanImage width="34px" src="/img/home/nav-reward.png" />
                <div class=" flex-row flex-items-center" style="margin-left: 13px;">
                    <VanImage width="28px" src="/img/home/nav-wallet.png" />
                    <p class="wallet font-12">0x**89df</p>
                    <VanImage width="16px" src="/img/home/nav-none.png" style="margin-left: -4px; margin-top: 6px;" />
                </div>
            </div>
        </div>
        <van-tabs v-model:active="active" line-width="30px" title-active-color="#7b67f6" title-inactive-color="#868686" color="#7b67f6">
            <van-tab v-for="(item, index) in tabs" :key="index">
                <template #title>
                    <div class=" flex-column flex-items-center" style="margin-bottom: 5px;">
                        <VanImage width="24px" height="24px" :src="`/img/home/${item.imageName}.png`" />
                        <div class=" font-10" style="line-height: 12px;">{{ item.title }}</div>
                    </div>
                </template>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script setup lang="ts">

const active = ref(0)
const tabs = ref([
    { title: '浏览', imageName: 'nav-tab-cst' },
    { title: 'Casino', imageName: 'nav-tab-cst' },
    { title: '邀请', imageName: 'nav-tab-cst' },
    { title: 'CST', imageName: 'nav-tab-cst' }
])


</script>

<style scoped>
.header {
    overflow: hidden;
    width: 100%;
    height: 152px;
    background-image: url('../public/img/home/home-nav-bg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;

    .tabTitle {
        font-size: 16px;
    }

    .wallet {
        color: #0d0e0e;
    }
}
</style>