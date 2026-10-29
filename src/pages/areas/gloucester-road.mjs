import { areaMeta, areaHero, areaSplit, areaCards, areaClose } from '../../lib/area-page.mjs';
import { workFigure } from '../../lib/util.mjs';

export const meta = { ...areaMeta('gloucester-road', 'Gloucester Road', 'SW7 · SW5', 'Bathroom renovation around Gloucester Road, SW7 and SW5, for converted townhouse flats and garden-square buildings. Shared stairs protected throughout.'), title: 'Bathroom Renovation Gloucester Road, SW7 & SW5 | Kensington Bathrooms' };

export function render(cfg) { return `
${areaHero({ name:'Gloucester Road', heading:'Bathroom renovation around Gloucester Road.', postcodes:'SW7 · SW5', kicker:'Garden squares and converted townhouses', lede:'Around Gloucester Road, most bathrooms sit inside a tall stucco or red-brick house that has been divided into flats. The room is yours; the stairs, the drains and often the water supply are shared. We plan the bathroom with both in mind.', image:cfg.images?.areaHeroes?.gloucesterRoad })}
${areaSplit({ eyebrow:'The streets either side of the station', title:'Tall houses, many front doors.', dark:true, paragraphs:[
  'North of Cromwell Road are Cornwall Gardens and Emperor’s Gate, with Victoria Grove and Launceston Place towards Kensington. South of it are the garden squares and streets of Courtfield Gardens, Collingham Gardens, Harrington Gardens and Stanhope Gardens, lined with houses of five or six storeys. Most of them are now flats, from lower-ground studios to top-floor flats reached by a long shared staircase.',
  'That shapes a bathroom project before a tile is chosen. Materials and waste travel through a communal hall and up shared stairs, a neighbour lives directly below the room, and the building may have its own rules for contractors.'
], link:{href:'/our-approach/',label:'How we protect the home and the shared parts of the building'} })}
<section class="content-band content-band--ink"><div class="section-shell"><div class="content-grid"><div><p class="eyebrow">Shared stairs and halls</p><h2>Protection goes down before anything comes in.</h2></div><div class="content-copy">${workFigure(cfg.images.work.hallStair, { sizes:'(max-width: 760px) 100vw, 46vw' })}<p>In a converted house the communal stair is often the only way in. Before strip-out we cover the treads, landings and hall floor along the route to the flat, keep it in place for the whole job and carry every bag of waste out the same way. Neighbours still use those stairs every day, so the protection has to stay tidy and secure, not just be put down on day one.</p><p>Where there is a managing agent or a residents’ association, we ask early about working hours, parking for deliveries and any notice the building expects.</p></div></div></div></section>
${areaCards({ eyebrow:'Before fixing a layout', title:'What we look at around Gloucester Road', dark:true, cards:[
  ['The flat below','A leak in a converted house goes straight into someone else’s ceiling. Waterproofing under the shower and around the bath, and access to valves and traps, are planned in from the start.'],
  ['Lower-ground and basement flats','Below street level the bathroom may sit lower than the main drain. We check the existing route and whether a pumped waste is already in use before moving a WC or shower.'],
  ['Water from a shared supply','Older conversions can share a supply or rely on a tank in the roof. Pressure and flow decide which shower will actually perform, so we establish them before the shower is chosen.'],
  ['Lease and freeholder consent','Many flats here are leasehold. If an alteration needs the freeholder’s or managing agent’s consent, we help you get the drawings and information together before dates are fixed.']
] })}
${areaSplit({ eyebrow:'Popular here', title:'Making more of a compact bathroom.', paragraphs:[
  'Flats carved out of large houses often have a bathroom squeezed into an old dressing room or the end of a corridor. A walk-in shower in place of a little-used bath, wall-hung fittings and storage built into the wall can make the same footprint feel far larger.'
], link:{href:'/bath-to-shower-conversion/',label:'Bath to shower conversions'} })}
${areaSplit({ eyebrow:'Neighbouring areas', title:'Between South Kensington and Kensington.', dark:true, paragraphs:[
  'Gloucester Road sits between our South Kensington and Kensington work, a short walk from both. If your building is a portered mansion block rather than a converted house, our mansion-block guide covers the arrangements that usually apply.'
], link:{href:'/guides/mansion-block-bathroom-renovation/',label:'Read the mansion-block bathroom guide'} })}
${areaClose('Gloucester Road','We work around Gloucester Road and the garden squares either side of it. Home consultations, or design meetings by appointment at our base in West Kensington, a short drive away.')}`; }
