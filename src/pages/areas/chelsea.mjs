import { areaMeta, areaHero, areaSplit, areaCards, areaClose } from '../../lib/area-page.mjs';
export const meta = areaMeta('chelsea', 'Chelsea', 'SW3 · SW10', 'Bathroom renovation in Chelsea SW3 and SW10 for mews houses, mansion blocks and period homes, with design, specification and installation managed together.');
export function render(cfg) { return `
${areaHero({ name:'Chelsea', postcodes:'SW3 · SW10', kicker:'Mews houses and period flats', lede:'We work in Chelsea. A refined bathroom begins with good proportions and well-chosen finishes, then succeeds because the supply, structure and installation have been considered just as carefully.', image:cfg.images?.areaHeroes?.chelsea })}
${areaSplit({ eyebrow:'Design and detail', title:'The finish must work at full scale.', paragraphs:[
  'In a Chelsea mews house, narrow access and compact rooms can make every clearance matter. In a mansion flat, a generous room may still be governed by a fixed waste route or shared services. We measure the actual space and discuss the building before settling on the visual brief.',
  'Stone, large-format tiles, fitted furniture and brassware bring decisions about cuts, edges, storage, maintenance and lead times. We review samples and dimensions together so the detail looks deliberate when installed, not only on a mood board.'
], link:{href:'/bathroom-renovation/',label:'How we specify a complete bathroom'} })}
${areaSplit({ eyebrow:'Two different routes', title:'Mews entrance or mansion-block lobby?', dark:true, paragraphs:[
  'Those properties ask different practical questions. We consider how the bath, stone and other products will reach the room; where waste will go; and which halls, stairs or shared spaces need protecting. A managed block may have booking procedures, working hours or freeholder requirements. We establish the rules for your building rather than applying a Chelsea-wide assumption.'
], link:{href:'/our-approach/',label:'How we look after the property'} })}
${areaCards({ eyebrow:'At the first visit', title:'Decisions we can make together.', cards:[
  ['Fittings and water','We consider the boiler or cylinder, pressure and flow before promising that a chosen shower or several outlets will perform as expected.'],
  ['Layout and permissions','We check the likely drainage route, what changing a wall or floor may involve, and whether the lease or other rules call for approval. Unknown conditions remain subject to investigation.']
] })}
${areaSplit({ eyebrow:'Guide', title:'Mansion-block project?', paragraphs:['Our mansion-block guide covers the practical questions to settle before work starts: approvals, porter arrangements, lifts, shared services, working hours and protection of communal areas.'], link:{href:'/guides/mansion-block-bathroom-renovation/',label:'Read the mansion-block bathroom guide'} })}
${areaClose('Chelsea','Chelsea has been part of Nicholas’s life since childhood; his family memories are told on the About page. A project still begins with your home and what you want from its bathroom.')}`; }
