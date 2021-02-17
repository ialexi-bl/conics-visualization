import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { CoefsMap, RelativeDimensions } from './types'

// /* eslint-disable */
declare module '@vue/runtime-core' {
  interface State {
    dimensions: Omit<RelativeDimensions, 'spanVert', 'unitsSize'>
    coefs: CoefsMap
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
