<template>
    <div class="wrap">
        <van-nav-bar title="奖励" :fixed="true" :placeholder="true" :border="false"
            style="--van-nav-bar-title-font-size: 16px; --van-nav-bar-title-text-color: #0d0e0e; --van-nav-bar-background: #f6f6f6">
            <template #left>
                <van-icon name="arrow-left" color="#0d0e0e" size="20px" @click="$router.back()" />
            </template>
            <template #right>
                <van-image src="/img/nav-right.png" width="24px" height="24px"></van-image>
            </template>
        </van-nav-bar>
        <div class=" flex-column" style="margin: 15px; margin-bottom: 0px; padding-bottom: 15px;">
            <div class=" flex-row flex-between"
                style="background-color: white; border-radius: 12px; height: 136px; position: relative;">
                <div class=" flex-column" style="margin-left: 15px; margin-top: 20px;">
                    <p class=" font-11" style="color: #868686;">
                        用户类型
                    </p>
                    <p class="font-15 font-weight-medium" style="color: #0d0e0e; margin-top: 2px;">
                        价值用户
                    </p>
                    <p class=" font-11" style="color: #868686; margin-top: 15px;">
                        节点类型
                    </p>
                    <p class="font-15 font-weight-medium" style="color: #0d0e0e; margin-top: 2px;">
                        初级节点
                    </p>
                </div>
                <van-image src="/img/reward-top-bg.png" width="120px" height="120px"
                    style="margin-right: 10px; margin-top: 16px;"></van-image>
                <div style="position: absolute; background-color: rgba(13, 14, 14, 1); border-radius: 100pt 0pt 0pt 100pt; width: 42px; height: 22px; right: 0px; top: 12px;"
                    @click="showRule = true">
                    <van-image src="/img/pledge/pledge-wh.png" width="16px" height="16px"
                        style="margin-top: 3px; margin-left: 3px;" />
                </div>
            </div>
            <div class="font-12 flex-row-reverse" style=" color: #0d0e0e; margin-top: 15px; ">
                <van-popover v-model:show="showPopover" placement="bottom-end" :actions="actions" @select="onSelect"
                    style="--van-popover-action-font-size: 12px">
                    <template #reference>
                        <div class=" flex-row flex-items-center">
                            <p>
                                {{ action.text }}
                            </p>
                            <van-image src="/img/drop-black.png" width="14px" height="14px"
                                style="margin-left: 2px;"></van-image>
                        </div>
                    </template>
                </van-popover>
            </div>
            <div class="font-12"
                style="padding: 17px 15px; margin-top: 10px; background-color: white; border-radius: 8px; color: #868686;">
                <div class=" flex-row flex-items-center">
                    <div class=" flex-column" style="width: 50%; padding-left: 5px;">
                        <p>总人数</p>
                        <p class="font-15 font-weight-medium" style="color: #0d0e0e; margin-top: 2px;">
                            45
                        </p>
                    </div>
                    <div class=" flex-column" style="width: 50%;">
                        <p>今日注册人数</p>
                        <p class="font-15 font-weight-medium" style="color: #0d0e0e; margin-top: 2px;">
                            45
                        </p>
                    </div>
                </div>
                <div style=" margin-top: 25px; padding-bottom: 17px; border-bottom: 1px dashed #dbdbdb;"
                    class=" flex-row flex-items-center">
                    <div class=" flex-column" style="width: 50%; padding-left: 5px;">
                        <p>昨日sCST价值</p>
                        <p class="font-15 font-weight-medium" style="color: #00ca7d; margin-top: 2px;">
                            $9.00
                        </p>
                    </div>
                    <div class=" flex-column" style="width: 50%;">
                        <p>今日sCST价值</p>
                        <p class="font-15 font-weight-medium" style="color: #00ca7d; margin-top: 2px;">
                            $9.00
                        </p>
                    </div>
                </div>
                <p style="margin-top: 16px;">邀请链接</p>
                <div class=" flex-row flex-items-center flex-between"
                    style="background-color: rgba(219, 219, 219, 0.4); height: 44px; border-radius: 8px; margin-top: 6px;">
                    <p class="font-14 van-ellipsis" style="color: #0d0e0e; margin-left: 14px;">
                        https://m.cst.com/reg?code=FLRUQQcode=FLRUQQcode=FLRUQQcode=FLRUQQ
                    </p>
                    <van-image src="/img/copy.png" width="24px" height="23px"
                        style="margin-right: 10px; margin-left: 10px; min-width: 24px;margin-top: 4px;"
                        @click="copyToClipboard('xxxxxx')"></van-image>
                </div>
                <p style="margin-top: 15px;">邀请码</p>
                <div class=" flex-row flex-items-center flex-between"
                    style="background-color: rgba(219, 219, 219, 0.4); height: 44px; border-radius: 8px; margin-top: 6px;">
                    <p class="font-14 van-ellipsis" style="color: #0d0e0e; margin-left: 14px;">
                        FLRUQQ
                    </p>
                    <van-image src="/img/copy.png" width="24px" height="23px"
                        style="margin-right: 10px; margin-left: 10px; min-width: 24px;margin-top: 4px;"
                        @click="copyToClipboard('xxxxxx')"></van-image>
                </div>
            </div>
            <div class=" font-weight-medium font-15" style="color: #0d0e0e; margin-top: 30px;">
                奖励记录
                <div
                    style="width: 60px; height: 5px; background: linear-gradient(to right, #7b67f6 0%, white 100%); margin-top: -7px;">
                </div>
            </div>
            <div class=" flex-row flex-between" style="height: 76px; margin-top: 19px;">
                <div v-for="(item, index) in segments" :key="index" class="flex-column flex-items-center "
                    @click="segmentTap(index)" style="width: calc(50% - 6px);">
                    <div class="segment flex-column" :class="[segmentIndex == index && 'segment__active']">
                        <p style="margin-left: 14px;">
                            {{ item.title }}
                        </p>
                        <div class=" flex-row flex-items-end" style="margin-top: 4px; margin-left: 14px;">
                            <p class=" font-20 font-weight-medium">
                                {{ item.val }}
                            </p>
                            <p style="margin-bottom: 1px; margin-left: 4px;">CST</p>
                        </div>
                    </div>
                    <VanImage v-show="segmentIndex == index" src="/img/segmentDrop.png" width="22px" height=" 4px"
                        :style="{}" />
                </div>
            </div>

            <div class=" flex-column" style="margin-top: 12px;">
                <div v-for="index in 6" :key="index" class=" flex-column flex-center"
                    style="background-color: white; border-radius: 10px; height: 73px; padding-left: 14px; padding-right: 14px;"
                    :style="{ marginBottom: index == 0 ? '' : '12px' }">
                    <div class=" flex-row flex-items-center flex-between font-12" style="">
                        <p style="color: #868686;">奖励时间</p>
                        <p style="color: #0d0e0e; font-weight: 500;">2023/03/29 12:00:00</p>
                    </div>
                    <div class=" flex-row flex-items-center flex-between font-12" style="margin-top: 9px;">
                        <p style="color: #868686;">奖励数量</p>
                        <p style="color: #0d0e0e; font-weight: 500;">5.000 CST</p>
                    </div>
                </div>
            </div>

        </div>

        <VanPopup v-model:show="showRule" :close-on-click-overlay="false" style="background-color: transparent;">
            <div class=" flex-column"
                style="background-color: white; width: 305px; border-radius: 10px; position: relative;">
                <p class="font-18 font-weight-semibold " style="text-align: center; color: #161823; margin-top: 17px;">
                    等级规则
                </p>
                <VanImage src="/img/close-black.png" width="24px" height="25px"
                    style="position: absolute; top: 18px; right: 15px;" @click="showRule = false" />
                <div style="margin: 17px 20px 30px 20px; max-height: 430px; overflow: scroll;">
                    <div class="font-12"
                        style="background-color: #f6f6f6; border-radius: 8px; padding: 11px 12px; color: #868686;">
                        <p>您当前质押CST本金价值</p>
                        <p class="font-15 font-weight-medium" style="color: #0d0e0e; margin-top: 4px;">
                            $800
                        </p>
                        <div style="border-bottom: 1px dashed #dbdbdb; margin-top: 10px; margin-bottom: 10px;"></div>
                        <p>团队sCST价值</p>
                        <p class="font-15 font-weight-medium" style="color: #0d0e0e; margin-top: 4px;">
                            $800
                        </p>
                    </div>
                    <div class=" font-weight-medium font-15" style="color: #0d0e0e; margin-top: 20px;">
                        等级规则
                        <div
                            style="width: 80px; height: 5px; background: linear-gradient(to right, #7b67f6 0%, white 100%); margin-top: -7px;">
                        </div>
                    </div>
                    <p class=" font-14 font-weight-medium" style="color: #0d0e0e; margin-top: 20px;">
                        用户类型:
                    </p>
                    <van-highlight style="margin-top: 5px;" keywords="$500" source-string="质押CST本金超过$500可成为价值用户"
                        highlight-class="highlightClass" unhighlight-class="highlight" />
                    <p class=" font-14 font-weight-medium" style="color: #0d0e0e; margin-top: 20px;">
                        节点类型:
                    </p>
                    <p class="font-12" style="color: #868686; margin-top: 5px;line-height: 22px;">
                        <span class="highlightTitle">初级节点：</span>邀请三名价值用户，且团队sCST价<br>值达到<span
                            class="highlightNum">$60000</span><br><span
                            class="highlightTitle">中级节点：</span>三个部门产生初级节点，且团队sCST价值达到<span
                            class="highlightNum">$100000</span><br><span
                            class="highlightTitle">高级节点：</span>三个部门产生高级节点，且团队sCST价值达到<span
                            class="highlightNum">$200000</span>
                    </p>
                </div>
            </div>

        </VanPopup>



    </div>
</template>

<script setup lang="ts">

const showRule = ref(false)
const showPopover = ref(false)
const actions = [{ text: '直推' }, { text: '团队' }]
const action = ref(actions[0])
const segments = ref([{
    title: 'DAO奖励',
    val: '12.345'
}, {
    title: '邀请质押奖励',
    val: '0'
}])
const segmentIndex = ref(0)


function segmentTap(index: number) {
    segmentIndex.value = index
}

function onSelect(a: any) {
    action.value = a
}

</script>

<style>
.highlightNum {
    color: #5d5efe;
    font-weight: 500;
    font-size: 13px;
}

.highlightTitle {
    color: #0d0e0e;
    font-weight: 500;
    font-size: 13px;
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
    border-radius: 8px;
    width: 100%;
    height: 72px;
    background-color: white;
    color: #0d0e0e;
    font-size: 12px;
    padding-top: 11px;
    /* padding-left: 14px; */
}

.segment__active {
    background-color: #7b67f6;
    color: white;
}
</style>