const dummyData = [
  { id: '001', name: 'Alain', class: 'Lord', rapport: ['002', '003', '004'], merc: false },
  { id: '002', name: 'Ochlys', class: 'Angel', rapport: ['001', '004'], merc: false },
  { id: '003', name: 'Travis', class: 'Thief', rapport: ['001'], merc: false },
  { id: '004', name: 'Tatiana', class: 'Cleric', rapport: ['001', '002'], merc: false }
]
const mercData = [{ id: '901', name: 'Colette', class: 'Spear', rapport: [], merc: true }]
const classesData = ['Lord', 'Angel', 'Thief', 'Cleric', 'Spear', 'Mage']
export { dummyData, mercData, classesData }
