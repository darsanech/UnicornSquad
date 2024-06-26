export class unitTemplate {
  id: number
  name: string | { base: string } | { base: string; prom: string }
  class: number
  unique?: boolean
  constructor(
    id?: number,
    name?: string | { base: string } | { base: string; prom: string },
    classs?: number,
    unique?: boolean
  ) {
    this.id = id ?? 0
    this.name = name ?? 'None'
    this.class = classs ?? 0
    this.unique = unique ?? false
  }
}
export const unitsData = [
  { id: 1, name: 'alain', class: 101 },
  { id: 2, name: 'scarlett', class: 124 },
  { id: 3, name: 'lex', class: 102 },
  { id: 4, name: 'josef', class: 127, unique: true },
  { id: 5, name: 'travis', class: 112 },
  { id: 6, name: 'clive', class: 113 },
  { id: 7, name: 'hodrick', class: 107 },
  { id: 8, name: 'chole', class: 103 },
  { id: 9, name: 'aubin', class: 104 },
  { id: 10, name: 'rolf', class: 110 },
  { id: 11, name: 'bruno', class: 108 },
  { id: 12, name: 'auch', class: 117 },
  { id: 13, name: 'sharon', class: 116 },
  { id: 14, name: 'mordon', class: 109 },
  { id: 15, name: 'yahna', class: 118 },
  { id: 16, name: 'berenice', class: 106 },
  { id: 17, name: 'ochlys', class: 123, unique: true },
  { id: 18, name: 'selvie', class: 119 },
  { id: 19, name: 'fran', class: 121 },
  { id: 20, name: 'adel', class: 113 },
  { id: 21, name: 'nina', class: 109 },
  { id: 22, name: 'miriam', class: 114 },
  { id: 23, name: 'kitra', class: 109 },
  { id: 24, name: 'renault', class: 113 },
  { id: 25, name: 'monica', class: 114 },
  { id: 26, name: 'colm', class: 102 },
  { id: 27, name: 'melisandre', class: 105 },
  { id: 28, name: 'rosalinde', class: 126, unique: true },
  { id: 29, name: 'virginia', class: 125 },
  { id: 30, name: 'leah', class: 105 },
  { id: 31, name: 'berengaria', class: 129, unique: true },
  { id: 32, name: 'primm', class: 116 },
  { id: 33, name: 'liza', class: 111 },
  { id: 34, name: 'tatiana', class: 116 },
  { id: 35, name: 'magellan', class: 106 },
  { id: 36, name: 'aramis', class: 105 },
  { id: 37, name: 'gloucester', class: 115 },
  { id: 38, name: 'hilda', class: 120 },
  { id: 39, name: 'jeremy', class: 106 },
  { id: 40, name: 'gilbert', class: 128, unique: true },
  { id: 41, name: 'celeste', class: 121, unique: true },
  { id: 42, name: 'lhinalagos', class: 122, unique: true },
  { id: 43, name: 'ridiel', class: 122, unique: true },
  { id: 44, name: 'ithilion', class: 130, unique: true },
  { id: 45, name: 'galadmir', class: 122, unique: true },
  { id: 46, name: 'railanor', class: 130, unique: true },
  { id: 47, name: 'eltolinde', class: 131, unique: true }
]
