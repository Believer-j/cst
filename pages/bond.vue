<template>
    <div class="wrap">
        <van-nav-bar title="债券" :fixed="true" :placeholder="true" :border="false"
            style="--van-nav-bar-title-font-size: 16px; --van-nav-bar-title-text-color: #0d0e0e; --van-nav-bar-background: #f6f6f6">
            <template #left>
                <van-icon name="arrow-left" color="#0d0e0e" size="20px" @click="$router.back()" />
            </template>
        </van-nav-bar>
        
    </div>
</template>

<script setup lang="ts">


</script>

<style>

</style>
