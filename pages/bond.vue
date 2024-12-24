<template>
    <div class="wrap">
        <van-nav-bar title="债券" :fixed="true" :placeholder="true" :border="false"
            style="--van-nav-bar-title-font-size: 16px; --van-nav-bar-title-text-color: #0d0e0e; --van-nav-bar-background: #f6f6f6">
            <template #left>
                <van-icon name="arrow-left" color="#0d0e0e" size="20px" @click="$router.back()" />
            </template>
            <template #right>
                <van-image src="/img/nav-right.png" width="24px" height="24px"></van-image>
            </template>
        </van-nav-bar>
        <div class=" flex-column" style="margin: 15px;">
            <div class=" flex-row flex-between" style="color: #868686;">
                <div class=" flex-column font-11" style="margin-top: 20px;">
                    <p>金库总价值</p>
                    <p class=" font-26 font-weight-medium" style="color: #0d0e0e; margin-top: 2px;">
                        $54355.34
                    </p>
                    <div class="flex-row flex-items-center" style="margin-top: 17px;">
                        <p style="margin-right: 5px;">LP债券价格</p>
                        <div class=" flex-row-center font-11 font-weight-medium" style="color: white; background-color: #00ca7d; border-radius: 100pt 100pt 100pt 2pt; height: 16px; padding-left: 4px; padding-right: 4px;">
                            3%折扣
                        </div>
                    </div>
                    <p class=" font-26 font-weight-medium" style="color: #0d0e0e; margin-top: 2px;">
                        $54355.34
                    </p>
                    <p>
                        CST价格：$13.878
                    </p>
                </div>
                <van-image src="/img/bond/bond-bg.png" width="200px" height="120px" style="margin-right: -15px;"></van-image>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">



</script>

<style>

</style>
