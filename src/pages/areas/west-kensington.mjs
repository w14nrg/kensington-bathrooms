import { areaMeta, areaRender } from '../../lib/area-page.mjs';
export const meta = areaMeta('west-kensington', 'West Kensington', 'W14', 'Bathroom renovation in West Kensington W14 for period houses, converted flats and mansion blocks, with design and installation planned around the property.');
export function render() { return areaRender({
  name:'West Kensington', postcodes:'W14', kicker:'Close to our local base',
  headline:'A better room begins with the building around it.',
  lede:'For West Kensington houses, flats and conversions, we plan the bathroom you want around the space, the services and the way the property is used.',
  angles:[
    ['Period houses and conversions','An upper-floor bathroom may sit over older joists, with pipework and a soil stack whose route is not obvious from the finished room. If you want to move the WC, replace a bath with a walk-in shower or change the floor level, we look at the waste route and structure before treating the new layout as settled.'],
    ['Working around daily life','Narrow stairs, shared entrances and rooms reached through finished hallways affect how products enter and waste leaves. We talk about the route and household routine at the survey, so access and protection are part of the project rather than an afterthought.']
  ],
  questions:[
    ['Can the layout change?','We discuss the position of the stack, the floor and the space needed around each fitting. The answer may depend on what opening the old bathroom reveals.'],
    ['Will the new shower suit the supply?','We look at the boiler or hot-water arrangement and the existing supply before specifying shower fittings, especially where other outlets are used at the same time.']
  ],
  protection:'We agree how the team reaches the room through halls, landings and stairs, then protect the surfaces present. In flats, shared areas and the building\'s own requirements are part of that conversation.',
  close:'West Kensington is immediately beside the Kensington neighbourhoods we serve. Our local base is nearby, and each visit starts with your actual room rather than a standard plan for W14.'
}); }
