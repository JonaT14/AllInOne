const YN=['Oui','Non'];
const isM=d=>d.sexe!=='Femme', isF=d=>d.sexe!=='Homme';
const EPS=['Assis en train de lire','En regardant la télévision','Assis, inactif, dans un lieu public (cinéma, théâtre, réunion)','Passager d’une voiture roulant sans arrêt pendant une heure','Allongé l’après-midi quand les circonstances le permettent','Assis en parlant avec quelqu’un','Assis au calme après un déjeuner sans alcool','Dans une voiture immobilisée quelques minutes dans un embouteillage'];
const PROPS=['Traitement par pression positive continue (PPC)','Orthèse d’avancée mandibulaire, après bilan dentaire','Traitement positionnel','Mesures hygiéno-diététiques et perte de poids','Éviction de l’alcool le soir et des sédatifs','Avis ORL','Avis pneumologue / spécialiste du sommeil','Polysomnographie','Avis cardiologique','Information sur la conduite automobile','Réévaluation clinique après mise en route du traitement'];

const S=[
 {id:'praticien',t:'Réglages praticien',closed:true,f:[
  {k:'doc_nom',l:'Nom et titre',type:'text',ph:'Dr …',pr:1},
  {k:'doc_titre',l:'Spécialité',type:'text',ph:'Médecin généraliste',pr:1},
  {k:'doc_cab',l:'Cabinet',type:'text',pr:1},
  {k:'doc_ville',l:'Ville (date du courrier)',type:'text',pr:1},
  {k:'doc_contact',l:'Coordonnées (téléphone, RPPS…)',type:'text',w:'l',pr:1},
  {type:'note',l:'Ces réglages restent dans ce navigateur. Le brouillon patient est conservé dans ce navigateur.'}]},
 {id:'pat',t:'Patient et adressage',f:[
  {k:'nom',l:'Nom',type:'text'},{k:'prenom',l:'Prénom',type:'text'},
  {k:'ddn',l:'Date de naissance',type:'date',w:'s'},{k:'date_cs',l:'Date de consultation',type:'date',w:'s'},
  {k:'sexe',l:'Sexe',type:'radio',o:['Homme','Femme'],w:'m'},
  {k:'prof',l:'Profession',type:'text'},
  {k:'conduite',l:'Conduite',type:'radio',o:['Ne conduit pas','Permis B','Conducteur professionnel / poste de sécurité'],w:'l'},
  {k:'adr_nom',l:'Médecin adresseur',type:'text',ph:'Dr …'},{k:'adr_ville',l:'Cabinet / ville de l’adresseur',type:'text'},
  {k:'adr_formule',l:'Formule d’appel',type:'radio',o:['Cher confrère','Chère consœur','Cher collègue','Chère collègue'],w:'l'},
  {k:'motif',l:'Motif d’adressage',type:'multi',o:['Ronflement','Pauses respiratoires constatées','Somnolence diurne','Fatigue','HTA résistante','Fibrillation atriale','Insuffisance cardiaque','Bilan pré-opératoire / bariatrique','Somnolence ou accident au volant','Surpoids / obésité']},
  {k:'motif_txt',l:'Précisions sur la demande',type:'area'}]},
 {id:'mes',t:'Mesures',f:[
  {k:'poids',l:'Poids',u:'kg',type:'num',w:'s'},{k:'taille',l:'Taille',u:'cm',type:'num',w:'s'},
  {k:'cou',l:'Tour de cou',u:'cm',type:'num',w:'s',hint:'Au niveau de la pomme d’Adam'},{k:'tt',l:'Tour de taille',u:'cm',type:'num',w:'s'},
  {k:'pas',l:'PA systolique',u:'mmHg',type:'num',w:'s'},{k:'pad',l:'PA diastolique',u:'mmHg',type:'num',w:'s'},{k:'fc',l:'FC',u:'/min',type:'num',w:'s'},
  {type:'calc',id:'calcMes'}]},
 {id:'som',t:'Habitudes de sommeil',f:[
  {k:'coucher',l:'Heure de coucher',type:'time',w:'s'},{k:'lever',l:'Heure de lever',type:'time',w:'s'},
  {k:'latence',l:'Latence d’endormissement',u:'min',type:'num',w:'s'},{k:'reveils',l:'Réveils nocturnes',u:'n/nuit',type:'num',w:'s'},
  {k:'sieste',l:'Sieste',type:'radio',o:['Jamais','Occasionnelle','Quotidienne'],w:'m'},
  {k:'position',l:'Position d’endormissement',type:'radio',o:['Dos','Côté','Ventre','Variable'],w:'m'},
  {k:'temoin',l:'Témoin du sommeil',type:'radio',o:['Conjoint présent','Dort seul'],w:'m'},
  {k:'som_x',l:'Contexte',type:'multi',o:['Travail posté ou de nuit','Dette de sommeil (moins de 6 h/nuit)','Décalage week-end de plus de 2 h','Écrans au lit']},
  {type:'calc',id:'calcSom'}]},
 {id:'noc',t:'Symptômes nocturnes',f:[
  {k:'ronfl',l:'Ronflement',type:'radio',o:['Absent','Occasionnel','Fréquent','Quotidien'],w:'l'},
  {k:'ronfl_fort',l:'Audible porte fermée',type:'radio',o:YN,w:'m'},
  {k:'pauses',l:'Pauses respiratoires observées',type:'radio',o:['Non','Ne sait pas','Oui'],w:'m'},
  {k:'nycturie',l:'Nycturie',u:'mictions/nuit',type:'num',w:'s'},
  {k:'noc',l:'Autres signes',type:'multi',o:['Éveils avec suffocation / étouffement','Sommeil agité','Sueurs nocturnes','Bouche sèche au réveil','Reflux nocturne','Bruxisme','Impatiences des membres inférieurs','Comportements anormaux pendant le sommeil','Réveils précoces','Difficultés d’endormissement']}]},
 {id:'diu',t:'Retentissement diurne',f:[
  {k:'diu',l:'Symptômes',type:'multi',o:['Sommeil non réparateur','Fatigue','Céphalées matinales','Troubles de la concentration','Troubles de la mémoire','Irritabilité','Humeur dépressive','Baisse de la libido','Dysfonction érectile','Retentissement professionnel','Gêne du conjoint / chambre séparée'],hide:{'Dysfonction érectile':isM}},
  {k:'vol',l:'Somnolence au volant',type:'radio',o:['Jamais','Lutte contre le sommeil','Endormissement au volant'],w:'l'},
  {k:'accident',l:'Accident lié à la somnolence',type:'radio',o:['Non','Presque-accident','Accident'],w:'m'},
  {k:'accident_txt',l:'Circonstances, date',type:'text'},
  {k:'eva',l:'Fatigue (EVA)',u:'0–10',type:'num',w:'s'}]},
 {id:'eps',t:'Échelle d’Epworth',f:[{k:'eps',type:'eps'}]},
 {id:'sb',t:'STOP-Bang',f:[{k:'sb',type:'sb'}]},
 {id:'atcd',t:'Antécédents',f:[
  {k:'a_cv',g:'Cardiovasculaires',type:'multi',o:['HTA','HTA résistante (3 traitements ou plus)','Fibrillation atriale / troubles du rythme','Insuffisance cardiaque','Coronaropathie / infarctus','AVC / AIT','Hypertension pulmonaire']},
  {k:'a_met',g:'Métaboliques et endocriniens',type:'multi',o:['Obésité','Diabète de type 2','Dyslipidémie','Stéatose hépatique (MASLD)','Hypothyroïdie','Acromégalie','Syndrome de Cushing','SOPK','Goutte'],hide:{'SOPK':isF}},
  {k:'a_resp',g:'Respiratoires',type:'multi',o:['BPCO','Asthme','Syndrome obésité-hypoventilation','Rhinite chronique / allergique','Polypose nasale']},
  {k:'a_orl',g:'ORL et maxillo-faciaux',type:'multi',o:['Amygdalectomie','Adénoïdectomie','Déviation septale / chirurgie nasale','Chirurgie vélopalatine','Rétrognathie / micrognathie','Orthodontie avec extractions','Chirurgie bariatrique']},
  {k:'a_neuro',g:'Neurologiques et psychiatriques',type:'multi',o:['Migraine','Céphalées chroniques','Épilepsie','Maladie de Parkinson','Troubles cognitifs','Dépression','Trouble anxieux','TDAH','Insomnie chronique']},
  {k:'a_autre',g:'Autres',type:'multi',o:['Insuffisance rénale chronique','RGO','Glaucome','Hypertrophie bénigne de la prostate','Grossesse en cours','Ménopause'],hide:{'Hypertrophie bénigne de la prostate':isM,'Grossesse en cours':isF,'Ménopause':isF}},
  {k:'a_som',g:'Sommeil',type:'multi',o:['SAOS déjà connu','Polygraphie / polysomnographie antérieure','PPC antérieure','Orthèse antérieure']},
  {k:'a_fam',g:'Familiaux',type:'multi',o:['SAOS dans la famille','Mort subite dans la famille']},
  {k:'a_txt',l:'Autres antécédents',type:'area'}]},
 {id:'ttt',t:'Traitements et toxiques',f:[
  {k:'ttt_sed',l:'Traitements à effet sédatif ou dépresseur respiratoire',type:'multi',o:['Benzodiazépines','Hypnotiques (zolpidem, zopiclone)','Opioïdes','Myorelaxants','Antidépresseurs sédatifs','Antipsychotiques','Antihistaminiques sédatifs','Gabapentine / prégabaline']},
  {k:'ttt_txt',l:'Traitement en cours',type:'area'},
  {k:'alcool',l:'Alcool',u:'verres/sem',type:'num',w:'s'},
  {k:'alcool_soir',l:'Alcool le soir',type:'radio',o:YN,w:'s'},
  {k:'tabac',l:'Tabac',type:'radio',o:['Jamais','Sevré','Actif'],w:'m'},
  {k:'pa',l:'Paquets-années',type:'num',w:'s'},
  {k:'cannabis',l:'Cannabis',type:'radio',o:YN,w:'s'},
  {k:'cafe',l:'Café / boissons caféinées',u:'/jour',type:'num',w:'s'}]},
 {id:'exa',t:'Examen ORL et morphologique',f:[
  {k:'mallampati',l:'Mallampati modifié',type:'radio',o:['I','II','III','IV'],w:'m'},
  {k:'friedman',l:'Amygdales (Friedman)',type:'radio',o:['0','1','2','3','4'],w:'m'},
  {k:'exa',l:'Constatations',type:'multi',o:['Rétrognathie','Macroglossie','Voile long / luette épaisse','Palais ogival','Obstruction nasale','Hypertrophie des cornets','Édentation / prothèse amovible','Cou court et large']},
  {k:'exa_txt',l:'Autres éléments d’examen',type:'area'}]},
 {id:'pv',t:'Polygraphie ventilatoire nocturne',f:[
  {type:'nox'},
  {k:'pv_date',l:'Date de l’enregistrement',type:'date',w:'s'},{k:'pv_app',l:'Appareil',type:'text'},
  {k:'pv_duree',l:'Durée analysable',u:'h',type:'num',w:'s'},
  {k:'pv_qual',l:'Qualité du tracé',type:'radio',o:['Bonne','Acceptable','Insuffisante'],w:'m'},
  {k:'iah',l:'IAH',u:'/h',type:'num',w:'s'},{k:'ia',l:'Index d’apnées',u:'/h',type:'num',w:'s'},{k:'ih',l:'Index d’hypopnées',u:'/h',type:'num',w:'s'},
  {k:'iao',l:'Apnées obstructives',u:'/h',type:'num',w:'s'},{k:'iac',l:'Apnées centrales',u:'/h',type:'num',w:'s'},{k:'iam',l:'Apnées mixtes',u:'/h',type:'num',w:'s'},
  {k:'iah_dos',l:'IAH décubitus dorsal',u:'/h',type:'num',w:'s'},{k:'iah_nd',l:'IAH hors dorsal',u:'/h',type:'num',w:'s'},{k:'pct_dos',l:'Temps sur le dos',u:'%',type:'num',w:'s'},
  {k:'odi',l:'IDO (index de désaturation en oxygène)',u:'/h',type:'num',w:'m'},{k:'spo2_moy',l:'SpO₂ moyenne',u:'%',type:'num',w:'s'},{k:'spo2_min',l:'SpO₂ nadir',u:'%',type:'num',w:'s'},{k:'t90',l:'Temps SpO₂ < 90 %',u:'%',type:'num',w:'s'},{k:'hb',l:'Charge hypoxique',u:'%·min/h',type:'num',w:'s'},
  {k:'fc_moy',l:'FC moyenne',u:'/min',type:'num',w:'s'},{k:'ronfl_pct',l:'Ronflement',u:'% du temps',type:'num',w:'s'},
  {k:'csr',l:'Respiration de Cheyne-Stokes',type:'radio',o:YN,w:'m'},
  {k:'pv_txt',l:'Commentaire sur le tracé',type:'area'},
  {type:'calc',id:'calcPv'}]},
 {id:'ccl',t:'Conclusion et propositions',f:[
  {type:'sugg',id:'sugg'},
  {k:'prop',l:'Propositions retenues',type:'multi',o:PROPS},
  {k:'ccl_txt',l:'Commentaire libre (ajouté à la conclusion)',type:'area'}]}
];


