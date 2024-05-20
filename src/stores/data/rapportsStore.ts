import { rapportsData } from '../../assets/data/rapportsData'
import { defineStore } from 'pinia'
import { reactive } from 'vue'
export const useRapportsStore = defineStore('rapportsStore', () => {
  const rapports = reactive(rapportsData)

  function getUnitsWithRapport(rapport: [number]) {
    var unitsWAllRapports = []
    const contador = new Map<number, number>()

    for (var rap of rapports) {
      var unitToCheck = -1
      if (rapport.includes(rap[0]) && !rapport.includes(rap[1])) {
        unitToCheck = rap[1]
      } else if (!rapport.includes(rap[0]) && rapport.includes(rap[1])) {
        unitToCheck = rap[0]
      }
      if (unitToCheck > 0) {
        if (contador.has(unitToCheck)) {
          contador.set(unitToCheck, contador.get(unitToCheck)! + 1)
        } else {
          contador.set(unitToCheck, 1)
        }
        if (contador.get(unitToCheck) === rapport.length) {
          unitsWAllRapports.push(unitToCheck)
        }
      }
    }

    return unitsWAllRapports.concat(rapport)
  }
  return { rapports, getUnitsWithRapport }
})
