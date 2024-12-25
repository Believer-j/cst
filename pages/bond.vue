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
                        <div class=" flex-row-center font-11 font-weight-medium"
                            style="color: white; background-color: #00ca7d; border-radius: 100pt 100pt 100pt 2pt; height: 16px; padding-left: 4px; padding-right: 4px;">
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
                <van-image src="/img/bond/bond-bg.png" width="200px" height="120px"
                    style="margin-right: -15px;"></van-image>
            </div>
            <div class=" flex-row flex-items-center flex-around font-12 font-weight-bold"
                style="color: #7b67f6; border-radius: 8px; height: 32px; width: 100%; background-color: rgba(123, 103, 246, 0.1); margin-top: 21px;">
                <p>ETH</p>
                <van-image src="/img/home/home-ido-line.png" style="width: 31px; height: 5px;"></van-image>
                <p>LP BONDS</p>
                <van-image src="/img/home/home-ido-line.png" style="width: 31px; height: 5px;"></van-image>
                <p>STAKE</p>
            </div>
            <div class=" flex-column" style="margin-top: 23px;">
                <p class="font-13 font-weight-medium" style="color: #0d0e0e;">购买数量</p>
                <VanField class="VanField"
                    style="margin-left: 0px; margin-top: 5px; width: 100%; background-color: #f6f6f6;"
                    v-model:model-value="amount" :center="true" placeholder="数量" type="number" :min="0" :max="400">
                    <template #right-icon>
                        <p style="color: #0d0e0e; margin-right: 12px">ETH</p>
                    </template>
                </VanField>
                <div class=" flex-row flex-items-center" style="margin-top: 10px;">
                    <p class="font-12" style="color: #868686;">
                        ETH余额：1000.234
                    </p>
                    <p class="font-12 font-weight-medium" style="color: #5d5efe;">
                        全部参与
                    </p>
                </div>
                <van-highlight style="margin-top: 10px;" keywords="了解更多规则"
                    source-string="购买债券所得的CST需全额质押，花费额外30%的ETH获得质押权益 了解更多规则" highlight-class="highlightClass"
                    unhighlight-class="highlight" />
                <div class=" flex-row-center font-14 font-weight-medium"
                    style="background-color: #0d0e0e; margin-top: 20px; border-radius: 8px; height: 40px; margin-top: 20px; color: white;"
                    @click="">
                    购买
                </div>
            </div>
            <div class=" font-weight-medium font-15" style="color: #0d0e0e; margin-top: 40px;">
                购买记录
                <div
                    style="width: 60px; height: 5px; background: linear-gradient(to right, #7b67f6 0%, white 100%); margin-top: -7px;">
                </div>
            </div>

            <div v-for="(item, index) in 4" :key="index" class="font-12"
                style="margin-top: 12px; margin-bottom: 12px; padding: 14px 12px; background-color: white; border-radius: 10px; color: #0d0e0e;"
                :style="{ marginTop: index == 0 ? '12px' : '' }">
                <div class="flex-row flex-items-center flex-between">
                    <p style="color: #868686;">
                        时间
                    </p>
                    <p class=" font-weight-medium">
                        2023/03/29 12:00:00
                    </p>
                </div>
                <div class="flex-row flex-items-center flex-between" style="margin-top: 9px;">
                    <p style="color: #868686;">
                        支付ETH
                    </p>
                    <p class=" font-weight-medium">
                        5.000 ETH
                    </p>
                </div>
                <div class="flex-row flex-items-center flex-between" style="margin-top: 9px;">
                    <p style="color: #868686;">
                        CST数量
                    </p>
                    <p class=" font-weight-medium">
                        0.000 CST
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const amount = ref('')


</script>

<style>
.highlight {
    font-size: 12px;
    color: #868686;
}

.highlightClass {
    color: #5d5efe;
    font-size: 12px;
    font-weight: 500;
}

.VanField {
    --van-field-input-text-color: #0d0e0e;
    --van-field-placeholder-text-color: #cfcfcf;
    padding: 0px;
    padding-left: 12px;
    font-size: 14px;
    font-weight: 500;
    border: 1px solid #dbdbdb;
    margin-left: 20px;
    margin-top: 28px;
    height: 44px;
    border-radius: 8px;
    width: calc(100% - 40px)
}
</style>
