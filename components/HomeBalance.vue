<template>
    <div class=" flex-column">
        <div class=" flex-row flex-between">
            <div class=" flex-column" style="margin-top: 34px; margin-left: 20px;">
                <div class=" flex-row flex-items-center">
                    <img src="/img/home/nav-wallet.png" height="16px" width="16px" />
                    <div class="font-12" style="color: #868686; margin-left: 4px;">CST余额</div>
                </div>
                <div class="font-20 font-weight-medium" style="color: #0d0e0e; margin-top: 10px;">213.231</div>
            </div>
            <VanImage height="140px" src="/img/home/cst-balance.png" style="margin-top: 8px;" />
        </div>
        <div class=" flex-row flex-wrap">
            <div v-for="(item, index) in datas" :key="index" class=" flex-row"
                style="width: calc(49.5% - 20px); padding-left: 20px;"
                :style="{ marginTop: index >= 2 ? '20px' : '', paddingLeft: index % 2 == 0 ? '20px' : '5px' }">
                <div class="round"></div>
                <div class=" flex-column">
                    <div class="font-12" style="color: #868686;">{{ item.title }}</div>
                    <div class="font-15 font-medium" style="color: #0d0e0e; margin-top: 4px;">{{ item.val }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const datas = ref([
    {
        title: 'CST价格',
        val: '$12.345'
    },
    {
        title: '金库总价值',
        val: '$1245678.34'
    },
    {
        title: 'CST流通总量',
        val: '$123456'
    },
    {
        title: '近30天投注总额',
        val: '$123456789.00'
    },
])

</script>

<style>
.round {
    border: #7b67f6 solid 5px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    margin-right: 10px;
}
</style>