import { defineStore } from 'pinia'

interface LottieToastConfig {
  msg: string,
  isSuccess: boolean
}
export const useStore = defineStore('cstStore', {
  state: () => {
    return {

    }
  },
  actions: {
    showLottieToast(config: LottieToastConfig) {},

  },
  persist: true,
})