<template>
    <div class="wrap">
        <van-nav-bar title="董事会" :fixed="true" :placeholder="true" :border="false"
            style="--van-nav-bar-title-font-size: 16px; --van-nav-bar-title-text-color: #0d0e0e; --van-nav-bar-background: #f6f6f6">
            <template #left>
                <van-icon name="arrow-left" color="#0d0e0e" size="20px" @click="$router.back()" />
            </template>
            <template #right>
                <van-image src="/img/nav-right.png" width="24px" height="24px"></van-image>
            </template>
        </van-nav-bar>
        <div class="flex-row">
            <div style="position: relative; z-index: 1;">
                <div style="height: 32px; width: 142px; border-radius: 100px 0px 0px 100px; background-color: red;" class=" flex-row-center">
                    sdas
                </div>
                <div
                    style="width: 0; height: 0; position: absolute; border-style: solid; border-color: transparent transparent transparent red; border-width: 0px 40px 32px 20px; left: 142px; top: 0px;">
                </div>
            </div>
            <div style="position: relative; margin-left: 6px;">
                <div style="height: 32px; width: 162px; border-radius: 0px 100px 100px 0px; background-color: red;" class=" flex-row-center">
                    xxx
                </div>
                <div
                    style="width: 0; height: 0; position: absolute; border-style: solid; border-color: transparent transparent transparent white; border-width: 0px 20px 33px 20px; left: 0px; top: 0px;">
                </div>
            </div>
        </div>


    </div>
</template>

<script setup lang="ts">



</script>

<style></style>