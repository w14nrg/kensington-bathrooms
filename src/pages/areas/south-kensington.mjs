import { areaMeta, areaHero, areaSplit, areaCards, areaClose } from '../../lib/area-page.mjs';
export const meta = areaMeta('south-kensington', 'South Kensington', 'SW7', 'Bathroom renovation in South Kensington SW7 for portered flats, garden-square homes and period properties, with building access and installation carefully planned.');
export function render() { return `
${areaHero({ name:'South Kensington', postcodes:'SW7', kicker:'Flats, terraces and managed buildings', lede:'In South Kensington, the route to the bathroom can be as important to the programme as the room itself. We discuss the building arrangements at the home visit, then design around what we find.' })}
${areaSplit({ eyebrow:'Behind the front door', title:'First, understand the building.', dark:true, paragraphs:[
  'South Kensington includes large terraced houses, converted flats and mansion buildings around Queen’s Gate and its neighbouring streets. A flat may involve a porter, shared entrance or lift. We ask about deliveries, working hours and protection of communal areas before agreeing dates; we do not assume every building has the same rules.',
  'If an alteration needs a managing agent or freeholder’s approval, it is better to establish that before products are ordered. Where the flat relies on shared water services, isolation may also need to be coordinated with the building.'
], link:{href:'/our-approach/',label:'How we work in occupied and managed homes'} })}
${areaCards({ eyebrow:'Before fixing a layout', title:'What would we check at the visit?', dark:false, cards:[
  ['The waste route','Moving a WC in a period conversion depends on the stack, the available fall and the floor structure. A room measurement alone cannot establish a feasible route.'],
  ['The shower supply','We look at how hot water is produced, what pressure and flow are available and whether other outlets will run at the same time before specifying the shower and taps.'],
  ['The approval route','We ask what the lease and building rules require. We can identify the questions; the property owner or relevant adviser must confirm the actual consent needed.']
] })}
${areaSplit({ eyebrow:'Finishes and access', title:'A precise finish needs a workable delivery plan.', paragraphs:[
  'Large tile formats, stone, fitted furniture and screens have to pass through the building and fit the room once there. We confirm clearances, dimensions and substrate preparation before treating the finish as decided. The result should feel considered without leaving practical questions to the installation day.'
], link:{href:'/bathroom-renovation/',label:'What a complete bathroom renovation includes'} })}
${areaClose('South Kensington','We work in South Kensington and arrange consultations at your property. Nicholas talks through the room, its services and the building rules before suggesting a scope of work.')}`; }
