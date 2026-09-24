import { areaMeta, areaRender } from '../../lib/area-page.mjs';
export const meta = areaMeta('south-kensington', 'South Kensington', 'SW7', 'Bathroom renovation in South Kensington SW7 for portered flats, garden-square homes and period properties, with building access and installation carefully planned.');
export function render() { return areaRender({
  name:'South Kensington', postcodes:'SW7', kicker:'Portered buildings and period flats',
  headline:'The building sets part of the brief.',
  lede:'In South Kensington, a beautiful bathroom may sit behind a shared front door, a porter\'s desk or several flights of stairs. The route and the building rules belong in the conversation from the beginning.',
  angles:[
    ['Porters, lifts and working hours','A managed building may set times for deliveries or noisy work, ask for lift protection or require notice before water is isolated. We ask about those arrangements before agreeing a programme and do not assume every block has the same rules.'],
    ['Old services and altered flats','In converted houses and period apartment buildings, the position of a shared riser or soil stack can influence which layout changes are sensible. We assess the room and available routes instead of assuming that a fitting can simply be moved across the floor.']
  ],
  questions:[
    ['Who needs to approve the work?','The lease and managing agent may set requirements for alterations, access or contractors. We discuss which documents and consents need checking before the project is booked.'],
    ['Can the water be isolated?','A bathroom connected to shared services may require coordination with the building. We establish the available arrangement rather than promising an isolation method from the postcode.']
  ],
  protection:'Where the route crosses a shared entrance, lift or corridor, we plan protection for those spaces as well as the flat. Waste movement and daily clean-down are agreed around the actual building.',
  close:'We work in South Kensington and arrange home consultations at the property. We discuss the building and the bathroom together before suggesting a scope of work.'
}); }
