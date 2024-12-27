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
        <div class=" flex-column"
            style=" background: linear-gradient(to bottom, rgba(164, 85, 255, 0.24) 0%, #f6f6f6 200px);">
            <p class=" black-color font-20 font-weight-medium" style="margin-top: 33px; margin-left: 40px;">
                海报
            </p>
            <p class=" font-15" style="color: rgba(13, 14, 14, 0.52); margin-top: 15px; margin-left: 40px;">
                副标题说明
            </p>
            <div
                style="margin: 23px 15px 0px 15px; padding: 15px; border-radius: 8px; background-color: white; position: relative;">
                <div class=" font-weight-medium font-15" style="color: #0d0e0e;">
                    金库资产
                    <div
                        style="width: 80px; height: 5px; background: linear-gradient(to right, #7b67f6 0%, white 100%); margin-top: -5px;">
                    </div>
                </div>
                <div class=" flex-column flex-center"
                    style="background-color: #f6f6f6; border-radius: 8px; height: 72px; padding-left: 15px; margin-top: 14px;">
                    <p class=" gray-color font-12">CST-ETH LP</p>
                    <p class=" black-color font-15 font-weight-medium" style="margin-top: 3px;">12.313 ETH</p>
                </div>
                <div class=" flex-column flex-center"
                    style="background-color: #f6f6f6; border-radius: 8px; height: 72px; padding-left: 15px; margin-top: 9px;">
                    <p class=" gray-color font-12">ETH</p>
                    <p class=" black-color font-15 font-weight-medium" style="margin-top: 3px;">12.313 ETH</p>
                </div>
                <img src="/img/board-top-bg.png" width="162px" height="132px"
                    style="position: absolute; top: 0px; right: 0px;" />
            </div>
            <div
                style="margin: 20px 15px 0px 15px; padding: 15px; padding-bottom: 20px; border-radius: 8px; background-color: white; ">
                <div class=" flex-row flex-items-center flex-between">
                    <div class=" font-weight-medium font-15" style="color: #0d0e0e;">
                        董事会
                        <div
                            style="width: 80px; height: 5px; background: linear-gradient(to right, #7b67f6 0%, white 100%); margin-top: -5px;">
                        </div>
                    </div>
                    <div class=" flex-row flex-items-center">
                        <p class="font-13" style="color: #5d5efe;">
                            查看成员
                        </p>
                        <img src="/img/arror-right-blue.png" width="19px" height="16px">
                    </div>
                </div>
                <div class=" flex-row flex-between flex-items-center"
                    style="background-color: rgba(123, 103, 246, 0.06); height: 72px; border-radius: 8px; padding-left: 12px; margin-top: 14px;">
                    <div class=" flex-column">
                        <p class=" gray-color font-12">节点级别</p>
                        <p class="font-15 font-weight-medium black-color" style="margin-top: 3px;">高级节点</p>
                    </div>
                    <img src="/img/board-agree.png" width="48px" height="28px" />
                </div>
                <div class=" flex-row flex-between flex-items-center"
                    style="background-color: rgba(123, 103, 246, 0.06); height: 72px; border-radius: 8px; padding-left: 12px; margin-top: 10px;">
                    <div class=" flex-column">
                        <p class=" gray-color font-12">团队质押CST本金</p>
                        <p class="font-15 font-weight-medium black-color" style="margin-top: 3px;">$13123</p>
                    </div>
                    <img src="/img/board-refuse.png" width="48px" height="28px" />
                </div>
                <div v-if="isJoined" class=" flex-row flex-items-center"
                    style="background-color: rgba(255, 102, 40, 0.06); border-radius: 8px; margin-top: 10px;">
                    <img src="/img/board-joined.png" width="58px" height="72px" style="margin-left: 10px;">
                    <p class="font-12" style="color: #ff6628; margin-right: 15px; margin-left: 7px;">恭喜，您已进入董事会，拥有提案的多签投票权和董事会分红权益。</p>
                </div>
                <div v-else class=" flex-row-center font-14 font-weight-medium"
                    style="border-radius: 8px; height: 40px; margin-top: 20px; color: white; background-color: #0d0e0e;">
                    <span style="margin-right: 4px;">加入</span>
                    <img src="/img/home/ido-arrow-right.png" width="16px" height="16px">
                </div>
                <div class="font-13 flex-row-center" style="color: #5d5efe; margin-top: 20px;">
                    了解董事会规则
                </div>
            </div>
            <div class=" flex-row" style="height: 36px; margin-top: 40px;">
                <div v-for="(item, index) in segments" :key="index"
                    class="font-13 font-weight-medium flex-column flex-items-center" @click="segmentTap(index)">
                    <div class="segment flex-row-center" :style="{
                        backgroundColor: segmentIndex == index ? '#7b67f6' : '#ffffff',
                        color: segmentIndex == index ? '#ffffff' : '#868686',
                        marginLeft: index == 0 ? '15px' : '10px'
                    }">
                        {{ item }}
                    </div>
                    <VanImage v-show="segmentIndex == index" src="/img/segmentDrop.png" width="22px" height=" 4px"
                        :style="{}" />
                </div>
            </div>
            <div v-for="(item, index) in 5" :key="index" class="font-12"
                style="margin: 12px 15px; border-radius: 10px; background-color: white; padding: 14px 12px; color: #868686;"
                :style="{
                    marginTop: index == 0 ? '12px' : ''
                }">
                <div class="flex-row flex-items-center flex-between">
                    <p>提案编号</p>
                    <p class="item_con">1235677889</p>
                </div>
                <div class="flex-row flex-items-center flex-between" style="margin-top: 6px;">
                    <p>提案内容</p>
                    <div class="item_look">
                        查看
                    </div>
                </div>
                <div class="flex-row flex-items-center flex-between" style="margin-top: 9px;">
                    <p>提案资金</p>
                    <p class="item_con">2.000 LP</p>
                </div>
                <div class="flex-row flex-items-center flex-between" style="margin-top: 9px;">
                    <p>开始时间</p>
                    <p class="item_con">2023/03/29 12:00:00</p>
                </div>
                <div class="flex-row flex-items-center flex-between" style="margin-top: 9px;">
                    <p>结束时间</p>
                    <p class="item_con">2023/03/29 12:00:00</p>
                </div>
                <div v-if="segmentIndex == 0" class="flex-row flex-items-center flex-between" style="margin-top: 9px;">
                    <p>赞成数量</p>
                    <p class="item_con">202</p>
                </div>
                <div v-if="segmentIndex == 0" class="flex-row flex-items-center flex-between" style="margin-top: 9px;">
                    <p>反对数量</p>
                    <p class="item_con">202</p>
                </div>
                <div class="flex-row flex-items-center flex-between" style="margin-top: 9px;">
                    <p>状态</p>
                    <p class="item_con">成功</p>
                </div>
                <div v-if="segmentIndex == 0" class="flex-row flex-center" style="margin-top: 14px;">
                    <div class="item_btn_left">
                        <div class=" flex-row-center item_left_con">
                            反对
                        </div>
                        <div class="item_left_drop">
                        </div>
                    </div>
                    <div class="item_btn_right">
                        <div class=" flex-row-center item_right_con">
                            赞同
                        </div>
                        <div class="item_right_drop">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const segments = ref(['当前提案', '历史提案'])
