import type { UserConfigExport } from "@tarojs/cli";

export const TARO_APP_API = 'http://54.159.42.67:8889'

export default {
   logger: {
    quiet: false,
    stats: true
  },
  mini: {},
  h5: {

  }
} satisfies UserConfigExport
