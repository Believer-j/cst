<template>
    <VanPopup v-model:show="show" :close-on-click-overlay="false" style="background-color: transparent;">
        <div class=" flex-column"
            style="background-color: white; width: 305px; border-radius: 10px; position: relative;">
            <p class="font-18 font-weight-semibold " style="text-align: center; color: #161823; margin-top: 17px;">
                {{ title }}
            </p>
            <VanImage src="/img/close-black.png" width="24px" height="25px"
                style="position: absolute; top: 18px; right: 15px;" @click="show = false" />
            <p class="font-14" style="color: #0d0e0e; margin-top: 37px; text-align: center;">
                {{ msg }}
            </p>
            <div class="flex-row-center font-14 font-weight-medium"
                style="height: 44px; margin: 36px 20px 20px 20px; background-color: #0d0e0e; border-radius: 10px; color: white;"
                @click="confirm">
                {{ btnTitle }}
            </div>
        </div>
    </VanPopup>
</template>

<script setup lang="ts">

const props = defineProps({
    title: {
        type: String,
        default: '温馨提示'
    },
    msg: {
        type: String,
        default: '提示内容'
    },
    btnTitle: {
        type: String,
        default: '确定'
    },
})

const emit = defineEmits(['confirm'])

const show = ref(false)
const parameterTemp = ref()

function confirm() {
    emit('confirm', parameterTemp.value)
    show.value = false
}

function showAlert(parameter?: any) {
    show.value = true
    parameterTemp.value = parameter
}

defineExpose({
    showAlert
})


</script>
