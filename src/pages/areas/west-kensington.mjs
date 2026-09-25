import { areaMeta, areaHero, areaSplit, areaCards, areaClose } from '../../lib/area-page.mjs';
export const meta = areaMeta('west-kensington', 'West Kensington', 'W14', 'Bathroom renovation in West Kensington W14 for period houses, converted flats and mansion blocks, with design and installation planned around the property.');
export function render(cfg) { return `
${areaHero({ name:'West Kensington', postcodes:'W14', kicker:'Close to our local base', lede:'We work in West Kensington, near our local base. The first visit starts with the room you have and the services behind it, whether your home is a house, conversion or purpose-built flat.', image:cfg.images?.areaHeroes?.westKensington })}
${areaSplit({ eyebrow:'West Kensington homes', title:'What is under the floor?', paragraphs:[
  'West Kensington has Victorian terraces, conversions and mansion flats, including around North End Road. In an upper-floor flat, an attractive drawing of a new layout cannot tell us where the joists, soil stack and water supplies run. We look at these routes before agreeing whether a WC can move or a level-access shower is practical.',
  'The strip-out may reveal older pipework or a floor that needs more work than the finished tiles suggested. Nicholas explains what can be judged on the first visit and what needs a provisional allowance until the room is opened.'
], link:{href:'/bathroom-renovation/',label:'How we develop the bathroom plan'} })}
${areaCards({ eyebrow:'At the first visit', title:'Two questions before choosing the fittings.', cards:[
  ['Will the shower deliver what you expect?','We look at the boiler or cylinder and the available flow as well as pressure. A rain shower and several outlets need a supply that will support them; a catalogue photograph cannot answer that.'],
  ['How does the work get to the room?','A converted flat may involve shared stairs and a narrow entrance; a family home has its own daily routine to protect. We agree the route for products and waste, and any building requirements, before work begins.']
] })}
${areaSplit({ eyebrow:'Care during the work', title:'A route worth planning.', paragraphs:[
  'Floors, landings and stairs are protected for the surfaces actually there. Where the route crosses communal space, we discuss the building rules and who needs to approve the arrangements. The bathroom and the rest of the home are part of the same job.'
], link:{href:'/our-approach/',label:'See how we protect the property'} })}
${areaClose('West Kensington','West Kensington is one of the neighbourhoods where we work. Home consultations, or design meetings by appointment at our base in West Kensington.')}`; }