const segmentIndex = ref(0)
const isJoined = ref(true)
function segmentTap(index: number) {
    segmentIndex.value = index
}


</script>

<style scoped>
.segment {
    border-radius: 10px;
    width: 84px;
    height: 32px;
}

.item_right_drop {
    width: 0;
    height: 0;
    position: absolute;
    border-style: solid;
    border-color: transparent transparent transparent white;
    border-width: 0px 20px 33px 20px;
    left: 0px;
    top: 0px;
}

.item_right_con {
    height: 32px;
    width: 162px;
    border-radius: 0px 100px 100px 0px;
    background-color: #5879ff;
    color: white;
    font-size: 12px;
}

.item_btn_right {
    position: relative;
    margin-left: 6px;
}

.item_btn_left {
    position: relative;
    z-index: 1;
}

.item_left_con {
    height: 32px;
    width: 142px;
    border-radius: 100px 0px 0px 100px;
    background-color: #ff7a68;
    color: white;
    font-size: 12px;
}

.item_left_drop {
    width: 0;
    height: 0;
    position: absolute;
    border-style: solid;
    border-color: transparent transparent transparent #ff7a68;
    border-width: 0px 40px 32px 20px;
    left: 142px;
    top: 0px;
}

.item_con {
    color: #0d0e0e;
    font-weight: 500;
}

.item_look {
    padding: 4px 12px;
    border-radius: 12px;
    border: 1px solid #dbdbdb;
    color: #0d0e0e;
    font-size: 12px;
}
</style>