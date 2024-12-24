<template>
    <div class=" flex-column">
        <div class="topBox flex-column">
            <p class=" font-20 font-weight-medium" style="margin-top: 26px; margin-left: 25px; color: #0d0e0e;">
                IDO
            </p>
            <p class="font-13" style="color: #868686; max-width: 200px; margin-top: 8px; margin-left: 25px;">
                活动详情简介活动详情简介活动详情简介活动详情简介
            </p>
        </div>
        <div class="box flex-column">
            <p class=" font-18 font-weight-medium" style="margin-top: 30px; text-align: center;">
                进行中
            </p>
            <div class="" style="margin-top: 30px; margin-left: 20px; width: calc(100% - 40px); height: 20px;">
                <div class=" flex-row-reverse"
                    style="height: 10px; border-radius: 5px; background-color: rgba(219, 219, 219, 0.3); width: 100%; position: relative;">
                    <div class=" flex-row-center"
                        style="background-color: #00ca7d; width: 12px; height: 12px; margin-top: -1px; border-radius: 50%;">
                        <div style="background-color: white; width: 8px; height: 8px;  border-radius: 50%;" />
                    </div>
                    <div style="position: absolute; background-color: #00ca7d; top: 0px; height: 10px; border-radius: 5px; left: 0px;"
                        :style="{ width: rateLeft + 10 + 'px' }"></div>
                    <div class=" flex-row-center"
                        style="position: absolute; left: 0px; top: -5px; width: 44px; height: 20px; background-color: white; border-radius: 12px;"
                        :style="{ left: rateLeft + 'px' }">
                        <div class=" font-12 font-weight-medium flex-row-center"
                            style="background-color: #00ca7d; height: 18px; width: 42px; border-radius: 16px; color: white;">
                            {{ `${rate * 100}%` }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="font-weight-medium font-12 flex-row flex-items-center flex-between"
                style="margin-left: 20px; width: calc(100% - 40px); margin-top: 4px; color: #0d0e0e;">
                <p>
                    400/500
                </p>
                <p>
                    500ETH
                </p>
            </div>
            <VanField class="VanField" v-model:model-value="amount" :center="true" placeholder="参与数量" type="number"
                :min="0" :max="400" @blur="endInput">
                <template #right-icon>
                    <p style="color: #0d0e0e; margin-right: 12px">USDT</p>
                </template>
            </VanField>
            <div class=" flex-row flex-items-center" style="margin-left: 20px; margin-top: 10px">
                <p class="font-12" style="color: #868686;">
                    ETH余额：1000.234
                </p>
                <p class="font-12 font-weight-medium" style="color: #5d5efe; margin-left: 4px;">
                    全部参与
                </p>
            </div>
            <div class=" flex-row-center"
                style="margin-left: 20px; margin-right: 20px; margin-top: 19px; height: 40px; border-radius: 8px; background-color: #0d0e0e;"
                @click="showJoin = true">
                <p class="font-14 font-weight-medium" style="color: white;">
                    参与IDO
                </p>
                <VanImage src="/img/home/ido-arrow-right.png" width="16px" height="16px" style="margin-left: 4px;" />
            </div>
            <div class="flex-row flex-items-center flex-between"
                style="margin-left: 20px; margin-right: 20px; margin-top: 19px; height: 65px; border-radius: 8px; background-color: #f6f6ff; position: relative;">
                <div class=" flex-column " style="margin-left: 12px;">
                    <p class="font-11" style="color: #868686;">
                        已认购 ETH
                    </p>
                    <p class="font-16 font-weight-medium" style="color: #0d0e0e; margin-top: 3px">
                        10.003456
                    </p>
                </div>
                <div class=" flex-column flex-items-end" style="margin-right: 12px;">
                    <p class="font-11" style="color: #868686;">
                        可获得 CST
                    </p>
                    <p class="font-16 font-weight-medium" style="color: #0d0e0e; margin-top: 3px">
                        1010.009
                    </p>
                </div>
                <VanImage src="/img/home/home-ido-line.png" width="30px" height="5px"
                    style="position: absolute; top: 22px; left: calc(50% - 15px);" />
            </div>
            <div class=" flex-row-center" style="margin: 20px;" @click="showRule = true">
                <p class="font-13" style="color: #5d5efe;">
                    IDO规则
                </p>
                <VanImage src="/img/home/ido-rule-down.png" width="16px" height="16px" style="margin-left: 2px;" />
            </div>
        </div>
        <VanPopup v-model:show="showRule" :close-on-click-overlay="false" style="background-color: transparent;">
            <div class=" flex-column"
                style="background-color: white; width: 305px; border-radius: 10px; position: relative;">
                <p class="font-18 font-weight-semibold " style="text-align: center; color: #161823; margin-top: 17px;">
                    IDO规则
                </p>
                <VanImage src="/img/close-black.png" width="24px" height="25px"
                    style="position: absolute; top: 18px; right: 15px;" @click="showRule = false" />
                <div class="font-14"
                    style="color: #0d0e0e; margin: 27px 20px 37px 20px; max-height: 420px; overflow: scroll;">
                    投票规则：若提案投票数超投票规则：若提案投
                </div>
            </div>
        </VanPopup>
        <VanPopup v-model:show="showJoin" :close-on-click-overlay="false" style="background-color: transparent;">
            <div class=" flex-column"
                style="background-color: white; width: 305px; border-radius: 10px; position: relative;">
                <p class="font-18 font-weight-semibold " style="text-align: center; color: #161823; margin-top: 17px;">
                    参与IDO
                </p>
                <VanImage src="/img/close-black.png" width="24px" height="25px"
                    style="position: absolute; top: 18px; right: 15px;" @click="showJoin = false" />
                <div class=" flex-column font-weight-medium font-14"
                    style="margin: 50px 20px 20px 20px; color: #0d0e0e;">
                    <p>
                        参与数量
                    </p>
                    <VanField class="VanField"
                        style="margin-left: 0px; margin-top: 5px; width: 100%; background-color: rgba(219, 219, 219, 0.4); border: none "
                        v-model:model-value="amount" :center="true" placeholder="参与数量" type="number" :min="0" :max="400"
                        @blur="endInput">
                        <template #right-icon>
                            <p style="color: #0d0e0e; margin-right: 12px">ETH</p>
                        </template>
                    </VanField>
                    <p style="margin-top: 23px;">
                        可获得
                    </p>
                    <VanField class="VanField"
                        style="margin-left: 0px; margin-top: 5px; width: 100%; background-color: rgba(219, 219, 219, 0.4); border: none "
                        v-model:model-value="amount" :center="true" placeholder="参与数量" type="number" :min="0" :max="400"
                        @blur="endInput">
                        <template #right-icon>
                            <p style="color: #0d0e0e; margin-right: 12px">CST</p>
                        </template>
                    </VanField>
                    <div class=" flex-row-center font-14 font-weight-medium"
                        style="width: 100%; background-color: #0d0e0e; border-radius: 10px; height: 44px; color: white; margin-top: 40px;"
                        @click="showJoin = false">
                        确认提交
                    </div>
                </div>
            </div>
        </VanPopup>
    </div>
</template>

<script setup lang="ts">

const showJoin = ref(false)
const showRule = ref(false)
const screenWidth = ref(114)
const rate = ref(1)
const amount = ref('')

const rateLeft = computed(() => {
    return (screenWidth.value - 114) * rate.value
})

onMounted(() => {
    screenWidth.value = window.innerWidth
})

function endInput(e: Event) {
    console.log(amount.value)
}

</script>

<style scoped>
.topBox {
    background-image: url('/public/img/home/home-ido-bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 200px;
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

.box {
    margin-left: 15px;
    margin-right: 15px;
    background-color: white;
    margin-top: -70px;
    border-radius: 8px;

    box-shadow:
        5px 5px 5px rgba(219, 219, 219, 0.4),
        5px -5px 5px rgba(219, 219, 219, 0.4),
        -5px 5px 5px rgba(219, 219, 219, 0.4),
        -5px -5px 5px rgba(219, 219, 219, 0.4);
}
</style>