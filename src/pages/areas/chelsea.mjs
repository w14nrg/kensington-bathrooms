import { areaMeta, areaRender } from '../../lib/area-page.mjs';
export const meta = areaMeta('chelsea', 'Chelsea', 'SW3 · SW10', 'Bathroom renovation in Chelsea SW3 and SW10 for mews houses, mansion blocks and period homes, with design, specification and installation managed together.');
export function render() { return areaRender({
  name:'Chelsea', postcodes:'SW3 · SW10', kicker:'Mews houses and managed buildings',
  headline:'A refined finish needs sound decisions underneath.',
  lede:'A Chelsea bathroom can be highly detailed and still needs the basics done properly: an achievable layout, suitable supply, prepared surfaces, waterproofing and a way to carry out the work in the building.',
  angles:[
    ['Finish and buildability','Stone, large tiles, fitted furniture and specialist brassware all depend on dimensions and preparation. We talk through cuts, edges, storage, clearances and lead times before the final products are ordered, so the room is not designed around an impossible detail.'],
    ['Mews and mansion-block access','A narrow mews entrance creates different delivery questions from a portered mansion block. Either can have restricted working arrangements or shared spaces to protect. We plan around the property in front of us, including any managing-agent or freeholder requirements.']
  ],
  questions:[
    ['Will the chosen fittings work here?','We consider hot-water production, pressure and flow alongside the proposed shower and taps, and check what the room can accommodate before committing to a specification.'],
    ['What needs permission?','For a flat or an altered historic building, the lease, managing agent and any applicable consent requirements should be checked early. We do not treat a bathroom as exempt just because the work is indoors.']
  ],
  protection:'Finished hallways, stairs and communal areas need an agreed route for tools, products and waste. Surfaces are protected for what they are, and the work area is kept organised throughout the project.',
  close:'Chelsea is part of the connected area where we work. Nicholas has family memories here that go back to childhood; you can read more about those on our About page.'
}); }
