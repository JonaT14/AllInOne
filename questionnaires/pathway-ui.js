function pathFields(form){return form.sections.flatMap(section=>section.fields);}
function pathCount(form,state={}){const values=state.values||{};const fields=pathFields(form);return {total:fields.length,filled:fields.filter(f=>typeof values[f.key]==='string'&&values[f.key].trim()!=='').length};}
function pathInsights(form,state={}){
 const values=state.values||{},parts=[];
 const regression=pathFields(form).some(f=>f.regression&&values[f.key]==='Oui');
 if(regression)parts.push('RÉGRESSION SIGNALÉE : une perte d’acquisitions nécessite une évaluation médicale rapide, sans attendre le résultat de la grille.');
 if(form.mode==='development'){
  let absent=0,domains=0,pending=0;
  for(const section of form.sections.filter(s=>s.domain)){
   const yes=section.fields.filter(f=>values[f.key]==='Oui').length;
   const no=section.fields.filter(f=>values[f.key]==='Non').length;
   const skipped=section.fields.filter(f=>values[f.key]==='Non évalué / non applicable').length;
   const empty=section.fields.length-yes-no-skipped;absent+=no;domains+=Number(no>0);pending+=empty+skipped;
   parts.push(`${section.title} : ${yes} acquisition(s) observée(s), ${no} non observée(s), ${skipped} non évaluée(s)/non applicable(s), ${empty} sans réponse.`);
  }
  parts.push(`Bilan : ${absent} réponse(s) « Non » dans ${domains} domaine(s). Repère documentaire d’orientation de cette tranche : ${form.threshold} signes dans au moins 2 domaines.`);
  if(absent>=form.threshold&&domains>=2)parts.push('Ce repère numérique est atteint dans les réponses renseignées : orientation à apprécier par le médecin avec les facteurs transversaux et les inquiétudes.');
  else parts.push(pending?'Grille développementale non entièrement évaluée : ne pas conclure à l’absence d’alerte.':'Ce repère numérique n’est pas atteint ; il ne permet pas d’exclure un TND ni de négliger une inquiétude.');
 }
 if(form.mode==='tdah')for(const section of form.sections.filter(s=>s.countYes)){
  const yes=section.fields.filter(f=>values[f.key]==='Oui').length;
  const evaluated=section.fields.filter(f=>['Oui','Non'].includes(values[f.key])).length;
  parts.push(`${section.title} : ${yes}/9 symptômes cotés « Oui » ; ${evaluated}/9 évalués. Ce comptage n’est pas un diagnostic.`);
 }
 if(form.mode==='sexual'){
  const sections=form.sections.filter(s=>s.theme);let touched=0;
  for(const section of sections){const done=section.fields.filter(f=>values[f.key]==='Abordé').length;const not=section.fields.filter(f=>values[f.key]==='Non abordé').length;const na=section.fields.filter(f=>values[f.key]==='Non applicable').length;const empty=section.fields.length-done-not-na;if(done)touched++;parts.push(`${section.title} : ${done} abordé(s), ${not} non abordé(s), ${na} non applicable(s), ${empty} sans réponse.`);}
  parts.unshift(`${touched}/${sections.length} thèmes comportent au moins un élément abordé.`);
 }
 if(!parts.length)parts.push('Recueil descriptif : aucune conclusion diagnostique automatique. Les réponses non renseignées restent distinctes des réponses négatives.');
 return parts;
}
function pathResources(form){return `<div class="resource-list">${form.resources.map(([label,url])=>`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`).join('')}</div>`;}
function pathFieldHTML(field,state){const v=state.values?.[field.key]||'';const id='path-'+field.key;return `<div class="path-field">${field.type==='text'?`<label for="${id}">${esc(field.label)}</label><textarea id="${id}" data-path="${field.key}" rows="2" placeholder="À renseigner si utile, sans donnée identifiante…">${esc(v)}</textarea>`:`<fieldset><legend>${esc(field.label)}</legend><div class="choices">${field.choices.map((choice,i)=>`<label class="choice"><input type="radio" name="${id}" data-path="${field.key}" value="${esc(choice)}" ${v===choice?'checked':''}><span>${esc(choice)}</span></label>`).join('')}<button type="button" class="clear-answer" data-clear="${field.key}" aria-label="Effacer la réponse : ${esc(field.label)}">×</button></div></fieldset>`}</div>`;}
function openPathway(form){
 stopTimer();current=form;const state=getState(form.id);state.values ||= {};document.title=form.name+' — Questionnaires';
 $('main').innerHTML=`<button id="back" class="back">‹ Tous les questionnaires</button><div class="form-heading"><span class="icon">${form.icon}</span><div><div class="eyebrow">${esc(form.group)}</div><h1>${esc(form.name)}</h1><p>${esc(form.sub)}</p></div></div><div class="path-layout"><section><div class="card"><h2>Repères de consultation</h2><div class="info">${esc(form.info)}</div><p class="hint">Les rubriques sont indépendantes. « Non évalué / non applicable » ne vaut pas « Non ». Les champs libres sont facultatifs.</p>${pathResources(form)}<div class="actions"><button id="expand-all">Tout déplier</button><button id="collapse-all">Tout replier</button>${form.group==='Troubles du neurodéveloppement'&&form.id!=='tnd-dsm'?'<button id="open-dsm">Ouvrir l’aide DSM</button>':''}</div></div><nav class="section-nav" aria-label="Rubriques du parcours">${form.sections.map((s,i)=>`<button data-jump="${i}">${esc(s.title)}</button>`).join('')}</nav>${form.sections.map((section,i)=>`<details class="card path-section" id="section-${i}" ${section.open?'open':''}><summary><span>${esc(section.title)}</span><small id="section-progress-${i}"></small></summary>${section.hint?`<p class="info">${esc(section.hint)}</p>`:''}${section.fields.map(f=>pathFieldHTML(f,state)).join('')}</details>`).join('')}</section><aside><div class="path-panel card"><div class="eyebrow">Recueil de consultation</div><div id="path-progress" role="status" aria-live="polite"></div><div id="path-alert" role="alert"></div><details class="path-results" open><summary>Bilan des réponses</summary><div id="path-insights"></div></details><div class="actions"><button id="summary" class="primary">Voir la synthèse</button><button id="reset" class="danger">Réinitialiser</button></div><p class="privacy">Aucun envoi ni sauvegarde. Les réponses restent dans cet onglet jusqu’à sa fermeture ou son rechargement.</p></div></aside></div>`;
 $('back').onclick=home;$('expand-all').onclick=()=>document.querySelectorAll('.path-section').forEach(el=>el.open=true);$('collapse-all').onclick=()=>document.querySelectorAll('.path-section').forEach(el=>el.open=false);
 if($('open-dsm'))$('open-dsm').onclick=()=>openForm('tnd-dsm');
 document.querySelectorAll('[data-jump]').forEach(b=>b.onclick=()=>{const el=$('section-'+b.dataset.jump);el.open=true;el.scrollIntoView({behavior:'smooth',block:'start'});});
 document.querySelectorAll('[data-path]').forEach(input=>input.addEventListener(input.tagName==='TEXTAREA'?'input':'change',()=>{state.values[input.dataset.path]=input.value;updatePathway(form,state);}));
 document.querySelectorAll('[data-clear]').forEach(b=>b.onclick=()=>{delete state.values[b.dataset.clear];document.querySelectorAll('input[name="path-'+b.dataset.clear+'"]').forEach(input=>input.checked=false);updatePathway(form,state);});
 $('summary').onclick=()=>showReport(form.id);$('reset').onclick=()=>ask('Réinitialiser ce parcours ?','Toutes les réponses et annotations de ce parcours seront effacées. Les autres questionnaires seront conservés.',()=>{delete states[form.id];openForm(form.id);});
 updatePathway(form,state);window.scrollTo(0,0);
}
function updatePathway(form,state){const count=pathCount(form,state);$('path-progress').innerHTML=`<div class="path-count">${count.filled}<small> / ${count.total}</small></div><p class="score-label">champs renseignés · rubriques facultatives selon la consultation</p>`;form.sections.forEach((section,i)=>{const filled=section.fields.filter(f=>state.values[f.key]?.trim()).length;$('section-progress-'+i).textContent=filled+'/'+section.fields.length;});const insights=pathInsights(form,state);$('path-alert').innerHTML=insights.some(s=>s.startsWith('RÉGRESSION'))?'<p class="alert">Régression signalée : évaluation médicale rapide nécessaire.</p>':'';$('path-insights').innerHTML=insights.filter(s=>!s.startsWith('RÉGRESSION')).map(s=>'<p>'+esc(s)+'</p>').join('');$('summary').disabled=!count.filled;}
function pathwayReport(form,state){const count=pathCount(form,state);return form.name.toUpperCase()+'\n'+form.sub+'\n'+count.filled+'/'+count.total+' champs renseignés (rubriques facultatives selon la consultation)\n\n'+pathInsights(form,state).join('\n')+'\n\n'+form.sections.map(section=>{const filled=section.fields.some(f=>state.values?.[f.key]?.trim());return section.title.toUpperCase()+'\n'+(filled?section.fields.map(f=>f.label+' : '+(state.values?.[f.key]?.trim()||'NON RENSEIGNÉ')).join('\n'):'Rubrique non renseignée.');}).join('\n\n')+'\n\nVersion : reconstruction indépendante, libellés reformulés ; pas de validation clinique de cet outil.\n'+form.info+'\n'+(form.group==='Troubles du neurodéveloppement'?'Une synthèse de préparation PCO ne remplace pas le formulaire administratif officiel.\n':'')+'Ressources :\n'+form.resources.map(([label,url])=>label+' : '+url).join('\n');}
if(typeof module!=='undefined')module.exports={pathFields,pathCount,pathInsights,pathwayReport};
