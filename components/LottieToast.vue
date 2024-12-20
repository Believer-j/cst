<template>
    <van-popup v-model:show="show">
        <div id="lottie_success" style="width: 120px; height: 120px;" class=""></div>
    </van-popup>
</template>

<script setup lang="ts">

const show = ref(false)
const store = useStore()

/**
 * 监听showLottieToast事件
 */
store.$onAction(({ name, args }) => {
    if (name == 'showLottieToast') {
        show.value = true
        
    }
});

</script>