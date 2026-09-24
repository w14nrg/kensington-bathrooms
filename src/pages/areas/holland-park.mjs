import { areaMeta, areaRender } from '../../lib/area-page.mjs';
export const meta = areaMeta('holland-park', 'Holland Park', 'W8 · W11', 'Bathroom renovation in Holland Park W8 and W11, including principal bathrooms and multi-room work in period houses and flats.');
export function render() { return areaRender({
  name:'Holland Park', postcodes:'W8 · W11', kicker:'Period homes and principal bathrooms',
  headline:'The bathroom should feel right in the whole house.',
  lede:'From a principal bathroom to several rooms in one home, design decisions in Holland Park need to sit comfortably with the property and the people living in it.',
  angles:[
    ['More than one bathroom','Where several rooms are involved, we talk about which rooms the household needs to keep using, the order of work, product lead times and whether the water and hot-water supply suits the proposed fittings. Doing everything at once is not automatically the best answer.'],
    ['Period character and hidden services','Older houses can combine delicate finishes with pipework or floor construction that has changed over the years. We look at the actual structure and services, and where a property is listed or has particular building rules, the relevant permissions need checking before the design is final.']
  ],
  questions:[
    ['What should remain in use?','For a multi-room project, we agree a sensible sequence with the household and consider how access, water isolation and deliveries affect everyday life.'],
    ['How much can we change?','A change to the layout can affect joists, drainage, ventilation or historic fabric. We identify what can be established on survey and what needs further investigation.']
  ],
  protection:'Long hallways, stair runners, timber floors and carefully finished entrances deserve the same attention as the bathroom. The route for people, materials and waste is discussed before the first day on site.',
  close:'Holland Park sits next to Kensington and close to our local base. We focus on this small group of neighbouring areas so each project receives a proper visit and a plan specific to the home.'
}); }
