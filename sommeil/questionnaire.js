const form = document.querySelector('#form');
const target = document.querySelector('#questions');
const node = (tag, label) => {
  const element = document.createElement(tag);
  if (label) element.textContent = label;
  return element;
};
const specs = new Map(QSPEC.map(([key, type, bits]) => [key, {type, bits}]));
const stop = [
  {k:'sb_t',l:'Vous sentez-vous souvent fatigué, somnolent ou épuisé pendant la journée ?'},
  {k:'sb_o',l:'A-t-on observé des pauses respiratoires pendant votre sommeil ?'},
  {k:'sb_p',l:'Êtes-vous suivi ou traité pour une hypertension artérielle ?'},
];
for (const section of S) {
  const fields = (section.id === 'sb' ? stop : section.f).filter(field => specs.has(field.k));
  if (!fields.length) continue;
  const box = node('section');
  box.append(node('h2', {pat:'Conduite et motif de consultation',sb:'Questions STOP-Bang' }[section.id] || section.t));
  for (const field of fields) {
    const {type, bits} = specs.get(field.k);
    const group = node('fieldset');
    group.append(node('legend', field.l || field.g || 'Probabilité de vous assoupir'));
    if (type === 'r' || type === 'm') {
      for (const option of QOPTS[field.k]) {
        const label = node('label');
        const input = node('input');
        Object.assign(input,{type:'checkbox',name:field.k,value:option});
        if (type === 'r') input.type = 'radio';
        label.append(input,' '+option);
        group.append(label);
      }
      if (type === 'r') {
        const label = node('label');
        const input = node('input');
        Object.assign(input,{type:'radio',name:field.k,value:''});
        label.append(input,' Sans réponse');
        group.append(label);
      }
    } else if (type === 'e') {
      EPS.forEach((question, index) => {
        const label = node('label',question+' ');
        const select = node('select');
        select.name = 'eps-'+index;
        for (const [value, text] of [['','Sans réponse'],['0','0 · Aucune'],['1','1 · Faible'],['2','2 · Moyenne'],['3','3 · Forte']]) {
          select.add(new Option(text,value));
        }
        label.append(select);
        group.append(label);
      });
    } else {
      const input = node(type === 'x' ? 'textarea' : 'input');
      input.name = field.k;
      input.setAttribute('aria-label', field.l);
      if (type === 'x') input.maxLength = 120;
      if (type === 't') input.type = 'time';
      if (type === 'n') Object.assign(input,{type:'number',min:0,max:field.k === 'eva' ? 10 : 2**bits-2,step:1});
      group.append(input);
      if (field.u) group.append(' '+field.u);
    }
    box.append(group);
  }
  target.append(box);
}
const result = document.querySelector('#result');
const notice = document.querySelector('#notice');
const code = document.querySelector('#code');
form.addEventListener('input', () => { result.hidden = true; code.value = ''; notice.textContent = ''; });
form.addEventListener('submit', event => {
  event.preventDefault();
  const answers = new FormData(form);
  const data = {};
  for (const [key, type] of QSPEC) {
    if (type === 'e') {
      const scores = EPS.map((_,i) => answers.get('eps-'+i));
      if (scores.some(value => value !== '')) data.eps = scores.map(value => value === '' ? null : Number(value));
    } else if (type === 'm') {
      const selected = answers.getAll(key);
      if (selected.length) data[key] = selected;
    } else {
      const value = answers.get(key)?.trim();
      if (value) data[key] = value;
    }
  }
  if (!Object.keys(data).length) {
    notice.textContent = 'Renseignez au moins une réponse.';
    return;
  }
  if (QSPEC.some(([key,type]) => type === 'x' && new TextEncoder().encode(data[key] || '').length > 255)) {
    notice.textContent = 'Raccourcissez vos réponses libres.';
    return;
  }
  code.value = QC.encode(data,QOPTS);
  result.hidden = false;
  notice.textContent = 'Votre code est prêt.';
  code.focus();
});
document.querySelector('#select').addEventListener('click', () => { code.focus(); code.select(); });
