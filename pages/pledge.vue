<template>
    <div class="wrap">
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
                style="background-color: white; margin: -33px 15px 23px 15px; border-radius: 12px; height: 150px; z-index: 0; position: relative;">
                <div class=" flex-column" style="margin-left: 15px; margin-top: 15px;">
                    <p class=" font-11" style="color: #868686;">
                        我的CST
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
                    style="background-color: #0d0e0e; margin-top: 20px; border-radius: 8px; height: 40px; margin-top: 20px; color: white;" @click="showPledge = true">
                    质押
                </div>
            </div>
            <div class=" font-weight-medium font-15" style="color: #0d0e0e; margin-top: 40px; margin-left: 15px;">
                质押列表
                <div
                    style="width: 60px; height: 5px; background: linear-gradient(to right, #7b67f6 0%, white 100%); margin-top: -7px;">
                </div>
            </div>
            <div class=" flex-row" style="height: 36px; margin-top: 19px;">
                <div v-for="(item, index) in segments" :key="index" class="font-13 font-weight-medium flex-column flex-items-center" @click="segmentTap(index)">
                    <div class="segment flex-row-center" :style="{
                        backgroundColor: segmentIndex == index ? '#7b67f6' : '#ffffff',
                        color: segmentIndex == index ? '#ffffff' : '#868686',
                        marginLeft: index == 0 ? '15px' : '10px'
                    }">
                        {{ item }}
                    </div>
                    <VanImage v-show="segmentIndex == index" src="/img/segmentDrop.png" width="22px" height=" 4px" :style="{}" />
                </div>
            </div>
            <van-highlight v-if="segmentIndex == 1" style="margin-top: 12px; color: #868686; margin-left: 15px; font-size: 12px;" keywords="收益领取" source-string="解押后领取质押奖励请点击 收益领取"
                    highlight-class="highlightClass" unhighlight-class="highlight" />
            <div v-for="(item, index) in 4" :key="index" class="font-12" style="margin: 12px 15px; padding: 14px 12px; background-color: white; border-radius: 10px; color: #0d0e0e;" :style="{marginTop: index == 0 ? '12px' : ''}">
                <div class="flex-row flex-items-center flex-between">
                    <p style="color: #868686;">
                        质押时间
                    </p>
                    <p class=" font-weight-medium">
                        2023/03/29 12:00:00
                    </p>
                </div>
                <div class="flex-row flex-items-center flex-between" style="margin-top: 9px;">
                    <p style="color: #868686;">
                        质押本金
                    </p>
                    <p class=" font-weight-medium">
                        5.000 CST
                    </p>
                </div>
                <div class="flex-row flex-items-center flex-between" style="margin-top: 9px;">
                    <p style="color: #868686;">
                        下一个Rebase收益
                    </p>
                    <p class=" font-weight-medium">
                        0.000 CST
                    </p>
                </div>
                <div class="flex-row flex-items-center flex-between" style="margin-top: 9px;">
                    <p style="color: #868686;">
                        质押总收益
                    </p>
                    <p class=" font-weight-medium">
                        0.000 CST
                    </p>
                </div>
                <div v-if="segmentIndex == 0" class=" flex-row-reverse" style="margin-top: 14px;">
                    <div class="font-12 flex-row-center" style="color: #ffffff; background-color: #0d0e0e; border-radius: 12px; height: 24px; width: 48px;" @click="liftTap(index)">
                        解压
                    </div>
                </div>
            </div>
        </div>

        <VanPopup v-model:show="showPledge" :close-on-click-overlay="false" style="background-color: transparent;">
            <div class=" flex-column"
                style="background-color: white; width: 305px; border-radius: 10px; position: relative;">
                <p class="font-18 font-weight-semibold " style="text-align: center; color: #161823; margin-top: 17px;">
                    质押
                </p>
                <VanImage src="/img/close-black.png" width="24px" height="25px"
                    style="position: absolute; top: 18px; right: 15px;" @click="showPledge = false" />
                <div class=" flex-column font-weight-medium font-14"
                    style="margin: 50px 20px 20px 20px; color: #0d0e0e;">
                    <p>
                        质押数量
                    </p>
                    <VanField class="VanField"
                        style="margin-left: 0px; margin-top: 5px; width: 100%; background-color: rgba(219, 219, 219, 0.4); border: none "
                        v-model:model-value="amount" :center="true" placeholder="质押数量" type="number" :min="0" :max="400">
                        <template #right-icon>
                            <p style="color: #0d0e0e; margin-right: 12px">CST</p>
                        </template>
                    </VanField>
                    <p style="margin-top: 23px;">
                        预估花费ETH数量
                    </p>
                    <VanField class="VanField"
                        style="margin-left: 0px; margin-top: 5px; width: 100%; background-color: rgba(219, 219, 219, 0.4); border: none "
                        v-model:model-value="amount" :center="true" placeholder="参与数量" type="number" :min="0" :max="400">
                        <template #right-icon>
                            <p style="color: #0d0e0e; margin-right: 12px">ETH</p>
                        </template>
                    </VanField>
                    <div class=" flex-row-center font-14 font-weight-medium"
                        style="width: 100%; background-color: #0d0e0e; border-radius: 10px; height: 44px; color: white; margin-top: 40px;"
                        @click="showPledge = false">
                        确认提交
                    </div>
                </div>
            </div>
        </VanPopup>
        <Alert ref="alert" title="解押" msg="确定要解押吗？" @confirm="liftConfirm" />
    </div>
</template>

<script setup lang="ts">
// 获取alert的ref
const alert = useTemplateRef('alert')
const showPledge = ref(false)
const segments = ref(['质押中', '已解押'])
const segmentIndex = ref(0)
const amount = ref('')

function segmentTap(index: number) {
    segmentIndex.value = index
}

function liftTap(index: number) {
    alert.value?.showAlert(index)
}

function liftConfirm(index: any) {
    console.log(index)
}

</script>

<style>
.segment {
    border-radius: 10px;
    width: 71px;
    height: 32px;
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
