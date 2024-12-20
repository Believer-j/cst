<template>
    <div class="flex-column" style="margin-top: 40px;">
        <div class="flex-row-center">
            <VanImage src="/img/home/home-invite-line.png" width="16px" height="16px" />
            <div class="font-medium font-15" style="color: #0d0e0e; margin-left: 6px; margin-right: 6px;">
                邀请好友
            </div>
            <VanImage src="/img/home/home-invite-line.png" width="16px" height="16px" />
        </div>
        <div class="content flex-column">
            <div class=" flex-column-center" style="margin-top: 10px;">
                <VanImage src="/img/home/home-invite.png" width="181px" height="100px" />
                <div class="font-11" style="color: #868686;">邀请奖励(CST)</div>
                <div class="font-26 font-medium" style="color: #0d0e0e; margin-top: 4px;">123123.312</div>
            </div>
            <div class="inviteInfo flex-row">
                <div class=" flex-column-center" style="height: 100%; width: 50%;">
                    <p class="font-12" style="color: #868686;">
                        邀请人数
                    </p>
                    <p class="font-15 font-medium" style="color: #0d0e0e;">
                        45
                    </p>
                </div>
                <div class=" flex-column-center" style="height: 100%; width: 50%;">
                    <p class="font-12" style="color: #868686;">
                        总认购数量
                    </p>
                    <p class="font-15 font-medium" style="color: #0d0e0e;">
                        23.554454 ETH
                    </p>
                </div>
                <div class="line" />
            </div>
            <p class="title">
                邀请链接
            </p>
            <div class="flex-row flex-items-center flex-between box">
                <div style="margin-left: 14px; max-width: calc(100% - 64px);">
                    https://m.cst.com/reg?code=FLRUQQ
                </div>
                <VanImage src="/img/copy.png" width="24px" height="23px"
                    style="margin-right: 14px; min-width: 24px; margin-left: 12px;" @click="copyToClipboard('1xxxx23aax')" />
            </div>
            <p class="title">
                邀请码
            </p>
            <div class="flex-row flex-items-center flex-between box">
                <div style="margin-left: 14px; max-width: calc(100% - 64px);">
                    FLRUQQ
                </div>
                <VanImage src="/img/copy.png" width="24px" height="23px"
                    style="margin-right: 14px; min-width: 24px; margin-left: 12px;" />
            </div>
            <div class=" flex-column" style="margin: 15px 14px 30px 14px;">
                <div v-for="(item, index) in rules" :key="index" class=" flex-row font-12"
                    style="color: #868686; word-break: break-all; margin-top: 5px;">
                    <div class="roundBox flex-row-center">
                        <div class="round1"></div>
                    </div>
                    <div style="max-width: calc(100% - 16px); margin-left: 6px;">
                        {{ item }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const store = useStore()
const rules = ref([
    'IDO规则邀请奖励说明IDO规则邀请奖励说明',
    'IDO规则邀请奖励说明IDO规则邀请奖励说明IDO规则邀请奖励说明IDO规则邀请奖励',
    'IDO规则邀请奖励说明IDO规则邀请奖励说明IDO规则邀请奖励说明IDO规则邀请奖励说明IDO规则邀请奖励说明IDO规则邀请奖励说明IDO规则邀请奖励',
    'IDO规则邀请奖励说明IDO规则邀请奖励说明',
])
function copyLink() {
    copyToClipboard('1xxxx23aax')
}
</script>

<style scoped lang="scss">
.content {
    border-radius: 8px;
    margin: 16px 15px 41px 15px;
    border: #dbdbdb solid 1px;

    .title {
        color: #0d0e0e;
        margin-top: 23px;
        font-size: 14px;
        font-weight: 500;
        margin-left: 15px;
    }

    .roundBox {
        background-color: rgba(123, 103, 246, 0.2);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-top: 2px;

        .round1 {
            background-color: #7b67f6;
            width: 6px;
            height: 6px;
            border-radius: 50%;
        }

    }



    .box {
        min-height: 44px;
        background-color: #f1f1f1;
        border-radius: 8px;
        color: #0d0e0e;
        font-size: 14px;
        margin-left: 15px;
        margin-right: 15px;
        margin-top: 5px;
        word-break: break-all;
    }

    .inviteInfo {
        margin-left: 15px;
        margin-right: 15px;
        margin-top: 20px;
        background-color: #f6f6f6;
        border-radius: 8px;
        height: 72px;
        position: relative;

        .line {
            position: absolute;
            width: 1px;
            height: 40px;
            background-color: #dbdbdb;
            left: calc(50% - 1px);
            top: 16px;
        }
    }
}
</style>