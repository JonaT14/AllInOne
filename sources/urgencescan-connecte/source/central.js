(()=>{
'use strict';
const state={user:null,cabinet:null,settings:{},team:null,syncing:false,syncTimer:null,lastError:''};
const original={save:window.save,render:window.render,navigate:window.navigate,exploreDemo:window.exploreDemo};
const stockKey='urgencescan_demo_stock_v2',settingsKey='urgencescan_demo_alerts_v2';

async function api(path,options={}){
  const response=await fetch('/api/'+path,{...options,headers:{'content-type':'application/json',...(options.headers||{})}});
  let data={};try{data=await response.json()}catch{}
  if(!response.ok){const messages={AUTH_REQUIRED:'Connectez-vous pour continuer.',FORBIDDEN:'Vous n’avez pas les droits nécessaires.',INVALID_INPUT:'Vérifiez les informations saisies.',INVITE_INVALID:'Ce code est invalide, expiré ou déjà utilisé.',EMAIL_MISMATCH:'Connectez-vous avec l’adresse e-mail invitée.',OWNER_PROTECTED:'Le propriétaire du cabinet ne peut pas être retiré.',TRANSFER_REQUIRED:'Transférez d’abord la propriété du cabinet à un autre membre.',LIMIT_EXCEEDED:'La trousse dépasse la taille maximale autorisée.'};throw Error(messages[data.error]||'Le service est momentanément indisponible.');}
  return data;
}
function isSigned(){return !!state.user}
function canAdmin(){return ['owner','admin'].includes(state.cabinet?.role)}
function canEditCentral(){return ['owner','admin','editor'].includes(state.cabinet?.role)}
function safeArray(value){return Array.isArray(value)?value:[]}
function showDashboard(){document.body.classList.remove('landing-mode');$('landing')?.classList.add('hidden');original.navigate('trousse')}
function signInHref(){return '/signin-with-chatgpt?return_to='+encodeURIComponent('/app.html?connected=1')}
function signOutHref(){return '/signout-with-chatgpt?return_to='+encodeURIComponent('/app.html')}

function centralChrome(){
  if(!isSigned())return;
  const chip=document.querySelector('.topright .chip');if(chip)chip.textContent=state.syncing?'ENREGISTREMENT…':state.lastError?'À VÉRIFIER':'SYNCHRONISÉ';
  const note=document.querySelector('.localnote');if(note)note.innerHTML=`<strong><span class="dot"></span>Sauvegarde automatique</strong><span class="muted">${esc(state.cabinet?.name||'Votre cabinet')}</span>`;
  if($('cabinet-id'))$('cabinet-id').textContent=state.cabinet?.name||'Mon cabinet';
  if($('auth-button'))$('auth-button').textContent='Mon compte';
  if($('modebanner'))$('modebanner').innerHTML=`<span>${state.lastError?esc(state.lastError):'Vos modifications sont enregistrées automatiquement.'}</span><button onclick="navigate('cloud')">Gérer mon espace →</button>`;
  const foot=document.querySelector('.pagefoot > span:last-child');if(foot)foot.textContent=state.syncing?'Enregistrement…':'Sauvegarde centralisée et sécurisée';
}

function scheduleSync(){
  if(!isSigned()||!canEditCentral())return;
  clearTimeout(state.syncTimer);
  state.syncTimer=setTimeout(syncNow,650);
}
async function syncNow(){
  if(!isSigned()||state.syncing)return;
  state.syncing=true;state.lastError='';centralChrome();
  try{
    const inventory=JSON.parse(localStorage.getItem(stockKey)||'[]');
    const settings=JSON.parse(localStorage.getItem(settingsKey)||'{}');
    await api('state',{method:'POST',body:JSON.stringify({inventory,settings})});
  }catch(error){state.lastError=error.message;toast('Sauvegarde interrompue : '+error.message)}
  finally{state.syncing=false;centralChrome()}
}

window.save=data=>{
  if(isSigned()&&!canEditCentral()){toast('Votre accès est en lecture seule.');return false}
  const result=original.save(data);if(result!==false)scheduleSync();return result;
};
window.render=()=>{original.render();centralChrome();if(isSigned()&&page==='cloud')renderCentralSpace();if(isSigned()&&page==='share')setTimeout(renderCentralTeam,0);if(isSigned()&&page==='notifications')wireSettingsSync()};
window.navigate=destination=>{original.navigate(destination);if(isSigned()&&destination==='cloud')renderCentralSpace();if(isSigned()&&destination==='share')setTimeout(renderCentralTeam,0);if(isSigned()&&destination==='notifications')wireSettingsSync()};

window.accountDialog=()=>{
  if(isSigned()){
    modal('Votre compte',`<div class="statusline"><strong>${esc(state.user.displayName||state.user.email)}</strong><br>${esc(state.user.email)}<br>${esc(state.cabinet?.name||'Votre cabinet')}</div><div class="settingcard"><h3>Une connexion simple</h3><p>Votre compte est reconnu automatiquement. Aucune URL, aucune clé et aucun Cloud ne sont à configurer.</p></div><div class="dialogactions"><button class="btn" onclick="closeModal()">Fermer</button><a class="btn primary" target="_top" href="${signOutHref()}">Se déconnecter</a></div>`);return;
  }
  modal('Accéder à votre espace',`<div class="auth-welcome"><div class="oauth-mark central-mark">+</div><h3>Un seul bouton, rien à configurer.</h3><p>Continuez avec votre compte ChatGPT. Sur l’écran suivant, vous pourrez utiliser Google, Apple, Microsoft ou votre adresse e-mail.</p><a class="btn primary central-login" target="_top" href="${signInHref()}">Continuer vers mon espace →</a><p class="formhelp">UrgenceScan ne stocke aucune donnée patient. La démo reste accessible sans compte.</p></div>`);
};
window.signOut=()=>location.assign(signOutHref());
window.connectionDialog=()=>accountDialog();
window.cabinetDialog=()=>isSigned()?navigate('cloud'):accountDialog();
window.createCabinetDialog=()=>toast('Votre espace cabinet est créé automatiquement à la première connexion.');
window.syncCloud=()=>boot(true);
window.backupHistory=()=>toast('Les 30 dernières versions sont conservées automatiquement.');
window.testNotifications=()=>toast('L’envoi réel sera disponible après raccordement du service e-mail et du bot Telegram.');
window.deliveryHistory=()=>toast('Aucun envoi réel n’est encore activé.');

function renderCentralSpace(){
  const root=$('cloud-content');if(!root)return;
  $('page-title').textContent='Votre espace, sans configuration.';
  $('page-description').textContent='Compte, sauvegardes et accès réunis au même endroit.';
  $('breadcrumb').textContent='Mon espace';
  root.innerHTML=`<div class="statusline"><strong>${esc(state.cabinet?.name||'Votre cabinet')}</strong><br>${esc(state.user.email)} · ${esc(state.cabinet?.role||'membre')}<br>${state.lastError?esc(state.lastError):'Dernière synchronisation réussie'}</div><div class="settingsgrid"><div class="settingcard"><h3>Sauvegarde automatique</h3><p>La trousse est disponible sur vos différents appareils après connexion. Les trente versions précédentes sont conservées.</p><div class="inlinebuttons"><button class="btn primary" onclick="syncCloud()">Actualiser</button><button class="btn" onclick="exportData()">Exporter en JSON</button><button class="btn" onclick="importDialog()">Importer un JSON</button></div></div><div class="settingcard"><h3>Votre confidentialité</h3><p>Aucune donnée patient n’est attendue. Seuls votre compte, les membres autorisés et l’inventaire de la trousse sont enregistrés.</p><button class="btn" onclick="deleteAccountDialog()">Supprimer mon compte et mes données</button></div></div><div class="tip"><strong>Tout est déjà prêt</strong>Plus de projet Supabase, d’URL ou de clé à renseigner. Les droits d’accès sont appliqués automatiquement à chaque cabinet.</div>`;
}

window.deleteAccountDialog=()=>modal('Supprimer votre compte ?',`<p class="formhelp">Cette action supprime votre compte UrgenceScan. Si vous êtes l’unique propriétaire, la trousse et ses sauvegardes seront également supprimées. Exportez-les d’abord si nécessaire.</p><div class="dialogactions"><button class="btn" onclick="closeModal()">Annuler</button><button class="btn primary" id="delete-central-account">Supprimer définitivement</button></div>`);
document.addEventListener('click',async event=>{
  if(event.target?.id!=='delete-central-account')return;
  event.target.disabled=true;
  try{await api('account',{method:'DELETE'});localStorage.removeItem(stockKey);localStorage.removeItem(settingsKey);location.assign(signOutHref())}catch(error){toast(error.message);event.target.disabled=false}
});

async function renderCentralTeam(){
  const target=$('team-content');if(!target||!isSigned())return;
  try{state.team=await api('team');const roleLabel={owner:'Propriétaire',admin:'Administrateur',editor:'Gestion du stock',viewer:'Lecture seule'};target.innerHTML='<div class="statusline">Invitez un membre avec son adresse e-mail. Il se connectera ensuite avec Google, Apple, Microsoft ou son e-mail et saisira le code reçu.</div>'+safeArray(state.team.members).map(m=>`<div class="teamrow"><span class="avatar">${esc((m.display_name||m.email).slice(0,2).toUpperCase())}</span><div><strong>${esc(m.display_name||m.email)}</strong><small>${esc(m.profession)} · ${esc(m.email)}</small></div><span class="state-pill">${esc(roleLabel[m.role]||m.role)}</span>${m.role!=='owner'&&canAdmin()?`<button class="rowaction" data-central-remove="${esc(m.user_id)}">Retirer</button>`:''}</div>`).join('')+safeArray(state.team.invites).filter(i=>!i.used_at).map(i=>`<div class="teamrow"><span class="avatar">↗</span><div><strong>${esc(i.display_name)} · invitation en attente</strong><small>${esc(i.email)} · ${esc(i.profession)} · valable jusqu’au ${new Date(i.expires_at).toLocaleDateString('fr-FR')}</small></div>${canAdmin()?`<button class="rowaction" data-central-revoke="${esc(i.code)}">Révoquer</button>`:''}</div>`).join('')+'<div class="tip"><strong>Des droits adaptés</strong>Lecture seule, gestion du stock ou administration de l’équipe : le propriétaire choisit le niveau d’accès.</div>';
    target.querySelectorAll('[data-central-remove]').forEach(button=>button.onclick=()=>removeCentralMember(button.dataset.centralRemove));
    target.querySelectorAll('[data-central-revoke]').forEach(button=>button.onclick=()=>revokeCentralInvite(button.dataset.centralRevoke));
  }catch(error){target.innerHTML=`<div class="errorbox">${esc(error.message)}</div>`}
}
window.inviteDialog=()=>{
  if(!isSigned()){accountDialog();return}if(!canAdmin()){toast('Seul un administrateur peut inviter des membres.');return}
  modal('Inviter un membre',`<form id="central-invite-form">${field('name','Nom et prénom','text','','required maxlength="150"')}${field('email','Adresse e-mail invitée','email','','required')}${selectField('profession','Métier',[['Médecin','Médecin'],['Assistante médicale','Assistante médicale'],['IDE','IDE'],['Secrétaire','Secrétaire'],['Autre professionnel','Autre professionnel']],'Médecin')}${selectField('role','Droits',[['editor','Gestion du stock'],['viewer','Lecture seule'],['admin','Administration de l’équipe']],'editor')}<p class="formhelp">Le code sera utilisable pendant sept jours et uniquement avec cette adresse e-mail.</p><div id="form-error"></div>${actions('Créer le code')}</form>`);
  $('central-invite-form').onsubmit=async event=>{event.preventDefault();const button=event.target.querySelector('.primary');button.disabled=true;try{const values=Object.fromEntries(new FormData(event.target));const result=await api('invite',{method:'POST',body:JSON.stringify(values)});modal('Invitation prête',`<p class="formhelp">Transmettez ce code à ${esc(values.name)}. La personne clique sur « J’ai un code équipe », se connecte, puis le saisit.</p><div class="codetext" id="invitation-code">${esc(result.code)}</div><div class="dialogactions"><button class="btn" onclick="closeModal()">Fermer</button><button class="btn primary" id="copy-central-invite">Copier le code</button></div>`);$('copy-central-invite').onclick=async()=>{await navigator.clipboard.writeText(result.code);toast('Code copié.')};renderCentralTeam()}catch(error){$('form-error').innerHTML=`<div class="errorbox">${esc(error.message)}</div>`;button.disabled=false}};
};
window.joinDialog=()=>{
  if(!isSigned()){sessionStorage.setItem('urgencescan_join_after_login','1');accountDialog();return}
  modal('Rejoindre une équipe',`<form id="central-join-form"><label class="field">Code d’invitation<textarea name="code" required placeholder="US3-…" maxlength="40"></textarea></label><div id="form-error"></div>${actions('Rejoindre le cabinet')}</form>`);
  $('central-join-form').onsubmit=async event=>{event.preventDefault();try{const code=new FormData(event.target).get('code');const result=await api('join',{method:'POST',body:JSON.stringify({code})});applyBootstrap(result);closeModal();showDashboard();navigate('share');toast('Vous avez rejoint le cabinet.')}catch(error){$('form-error').innerHTML=`<div class="errorbox">${esc(error.message)}</div>`}};
};
async function removeCentralMember(userId){try{await api('remove-member',{method:'POST',body:JSON.stringify({userId})});toast('Accès retiré.');renderCentralTeam()}catch(error){toast(error.message)}}
async function revokeCentralInvite(code){try{await api('revoke',{method:'POST',body:JSON.stringify({code})});toast('Invitation révoquée.');renderCentralTeam()}catch(error){toast(error.message)}}

function wireSettingsSync(){
  const form=$('notification-form');if(!form||form.dataset.centralWired)return;form.dataset.centralWired='1';
  const status=$('notification-content')?.querySelector('.statusline');if(status)status.textContent='Vos préférences sont sauvegardées avec votre compte. L’envoi automatique sera activé après raccordement du service e-mail et du bot Telegram.';
  form.addEventListener('submit',()=>setTimeout(scheduleSync,0));
}

function applyBootstrap(data){
  state.user=data.user;state.cabinet=data.cabinet;state.settings=data.settings||{};
  localStorage.setItem(stockKey,JSON.stringify(safeArray(data.cabinet?.inventory)));
  localStorage.setItem(settingsKey,JSON.stringify(state.settings));
  original.render();centralChrome();
}
async function boot(force=false){
  try{const data=await api('bootstrap');applyBootstrap(data);if(force)toast('Données actualisées.');if(new URLSearchParams(location.search).get('connected')){history.replaceState(null,'','/app.html');showDashboard()}if(sessionStorage.getItem('urgencescan_join_after_login')){sessionStorage.removeItem('urgencescan_join_after_login');joinDialog()}}
  catch(error){if(error.message!=='Connectez-vous pour continuer.'&&force)toast(error.message)}
}

document.querySelectorAll('.landfoot').forEach(node=>node.innerHTML='UrgenceScan · Un outil de suivi d’inventaire, sans dossier patient.<br>Compte et sauvegarde automatiques : aucune configuration technique demandée.');
const landingNote=document.querySelector('.landinghero p[style]');if(landingNote)landingNote.textContent='Démo sans inscription · Compte et sauvegarde automatiques';
const cloudNav=[...document.querySelectorAll('.nav button')].find(button=>button.textContent.includes('Mon Cloud'));if(cloudNav)cloudNav.childNodes[cloudNav.childNodes.length-1].textContent='Mon espace';
const style=document.createElement('style');style.textContent='.auth-welcome{text-align:center;padding:6px 2px}.auth-welcome h3{font-size:19px;margin:14px 0 6px}.auth-welcome p{color:var(--muted)}.central-mark{margin:auto;background:var(--accent);color:white;width:48px;height:48px;border-radius:15px;display:grid;place-items:center;font-size:28px}.central-login{width:100%;margin:14px 0 8px;text-decoration:none}a.btn{text-decoration:none}';document.head.appendChild(style);
boot();
})();
