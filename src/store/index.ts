import { CoefName, CoefsMap } from '@/types'
import { State } from 'vue'
import { createStore } from 'vuex'

export default createStore<State>({
  state: {
    dimensions: {
      canvasWidth: 1000,
      canvasHeight: 1000,
      xOriginRatio: 0.5,
      yOriginRatio: 0.5,
      spanHoriz: 20,
      resolutionRatio: 0.008,
    },
    coefs: {
      a11: -1,
      a12: 1,
      a22: 1,
      a13: 0,
      a23: 0,
      a33: -1,
    },
  },
  getters: {
    spanVert(store) {
      return (
        (store.dimensions.spanHoriz / store.dimensions.canvasWidth) *
        store.dimensions.canvasHeight
      )
    },
    unitsSize(store) {
      return store.dimensions.canvasWidth / store.dimensions.spanHoriz / 4
    },
  },
  mutations: {
    setResolution(store, resolution: number) {
      store.dimensions.resolutionRatio = resolution
    },
    setDimensions(store, { width, height }: { width: number; height: number }) {
      store.dimensions.canvasWidth = width
      store.dimensions.canvasHeight = height
    },
    setCoefs(store, coefs: CoefsMap) {
      Object.keys(coefs).forEach(((coef: CoefName) => {
        store.coefs[coef] = coefs[coef]
      }) as any)
    },
    scale(store, k: number) {
      store.dimensions.spanHoriz = fit(store.dimensions.spanHoriz * k, 1, 100)
    },
  },
  actions: {
    setMatrix(store, { a11, a22 }: { a11: number; a22: number }) {
      store.commit('setCoefs', { a11, a22 })
    },
    setFirst(store, { a11, a12 }: { a11: number; a12: number }) {
      store.commit('setCoefs', { a11, a12 })
    },
    setSecond(store, { a22, a12 }: { a22: number; a12: number }) {
      store.commit('setCoefs', { a12, a22 })
    },
    setA12(store, a12: number) {
      store.commit('setCoefs', { a12 })
    },
    setLinearCoefs(store, { x, y }: { x: number; y: number }) {
      store.commit('setCoefs', { a13: x, a23: y })
    },
    setFreeTerm(store, value: number) {
      store.commit('setCoefs', { a33: value })
    },
  },
})

const fit = (n: number, min: number, max: number) =>
  Math.min(Math.max(n, min), max)
