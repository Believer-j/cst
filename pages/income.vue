<template>
    <div class="wrap">
        <van-nav-bar title="收益领取" :fixed="true" :placeholder="true" :border="false"
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
                    <p>质押总收益</p>
                    <div class=" flex-row flex-items-end" style="margin-top: 2px;">
                        <p class=" font-26 font-weight-medium" style="color: #0d0e0e; ">
                            54355.34
                        </p>
                        <p class=" font-12 font-weight-medium"
                            style="color: #140000; margin-left: 3px; margin-bottom: 3px;">CST
                        </p>
                    </div>
                    <div class=" flex-row flex-items-center" style="margin-top: 11px;">
                        <p class=" font-11" style="color: #0d0e0e;">
                            待领取收益
                        </p>
                        <p class=" font-weight-medium font-11" style="color: #00ca7d; margin-left: 3px;">
                            1200.86 CST
                        </p>
                    </div>

                </div>
                <van-image src="/img/bond/bond-bg.png" width="200px" height="120px"
                    style="margin-right: -15px;"></van-image>
            </div>

            <div class=" flex-row" style="height: 36px; margin-top: 13px;">
                <div v-for="(item, index) in segments" :key="index"
                    class="font-13 font-weight-medium flex-column flex-items-center" @click="segmentTap(index)">
                    <div class="segment flex-row-center" :style="{
                        backgroundColor: segmentIndex == index ? '#7b67f6' : '#ffffff',
                        color: segmentIndex == index ? '#ffffff' : '#868686',
                        marginLeft: index == 0 ? '' : '10px'
                    }">
                        {{ item }}
                    </div>
                    <VanImage v-show="segmentIndex == index" src="/img/segmentDrop.png" width="22px" height=" 4px"
                        :style="{}" />
                </div>
            </div>
            <div v-if="segmentIndex == 0" class=" flex-column">
                <div v-for="(item, index) in 6" :key="index" class="item flex-column"
                    :style="{ marginTop: index == 0 ? '12px' : '' }">
                    <div class="flex-row flex-between flex-items-center">
                        <p>剩余释放时长</p>
                        <p class=" font-weight-medium" style="color: #f55454;">
                            6h, 59d
                        </p>
                    </div>
                    <div class="flex-row flex-between flex-items-center" style="margin-top: 7px;">
                        <p>待领取收益</p>
                        <p class=" font-weight-medium" style="color: #0d0e0e;">
                            2.000 CST
                        </p>
                    </div>
                    <van-divider dashed style="--van-divider-border-color: #dbdbdb; margin-top: 14px;"></van-divider>
                    <div class="flex-row flex-between flex-items-center">
                        <p>质押总收益</p>
                        <p class=" font-weight-medium" style="color: #0d0e0e;">
                            2.000 CST
                        </p>
                    </div>
                    <div class="flex-row flex-between flex-items-center" style="margin-top: 7px;">
                        <p>已领取收益</p>
                        <p class=" font-weight-medium" style="color: #0d0e0e;">
                            2.000 CST
                        </p>
                    </div>
                    <div class="flex-row flex-between flex-items-center" style="margin-top: 7px;">
                        <p>未释放收益</p>
                        <p class=" font-weight-medium" style="color: #0d0e0e;">
                            2.000 CST
                        </p>
                    </div>
                    <div class="flex-row flex-between flex-items-center" style="margin-top: 7px;">
                        <p>质押时间</p>
                        <p class=" font-weight-medium" style="color: #0d0e0e;">
                            2023/03/29 12:00:00
                        </p>
                    </div>
                    <div class="flex-row flex-between flex-items-center" style="margin-top: 7px;">
                        <p>解押时间</p>
                        <p class=" font-weight-medium" style="color: #0d0e0e;">
                            2023/03/29 12:00:00
                        </p>
                    </div>
                    <div class="flex-row flex-between flex-items-center" style="margin-top: 7px;">
                        <p>质押本金</p>
                        <p class=" font-weight-medium" style="color: #0d0e0e;">
                            2.000 CST
                        </p>
                    </div>
                    <div class="flex-row flex-between flex-items-center" style="margin-top: 7px;">
                        <p>释放时长</p>
                        <p class=" font-weight-medium" style="color: #0d0e0e;">
                            180天
                        </p>
                    </div>
                    <div class=" flex-row flex-items-center flex-between" style="margin-top: 14px;">
                        <div class=" flex-row flex-items-center">
                            <p style="color: #5d5efe; margin-right: 2px;" class=" font-13">
                                MORE
                            </p>
                            <VanImage src="/img/bond/income-drop.png" width="16px" height="16px"
                                :class="[index == 1 && 'rotate']" />
                        </div>
                        <div class=" font-12 flex-row-center"
                            style="background-color: #0d0e0e; height: 24px; border-radius: 12px; padding-left: 12px; padding-right: 12px; color: white;">
                            领取收益
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class=" flex-column">
                <div v-for="(item, index) in 6" :key="index" class="item flex-column"
                    :style="{ marginTop: index == 0 ? '12px' : '' }">
                    <div class="flex-row flex-between flex-items-center">
                        <p>质押总收益</p>
                        <p class=" font-weight-medium" style="color: #0d0e0e;;">
                            2.000 CST
                        </p>
                    </div>
                    <div class="flex-row flex-between flex-items-center" style="margin-top: 7px;">
                        <p>质押时间</p>
                        <p class=" font-weight-medium" style="color: #0d0e0e;">
                            2023/03/29 12:00:00
                        </p>
                    </div>
                    <div class="flex-row flex-between flex-items-center" style="margin-top: 7px;">
                        <p>解押时间</p>
                        <p class=" font-weight-medium" style="color: #0d0e0e;">
                            2023/03/29 12:00:00
                        </p>
                    </div>
                    <div class="flex-row flex-between flex-items-center" style="margin-top: 7px;">
                        <p>质押本金</p>
                        <p class=" font-weight-medium" style="color: #0d0e0e;">
                            5.000 CST
                        </p>
                    </div>
                    <div class="flex-row flex-between flex-items-center" style="margin-top: 7px;">
                        <p>释放时长</p>
                        <p class=" font-weight-medium" style="color: #0d0e0e;">
                            180天
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">

const segments = ref(['释放中', '已领完'])
const segmentIndex = ref(0)

function segmentTap(index: number) {
    segmentIndex.value = index
}

</script>

<style scoped>
.item {
    background-color: white;
    border-radius: 10px;
    margin-bottom: 12px;
    padding: 14px 12px;
    color: #868686;
    font-size: 12px;

    .rotate {
        transform: rotate(180deg);
    }
}

.segment {
    border-radius: 10px;
    width: 71px;
    height: 32px;
}
</style>