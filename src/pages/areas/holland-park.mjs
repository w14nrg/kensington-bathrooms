import { areaMeta, areaHero, areaSplit, areaCards, areaClose } from '../../lib/area-page.mjs';
export const meta = areaMeta('holland-park', 'Holland Park', 'W8 · W11', 'Bathroom renovation in Holland Park W8 and W11, including principal bathrooms and multi-room work in period houses and flats.');
export function render() { return `
${areaHero({ name:'Holland Park', postcodes:'W8 · W11', kicker:'Period homes and principal bathrooms', lede:'A principal bathroom should belong to the home around it. In Holland Park we can plan one carefully detailed room or the order of work across several bathrooms.' })}
${areaCards({ eyebrow:'More than one room', title:'Plan the sequence around your household.', cards:[
  ['Which bathroom stays in use?','If several rooms are being renewed, we discuss which one the household needs throughout the work and whether to finish one before opening another. The water supply and access for trades can change the sequence.'],
  ['When should the fittings arrive?','Stone, bespoke furniture and specialist brassware may have different lead times. We establish dimensions and connections before ordering so a late product decision does not hold up every room.']
] })}
${areaSplit({ eyebrow:'The building itself', title:'Period character deserves careful decisions.', paragraphs:[
  'Holland Park includes large nineteenth-century villas and other period homes. Original fabric can sit alongside services altered many times. We look at drainage, floor construction and ventilation before deciding how far to change the layout; a beautiful finish depends on the preparation beneath it.',
  'If a particular property is listed, in a conservation area, or subject to a lease, the relevant permissions need checking for the proposed work. The designation of a neighbourhood alone does not tell us what consent your bathroom needs.'
], link:{href:'/bathroom-renovation/',label:'See how design becomes a buildable specification'} })}
${areaSplit({ eyebrow:'Working through the home', title:'Protect the route as carefully as the room.', dark:true, paragraphs:[
  'Long finished hallways, stairs, runners and entrances can be part of the working route. We discuss how materials enter and waste leaves, then protect the surfaces present. This is especially important when more than one bathroom is involved and the household continues to live in the property.'
], link:{href:'/our-approach/',label:'Our approach to working in your home'} })}
${areaSplit({ eyebrow:'Guide', title:'Working in a period or listed home?', paragraphs:['Our period-home guide covers drainage, older floors, ventilation and the planning or listed-building questions that should be checked before the design is treated as final.'], link:{href:'/guides/period-and-listed-home-bathrooms/',label:'Read the period and listed homes guide'} })}
${areaClose('Holland Park','We work in Holland Park and visit the property before recommending a layout, a programme or a product list. The plan should fit the home and the way you use it.')}`; }
