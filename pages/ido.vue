<template>
    <div class="wrap">
        <van-nav-bar title="IDO释放" :fixed="true" :placeholder="true" :border="false"
            style="--van-nav-bar-title-font-size: 16px; --van-nav-bar-title-text-color: #0d0e0e; --van-nav-bar-background: #f6f6f6">
            <template #left>
                <van-icon name="arrow-left" color="#0d0e0e" size="20px" @click="$router.back()" />
            </template>
        </van-nav-bar>
        <div style="margin: 15px; margin-bottom: 0px;">
            <div class="flex-row flex-between">
                <div class=" flex-column" style="margin-top: 28px;">
                    <span class="font-12 gray-color">IDO认购数量</span>
                    <div class=" black-color" style="margin-top: 6px;">
                        <span class="font-26px font-weight-medium">100.31</span>
                        <span class="font-12 font-weight-medium"> CST</span>
                    </div>
                    <div class="flex-row flex-items-center font-12 font-weight-medium"
                        style="margin-top: 10px; color: #5d5efe;">
                        <span>查看IDO详情</span>
                        <img src="/img/arror-right-blue.png" width="19px" height="16px">
                    </div>
                </div>
                <img src="/img/bond/bond-bg.png" width="200px" height="120px"
                    style="margin-right: -15px; margin-top: 10px;">
            </div>
            <div class=" flex-column" style="margin-top: 17px;">
                <div class=" flex-items-center flex-row">
                    <div class=" flex-row-center"
                        style="background-color: rgba(0, 202, 125, 0.5); height: 20px; width: 20px; border-radius: 50%;">
                        <div class="font-12 font-weight-medium flex-row-center"
                            style="color: white; background-color: rgba(0, 202, 125, 1); height: 14px; width: 14px; border-radius: 50%;">
                            1
                        </div>
                    </div>
                    <span class="font-14" style="color: #00ca7d; margin-left: 9px;">阶段1：可直接领取</span>
                </div>
                <div style="border-left: 1px dashed #00ca7d; margin-left: 10px; margin-top: 2px;">
                    <div
                        style="background-color: white; border-radius: 8px; margin: 8px 5px 18px 20px; padding: 20px 15px 15px 15px; position: relative;">
                        <span class="gradient-text">IDO</span>
                        <span class=" gray-color font-11">阶段1（65%）</span>
                        <p class="black-color font-weight-medium" style="margin-top: 5px;">
                            <span class="font-26">13.12</span>
                            <span class="font-12" style="margin-left: 4px;">CST</span>
                        </p>
                        <div style="margin-top: 13px;">
                            <span class="font-12"
                                style="background-color: #0d0e0e; height: 24px; border-radius: 12px;  color: white; padding: 4px 12px; margin-top: 13px; ">
                                领取
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" flex-column" style="margin-top: 3px;">
                <div class=" flex-items-center flex-row">
                    <div class=" flex-row-center"
                        style="background-color: rgba(0, 202, 125, 0.5); height: 20px; width: 20px; border-radius: 50%;">
                        <div class="font-12 font-weight-medium flex-row-center"
                            style="color: white; background-color: rgba(0, 202, 125, 1); height: 14px; width: 14px; border-radius: 50%;">
                            2
                        </div>
                    </div>
                    <span class="font-14" style="color: #00ca7d; margin-left: 10px;">阶段2：逐步释放</span>
                    <img src="/img/ido-wh-green.png" style="margin-left: 4px;">
                </div>
                <div style="margin-left: 10px; margin-top: 2px;">
                    <div
                        style="background-color: white; border-radius: 8px; margin: 8px 5px 18px 20px; padding: 20px 15px 15px 15px; position: relative;">
                        <span class="gradient-text">IDO</span>
                        <p class="flex-row flex-items-center flex-between">
                            <span class=" gray-color font-11">阶段1（65%）</span>
                            <span class=" gray-color font-11" style="color: #f55454;">6h, 59d</span>
                        </p>
                        <p class="black-color font-weight-medium" style="margin-top: 5px;">
                            <span class="font-26">13.12</span>
                            <span class="font-12" style="margin-left: 4px;">CST</span>
                        </p>
                        <div class=" flex-row" style="border-top: 1px dashed #dbdbdb; margin-top: 17px;">
                            <div class=" flex-column" style="margin-top: 14px; width: 50%;">
                                <span class="font-12 gray-color">已领取</span>
                                <span class="font-15 black-color font-weight-medium" style="margin-top: 3px;">25.000 CST</span>
                            </div>
                            <div class=" flex-column" style="margin-top: 14px; width: 50%;">
                                <span class="font-12 gray-color">已领取</span>
                                <span class="font-15 black-color font-weight-medium" style="margin-top: 3px;">25.000 CST</span>
                            </div>
                        </div>
                        <div style="margin-top: 13px;">
                            <span class="font-12"
                                style="background-color: #0d0e0e; height: 24px; border-radius: 12px;  color: white; padding: 4px 12px; margin-top: 13px; ">
                                领取
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">

const datas = ref([
    {
        title: '',
        rate: '',
        amount: '',
        time: '',
        receive: '',
        received: ''
    },
    {
        title: '',
        rate: '',
        amount: '',
        time: '',
        receive: '',
        received: ''
    }
])

</script>

<style scoped>
.gradient-text {
    font-size: 60px;
    font-weight: 900;
    /* 设置文字的背景为渐变 */
    background: linear-gradient(to bottom, rgba(136, 136, 136, 0.1), rgba(136, 136, 136, 0));
    /* 让背景裁剪成文字的形状 */
    -webkit-background-clip: text;
    background-clip: text;
    /* 使文字颜色透明，从而显示背景色 */
    color: transparent;
    position: absolute;
    right: 12px;
    bottom: 20px;
}
</style>