const ALLF=S.flatMap(s=>s.f.map(f=>({...f,sec:s.id})));
const QSPEC=[['conduite','r'],['motif','m'],['poids','n',9],['taille','n',9],['coucher','t'],['lever','t'],['latence','n',9],['reveils','n',5],['sieste','r'],['position','r'],['temoin','r'],['som_x','m'],['ronfl','r'],['ronfl_fort','r'],['pauses','r'],['nycturie','n',4],['noc','m'],['diu','m'],['vol','r'],['accident','r'],['eva','n',4],['eps','e'],['sb_t','r'],['sb_o','r'],['sb_p','r'],['a_cv','m'],['a_met','m'],['a_resp','m'],['a_orl','m'],['a_neuro','m'],['a_autre','m'],['a_som','m'],['a_fam','m'],['alcool','n',8],['alcool_soir','r'],['tabac','r'],['pa','n',7],['cannabis','r'],['cafe','n',5],['accident_txt','x'],['a_txt','x'],['ttt_txt','x']];
const QC=(()=>{
  const A='0123456789ABCDEFGHJKMNPQRSTVWXYZ';
  const bw=n=>Math.ceil(Math.log2(n+1));
  const pn=v=>{if(v==null||v==='')return null;const n=parseFloat(String(v).replace(',','.'));return isNaN(n)?null:n};
  const ck=a=>a.reduce((c,b)=>(c*33+b+1)%251,17);
  function encode(D,O){
    const bits=[],put=(v,n)=>{for(let i=n-1;i>=0;i--)bits.push((v>>i)&1)},tx=[];
    for(const[k,t,n]of QSPEC){
      if(t==='r'){const o=O[k];put(o.indexOf(D[k])+1,bw(o.length))}
      else if(t==='m'){const a=Array.isArray(D[k])?D[k]:[];O[k].forEach(x=>put(a.includes(x)?1:0,1))}
      else if(t==='n'){const v=pn(D[k]);put(v==null||v<0?0:Math.min(Math.round(v)+1,2**n-1),n)}
      else if(t==='t'){let v=0;const m=/^(\d{1,2}):(\d{2})/.exec(D[k]||'');if(m)v=Math.round((+m[1]*60+ +m[2])/5)%288+1;put(v,9)}
      else if(t==='e'){const e=D.eps||[];for(let i=0;i<8;i++)put(e[i]==null?0:e[i]+1,3)}
      else if(t==='x')tx.push(String(D[k]||'').trim().slice(0,240));
    }
    while(bits.length%8)bits.push(0);
    const p=[];for(let i=0;i<bits.length;i+=8){let b=0;for(let j=0;j<8;j++)b=b*2+bits[i+j];p.push(b)}
    const te=new TextEncoder();
    for(const s of tx){let u=te.encode(s);if(u.length>255)u=u.slice(0,255);p.push(u.length,...u)}
    while(p.length&&p[p.length-1]===0)p.pop();
    const all=[1,ck(p),...p];
    let out='',acc=0,nb=0;
    for(const b of all){acc=(acc<<8)|b;nb+=8;while(nb>=5){out+=A[(acc>>(nb-5))&31];nb-=5}acc&=(1<<nb)-1}
    if(nb)out+=A[(acc<<(5-nb))&31];
    return out.match(/.{1,4}/g).join('-');
  }
  function decode(code,O){
    const s=String(code||'').toUpperCase().replace(/O/g,'0').replace(/[IL]/g,'1').replace(/[\s\-–.]/g,'');
    if(!s)return{error:'Aucun code saisi.'};
    if(/[^0-9A-Z]/.test(s)||s.includes('U'))return{error:'Le code contient des caractères inattendus.'};
    const by=[];let acc=0,nb=0;
    for(const c of s){acc=(acc<<5)|A.indexOf(c);nb+=5;if(nb>=8){by.push((acc>>(nb-8))&255);nb-=8}acc&=(1<<nb)-1}
    if(by[0]!==1)return{error:'Ce code ne correspond pas à un questionnaire sommeil.'};
    const p=by.slice(2);while(p.length&&p[p.length-1]===0)p.pop();
    if(ck(p)!==by[1])return{error:'Code incorrect : un caractère semble mal recopié.'};
    let bi=0;const get=n=>{let v=0;for(let i=0;i<n;i++){const B=p[bi>>3]||0;v=v*2+((B>>(7-(bi&7)))&1);bi++}return v};
    const D={},tx=[];
    for(const[k,t,n]of QSPEC){
      if(t==='r'){const o=O[k],i=get(bw(o.length))-1;if(i>=0&&i<o.length)D[k]=o[i]}
      else if(t==='m'){const a=O[k].filter(()=>get(1));if(a.length)D[k]=a}
      else if(t==='n'){const v=get(n);if(v>0)D[k]=String(v-1)}
      else if(t==='t'){const v=get(9);if(v>0){const m=(v-1)*5;D[k]=String(Math.floor(m/60)).padStart(2,'0')+':'+String(m%60).padStart(2,'0')}}
      else if(t==='e'){const e=[];for(let i=0;i<8;i++){const v=get(3);e.push(v?v-1:null)}if(e.some(x=>x!=null))D.eps=e}
      else if(t==='x')tx.push(k);
    }
    let pos=Math.ceil(bi/8);const td=new TextDecoder();
    for(const k of tx){const L=p[pos]||0;pos++;const t=td.decode(new Uint8Array(p.slice(pos,pos+L)));pos+=L;if(t)D[k]=t}
    return{data:D};
  }
  return{encode,decode};
})();

const QOPTS=(()=>{const o={sb_t:YN,sb_o:YN,sb_p:YN};ALLF.forEach(f=>{if(f.o)o[f.k]=f.o});return o})();
