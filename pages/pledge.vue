<template>
    <div class="warp">
        <van-nav-bar title="质押" :fixed="true" :placeholder="true" :border="false"
            style="--van-nav-bar-title-font-size: 16px; --van-nav-bar-title-text-color: #0d0e0e; --van-nav-bar-background: #f6f6f6">
            <template #left>
                <van-icon name="arrow-left" color="#0d0e0e" size="20px" @click="$router.back()" />
            </template>
        </van-nav-bar>
        <div class=" flex-column">
            <div class=" flex-row flex-between" style="margin-left: 20px;">
                <div class=" flex-column " style="margin-top: 25px;">
                    <p class=" font-11" style="color: #868686;">
                        平台质押CST总价值
                    </p>
                    <p class=" font-weight-medium font-26" style="color: #0d0e0e; margin-top: 3px;">
                        $1200.86
                    </p>
                </div>
                <VanImage src="/img/pledge/pledge-top-bg.png" width="200px" height="120px" style="margin-top: 10px;" />
            </div>
            <div class=" flex-row flex-between"
                style="background-color: white; margin: -33px 15px 23px 15px; border-radius: 12px; height: 150px; z-index: 1; position: relative;">
                <div class=" flex-column" style="margin-left: 15px; margin-top: 15px;">
                    <p class=" font-11" style="color: #868686;">
                        我的sCST
                    </p>
                    <p class=" font-26 font-weight-medium" style="color: #0d0e0e; margin-top: 3px;">
                        0.543
                    </p>
                    <div class=" flex-row flex-items-center" style="margin-top: 28px;">
                        <p class="font-11" style="color: #0d0e0e;">
                            质押APY：
                        </p>
                        <p class="font-14 font-weight-medium" style="color: #00ca7d;">
                            862%
                        </p>
                    </div>
                    <div class=" flex-row flex-items-center" style="margin-top: 5px;">
                        <p class="font-11" style="color: #0d0e0e;">
                            Next Rebase：
                        </p>
                        <p class="font-14 font-weight-medium" style="color: #f55454;">
                            04s, 12m, 06h
                        </p>
                    </div>
                </div>
                <VanImage src="/img/pledge/pledge-mycst.png" width="120px" height="120px"
                    style="margin-top: 20px; margin-right: 15px;" />
                <div
                    style="position: absolute; background-color: rgba(13, 14, 14, 1); border-radius: 100pt 0pt 0pt 100pt; width: 42px; height: 22px; right: 0px; top: 12px;">
                    <VanImage src="/img/pledge/pledge-wh.png" width="16px" height="16px"
                        style="margin-top: 3px; margin-left: 3px;" />
                </div>
            </div>
            <div class=" flex-column" style="margin: 0px 15px;">
                <p class="font-13 font-weight-medium" style="color: #0d0e0e;">质押数量</p>
                <VanField class="VanField"
                    style="margin-left: 0px; margin-top: 5px; width: 100%; background-color: #f6f6f6;"
                    v-model:model-value="amount" :center="true" placeholder="数量" type="number" :min="0" :max="400">
                    <template #right-icon>
                        <p style="color: #0d0e0e; margin-right: 12px">CST</p>
                    </template>
                </VanField>
                <div class=" flex-row flex-items-center" style="margin-top: 10px;">
                    <p class="font-12" style="color: #868686;">
                        CST余额：1000.234
                    </p>
                    <p class="font-12 font-weight-medium" style="color: #5d5efe;">
                        全部参与
                    </p>
                </div>
                <van-highlight style="margin-top: 10px;" keywords="了解更多规则" source-string="需花费额外30%的ETH获得质押权益 了解更多规则"
                    highlight-class="highlightClass" unhighlight-class="highlight" />
                <div class=" flex-row-center font-14 font-weight-medium"
                    style="background-color: #0d0e0e; margin-top: 20px; border-radius: 8px; height: 40px; margin-top: 20px; color: white;">
                    质押
                </div>
            </div>
            <div class=" font-weight-medium font-15" style="color: #0d0e0e; margin-top: 40px; margin-left: 15px;">
                质押列表
                <div
                    style="width: 60px; height: 5px; background: linear-gradient(to right, #7b67f6 0%, white 100%); margin-top: -7px;" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const amount = ref('')

</script>

<style>
.warp {
    min-height: 100vh;
    background-color: #f6f6f6;
}

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
