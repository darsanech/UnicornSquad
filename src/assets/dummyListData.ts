const dummyData = [
  { id: '001', name: 'Alain', class: '00', rapport: ['002', '003', '004'], merc: false },
  { id: '002', name: 'Ochlys', class: '01', rapport: ['001', '004'], merc: false },
  { id: '003', name: 'Travis', class: '02', rapport: ['001'], merc: false },
  { id: '004', name: 'Tatiana', class: '03', rapport: ['001', '002'], merc: false }
]
const mercData = [{ id: '901', name: 'Colette', class: '04', rapport: [], merc: true }]
const classesData = [
  { id: '00', name: 'Lord' },
  { id: '01', name: 'Angel' },
  { id: '02', name: 'Thief' },
  { id: '03', name: 'Cleric' },
  { id: '04', name: 'Spear' },
  { id: '05', name: 'Mage' }
]
export { dummyData, mercData, classesData }
