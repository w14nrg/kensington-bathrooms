export const meta={path:'/our-approach/',title:'Our Bathroom Installation Approach | Kensington Bathrooms',description:'How Kensington Bathrooms plans, protects and manages bathroom projects in Kensington homes, mansion blocks and managed buildings.',schemaType:'WebPage',breadcrumbs:[{name:'Home',path:'/'},{name:'Our approach',path:'/our-approach/'}]};

const projectSteps=[
  ['First call','We start with what you want to change, the type of property and any practical constraints you already know about.'],
  ['Home consultation','Nicholas visits the room, looks at access, drainage, water supply, ventilation and the building around it, then records anything that needs checking before the layout is fixed.'],
  ['Design and specification','The layout, sanitaryware, brassware, furniture, finishes and services are developed together so the design can actually be installed in the room.'],
  ['Quotation and programme','The agreed scope is priced and the sequence is set around lead times, access, approvals where needed and the trades required.'],
  ['Preparation','Before strip-out, the working route is agreed, protection is laid and deliveries, waste movement and any building arrangements are confirmed.'],
  ['Installation','Preparation, plumbing, waterproofing, electrical coordination, tiling, joinery and finishing are sequenced as one managed project. If opening up reveals something that changes the scope, it is discussed before extra work proceeds.'],
  ['Completion and handover','The room and fittings are checked, the work area is cleaned, protection is lifted and the route through the property is reviewed at handover.']
];

const protectionGroups=[
  ['Before work starts',[
    ['Route agreed','We agree how people, materials and waste will move between the entrance and the bathroom, including porter, lift or managing-agent arrangements where relevant.'],
    ['Protection laid','Carpets, timber, stone, stairs and landings are protected with materials suited to the surfaces present.']
  ]],
  ['Every working day',[
    ['New boots for every project','Every bathroom project starts with a new pair of clean work boots kept for use inside the property.'],
    ['Dust control','Doors, openings and the immediate work area are managed to limit dust moving through the home, with zipped screens used where the layout and work justify them.'],
    ['Tools and materials kept in order','Tools and products are kept in the agreed area rather than on finished furniture or surfaces.'],
    ['Waste carried out','Waste is bagged and removed along the protected route, with shared areas checked after removal.'],
    ['Clean-down','The work area and route are cleaned at the end of each working day.']
  ]],
  ['At handover',[
    ['Protection lifted','Temporary protection is removed when the work is complete.'],
    ['Route checked','The access route and shared spaces used during the job are checked.'],
    ['Room cleaned','The bathroom is cleaned before final handover.']
  ]]
];

export function render(){return `
<section class="page-hero"><div class="page-hero__inner"><p class="eyebrow">How we work</p><h1>The standard starts at the front door.</h1><p class="page-hero__lede">A bathroom renovation happens inside the rest of your home. Our process covers the room, the building and the route through it from the first conversation to handover.</p></div></section>
<section class="content-band content-band--ink"><div class="section-shell"><div class="section-heading"><p class="eyebrow">How a project runs</p><h2>One sequence, from first call to handover.</h2></div><ol class="project-run">${projectSteps.map(([t,d],i)=>`<li><span>${String(i+1).padStart(2,'0')}</span><div><h3>${t}</h3><p>${d}</p></div></li>`).join('')}</ol></div></section>
<section class="content-band content-band--deep"><div class="section-shell"><div class="section-heading"><p class="eyebrow">Property protection standard</p><h2>Before work starts, every day, and at handover.</h2></div><div class="protection-groups">${protectionGroups.map(([heading,items])=>`<section class="protection-group"><h3>${heading}</h3><div>${items.map(([t,d])=>`<article><h4>${t}</h4><p>${d}</p></article>`).join('')}</div></section>`).join('')}</div></div></section>`;}
