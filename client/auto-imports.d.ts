// Generated by 'unplugin-auto-import'
export {}
declare global {
  const $$: typeof import('vue/macros')['$$']
  const $: typeof import('vue/macros')['$']
  const $computed: typeof import('vue/macros')['$computed']
  const $customRef: typeof import('vue/macros')['$customRef']
  const $ref: typeof import('vue/macros')['$ref']
  const $shallowRef: typeof import('vue/macros')['$shallowRef']
  const $toRef: typeof import('vue/macros')['$toRef']
  const EffectScope: typeof import('vue')['EffectScope']
  const FireAction: typeof import('./src/utils/FireAction')['FireAction']
  const HoverAction: typeof import('./src/utils/HoverAction')['HoverAction']
  const TFilter: typeof import('./src/hooks/useTrackDatePicker')['TFilter']
  const Tooltip: typeof import('./src/utils/Tooltip')['Tooltip']
  const apiService: typeof import('./src/services/ApiService')['apiService']
  const axiosDayApiInstance: typeof import('./src/utils/apiDeskDayConfig')['axiosDayApiInstance']
  const baseApiURL: typeof import('./src/utils/constants')['baseApiURL']
  const compareDateByMonthAndYear: typeof import('./src/utils/compareDateByYearAndMonth')['compareDateByMonthAndYear']
  const computed: typeof import('vue')['computed']
  const convertDate: typeof import('./src/utils/convertDate')['convertDate']
  const createApp: typeof import('vue')['createApp']
  const currentDate: typeof import('./src/utils/currentDate')['currentDate']
  const customRef: typeof import('vue')['customRef']
  const daysWeek: typeof import('./src/utils/constants')['daysWeek']
  const defineAsyncComponent: typeof import('vue')['defineAsyncComponent']
  const defineComponent: typeof import('vue')['defineComponent']
  const effectScope: typeof import('vue')['effectScope']
  const getCurrentInstance: typeof import('vue')['getCurrentInstance']
  const getCurrentScope: typeof import('vue')['getCurrentScope']
  const h: typeof import('vue')['h']
  const inject: typeof import('vue')['inject']
  const isProxy: typeof import('vue')['isProxy']
  const isReactive: typeof import('vue')['isReactive']
  const isReadonly: typeof import('vue')['isReadonly']
  const isRef: typeof import('vue')['isRef']
  const markRaw: typeof import('vue')['markRaw']
  const months: typeof import('./src/utils/constants')['months']
  const nextTick: typeof import('vue')['nextTick']
  const onActivated: typeof import('vue')['onActivated']
  const onBeforeMount: typeof import('vue')['onBeforeMount']
  const onBeforeUnmount: typeof import('vue')['onBeforeUnmount']
  const onBeforeUpdate: typeof import('vue')['onBeforeUpdate']
  const onDeactivated: typeof import('vue')['onDeactivated']
  const onErrorCaptured: typeof import('vue')['onErrorCaptured']
  const onMounted: typeof import('vue')['onMounted']
  const onRenderTracked: typeof import('vue')['onRenderTracked']
  const onRenderTriggered: typeof import('vue')['onRenderTriggered']
  const onScopeDispose: typeof import('vue')['onScopeDispose']
  const onServerPrefetch: typeof import('vue')['onServerPrefetch']
  const onUnmounted: typeof import('vue')['onUnmounted']
  const onUpdated: typeof import('vue')['onUpdated']
  const prettyDate: typeof import('./src/utils/prettyDate')['prettyDate']
  const provide: typeof import('vue')['provide']
  const reactive: typeof import('vue')['reactive']
  const readonly: typeof import('vue')['readonly']
  const ref: typeof import('vue')['ref']
  const resolveComponent: typeof import('vue')['resolveComponent']
  const shallowReactive: typeof import('vue')['shallowReactive']
  const shallowReadonly: typeof import('vue')['shallowReadonly']
  const shallowRef: typeof import('vue')['shallowRef']
  const toRaw: typeof import('vue')['toRaw']
  const toRef: typeof import('vue')['toRef']
  const toRefs: typeof import('vue')['toRefs']
  const triggerRef: typeof import('vue')['triggerRef']
  const type ICoordinates: typeof import('./src/utils/HoverAction')['type ICoordinates']
  const unref: typeof import('vue')['unref']
  const useAttrs: typeof import('vue')['useAttrs']
  const useCounterStore: typeof import('./src/stores/useStoreAdmin')['useCounterStore']
  const useCssModule: typeof import('vue')['useCssModule']
  const useCssVars: typeof import('vue')['useCssVars']
  const useDateClickListener: typeof import('./src/hooks/useDateClickListener')['useDateClickListener']
  const useDateFilter: typeof import('./src/hooks/useDateFilter')['useDateFilter']
  const useDatePicker: typeof import('./src/hooks/useDatePicker')['useDatePicker']
  const useDelayRenderFix: typeof import('./src/hooks/useDelayRenderFix')['useDelayRenderFix']
  const useGenerateColor: typeof import('./src/hooks/useGenerateColor')['useGenerateColor']
  const useInitStartValues: typeof import('./src/hooks/useInitStartValues')['useInitStartValues']
  const usePaintTableCell: typeof import('./src/hooks/usePaintTableCell')['usePaintTableCell']
  const useRoute: typeof import('vue-router')['useRoute']
  const useRouter: typeof import('vue-router')['useRouter']
  const useSlots: typeof import('vue')['useSlots']
  const useStoreAuth: typeof import('./src/stores/useStoreAuth')['useStoreAuth']
  const useStoreDay: typeof import('./src/stores/useStoreDay')['useStoreDay']
  const useStoreDayFilter: typeof import('./src/stores/useStoreDayFilter')['useStoreDayFilter']
  const useStoreUser: typeof import('./src/stores/useStoreUser')['useStoreUser']
  const useTableFireAction: typeof import('./src/hooks/useTableFireAction')['useTableFireAction']
  const useTableHoverAction: typeof import('./src/hooks/useTableHoverAction')['useTableHoverAction']
  const useTabs: typeof import('./src/hooks/useTabs')['useTabs']
  const useTrackDatePicker: typeof import('./src/hooks/useTrackDatePicker')['useTrackDatePicker']
  const watch: typeof import('vue')['watch']
  const watchEffect: typeof import('vue')['watchEffect']
  const watchPostEffect: typeof import('vue')['watchPostEffect']
  const watchSyncEffect: typeof import('vue')['watchSyncEffect']
}
// for vue template auto import
import { UnwrapRef } from 'vue'
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    readonly $$: UnwrapRef<typeof import('vue/macros')['$$']>
    readonly $: UnwrapRef<typeof import('vue/macros')['$']>
    readonly $computed: UnwrapRef<typeof import('vue/macros')['$computed']>
    readonly $customRef: UnwrapRef<typeof import('vue/macros')['$customRef']>
    readonly $ref: UnwrapRef<typeof import('vue/macros')['$ref']>
    readonly $shallowRef: UnwrapRef<typeof import('vue/macros')['$shallowRef']>
    readonly $toRef: UnwrapRef<typeof import('vue/macros')['$toRef']>
    readonly EffectScope: UnwrapRef<typeof import('vue')['EffectScope']>
    readonly FireAction: UnwrapRef<typeof import('./src/utils/FireAction')['FireAction']>
    readonly HoverAction: UnwrapRef<typeof import('./src/utils/HoverAction')['HoverAction']>
    readonly TFilter: UnwrapRef<typeof import('./src/hooks/useTrackDatePicker')['TFilter']>
    readonly Tooltip: UnwrapRef<typeof import('./src/utils/Tooltip')['Tooltip']>
    readonly apiService: UnwrapRef<typeof import('./src/services/ApiService')['apiService']>
    readonly axiosDayApiInstance: UnwrapRef<typeof import('./src/utils/apiDeskDayConfig')['axiosDayApiInstance']>
    readonly baseApiURL: UnwrapRef<typeof import('./src/utils/constants')['baseApiURL']>
    readonly compareDateByMonthAndYear: UnwrapRef<typeof import('./src/utils/compareDateByYearAndMonth')['compareDateByMonthAndYear']>
    readonly computed: UnwrapRef<typeof import('vue')['computed']>
    readonly convertDate: UnwrapRef<typeof import('./src/utils/convertDate')['convertDate']>
    readonly createApp: UnwrapRef<typeof import('vue')['createApp']>
    readonly currentDate: UnwrapRef<typeof import('./src/utils/currentDate')['currentDate']>
    readonly customRef: UnwrapRef<typeof import('vue')['customRef']>
    readonly daysWeek: UnwrapRef<typeof import('./src/utils/constants')['daysWeek']>
    readonly defineAsyncComponent: UnwrapRef<typeof import('vue')['defineAsyncComponent']>
    readonly defineComponent: UnwrapRef<typeof import('vue')['defineComponent']>
    readonly effectScope: UnwrapRef<typeof import('vue')['effectScope']>
    readonly getCurrentInstance: UnwrapRef<typeof import('vue')['getCurrentInstance']>
    readonly getCurrentScope: UnwrapRef<typeof import('vue')['getCurrentScope']>
    readonly h: UnwrapRef<typeof import('vue')['h']>
    readonly inject: UnwrapRef<typeof import('vue')['inject']>
    readonly isProxy: UnwrapRef<typeof import('vue')['isProxy']>
    readonly isReactive: UnwrapRef<typeof import('vue')['isReactive']>
    readonly isReadonly: UnwrapRef<typeof import('vue')['isReadonly']>
    readonly isRef: UnwrapRef<typeof import('vue')['isRef']>
    readonly markRaw: UnwrapRef<typeof import('vue')['markRaw']>
    readonly months: UnwrapRef<typeof import('./src/utils/constants')['months']>
    readonly nextTick: UnwrapRef<typeof import('vue')['nextTick']>
    readonly onActivated: UnwrapRef<typeof import('vue')['onActivated']>
    readonly onBeforeMount: UnwrapRef<typeof import('vue')['onBeforeMount']>
    readonly onBeforeUnmount: UnwrapRef<typeof import('vue')['onBeforeUnmount']>
    readonly onBeforeUpdate: UnwrapRef<typeof import('vue')['onBeforeUpdate']>
    readonly onDeactivated: UnwrapRef<typeof import('vue')['onDeactivated']>
    readonly onErrorCaptured: UnwrapRef<typeof import('vue')['onErrorCaptured']>
    readonly onMounted: UnwrapRef<typeof import('vue')['onMounted']>
    readonly onRenderTracked: UnwrapRef<typeof import('vue')['onRenderTracked']>
    readonly onRenderTriggered: UnwrapRef<typeof import('vue')['onRenderTriggered']>
    readonly onScopeDispose: UnwrapRef<typeof import('vue')['onScopeDispose']>
    readonly onServerPrefetch: UnwrapRef<typeof import('vue')['onServerPrefetch']>
    readonly onUnmounted: UnwrapRef<typeof import('vue')['onUnmounted']>
    readonly onUpdated: UnwrapRef<typeof import('vue')['onUpdated']>
    readonly prettyDate: UnwrapRef<typeof import('./src/utils/prettyDate')['prettyDate']>
    readonly provide: UnwrapRef<typeof import('vue')['provide']>
    readonly reactive: UnwrapRef<typeof import('vue')['reactive']>
    readonly readonly: UnwrapRef<typeof import('vue')['readonly']>
    readonly ref: UnwrapRef<typeof import('vue')['ref']>
    readonly resolveComponent: UnwrapRef<typeof import('vue')['resolveComponent']>
    readonly shallowReactive: UnwrapRef<typeof import('vue')['shallowReactive']>
    readonly shallowReadonly: UnwrapRef<typeof import('vue')['shallowReadonly']>
    readonly shallowRef: UnwrapRef<typeof import('vue')['shallowRef']>
    readonly toRaw: UnwrapRef<typeof import('vue')['toRaw']>
    readonly toRef: UnwrapRef<typeof import('vue')['toRef']>
    readonly toRefs: UnwrapRef<typeof import('vue')['toRefs']>
    readonly triggerRef: UnwrapRef<typeof import('vue')['triggerRef']>
    readonly type ICoordinates: UnwrapRef<typeof import('./src/utils/HoverAction')['type ICoordinates']>
    readonly unref: UnwrapRef<typeof import('vue')['unref']>
    readonly useAttrs: UnwrapRef<typeof import('vue')['useAttrs']>
    readonly useCounterStore: UnwrapRef<typeof import('./src/stores/useStoreAdmin')['useCounterStore']>
    readonly useCssModule: UnwrapRef<typeof import('vue')['useCssModule']>
    readonly useCssVars: UnwrapRef<typeof import('vue')['useCssVars']>
    readonly useDateClickListener: UnwrapRef<typeof import('./src/hooks/useDateClickListener')['useDateClickListener']>
    readonly useDateFilter: UnwrapRef<typeof import('./src/hooks/useDateFilter')['useDateFilter']>
    readonly useDatePicker: UnwrapRef<typeof import('./src/hooks/useDatePicker')['useDatePicker']>
    readonly useDelayRenderFix: UnwrapRef<typeof import('./src/hooks/useDelayRenderFix')['useDelayRenderFix']>
    readonly useGenerateColor: UnwrapRef<typeof import('./src/hooks/useGenerateColor')['useGenerateColor']>
    readonly useInitStartValues: UnwrapRef<typeof import('./src/hooks/useInitStartValues')['useInitStartValues']>
    readonly usePaintTableCell: UnwrapRef<typeof import('./src/hooks/usePaintTableCell')['usePaintTableCell']>
    readonly useRoute: UnwrapRef<typeof import('vue-router')['useRoute']>
    readonly useRouter: UnwrapRef<typeof import('vue-router')['useRouter']>
    readonly useSlots: UnwrapRef<typeof import('vue')['useSlots']>
    readonly useStoreAuth: UnwrapRef<typeof import('./src/stores/useStoreAuth')['useStoreAuth']>
    readonly useStoreDay: UnwrapRef<typeof import('./src/stores/useStoreDay')['useStoreDay']>
    readonly useStoreDayFilter: UnwrapRef<typeof import('./src/stores/useStoreDayFilter')['useStoreDayFilter']>
    readonly useStoreUser: UnwrapRef<typeof import('./src/stores/useStoreUser')['useStoreUser']>
    readonly useTableFireAction: UnwrapRef<typeof import('./src/hooks/useTableFireAction')['useTableFireAction']>
    readonly useTableHoverAction: UnwrapRef<typeof import('./src/hooks/useTableHoverAction')['useTableHoverAction']>
    readonly useTabs: UnwrapRef<typeof import('./src/hooks/useTabs')['useTabs']>
    readonly useTrackDatePicker: UnwrapRef<typeof import('./src/hooks/useTrackDatePicker')['useTrackDatePicker']>
    readonly watch: UnwrapRef<typeof import('vue')['watch']>
    readonly watchEffect: UnwrapRef<typeof import('vue')['watchEffect']>
    readonly watchPostEffect: UnwrapRef<typeof import('vue')['watchPostEffect']>
    readonly watchSyncEffect: UnwrapRef<typeof import('vue')['watchSyncEffect']>
  }
}
