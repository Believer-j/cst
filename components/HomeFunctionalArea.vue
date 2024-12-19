<template>
    <div class=" flex-row flex-wrap flex-around" style="">
        <div v-for="(item, index) in datas" :key="index" class="item flex-column" :class="[
            Math.floor(index / 2) === 0 && 'item__marginTopOne',
            item.bgClassName
        ]">
            <div class="font-15 font-medium" style="margin-top: 17px; margin-left: 15px; color: #0d0e0e;">
                {{ item.title }}
            </div>
            <div class="font-12 flex-row flex-items-center" style="margin-top: 6px; margin-left: 15px;">
                <div style="color: #1b1d21;">
                    {{ item.subTitle }}
                </div>
                <div v-if="item.content" :style="{ color: item.color }">
                    {{ item.content }}
                </div>
                <div v-if="item.unit" class=" font-10" style="color: #1b1d21; margin-left: 4px;">
                    {{ item.unit }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const datas = ref([
    {
        title: '质押',
        subTitle: 'APY：',
        content: '862%',
        color: '#f55454',
        bgClassName: 'home-func-pledge'
    },
    {
        title: '债券',
        subTitle: '折扣：',
        content: '3%',
        color: '#f55454',
        bgClassName: 'home-func-bond'
    },
    {
        title: '收益领取',
        subTitle: '可领取：',
        content: '862.332',
        unit: ' CST',
        color: '#00ca7d',
        bgClassName: 'home-func-income'
    },
    {
        title: '奖励',
        subTitle: '累计：',
        content: '#00ca7d',
        unit: ' CST',
        color: '#00ca7d',
        bgClassName: 'home-func-reward'
    },
    {
        title: '董事会',
        subTitle: '多签共管',
        bgClassName: 'home-func-board'
    },
    {
        title: 'IDO释放',
        subTitle: '可领取：',
        content: '682.332',
        unit: ' CST',
        color: '#00ca7d',
        bgClassName: 'home-func-ido'
    },
    {
        title: '交易',
        subTitle: 'uniswap.org',
        bgClassName: 'home-func-transaction'
    },
    {
        title: '跨链桥',
        subTitle: 'sushi.com',
        bgClassName: 'home-func-bridge'
    }

])
</script>

<style scoped lang="scss">
.item {
    width: 170px;
    height: 80px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-top: 12px;

    &__marginTopOne {
        margin-top: 20px;
    }
}

.home-func-transaction {
    background-image: url('/public/img/home/home-func-transaction.png');
}

.home-func-ido {
    background-image: url('/public/img/home/home-func-ido.png');
}

.home-func-board {
    background-image: url('/public/img/home/home-func-board.png');
}

.home-func-reward {
    background-image: url('/public/img/home/home-func-reward.png');
}

.home-func-income {
    background-image: url('/public/img/home/home-func-income.png');
}

.home-func-bond {
    background-image: url('/public/img/home/home-func-bond.png');
}

.home-func-pledge {
    background-image: url('/public/img/home/home-func-pledge.png');
}

.home-func-bridge {
    background-image: url('/public/img/home/home-func-bridge.png');
}
</style>