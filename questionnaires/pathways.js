const PATHWAYS = [
  {
    "id": "tnd-6m",
    "name": "Repérage TND · 6 mois",
    "sub": "6–11 mois",
    "group": "Troubles du neurodéveloppement",
    "icon": "🌱",
    "kind": "pathway",
    "questions": [],
    "sections": [
      {
        "title": "Contexte clinique",
        "fields": [
          {
            "label": "Âge et classe / mode de garde",
            "type": "text",
            "key": "f0"
          },
          {
            "label": "Motif, plainte et inquiétudes principales",
            "type": "text",
            "key": "f1"
          },
          {
            "label": "Antécédents, développement précoce, contexte familial et scolaire, bilans déjà réalisés",
            "type": "text",
            "key": "f2"
          }
        ],
        "open": true
      },
      {
        "title": "Facteurs de risque périnataux",
        "fields": [
          {
            "label": "Prématurité",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f3"
          },
          {
            "label": "Poids de naissance inférieur à 1 500 g",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f4"
          },
          {
            "label": "TND chez un parent du premier degré ou dans la fratrie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f5"
          },
          {
            "label": "Exposition prénatale importante à un toxique ou médicament à risque",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f6"
          },
          {
            "label": "Affection néonatale sévère (anoxie, encéphalopathie, cardiopathie complexe, chirurgie lourde, anomalie cérébrale, microcéphalie, infection ou ictère sévère)",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f7"
          },
          {
            "label": "Syndrome génétique",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f8"
          },
          {
            "label": "Précisions sur les facteurs de risque",
            "type": "text",
            "key": "f9"
          }
        ],
        "hint": "Oui = facteur présent. Documenter les circonstances, sans déduire un diagnostic."
      },
      {
        "title": "Régression des compétences",
        "fields": [
          {
            "label": "Perte d’acquisitions antérieures",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "regression": true,
            "key": "f10"
          }
        ],
        "hint": "Une régression nécessite une évaluation médicale rapide ; le comptage de la grille ne doit pas la retarder."
      },
      {
        "title": "Sommeil et alimentation",
        "fields": [
          {
            "label": "Troubles du sommeil durables et quasi quotidiens",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f11"
          },
          {
            "label": "Sélectivité alimentaire importante (textures, morceaux, couleur…)",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f12"
          },
          {
            "label": "Prises alimentaires difficiles, très longues ou peu efficaces",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f13"
          }
        ]
      },
      {
        "title": "Profil sensoriel et sensorimoteur",
        "fields": [
          {
            "label": "Fascination pour les lumières ou objets qui tournent",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f14"
          },
          {
            "label": "Réactivité inhabituelle à des sons, textures ou odeurs",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f15"
          },
          {
            "label": "Réaction à la douleur très faible ou excessive",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f16"
          },
          {
            "label": "Recherche de stimulations sensorielles",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f17"
          }
        ]
      },
      {
        "title": "Comportements et intérêts inhabituels",
        "fields": [
          {
            "label": "Passivité inhabituelle ou faible mobilité, notamment avant 24 mois",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f18"
          },
          {
            "label": "Exploration ou usage inhabituel des objets",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f19"
          },
          {
            "label": "Mouvements répétitifs stéréotypés",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f20"
          },
          {
            "label": "Attachement intense à certains objets ou intérêts très restreints",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f21"
          }
        ]
      },
      {
        "title": "Régulation émotionnelle",
        "fields": [
          {
            "label": "Réactions intenses et répétées au changement, difficilement apaisables",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f22"
          },
          {
            "label": "Colères violentes, répétées, inconsolables",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f23"
          },
          {
            "label": "Activité motrice incontrôlable avec mise en danger",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f24"
          },
          {
            "label": "Opposition forte et fréquente aux adultes",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f25"
          }
        ]
      },
      {
        "title": "Motricité globale",
        "fields": [
          {
            "label": "Tient sa tête stable sans osciller (attendu à 4 mois)",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f26"
          },
          {
            "label": "Tient assis en tripode, en appui sur les mains",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f27"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Motricité fine et praxies",
        "fields": [
          {
            "label": "Saisit un objet tenu à distance",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f28"
          },
          {
            "label": "Utilise les deux mains sans préférence",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f29"
          },
          {
            "label": "Cligne des yeux à l’approche d’un objet, à gauche comme à droite",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f30"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Langage",
        "fields": [
          {
            "label": "Produit des sons variés (ba, ga, bo, ma…)",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f31"
          },
          {
            "label": "Tourne la tête vers la personne qui parle",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f32"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Socialisation",
        "fields": [
          {
            "label": "Sourit en réponse au sourire de l’adulte (attendu à 3 mois)",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f33"
          },
          {
            "label": "Sollicite le regard de l’autre",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f34"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Inquiétudes signalées",
        "fields": [
          {
            "label": "Parents inquiets du développement",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f35"
          },
          {
            "label": "Professionnel de la petite enfance ou enseignant inquiet",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f36"
          },
          {
            "label": "Source des informations, exemples et compétences préservées",
            "type": "text",
            "key": "f37"
          }
        ]
      },
      {
        "title": "Préparation de l’adressage PCO",
        "fields": [
          {
            "label": "Antécédents personnels et familiaux, grossesse, naissance, environnement psychosocial",
            "type": "text",
            "key": "f38"
          }
        ],
        "hint": "Préparation de synthèse clinique. Cet export n’est pas le formulaire administratif officiel ; les documents officiels sont accessibles dans les ressources."
      },
      {
        "title": "Évaluations et interventions déjà menées ou en cours",
        "fields": [
          {
            "label": "ORL — Évaluation / bilan",
            "type": "text",
            "key": "f39"
          },
          {
            "label": "ORL — Intervention",
            "type": "text",
            "key": "f40"
          },
          {
            "label": "ORL — Année / durée / commentaire",
            "type": "text",
            "key": "f41"
          },
          {
            "label": "ORL — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f42"
          },
          {
            "label": "Ophtalmologie — Évaluation / bilan",
            "type": "text",
            "key": "f43"
          },
          {
            "label": "Ophtalmologie — Intervention",
            "type": "text",
            "key": "f44"
          },
          {
            "label": "Ophtalmologie — Année / durée / commentaire",
            "type": "text",
            "key": "f45"
          },
          {
            "label": "Ophtalmologie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f46"
          },
          {
            "label": "Orthoptie — Évaluation / bilan",
            "type": "text",
            "key": "f47"
          },
          {
            "label": "Orthoptie — Intervention",
            "type": "text",
            "key": "f48"
          },
          {
            "label": "Orthoptie — Année / durée / commentaire",
            "type": "text",
            "key": "f49"
          },
          {
            "label": "Orthoptie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f50"
          },
          {
            "label": "Orthophonie — Évaluation / bilan",
            "type": "text",
            "key": "f51"
          },
          {
            "label": "Orthophonie — Intervention",
            "type": "text",
            "key": "f52"
          },
          {
            "label": "Orthophonie — Année / durée / commentaire",
            "type": "text",
            "key": "f53"
          },
          {
            "label": "Orthophonie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f54"
          },
          {
            "label": "Kinésithérapie — Évaluation / bilan",
            "type": "text",
            "key": "f55"
          },
          {
            "label": "Kinésithérapie — Intervention",
            "type": "text",
            "key": "f56"
          },
          {
            "label": "Kinésithérapie — Année / durée / commentaire",
            "type": "text",
            "key": "f57"
          },
          {
            "label": "Kinésithérapie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f58"
          },
          {
            "label": "Ergothérapie — Évaluation / bilan",
            "type": "text",
            "key": "f59"
          },
          {
            "label": "Ergothérapie — Intervention",
            "type": "text",
            "key": "f60"
          },
          {
            "label": "Ergothérapie — Année / durée / commentaire",
            "type": "text",
            "key": "f61"
          },
          {
            "label": "Ergothérapie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f62"
          },
          {
            "label": "Psychomotricité — Évaluation / bilan",
            "type": "text",
            "key": "f63"
          },
          {
            "label": "Psychomotricité — Intervention",
            "type": "text",
            "key": "f64"
          },
          {
            "label": "Psychomotricité — Année / durée / commentaire",
            "type": "text",
            "key": "f65"
          },
          {
            "label": "Psychomotricité — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f66"
          },
          {
            "label": "Neuropsychologie — Évaluation / bilan",
            "type": "text",
            "key": "f67"
          },
          {
            "label": "Neuropsychologie — Intervention",
            "type": "text",
            "key": "f68"
          },
          {
            "label": "Neuropsychologie — Année / durée / commentaire",
            "type": "text",
            "key": "f69"
          },
          {
            "label": "Neuropsychologie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f70"
          },
          {
            "label": "Psychologie — Évaluation / bilan",
            "type": "text",
            "key": "f71"
          },
          {
            "label": "Psychologie — Intervention",
            "type": "text",
            "key": "f72"
          },
          {
            "label": "Psychologie — Année / durée / commentaire",
            "type": "text",
            "key": "f73"
          },
          {
            "label": "Psychologie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f74"
          }
        ],
        "hint": "Saisir les éléments utiles ; aucun document joint n’est envoyé par cet outil."
      },
      {
        "title": "Plateforme destinataire",
        "fields": [
          {
            "label": "Département / code postal de la plateforme",
            "type": "text",
            "key": "f75"
          },
          {
            "label": "Raison sociale / nom de la plateforme",
            "type": "text",
            "key": "f76"
          },
          {
            "label": "Téléphone professionnel",
            "type": "text",
            "key": "f77"
          },
          {
            "label": "Adresse électronique professionnelle",
            "type": "text",
            "key": "f78"
          },
          {
            "label": "Adresse postale de la plateforme",
            "type": "text",
            "key": "f79"
          }
        ],
        "hint": "Vérifier les coordonnées dans l’annuaire officiel. Aucune transmission automatique."
      },
      {
        "title": "Adressage et accord",
        "fields": [
          {
            "label": "Parcours de bilan et/ou d’interventions précoces proposé",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f80"
          },
          {
            "label": "Accord du représentant légal recueilli pour la transmission à la PCO",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f81"
          }
        ]
      },
      {
        "title": "Signes cliniques et troubles associés",
        "fields": [
          {
            "label": "Énurésie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f82"
          },
          {
            "label": "Encoprésie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f83"
          },
          {
            "label": "Troubles du sommeil",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f84"
          },
          {
            "label": "Troubles du comportement alimentaire",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f85"
          },
          {
            "label": "Signes neurologiques",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f86"
          },
          {
            "label": "Trouble de l’oralité",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f87"
          },
          {
            "label": "Anorexie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f88"
          },
          {
            "label": "Anomalie du développement staturo-pondéral",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f89"
          },
          {
            "label": "Anxiété",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f90"
          },
          {
            "label": "Précisions sur les troubles associés",
            "type": "text",
            "key": "f91"
          }
        ]
      },
      {
        "title": "Bilans souhaités dans le parcours PCO",
        "fields": [
          {
            "label": "Kinésithérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f92"
          },
          {
            "label": "Ophtalmologie / ORL",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f93"
          },
          {
            "label": "Orthophonie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f94"
          },
          {
            "label": "Orthoptie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f95"
          },
          {
            "label": "Neuropédiatrie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f96"
          },
          {
            "label": "Ergothérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f97"
          },
          {
            "label": "Psychomotricité",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f98"
          },
          {
            "label": "Psychologie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f99"
          },
          {
            "label": "Neuropsychologie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f100"
          }
        ]
      },
      {
        "title": "Compléments pour le dossier",
        "fields": [
          {
            "label": "Autres examens, bilans ou interventions souhaités",
            "type": "text",
            "key": "f101"
          },
          {
            "label": "Signes d’alerte, mode de recueil et tests ou grilles utilisés",
            "type": "text",
            "key": "f102"
          }
        ]
      },
      {
        "title": "Orientations retenues",
        "fields": [
          {
            "label": "PCO — plateforme de coordination et d’orientation",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f103"
          },
          {
            "label": "Pédopsychiatrie / neuropédiatrie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f104"
          },
          {
            "label": "CMPP / CAMSP",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f105"
          },
          {
            "label": "Réseau spécialisé TND",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f106"
          }
        ]
      },
      {
        "title": "Bilans complémentaires",
        "fields": [
          {
            "label": "Orthophonie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f107"
          },
          {
            "label": "Orthoptie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f108"
          },
          {
            "label": "Kinésithérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f109"
          },
          {
            "label": "Psychomotricité",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f110"
          },
          {
            "label": "Ergothérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f111"
          },
          {
            "label": "Évaluation (neuro)psychologique",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f112"
          }
        ]
      },
      {
        "title": "Suivi",
        "fields": [
          {
            "label": "Réévaluation dans 3 à 6 mois",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f113"
          },
          {
            "label": "Réévaluation à 1 an",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f114"
          }
        ]
      },
      {
        "title": "Décision et annotations",
        "fields": [
          {
            "label": "Conclusions du médecin, examens, interventions et délai de suivi",
            "type": "text",
            "key": "f115"
          }
        ]
      }
    ],
    "resources": [
      [
        "Livret officiel 0–6 ans",
        "https://handicap.gouv.fr/sites/handicap/files/2024-04/Brochure-reperage-precoce-TND-moins-de-7-ans-version-a-remplir.pdf"
      ],
      [
        "Annuaire PCO",
        "https://www.ameli.fr/content/adresses-et-telephones-plateformes-de-coordination-et-d-orientation-pco"
      ]
    ],
    "mode": "development",
    "threshold": 2,
    "info": "Grille de repérage pour la tranche 6–11 mois. Observer les acquisitions et les éléments transversaux. Les libellés sont reformulés pour la saisie ; se reporter au livret officiel pour la passation et les décisions d’orientation."
  },
  {
    "id": "tnd-12m",
    "name": "Repérage TND · 12 mois",
    "sub": "12–17 mois",
    "group": "Troubles du neurodéveloppement",
    "icon": "🌱",
    "kind": "pathway",
    "questions": [],
    "sections": [
      {
        "title": "Contexte clinique",
        "fields": [
          {
            "label": "Âge et classe / mode de garde",
            "type": "text",
            "key": "f0"
          },
          {
            "label": "Motif, plainte et inquiétudes principales",
            "type": "text",
            "key": "f1"
          },
          {
            "label": "Antécédents, développement précoce, contexte familial et scolaire, bilans déjà réalisés",
            "type": "text",
            "key": "f2"
          }
        ],
        "open": true
      },
      {
        "title": "Facteurs de risque périnataux",
        "fields": [
          {
            "label": "Prématurité",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f3"
          },
          {
            "label": "Poids de naissance inférieur à 1 500 g",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f4"
          },
          {
            "label": "TND chez un parent du premier degré ou dans la fratrie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f5"
          },
          {
            "label": "Exposition prénatale importante à un toxique ou médicament à risque",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f6"
          },
          {
            "label": "Affection néonatale sévère (anoxie, encéphalopathie, cardiopathie complexe, chirurgie lourde, anomalie cérébrale, microcéphalie, infection ou ictère sévère)",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f7"
          },
          {
            "label": "Syndrome génétique",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f8"
          },
          {
            "label": "Précisions sur les facteurs de risque",
            "type": "text",
            "key": "f9"
          }
        ],
        "hint": "Oui = facteur présent. Documenter les circonstances, sans déduire un diagnostic."
      },
      {
        "title": "Régression des compétences",
        "fields": [
          {
            "label": "Perte d’acquisitions antérieures",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "regression": true,
            "key": "f10"
          }
        ],
        "hint": "Une régression nécessite une évaluation médicale rapide ; le comptage de la grille ne doit pas la retarder."
      },
      {
        "title": "Sommeil et alimentation",
        "fields": [
          {
            "label": "Troubles du sommeil durables et quasi quotidiens",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f11"
          },
          {
            "label": "Sélectivité alimentaire importante (textures, morceaux, couleur…)",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f12"
          },
          {
            "label": "Prises alimentaires difficiles, très longues ou peu efficaces",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f13"
          }
        ]
      },
      {
        "title": "Profil sensoriel et sensorimoteur",
        "fields": [
          {
            "label": "Fascination pour les lumières ou objets qui tournent",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f14"
          },
          {
            "label": "Réactivité inhabituelle à des sons, textures ou odeurs",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f15"
          },
          {
            "label": "Réaction à la douleur très faible ou excessive",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f16"
          },
          {
            "label": "Recherche de stimulations sensorielles",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f17"
          }
        ]
      },
      {
        "title": "Comportements et intérêts inhabituels",
        "fields": [
          {
            "label": "Passivité inhabituelle ou faible mobilité, notamment avant 24 mois",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f18"
          },
          {
            "label": "Exploration ou usage inhabituel des objets",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f19"
          },
          {
            "label": "Mouvements répétitifs stéréotypés",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f20"
          },
          {
            "label": "Attachement intense à certains objets ou intérêts très restreints",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f21"
          }
        ]
      },
      {
        "title": "Régulation émotionnelle",
        "fields": [
          {
            "label": "Réactions intenses et répétées au changement, difficilement apaisables",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f22"
          },
          {
            "label": "Colères violentes, répétées, inconsolables",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f23"
          },
          {
            "label": "Activité motrice incontrôlable avec mise en danger",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f24"
          },
          {
            "label": "Opposition forte et fréquente aux adultes",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f25"
          }
        ]
      },
      {
        "title": "Motricité globale",
        "fields": [
          {
            "label": "Passe seul de couché à assis",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f26"
          },
          {
            "label": "Tient assis sans appui ni aide, dos droit",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f27"
          },
          {
            "label": "Utilise ses quatre membres pour se déplacer",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f28"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Motricité fine et praxies",
        "fields": [
          {
            "label": "Cherche un objet qui vient d’être caché (attendu à 9 mois)",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f29"
          },
          {
            "label": "Prend un petit objet entre pouce et index (pince pulpaire)",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f30"
          },
          {
            "label": "Manipule des deux mains",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f31"
          },
          {
            "label": "Suit des yeux un objet dans toutes les directions",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f32"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Langage",
        "fields": [
          {
            "label": "Réagit à son prénom (attendu à 9 mois)",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f33"
          },
          {
            "label": "Prononce des syllabes redoublées (ba-ba, ta-ta, pa-pa…)",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f34"
          },
          {
            "label": "Comprend l’interdit « non »",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f35"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Socialisation",
        "fields": [
          {
            "label": "Fait des gestes sociaux : au revoir, bravo",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f36"
          },
          {
            "label": "Regarde ce que l’adulte désigne du doigt",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f37"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Inquiétudes signalées",
        "fields": [
          {
            "label": "Parents inquiets du développement",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f38"
          },
          {
            "label": "Professionnel de la petite enfance ou enseignant inquiet",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f39"
          },
          {
            "label": "Source des informations, exemples et compétences préservées",
            "type": "text",
            "key": "f40"
          }
        ]
      },
      {
        "title": "Préparation de l’adressage PCO",
        "fields": [
          {
            "label": "Antécédents personnels et familiaux, grossesse, naissance, environnement psychosocial",
            "type": "text",
            "key": "f41"
          }
        ],
        "hint": "Préparation de synthèse clinique. Cet export n’est pas le formulaire administratif officiel ; les documents officiels sont accessibles dans les ressources."
      },
      {
        "title": "Évaluations et interventions déjà menées ou en cours",
        "fields": [
          {
            "label": "ORL — Évaluation / bilan",
            "type": "text",
            "key": "f42"
          },
          {
            "label": "ORL — Intervention",
            "type": "text",
            "key": "f43"
          },
          {
            "label": "ORL — Année / durée / commentaire",
            "type": "text",
            "key": "f44"
          },
          {
            "label": "ORL — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f45"
          },
          {
            "label": "Ophtalmologie — Évaluation / bilan",
            "type": "text",
            "key": "f46"
          },
          {
            "label": "Ophtalmologie — Intervention",
            "type": "text",
            "key": "f47"
          },
          {
            "label": "Ophtalmologie — Année / durée / commentaire",
            "type": "text",
            "key": "f48"
          },
          {
            "label": "Ophtalmologie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f49"
          },
          {
            "label": "Orthoptie — Évaluation / bilan",
            "type": "text",
            "key": "f50"
          },
          {
            "label": "Orthoptie — Intervention",
            "type": "text",
            "key": "f51"
          },
          {
            "label": "Orthoptie — Année / durée / commentaire",
            "type": "text",
            "key": "f52"
          },
          {
            "label": "Orthoptie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f53"
          },
          {
            "label": "Orthophonie — Évaluation / bilan",
            "type": "text",
            "key": "f54"
          },
          {
            "label": "Orthophonie — Intervention",
            "type": "text",
            "key": "f55"
          },
          {
            "label": "Orthophonie — Année / durée / commentaire",
            "type": "text",
            "key": "f56"
          },
          {
            "label": "Orthophonie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f57"
          },
          {
            "label": "Kinésithérapie — Évaluation / bilan",
            "type": "text",
            "key": "f58"
          },
          {
            "label": "Kinésithérapie — Intervention",
            "type": "text",
            "key": "f59"
          },
          {
            "label": "Kinésithérapie — Année / durée / commentaire",
            "type": "text",
            "key": "f60"
          },
          {
            "label": "Kinésithérapie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f61"
          },
          {
            "label": "Ergothérapie — Évaluation / bilan",
            "type": "text",
            "key": "f62"
          },
          {
            "label": "Ergothérapie — Intervention",
            "type": "text",
            "key": "f63"
          },
          {
            "label": "Ergothérapie — Année / durée / commentaire",
            "type": "text",
            "key": "f64"
          },
          {
            "label": "Ergothérapie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f65"
          },
          {
            "label": "Psychomotricité — Évaluation / bilan",
            "type": "text",
            "key": "f66"
          },
          {
            "label": "Psychomotricité — Intervention",
            "type": "text",
            "key": "f67"
          },
          {
            "label": "Psychomotricité — Année / durée / commentaire",
            "type": "text",
            "key": "f68"
          },
          {
            "label": "Psychomotricité — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f69"
          },
          {
            "label": "Neuropsychologie — Évaluation / bilan",
            "type": "text",
            "key": "f70"
          },
          {
            "label": "Neuropsychologie — Intervention",
            "type": "text",
            "key": "f71"
          },
          {
            "label": "Neuropsychologie — Année / durée / commentaire",
            "type": "text",
            "key": "f72"
          },
          {
            "label": "Neuropsychologie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f73"
          },
          {
            "label": "Psychologie — Évaluation / bilan",
            "type": "text",
            "key": "f74"
          },
          {
            "label": "Psychologie — Intervention",
            "type": "text",
            "key": "f75"
          },
          {
            "label": "Psychologie — Année / durée / commentaire",
            "type": "text",
            "key": "f76"
          },
          {
            "label": "Psychologie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f77"
          }
        ],
        "hint": "Saisir les éléments utiles ; aucun document joint n’est envoyé par cet outil."
      },
      {
        "title": "Plateforme destinataire",
        "fields": [
          {
            "label": "Département / code postal de la plateforme",
            "type": "text",
            "key": "f78"
          },
          {
            "label": "Raison sociale / nom de la plateforme",
            "type": "text",
            "key": "f79"
          },
          {
            "label": "Téléphone professionnel",
            "type": "text",
            "key": "f80"
          },
          {
            "label": "Adresse électronique professionnelle",
            "type": "text",
            "key": "f81"
          },
          {
            "label": "Adresse postale de la plateforme",
            "type": "text",
            "key": "f82"
          }
        ],
        "hint": "Vérifier les coordonnées dans l’annuaire officiel. Aucune transmission automatique."
      },
      {
        "title": "Adressage et accord",
        "fields": [
          {
            "label": "Parcours de bilan et/ou d’interventions précoces proposé",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f83"
          },
          {
            "label": "Accord du représentant légal recueilli pour la transmission à la PCO",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f84"
          }
        ]
      },
      {
        "title": "Signes cliniques et troubles associés",
        "fields": [
          {
            "label": "Énurésie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f85"
          },
          {
            "label": "Encoprésie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f86"
          },
          {
            "label": "Troubles du sommeil",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f87"
          },
          {
            "label": "Troubles du comportement alimentaire",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f88"
          },
          {
            "label": "Signes neurologiques",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f89"
          },
          {
            "label": "Trouble de l’oralité",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f90"
          },
          {
            "label": "Anorexie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f91"
          },
          {
            "label": "Anomalie du développement staturo-pondéral",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f92"
          },
          {
            "label": "Anxiété",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f93"
          },
          {
            "label": "Précisions sur les troubles associés",
            "type": "text",
            "key": "f94"
          }
        ]
      },
      {
        "title": "Bilans souhaités dans le parcours PCO",
        "fields": [
          {
            "label": "Kinésithérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f95"
          },
          {
            "label": "Ophtalmologie / ORL",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f96"
          },
          {
            "label": "Orthophonie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f97"
          },
          {
            "label": "Orthoptie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f98"
          },
          {
            "label": "Neuropédiatrie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f99"
          },
          {
            "label": "Ergothérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f100"
          },
          {
            "label": "Psychomotricité",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f101"
          },
          {
            "label": "Psychologie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f102"
          },
          {
            "label": "Neuropsychologie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f103"
          }
        ]
      },
      {
        "title": "Compléments pour le dossier",
        "fields": [
          {
            "label": "Autres examens, bilans ou interventions souhaités",
            "type": "text",
            "key": "f104"
          },
          {
            "label": "Signes d’alerte, mode de recueil et tests ou grilles utilisés",
            "type": "text",
            "key": "f105"
          }
        ]
      },
      {
        "title": "Orientations retenues",
        "fields": [
          {
            "label": "PCO — plateforme de coordination et d’orientation",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f106"
          },
          {
            "label": "Pédopsychiatrie / neuropédiatrie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f107"
          },
          {
            "label": "CMPP / CAMSP",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f108"
          },
          {
            "label": "Réseau spécialisé TND",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f109"
          }
        ]
      },
      {
        "title": "Bilans complémentaires",
        "fields": [
          {
            "label": "Orthophonie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f110"
          },
          {
            "label": "Orthoptie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f111"
          },
          {
            "label": "Kinésithérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f112"
          },
          {
            "label": "Psychomotricité",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f113"
          },
          {
            "label": "Ergothérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f114"
          },
          {
            "label": "Évaluation (neuro)psychologique",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f115"
          }
        ]
      },
      {
        "title": "Suivi",
        "fields": [
          {
            "label": "Réévaluation dans 3 à 6 mois",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f116"
          },
          {
            "label": "Réévaluation à 1 an",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f117"
          }
        ]
      },
      {
        "title": "Décision et annotations",
        "fields": [
          {
            "label": "Conclusions du médecin, examens, interventions et délai de suivi",
            "type": "text",
            "key": "f118"
          }
        ]
      }
    ],
    "resources": [
      [
        "Livret officiel 0–6 ans",
        "https://handicap.gouv.fr/sites/handicap/files/2024-04/Brochure-reperage-precoce-TND-moins-de-7-ans-version-a-remplir.pdf"
      ],
      [
        "Annuaire PCO",
        "https://www.ameli.fr/content/adresses-et-telephones-plateformes-de-coordination-et-d-orientation-pco"
      ]
    ],
    "mode": "development",
    "threshold": 2,
    "info": "Grille de repérage pour la tranche 12–17 mois. Observer les acquisitions et les éléments transversaux. Les libellés sont reformulés pour la saisie ; se reporter au livret officiel pour la passation et les décisions d’orientation."
  },
  {
    "id": "tnd-18m",
    "name": "Repérage TND · 18 mois",
    "sub": "18–23 mois",
    "group": "Troubles du neurodéveloppement",
    "icon": "🌱",
    "kind": "pathway",
    "questions": [],
    "sections": [
      {
        "title": "Contexte clinique",
        "fields": [
          {
            "label": "Âge et classe / mode de garde",
            "type": "text",
            "key": "f0"
          },
          {
            "label": "Motif, plainte et inquiétudes principales",
            "type": "text",
            "key": "f1"
          },
          {
            "label": "Antécédents, développement précoce, contexte familial et scolaire, bilans déjà réalisés",
            "type": "text",
            "key": "f2"
          }
        ],
        "open": true
      },
      {
        "title": "Facteurs de risque périnataux",
        "fields": [
          {
            "label": "Prématurité",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f3"
          },
          {
            "label": "Poids de naissance inférieur à 1 500 g",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f4"
          },
          {
            "label": "TND chez un parent du premier degré ou dans la fratrie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f5"
          },
          {
            "label": "Exposition prénatale importante à un toxique ou médicament à risque",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f6"
          },
          {
            "label": "Affection néonatale sévère (anoxie, encéphalopathie, cardiopathie complexe, chirurgie lourde, anomalie cérébrale, microcéphalie, infection ou ictère sévère)",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f7"
          },
          {
            "label": "Syndrome génétique",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f8"
          },
          {
            "label": "Précisions sur les facteurs de risque",
            "type": "text",
            "key": "f9"
          }
        ],
        "hint": "Oui = facteur présent. Documenter les circonstances, sans déduire un diagnostic."
      },
      {
        "title": "Régression des compétences",
        "fields": [
          {
            "label": "Perte d’acquisitions antérieures",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "regression": true,
            "key": "f10"
          }
        ],
        "hint": "Une régression nécessite une évaluation médicale rapide ; le comptage de la grille ne doit pas la retarder."
      },
      {
        "title": "Sommeil et alimentation",
        "fields": [
          {
            "label": "Troubles du sommeil durables et quasi quotidiens",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f11"
          },
          {
            "label": "Sélectivité alimentaire importante (textures, morceaux, couleur…)",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f12"
          },
          {
            "label": "Prises alimentaires difficiles, très longues ou peu efficaces",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f13"
          }
        ]
      },
      {
        "title": "Profil sensoriel et sensorimoteur",
        "fields": [
          {
            "label": "Fascination pour les lumières ou objets qui tournent",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f14"
          },
          {
            "label": "Réactivité inhabituelle à des sons, textures ou odeurs",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f15"
          },
          {
            "label": "Réaction à la douleur très faible ou excessive",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f16"
          },
          {
            "label": "Recherche de stimulations sensorielles",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f17"
          }
        ]
      },
      {
        "title": "Comportements et intérêts inhabituels",
        "fields": [
          {
            "label": "Passivité inhabituelle ou faible mobilité, notamment avant 24 mois",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f18"
          },
          {
            "label": "Exploration ou usage inhabituel des objets",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f19"
          },
          {
            "label": "Mouvements répétitifs stéréotypés",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f20"
          },
          {
            "label": "Attachement intense à certains objets ou intérêts très restreints",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f21"
          }
        ]
      },
      {
        "title": "Régulation émotionnelle",
        "fields": [
          {
            "label": "Réactions intenses et répétées au changement, difficilement apaisables",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f22"
          },
          {
            "label": "Colères violentes, répétées, inconsolables",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f23"
          },
          {
            "label": "Activité motrice incontrôlable avec mise en danger",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f24"
          },
          {
            "label": "Opposition forte et fréquente aux adultes",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f25"
          }
        ]
      },
      {
        "title": "Motricité globale",
        "fields": [
          {
            "label": "Se lève seul depuis le sol",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f26"
          },
          {
            "label": "Marche sans aide, pieds à plat, plus de cinq pas",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f27"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Motricité fine et praxies",
        "fields": [
          {
            "label": "Empile deux cubes d’après un modèle",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f28"
          },
          {
            "label": "Introduit un petit objet dans un petit récipient",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f29"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Langage",
        "fields": [
          {
            "label": "Désigne un objet ou une image sur consigne orale",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f30"
          },
          {
            "label": "Comprend des consignes simples",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f31"
          },
          {
            "label": "Dit spontanément cinq mots",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f32"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Socialisation",
        "fields": [
          {
            "label": "Exprime un refus par un mot ou un geste",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f33"
          },
          {
            "label": "Pointe un objet d’intérêt pour attirer l’attention de l’adulte",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f34"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Inquiétudes signalées",
        "fields": [
          {
            "label": "Parents inquiets du développement",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f35"
          },
          {
            "label": "Professionnel de la petite enfance ou enseignant inquiet",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f36"
          },
          {
            "label": "Source des informations, exemples et compétences préservées",
            "type": "text",
            "key": "f37"
          }
        ]
      },
      {
        "title": "Préparation de l’adressage PCO",
        "fields": [
          {
            "label": "Antécédents personnels et familiaux, grossesse, naissance, environnement psychosocial",
            "type": "text",
            "key": "f38"
          }
        ],
        "hint": "Préparation de synthèse clinique. Cet export n’est pas le formulaire administratif officiel ; les documents officiels sont accessibles dans les ressources."
      },
      {
        "title": "Évaluations et interventions déjà menées ou en cours",
        "fields": [
          {
            "label": "ORL — Évaluation / bilan",
            "type": "text",
            "key": "f39"
          },
          {
            "label": "ORL — Intervention",
            "type": "text",
            "key": "f40"
          },
          {
            "label": "ORL — Année / durée / commentaire",
            "type": "text",
            "key": "f41"
          },
          {
            "label": "ORL — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f42"
          },
          {
            "label": "Ophtalmologie — Évaluation / bilan",
            "type": "text",
            "key": "f43"
          },
          {
            "label": "Ophtalmologie — Intervention",
            "type": "text",
            "key": "f44"
          },
          {
            "label": "Ophtalmologie — Année / durée / commentaire",
            "type": "text",
            "key": "f45"
          },
          {
            "label": "Ophtalmologie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f46"
          },
          {
            "label": "Orthoptie — Évaluation / bilan",
            "type": "text",
            "key": "f47"
          },
          {
            "label": "Orthoptie — Intervention",
            "type": "text",
            "key": "f48"
          },
          {
            "label": "Orthoptie — Année / durée / commentaire",
            "type": "text",
            "key": "f49"
          },
          {
            "label": "Orthoptie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f50"
          },
          {
            "label": "Orthophonie — Évaluation / bilan",
            "type": "text",
            "key": "f51"
          },
          {
            "label": "Orthophonie — Intervention",
            "type": "text",
            "key": "f52"
          },
          {
            "label": "Orthophonie — Année / durée / commentaire",
            "type": "text",
            "key": "f53"
          },
          {
            "label": "Orthophonie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f54"
          },
          {
            "label": "Kinésithérapie — Évaluation / bilan",
            "type": "text",
            "key": "f55"
          },
          {
            "label": "Kinésithérapie — Intervention",
            "type": "text",
            "key": "f56"
          },
          {
            "label": "Kinésithérapie — Année / durée / commentaire",
            "type": "text",
            "key": "f57"
          },
          {
            "label": "Kinésithérapie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f58"
          },
          {
            "label": "Ergothérapie — Évaluation / bilan",
            "type": "text",
            "key": "f59"
          },
          {
            "label": "Ergothérapie — Intervention",
            "type": "text",
            "key": "f60"
          },
          {
            "label": "Ergothérapie — Année / durée / commentaire",
            "type": "text",
            "key": "f61"
          },
          {
            "label": "Ergothérapie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f62"
          },
          {
            "label": "Psychomotricité — Évaluation / bilan",
            "type": "text",
            "key": "f63"
          },
          {
            "label": "Psychomotricité — Intervention",
            "type": "text",
            "key": "f64"
          },
          {
            "label": "Psychomotricité — Année / durée / commentaire",
            "type": "text",
            "key": "f65"
          },
          {
            "label": "Psychomotricité — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f66"
          },
          {
            "label": "Neuropsychologie — Évaluation / bilan",
            "type": "text",
            "key": "f67"
          },
          {
            "label": "Neuropsychologie — Intervention",
            "type": "text",
            "key": "f68"
          },
          {
            "label": "Neuropsychologie — Année / durée / commentaire",
            "type": "text",
            "key": "f69"
          },
          {
            "label": "Neuropsychologie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f70"
          },
          {
            "label": "Psychologie — Évaluation / bilan",
            "type": "text",
            "key": "f71"
          },
          {
            "label": "Psychologie — Intervention",
            "type": "text",
            "key": "f72"
          },
          {
            "label": "Psychologie — Année / durée / commentaire",
            "type": "text",
            "key": "f73"
          },
          {
            "label": "Psychologie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f74"
          }
        ],
        "hint": "Saisir les éléments utiles ; aucun document joint n’est envoyé par cet outil."
      },
      {
        "title": "Plateforme destinataire",
        "fields": [
          {
            "label": "Département / code postal de la plateforme",
            "type": "text",
            "key": "f75"
          },
          {
            "label": "Raison sociale / nom de la plateforme",
            "type": "text",
            "key": "f76"
          },
          {
            "label": "Téléphone professionnel",
            "type": "text",
            "key": "f77"
          },
          {
            "label": "Adresse électronique professionnelle",
            "type": "text",
            "key": "f78"
          },
          {
            "label": "Adresse postale de la plateforme",
            "type": "text",
            "key": "f79"
          }
        ],
        "hint": "Vérifier les coordonnées dans l’annuaire officiel. Aucune transmission automatique."
      },
      {
        "title": "Adressage et accord",
        "fields": [
          {
            "label": "Parcours de bilan et/ou d’interventions précoces proposé",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f80"
          },
          {
            "label": "Accord du représentant légal recueilli pour la transmission à la PCO",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f81"
          }
        ]
      },
      {
        "title": "Signes cliniques et troubles associés",
        "fields": [
          {
            "label": "Énurésie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f82"
          },
          {
            "label": "Encoprésie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f83"
          },
          {
            "label": "Troubles du sommeil",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f84"
          },
          {
            "label": "Troubles du comportement alimentaire",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f85"
          },
          {
            "label": "Signes neurologiques",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f86"
          },
          {
            "label": "Trouble de l’oralité",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f87"
          },
          {
            "label": "Anorexie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f88"
          },
          {
            "label": "Anomalie du développement staturo-pondéral",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f89"
          },
          {
            "label": "Anxiété",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f90"
          },
          {
            "label": "Précisions sur les troubles associés",
            "type": "text",
            "key": "f91"
          }
        ]
      },
      {
        "title": "Bilans souhaités dans le parcours PCO",
        "fields": [
          {
            "label": "Kinésithérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f92"
          },
          {
            "label": "Ophtalmologie / ORL",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f93"
          },
          {
            "label": "Orthophonie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f94"
          },
          {
            "label": "Orthoptie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f95"
          },
          {
            "label": "Neuropédiatrie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f96"
          },
          {
            "label": "Ergothérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f97"
          },
          {
            "label": "Psychomotricité",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f98"
          },
          {
            "label": "Psychologie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f99"
          },
          {
            "label": "Neuropsychologie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f100"
          }
        ]
      },
      {
        "title": "Compléments pour le dossier",
        "fields": [
          {
            "label": "Autres examens, bilans ou interventions souhaités",
            "type": "text",
            "key": "f101"
          },
          {
            "label": "Signes d’alerte, mode de recueil et tests ou grilles utilisés",
            "type": "text",
            "key": "f102"
          }
        ]
      },
      {
        "title": "Orientations retenues",
        "fields": [
          {
            "label": "PCO — plateforme de coordination et d’orientation",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f103"
          },
          {
            "label": "Pédopsychiatrie / neuropédiatrie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f104"
          },
          {
            "label": "CMPP / CAMSP",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f105"
          },
          {
            "label": "Réseau spécialisé TND",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f106"
          }
        ]
      },
      {
        "title": "Bilans complémentaires",
        "fields": [
          {
            "label": "Orthophonie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f107"
          },
          {
            "label": "Orthoptie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f108"
          },
          {
            "label": "Kinésithérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f109"
          },
          {
            "label": "Psychomotricité",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f110"
          },
          {
            "label": "Ergothérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f111"
          },
          {
            "label": "Évaluation (neuro)psychologique",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f112"
          }
        ]
      },
      {
        "title": "Suivi",
        "fields": [
          {
            "label": "Réévaluation dans 3 à 6 mois",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f113"
          },
          {
            "label": "Réévaluation à 1 an",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f114"
          }
        ]
      },
      {
        "title": "Décision et annotations",
        "fields": [
          {
            "label": "Conclusions du médecin, examens, interventions et délai de suivi",
            "type": "text",
            "key": "f115"
          }
        ]
      }
    ],
    "resources": [
      [
        "Livret officiel 0–6 ans",
        "https://handicap.gouv.fr/sites/handicap/files/2024-04/Brochure-reperage-precoce-TND-moins-de-7-ans-version-a-remplir.pdf"
      ],
      [
        "Annuaire PCO",
        "https://www.ameli.fr/content/adresses-et-telephones-plateformes-de-coordination-et-d-orientation-pco"
      ]
    ],
    "mode": "development",
    "threshold": 2,
    "info": "Grille de repérage pour la tranche 18–23 mois. Observer les acquisitions et les éléments transversaux. Les libellés sont reformulés pour la saisie ; se reporter au livret officiel pour la passation et les décisions d’orientation."
  },
  {
    "id": "tnd-24m",
    "name": "Repérage TND · 24 mois",
    "sub": "24–35 mois",
    "group": "Troubles du neurodéveloppement",
    "icon": "🌱",
    "kind": "pathway",
    "questions": [],
    "sections": [
      {
        "title": "Contexte clinique",
        "fields": [
          {
            "label": "Âge et classe / mode de garde",
            "type": "text",
            "key": "f0"
          },
          {
            "label": "Motif, plainte et inquiétudes principales",
            "type": "text",
            "key": "f1"
          },
          {
            "label": "Antécédents, développement précoce, contexte familial et scolaire, bilans déjà réalisés",
            "type": "text",
            "key": "f2"
          }
        ],
        "open": true
      },
      {
        "title": "Facteurs de risque périnataux",
        "fields": [
          {
            "label": "Prématurité",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f3"
          },
          {
            "label": "Poids de naissance inférieur à 1 500 g",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f4"
          },
          {
            "label": "TND chez un parent du premier degré ou dans la fratrie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f5"
          },
          {
            "label": "Exposition prénatale importante à un toxique ou médicament à risque",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f6"
          },
          {
            "label": "Affection néonatale sévère (anoxie, encéphalopathie, cardiopathie complexe, chirurgie lourde, anomalie cérébrale, microcéphalie, infection ou ictère sévère)",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f7"
          },
          {
            "label": "Syndrome génétique",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f8"
          },
          {
            "label": "Précisions sur les facteurs de risque",
            "type": "text",
            "key": "f9"
          }
        ],
        "hint": "Oui = facteur présent. Documenter les circonstances, sans déduire un diagnostic."
      },
      {
        "title": "Régression des compétences",
        "fields": [
          {
            "label": "Perte d’acquisitions antérieures",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "regression": true,
            "key": "f10"
          }
        ],
        "hint": "Une régression nécessite une évaluation médicale rapide ; le comptage de la grille ne doit pas la retarder."
      },
      {
        "title": "Sommeil et alimentation",
        "fields": [
          {
            "label": "Troubles du sommeil durables et quasi quotidiens",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f11"
          },
          {
            "label": "Sélectivité alimentaire importante (textures, morceaux, couleur…)",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f12"
          },
          {
            "label": "Prises alimentaires difficiles, très longues ou peu efficaces",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f13"
          }
        ]
      },
      {
        "title": "Profil sensoriel et sensorimoteur",
        "fields": [
          {
            "label": "Fascination pour les lumières ou objets qui tournent",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f14"
          },
          {
            "label": "Réactivité inhabituelle à des sons, textures ou odeurs",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f15"
          },
          {
            "label": "Réaction à la douleur très faible ou excessive",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f16"
          },
          {
            "label": "Recherche de stimulations sensorielles",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f17"
          }
        ]
      },
      {
        "title": "Comportements et intérêts inhabituels",
        "fields": [
          {
            "label": "Passivité inhabituelle ou faible mobilité, notamment avant 24 mois",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f18"
          },
          {
            "label": "Exploration ou usage inhabituel des objets",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f19"
          },
          {
            "label": "Mouvements répétitifs stéréotypés",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f20"
          },
          {
            "label": "Attachement intense à certains objets ou intérêts très restreints",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f21"
          }
        ]
      },
      {
        "title": "Régulation émotionnelle",
        "fields": [
          {
            "label": "Réactions intenses et répétées au changement, difficilement apaisables",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f22"
          },
          {
            "label": "Colères violentes, répétées, inconsolables",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f23"
          },
          {
            "label": "Activité motrice incontrôlable avec mise en danger",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f24"
          },
          {
            "label": "Opposition forte et fréquente aux adultes",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f25"
          }
        ]
      },
      {
        "title": "Motricité globale",
        "fields": [
          {
            "label": "Court en coordonnant les mouvements des bras",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f26"
          },
          {
            "label": "Monte les escaliers marche par marche, seul ou aidé",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f27"
          },
          {
            "label": "Shoote dans un ballon après démonstration",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f28"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Motricité fine et praxies",
        "fields": [
          {
            "label": "Empile cinq cubes d’après un modèle",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f29"
          },
          {
            "label": "Utilise seul la cuillère, même peu efficacement",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f30"
          },
          {
            "label": "Pointe un objet ou une image venant d’être montré(e)",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f31"
          },
          {
            "label": "Encastre des formes géométriques simples",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f32"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Langage",
        "fields": [
          {
            "label": "Dit spontanément plus de dix mots usuels",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f33"
          },
          {
            "label": "Associe deux mots",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f34"
          },
          {
            "label": "Utilise « je » pour se désigner",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f35"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Socialisation",
        "fields": [
          {
            "label": "Participe à des jeux d’imitation ou de faire semblant",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f36"
          },
          {
            "label": "S’intéresse aux autres enfants",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f37"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Inquiétudes signalées",
        "fields": [
          {
            "label": "Parents inquiets du développement",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f38"
          },
          {
            "label": "Professionnel de la petite enfance ou enseignant inquiet",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f39"
          },
          {
            "label": "Source des informations, exemples et compétences préservées",
            "type": "text",
            "key": "f40"
          }
        ]
      },
      {
        "title": "Préparation de l’adressage PCO",
        "fields": [
          {
            "label": "Antécédents personnels et familiaux, grossesse, naissance, environnement psychosocial",
            "type": "text",
            "key": "f41"
          }
        ],
        "hint": "Préparation de synthèse clinique. Cet export n’est pas le formulaire administratif officiel ; les documents officiels sont accessibles dans les ressources."
      },
      {
        "title": "Évaluations et interventions déjà menées ou en cours",
        "fields": [
          {
            "label": "ORL — Évaluation / bilan",
            "type": "text",
            "key": "f42"
          },
          {
            "label": "ORL — Intervention",
            "type": "text",
            "key": "f43"
          },
          {
            "label": "ORL — Année / durée / commentaire",
            "type": "text",
            "key": "f44"
          },
          {
            "label": "ORL — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f45"
          },
          {
            "label": "Ophtalmologie — Évaluation / bilan",
            "type": "text",
            "key": "f46"
          },
          {
            "label": "Ophtalmologie — Intervention",
            "type": "text",
            "key": "f47"
          },
          {
            "label": "Ophtalmologie — Année / durée / commentaire",
            "type": "text",
            "key": "f48"
          },
          {
            "label": "Ophtalmologie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f49"
          },
          {
            "label": "Orthoptie — Évaluation / bilan",
            "type": "text",
            "key": "f50"
          },
          {
            "label": "Orthoptie — Intervention",
            "type": "text",
            "key": "f51"
          },
          {
            "label": "Orthoptie — Année / durée / commentaire",
            "type": "text",
            "key": "f52"
          },
          {
            "label": "Orthoptie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f53"
          },
          {
            "label": "Orthophonie — Évaluation / bilan",
            "type": "text",
            "key": "f54"
          },
          {
            "label": "Orthophonie — Intervention",
            "type": "text",
            "key": "f55"
          },
          {
            "label": "Orthophonie — Année / durée / commentaire",
            "type": "text",
            "key": "f56"
          },
          {
            "label": "Orthophonie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f57"
          },
          {
            "label": "Kinésithérapie — Évaluation / bilan",
            "type": "text",
            "key": "f58"
          },
          {
            "label": "Kinésithérapie — Intervention",
            "type": "text",
            "key": "f59"
          },
          {
            "label": "Kinésithérapie — Année / durée / commentaire",
            "type": "text",
            "key": "f60"
          },
          {
            "label": "Kinésithérapie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f61"
          },
          {
            "label": "Ergothérapie — Évaluation / bilan",
            "type": "text",
            "key": "f62"
          },
          {
            "label": "Ergothérapie — Intervention",
            "type": "text",
            "key": "f63"
          },
          {
            "label": "Ergothérapie — Année / durée / commentaire",
            "type": "text",
            "key": "f64"
          },
          {
            "label": "Ergothérapie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f65"
          },
          {
            "label": "Psychomotricité — Évaluation / bilan",
            "type": "text",
            "key": "f66"
          },
          {
            "label": "Psychomotricité — Intervention",
            "type": "text",
            "key": "f67"
          },
          {
            "label": "Psychomotricité — Année / durée / commentaire",
            "type": "text",
            "key": "f68"
          },
          {
            "label": "Psychomotricité — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f69"
          },
          {
            "label": "Neuropsychologie — Évaluation / bilan",
            "type": "text",
            "key": "f70"
          },
          {
            "label": "Neuropsychologie — Intervention",
            "type": "text",
            "key": "f71"
          },
          {
            "label": "Neuropsychologie — Année / durée / commentaire",
            "type": "text",
            "key": "f72"
          },
          {
            "label": "Neuropsychologie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f73"
          },
          {
            "label": "Psychologie — Évaluation / bilan",
            "type": "text",
            "key": "f74"
          },
          {
            "label": "Psychologie — Intervention",
            "type": "text",
            "key": "f75"
          },
          {
            "label": "Psychologie — Année / durée / commentaire",
            "type": "text",
            "key": "f76"
          },
          {
            "label": "Psychologie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f77"
          }
        ],
        "hint": "Saisir les éléments utiles ; aucun document joint n’est envoyé par cet outil."
      },
      {
        "title": "Plateforme destinataire",
        "fields": [
          {
            "label": "Département / code postal de la plateforme",
            "type": "text",
            "key": "f78"
          },
          {
            "label": "Raison sociale / nom de la plateforme",
            "type": "text",
            "key": "f79"
          },
          {
            "label": "Téléphone professionnel",
            "type": "text",
            "key": "f80"
          },
          {
            "label": "Adresse électronique professionnelle",
            "type": "text",
            "key": "f81"
          },
          {
            "label": "Adresse postale de la plateforme",
            "type": "text",
            "key": "f82"
          }
        ],
        "hint": "Vérifier les coordonnées dans l’annuaire officiel. Aucune transmission automatique."
      },
      {
        "title": "Adressage et accord",
        "fields": [
          {
            "label": "Parcours de bilan et/ou d’interventions précoces proposé",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f83"
          },
          {
            "label": "Accord du représentant légal recueilli pour la transmission à la PCO",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f84"
          }
        ]
      },
      {
        "title": "Signes cliniques et troubles associés",
        "fields": [
          {
            "label": "Énurésie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f85"
          },
          {
            "label": "Encoprésie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f86"
          },
          {
            "label": "Troubles du sommeil",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f87"
          },
          {
            "label": "Troubles du comportement alimentaire",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f88"
          },
          {
            "label": "Signes neurologiques",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f89"
          },
          {
            "label": "Trouble de l’oralité",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f90"
          },
          {
            "label": "Anorexie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f91"
          },
          {
            "label": "Anomalie du développement staturo-pondéral",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f92"
          },
          {
            "label": "Anxiété",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f93"
          },
          {
            "label": "Précisions sur les troubles associés",
            "type": "text",
            "key": "f94"
          }
        ]
      },
      {
        "title": "Bilans souhaités dans le parcours PCO",
        "fields": [
          {
            "label": "Kinésithérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f95"
          },
          {
            "label": "Ophtalmologie / ORL",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f96"
          },
          {
            "label": "Orthophonie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f97"
          },
          {
            "label": "Orthoptie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f98"
          },
          {
            "label": "Neuropédiatrie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f99"
          },
          {
            "label": "Ergothérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f100"
          },
          {
            "label": "Psychomotricité",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f101"
          },
          {
            "label": "Psychologie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f102"
          },
          {
            "label": "Neuropsychologie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f103"
          }
        ]
      },
      {
        "title": "Compléments pour le dossier",
        "fields": [
          {
            "label": "Autres examens, bilans ou interventions souhaités",
            "type": "text",
            "key": "f104"
          },
          {
            "label": "Signes d’alerte, mode de recueil et tests ou grilles utilisés",
            "type": "text",
            "key": "f105"
          }
        ]
      },
      {
        "title": "Orientations retenues",
        "fields": [
          {
            "label": "PCO — plateforme de coordination et d’orientation",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f106"
          },
          {
            "label": "Pédopsychiatrie / neuropédiatrie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f107"
          },
          {
            "label": "CMPP / CAMSP",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f108"
          },
          {
            "label": "Réseau spécialisé TND",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f109"
          }
        ]
      },
      {
        "title": "Bilans complémentaires",
        "fields": [
          {
            "label": "Orthophonie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f110"
          },
          {
            "label": "Orthoptie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f111"
          },
          {
            "label": "Kinésithérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f112"
          },
          {
            "label": "Psychomotricité",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f113"
          },
          {
            "label": "Ergothérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f114"
          },
          {
            "label": "Évaluation (neuro)psychologique",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f115"
          }
        ]
      },
      {
        "title": "Suivi",
        "fields": [
          {
            "label": "Réévaluation dans 3 à 6 mois",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f116"
          },
          {
            "label": "Réévaluation à 1 an",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f117"
          }
        ]
      },
      {
        "title": "Décision et annotations",
        "fields": [
          {
            "label": "Conclusions du médecin, examens, interventions et délai de suivi",
            "type": "text",
            "key": "f118"
          }
        ]
      }
    ],
    "resources": [
      [
        "Livret officiel 0–6 ans",
        "https://handicap.gouv.fr/sites/handicap/files/2024-04/Brochure-reperage-precoce-TND-moins-de-7-ans-version-a-remplir.pdf"
      ],
      [
        "Annuaire PCO",
        "https://www.ameli.fr/content/adresses-et-telephones-plateformes-de-coordination-et-d-orientation-pco"
      ]
    ],
    "mode": "development",
    "threshold": 2,
    "info": "Grille de repérage pour la tranche 24–35 mois. Observer les acquisitions et les éléments transversaux. Les libellés sont reformulés pour la saisie ; se reporter au livret officiel pour la passation et les décisions d’orientation."
  },
  {
    "id": "tnd-3a",
    "name": "Repérage TND · 3 ans",
    "sub": "36–47 mois",
    "group": "Troubles du neurodéveloppement",
    "icon": "🌱",
    "kind": "pathway",
    "questions": [],
    "sections": [
      {
        "title": "Contexte clinique",
        "fields": [
          {
            "label": "Âge et classe / mode de garde",
            "type": "text",
            "key": "f0"
          },
          {
            "label": "Motif, plainte et inquiétudes principales",
            "type": "text",
            "key": "f1"
          },
          {
            "label": "Antécédents, développement précoce, contexte familial et scolaire, bilans déjà réalisés",
            "type": "text",
            "key": "f2"
          }
        ],
        "open": true
      },
      {
        "title": "Facteurs de risque périnataux",
        "fields": [
          {
            "label": "Prématurité",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f3"
          },
          {
            "label": "Poids de naissance inférieur à 1 500 g",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f4"
          },
          {
            "label": "TND chez un parent du premier degré ou dans la fratrie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f5"
          },
          {
            "label": "Exposition prénatale importante à un toxique ou médicament à risque",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f6"
          },
          {
            "label": "Affection néonatale sévère (anoxie, encéphalopathie, cardiopathie complexe, chirurgie lourde, anomalie cérébrale, microcéphalie, infection ou ictère sévère)",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f7"
          },
          {
            "label": "Syndrome génétique",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f8"
          },
          {
            "label": "Précisions sur les facteurs de risque",
            "type": "text",
            "key": "f9"
          }
        ],
        "hint": "Oui = facteur présent. Documenter les circonstances, sans déduire un diagnostic."
      },
      {
        "title": "Régression des compétences",
        "fields": [
          {
            "label": "Perte d’acquisitions antérieures",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "regression": true,
            "key": "f10"
          }
        ],
        "hint": "Une régression nécessite une évaluation médicale rapide ; le comptage de la grille ne doit pas la retarder."
      },
      {
        "title": "Sommeil et alimentation",
        "fields": [
          {
            "label": "Troubles du sommeil durables et quasi quotidiens",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f11"
          },
          {
            "label": "Sélectivité alimentaire importante (textures, morceaux, couleur…)",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f12"
          },
          {
            "label": "Prises alimentaires difficiles, très longues ou peu efficaces",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f13"
          }
        ]
      },
      {
        "title": "Profil sensoriel et sensorimoteur",
        "fields": [
          {
            "label": "Fascination pour les lumières ou objets qui tournent",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f14"
          },
          {
            "label": "Réactivité inhabituelle à des sons, textures ou odeurs",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f15"
          },
          {
            "label": "Réaction à la douleur très faible ou excessive",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f16"
          },
          {
            "label": "Recherche de stimulations sensorielles",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f17"
          }
        ]
      },
      {
        "title": "Comportements et intérêts inhabituels",
        "fields": [
          {
            "label": "Passivité inhabituelle ou faible mobilité, notamment avant 24 mois",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f18"
          },
          {
            "label": "Exploration ou usage inhabituel des objets",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f19"
          },
          {
            "label": "Mouvements répétitifs stéréotypés",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f20"
          },
          {
            "label": "Attachement intense à certains objets ou intérêts très restreints",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f21"
          }
        ]
      },
      {
        "title": "Régulation émotionnelle",
        "fields": [
          {
            "label": "Réactions intenses et répétées au changement, difficilement apaisables",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f22"
          },
          {
            "label": "Colères violentes, répétées, inconsolables",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f23"
          },
          {
            "label": "Activité motrice incontrôlable avec mise en danger",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f24"
          },
          {
            "label": "Opposition forte et fréquente aux adultes",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f25"
          }
        ]
      },
      {
        "title": "Motricité globale",
        "fields": [
          {
            "label": "Monte l’escalier en alternant les pieds avec la rampe",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f26"
          },
          {
            "label": "Saute une marche",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f27"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Motricité fine et praxies",
        "fields": [
          {
            "label": "Empile huit cubes d’après un modèle",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f28"
          },
          {
            "label": "Copie un cercle sur modèle visuel",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f29"
          },
          {
            "label": "Enfile seul un vêtement",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f30"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Langage",
        "fields": [
          {
            "label": "Forme une phrase de trois mots avec sujet, verbe et objet",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f31"
          },
          {
            "label": "Utilise son prénom ou « je » pour parler de lui",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f32"
          },
          {
            "label": "Comprend une consigne orale simple sans geste de l’adulte",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f33"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Socialisation",
        "fields": [
          {
            "label": "Prend plaisir à jouer avec des enfants de son âge",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f34"
          },
          {
            "label": "Participe à une activité à deux ou plusieurs",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f35"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Inquiétudes signalées",
        "fields": [
          {
            "label": "Parents inquiets du développement",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f36"
          },
          {
            "label": "Professionnel de la petite enfance ou enseignant inquiet",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f37"
          },
          {
            "label": "Source des informations, exemples et compétences préservées",
            "type": "text",
            "key": "f38"
          }
        ]
      },
      {
        "title": "Préparation de l’adressage PCO",
        "fields": [
          {
            "label": "Antécédents personnels et familiaux, grossesse, naissance, environnement psychosocial",
            "type": "text",
            "key": "f39"
          }
        ],
        "hint": "Préparation de synthèse clinique. Cet export n’est pas le formulaire administratif officiel ; les documents officiels sont accessibles dans les ressources."
      },
      {
        "title": "Évaluations et interventions déjà menées ou en cours",
        "fields": [
          {
            "label": "ORL — Évaluation / bilan",
            "type": "text",
            "key": "f40"
          },
          {
            "label": "ORL — Intervention",
            "type": "text",
            "key": "f41"
          },
          {
            "label": "ORL — Année / durée / commentaire",
            "type": "text",
            "key": "f42"
          },
          {
            "label": "ORL — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f43"
          },
          {
            "label": "Ophtalmologie — Évaluation / bilan",
            "type": "text",
            "key": "f44"
          },
          {
            "label": "Ophtalmologie — Intervention",
            "type": "text",
            "key": "f45"
          },
          {
            "label": "Ophtalmologie — Année / durée / commentaire",
            "type": "text",
            "key": "f46"
          },
          {
            "label": "Ophtalmologie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f47"
          },
          {
            "label": "Orthoptie — Évaluation / bilan",
            "type": "text",
            "key": "f48"
          },
          {
            "label": "Orthoptie — Intervention",
            "type": "text",
            "key": "f49"
          },
          {
            "label": "Orthoptie — Année / durée / commentaire",
            "type": "text",
            "key": "f50"
          },
          {
            "label": "Orthoptie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f51"
          },
          {
            "label": "Orthophonie — Évaluation / bilan",
            "type": "text",
            "key": "f52"
          },
          {
            "label": "Orthophonie — Intervention",
            "type": "text",
            "key": "f53"
          },
          {
            "label": "Orthophonie — Année / durée / commentaire",
            "type": "text",
            "key": "f54"
          },
          {
            "label": "Orthophonie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f55"
          },
          {
            "label": "Kinésithérapie — Évaluation / bilan",
            "type": "text",
            "key": "f56"
          },
          {
            "label": "Kinésithérapie — Intervention",
            "type": "text",
            "key": "f57"
          },
          {
            "label": "Kinésithérapie — Année / durée / commentaire",
            "type": "text",
            "key": "f58"
          },
          {
            "label": "Kinésithérapie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f59"
          },
          {
            "label": "Ergothérapie — Évaluation / bilan",
            "type": "text",
            "key": "f60"
          },
          {
            "label": "Ergothérapie — Intervention",
            "type": "text",
            "key": "f61"
          },
          {
            "label": "Ergothérapie — Année / durée / commentaire",
            "type": "text",
            "key": "f62"
          },
          {
            "label": "Ergothérapie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f63"
          },
          {
            "label": "Psychomotricité — Évaluation / bilan",
            "type": "text",
            "key": "f64"
          },
          {
            "label": "Psychomotricité — Intervention",
            "type": "text",
            "key": "f65"
          },
          {
            "label": "Psychomotricité — Année / durée / commentaire",
            "type": "text",
            "key": "f66"
          },
          {
            "label": "Psychomotricité — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f67"
          },
          {
            "label": "Neuropsychologie — Évaluation / bilan",
            "type": "text",
            "key": "f68"
          },
          {
            "label": "Neuropsychologie — Intervention",
            "type": "text",
            "key": "f69"
          },
          {
            "label": "Neuropsychologie — Année / durée / commentaire",
            "type": "text",
            "key": "f70"
          },
          {
            "label": "Neuropsychologie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f71"
          },
          {
            "label": "Psychologie — Évaluation / bilan",
            "type": "text",
            "key": "f72"
          },
          {
            "label": "Psychologie — Intervention",
            "type": "text",
            "key": "f73"
          },
          {
            "label": "Psychologie — Année / durée / commentaire",
            "type": "text",
            "key": "f74"
          },
          {
            "label": "Psychologie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f75"
          }
        ],
        "hint": "Saisir les éléments utiles ; aucun document joint n’est envoyé par cet outil."
      },
      {
        "title": "Plateforme destinataire",
        "fields": [
          {
            "label": "Département / code postal de la plateforme",
            "type": "text",
            "key": "f76"
          },
          {
            "label": "Raison sociale / nom de la plateforme",
            "type": "text",
            "key": "f77"
          },
          {
            "label": "Téléphone professionnel",
            "type": "text",
            "key": "f78"
          },
          {
            "label": "Adresse électronique professionnelle",
            "type": "text",
            "key": "f79"
          },
          {
            "label": "Adresse postale de la plateforme",
            "type": "text",
            "key": "f80"
          }
        ],
        "hint": "Vérifier les coordonnées dans l’annuaire officiel. Aucune transmission automatique."
      },
      {
        "title": "Adressage et accord",
        "fields": [
          {
            "label": "Parcours de bilan et/ou d’interventions précoces proposé",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f81"
          },
          {
            "label": "Accord du représentant légal recueilli pour la transmission à la PCO",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f82"
          }
        ]
      },
      {
        "title": "Signes cliniques et troubles associés",
        "fields": [
          {
            "label": "Énurésie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f83"
          },
          {
            "label": "Encoprésie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f84"
          },
          {
            "label": "Troubles du sommeil",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f85"
          },
          {
            "label": "Troubles du comportement alimentaire",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f86"
          },
          {
            "label": "Signes neurologiques",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f87"
          },
          {
            "label": "Trouble de l’oralité",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f88"
          },
          {
            "label": "Anorexie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f89"
          },
          {
            "label": "Anomalie du développement staturo-pondéral",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f90"
          },
          {
            "label": "Anxiété",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f91"
          },
          {
            "label": "Précisions sur les troubles associés",
            "type": "text",
            "key": "f92"
          }
        ]
      },
      {
        "title": "Bilans souhaités dans le parcours PCO",
        "fields": [
          {
            "label": "Kinésithérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f93"
          },
          {
            "label": "Ophtalmologie / ORL",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f94"
          },
          {
            "label": "Orthophonie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f95"
          },
          {
            "label": "Orthoptie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f96"
          },
          {
            "label": "Neuropédiatrie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f97"
          },
          {
            "label": "Ergothérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f98"
          },
          {
            "label": "Psychomotricité",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f99"
          },
          {
            "label": "Psychologie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f100"
          },
          {
            "label": "Neuropsychologie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f101"
          }
        ]
      },
      {
        "title": "Compléments pour le dossier",
        "fields": [
          {
            "label": "Autres examens, bilans ou interventions souhaités",
            "type": "text",
            "key": "f102"
          },
          {
            "label": "Signes d’alerte, mode de recueil et tests ou grilles utilisés",
            "type": "text",
            "key": "f103"
          }
        ]
      },
      {
        "title": "Orientations retenues",
        "fields": [
          {
            "label": "PCO — plateforme de coordination et d’orientation",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f104"
          },
          {
            "label": "Pédopsychiatrie / neuropédiatrie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f105"
          },
          {
            "label": "CMPP / CAMSP",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f106"
          },
          {
            "label": "Réseau spécialisé TND",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f107"
          }
        ]
      },
      {
        "title": "Bilans complémentaires",
        "fields": [
          {
            "label": "Orthophonie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f108"
          },
          {
            "label": "Orthoptie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f109"
          },
          {
            "label": "Kinésithérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f110"
          },
          {
            "label": "Psychomotricité",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f111"
          },
          {
            "label": "Ergothérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f112"
          },
          {
            "label": "Évaluation (neuro)psychologique",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f113"
          }
        ]
      },
      {
        "title": "Suivi",
        "fields": [
          {
            "label": "Réévaluation dans 3 à 6 mois",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f114"
          },
          {
            "label": "Réévaluation à 1 an",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f115"
          }
        ]
      },
      {
        "title": "Décision et annotations",
        "fields": [
          {
            "label": "Conclusions du médecin, examens, interventions et délai de suivi",
            "type": "text",
            "key": "f116"
          }
        ]
      }
    ],
    "resources": [
      [
        "Livret officiel 0–6 ans",
        "https://handicap.gouv.fr/sites/handicap/files/2024-04/Brochure-reperage-precoce-TND-moins-de-7-ans-version-a-remplir.pdf"
      ],
      [
        "Annuaire PCO",
        "https://www.ameli.fr/content/adresses-et-telephones-plateformes-de-coordination-et-d-orientation-pco"
      ]
    ],
    "mode": "development",
    "threshold": 2,
    "info": "Grille de repérage pour la tranche 36–47 mois. Observer les acquisitions et les éléments transversaux. Les libellés sont reformulés pour la saisie ; se reporter au livret officiel pour la passation et les décisions d’orientation."
  },
  {
    "id": "tnd-4a",
    "name": "Repérage TND · 4 ans",
    "sub": "48–59 mois",
    "group": "Troubles du neurodéveloppement",
    "icon": "🌱",
    "kind": "pathway",
    "questions": [],
    "sections": [
      {
        "title": "Contexte clinique",
        "fields": [
          {
            "label": "Âge et classe / mode de garde",
            "type": "text",
            "key": "f0"
          },
          {
            "label": "Motif, plainte et inquiétudes principales",
            "type": "text",
            "key": "f1"
          },
          {
            "label": "Antécédents, développement précoce, contexte familial et scolaire, bilans déjà réalisés",
            "type": "text",
            "key": "f2"
          }
        ],
        "open": true
      },
      {
        "title": "Facteurs de risque périnataux",
        "fields": [
          {
            "label": "Prématurité",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f3"
          },
          {
            "label": "Poids de naissance inférieur à 1 500 g",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f4"
          },
          {
            "label": "TND chez un parent du premier degré ou dans la fratrie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f5"
          },
          {
            "label": "Exposition prénatale importante à un toxique ou médicament à risque",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f6"
          },
          {
            "label": "Affection néonatale sévère (anoxie, encéphalopathie, cardiopathie complexe, chirurgie lourde, anomalie cérébrale, microcéphalie, infection ou ictère sévère)",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f7"
          },
          {
            "label": "Syndrome génétique",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f8"
          },
          {
            "label": "Précisions sur les facteurs de risque",
            "type": "text",
            "key": "f9"
          }
        ],
        "hint": "Oui = facteur présent. Documenter les circonstances, sans déduire un diagnostic."
      },
      {
        "title": "Régression des compétences",
        "fields": [
          {
            "label": "Perte d’acquisitions antérieures",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "regression": true,
            "key": "f10"
          }
        ],
        "hint": "Une régression nécessite une évaluation médicale rapide ; le comptage de la grille ne doit pas la retarder."
      },
      {
        "title": "Sommeil et alimentation",
        "fields": [
          {
            "label": "Troubles du sommeil durables et quasi quotidiens",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f11"
          },
          {
            "label": "Sélectivité alimentaire importante (textures, morceaux, couleur…)",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f12"
          },
          {
            "label": "Prises alimentaires difficiles, très longues ou peu efficaces",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f13"
          }
        ]
      },
      {
        "title": "Profil sensoriel et sensorimoteur",
        "fields": [
          {
            "label": "Fascination pour les lumières ou objets qui tournent",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f14"
          },
          {
            "label": "Réactivité inhabituelle à des sons, textures ou odeurs",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f15"
          },
          {
            "label": "Réaction à la douleur très faible ou excessive",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f16"
          },
          {
            "label": "Recherche de stimulations sensorielles",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f17"
          }
        ]
      },
      {
        "title": "Comportements et intérêts inhabituels",
        "fields": [
          {
            "label": "Passivité inhabituelle ou faible mobilité, notamment avant 24 mois",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f18"
          },
          {
            "label": "Exploration ou usage inhabituel des objets",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f19"
          },
          {
            "label": "Mouvements répétitifs stéréotypés",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f20"
          },
          {
            "label": "Attachement intense à certains objets ou intérêts très restreints",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f21"
          }
        ]
      },
      {
        "title": "Régulation émotionnelle",
        "fields": [
          {
            "label": "Réactions intenses et répétées au changement, difficilement apaisables",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f22"
          },
          {
            "label": "Colères violentes, répétées, inconsolables",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f23"
          },
          {
            "label": "Activité motrice incontrôlable avec mise en danger",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f24"
          },
          {
            "label": "Opposition forte et fréquente aux adultes",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f25"
          }
        ]
      },
      {
        "title": "Motricité globale",
        "fields": [
          {
            "label": "Saute à pieds joints, au moins sur place",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f26"
          },
          {
            "label": "Monte les marches sans être tenu en alternant les pieds",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f27"
          },
          {
            "label": "Lance un ballon de façon dirigée",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f28"
          },
          {
            "label": "Pédale sur tricycle ou vélo avec stabilisateurs",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f29"
          },
          {
            "label": "Reste assis et tranquille quand nécessaire",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f30"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Motricité fine et praxies",
        "fields": [
          {
            "label": "Dessine un bonhomme têtard",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f31"
          },
          {
            "label": "Copie une croix orientée selon un modèle non dessiné devant lui",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f32"
          },
          {
            "label": "Réalise un pont de trois cubes après démonstration",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f33"
          },
          {
            "label": "Enfile seul son manteau",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f34"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Langage",
        "fields": [
          {
            "label": "Langage intelligible pour une personne extérieure à la famille",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f35"
          },
          {
            "label": "Conjugue au présent",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f36"
          },
          {
            "label": "Pose la question « Pourquoi ? »",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f37"
          },
          {
            "label": "Répond à une consigne comportant deux variables",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f38"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Cognition",
        "fields": [
          {
            "label": "Crée des scénarios dans ses jeux imaginatifs",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f39"
          },
          {
            "label": "Dénombre quatre objets",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f40"
          },
          {
            "label": "Trie les objets par catégories",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f41"
          },
          {
            "label": "Termine le plus souvent une activité ou un jeu hors écran",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f42"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Socialisation",
        "fields": [
          {
            "label": "Prend son tour dans un jeu à plusieurs",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f43"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Inquiétudes signalées",
        "fields": [
          {
            "label": "Parents inquiets du développement",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f44"
          },
          {
            "label": "Professionnel de la petite enfance ou enseignant inquiet",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f45"
          },
          {
            "label": "Source des informations, exemples et compétences préservées",
            "type": "text",
            "key": "f46"
          }
        ]
      },
      {
        "title": "Préparation de l’adressage PCO",
        "fields": [
          {
            "label": "Antécédents personnels et familiaux, grossesse, naissance, environnement psychosocial",
            "type": "text",
            "key": "f47"
          }
        ],
        "hint": "Préparation de synthèse clinique. Cet export n’est pas le formulaire administratif officiel ; les documents officiels sont accessibles dans les ressources."
      },
      {
        "title": "Évaluations et interventions déjà menées ou en cours",
        "fields": [
          {
            "label": "ORL — Évaluation / bilan",
            "type": "text",
            "key": "f48"
          },
          {
            "label": "ORL — Intervention",
            "type": "text",
            "key": "f49"
          },
          {
            "label": "ORL — Année / durée / commentaire",
            "type": "text",
            "key": "f50"
          },
          {
            "label": "ORL — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f51"
          },
          {
            "label": "Ophtalmologie — Évaluation / bilan",
            "type": "text",
            "key": "f52"
          },
          {
            "label": "Ophtalmologie — Intervention",
            "type": "text",
            "key": "f53"
          },
          {
            "label": "Ophtalmologie — Année / durée / commentaire",
            "type": "text",
            "key": "f54"
          },
          {
            "label": "Ophtalmologie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f55"
          },
          {
            "label": "Orthoptie — Évaluation / bilan",
            "type": "text",
            "key": "f56"
          },
          {
            "label": "Orthoptie — Intervention",
            "type": "text",
            "key": "f57"
          },
          {
            "label": "Orthoptie — Année / durée / commentaire",
            "type": "text",
            "key": "f58"
          },
          {
            "label": "Orthoptie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f59"
          },
          {
            "label": "Orthophonie — Évaluation / bilan",
            "type": "text",
            "key": "f60"
          },
          {
            "label": "Orthophonie — Intervention",
            "type": "text",
            "key": "f61"
          },
          {
            "label": "Orthophonie — Année / durée / commentaire",
            "type": "text",
            "key": "f62"
          },
          {
            "label": "Orthophonie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f63"
          },
          {
            "label": "Kinésithérapie — Évaluation / bilan",
            "type": "text",
            "key": "f64"
          },
          {
            "label": "Kinésithérapie — Intervention",
            "type": "text",
            "key": "f65"
          },
          {
            "label": "Kinésithérapie — Année / durée / commentaire",
            "type": "text",
            "key": "f66"
          },
          {
            "label": "Kinésithérapie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f67"
          },
          {
            "label": "Ergothérapie — Évaluation / bilan",
            "type": "text",
            "key": "f68"
          },
          {
            "label": "Ergothérapie — Intervention",
            "type": "text",
            "key": "f69"
          },
          {
            "label": "Ergothérapie — Année / durée / commentaire",
            "type": "text",
            "key": "f70"
          },
          {
            "label": "Ergothérapie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f71"
          },
          {
            "label": "Psychomotricité — Évaluation / bilan",
            "type": "text",
            "key": "f72"
          },
          {
            "label": "Psychomotricité — Intervention",
            "type": "text",
            "key": "f73"
          },
          {
            "label": "Psychomotricité — Année / durée / commentaire",
            "type": "text",
            "key": "f74"
          },
          {
            "label": "Psychomotricité — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f75"
          },
          {
            "label": "Neuropsychologie — Évaluation / bilan",
            "type": "text",
            "key": "f76"
          },
          {
            "label": "Neuropsychologie — Intervention",
            "type": "text",
            "key": "f77"
          },
          {
            "label": "Neuropsychologie — Année / durée / commentaire",
            "type": "text",
            "key": "f78"
          },
          {
            "label": "Neuropsychologie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f79"
          },
          {
            "label": "Psychologie — Évaluation / bilan",
            "type": "text",
            "key": "f80"
          },
          {
            "label": "Psychologie — Intervention",
            "type": "text",
            "key": "f81"
          },
          {
            "label": "Psychologie — Année / durée / commentaire",
            "type": "text",
            "key": "f82"
          },
          {
            "label": "Psychologie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f83"
          }
        ],
        "hint": "Saisir les éléments utiles ; aucun document joint n’est envoyé par cet outil."
      },
      {
        "title": "Plateforme destinataire",
        "fields": [
          {
            "label": "Département / code postal de la plateforme",
            "type": "text",
            "key": "f84"
          },
          {
            "label": "Raison sociale / nom de la plateforme",
            "type": "text",
            "key": "f85"
          },
          {
            "label": "Téléphone professionnel",
            "type": "text",
            "key": "f86"
          },
          {
            "label": "Adresse électronique professionnelle",
            "type": "text",
            "key": "f87"
          },
          {
            "label": "Adresse postale de la plateforme",
            "type": "text",
            "key": "f88"
          }
        ],
        "hint": "Vérifier les coordonnées dans l’annuaire officiel. Aucune transmission automatique."
      },
      {
        "title": "Adressage et accord",
        "fields": [
          {
            "label": "Parcours de bilan et/ou d’interventions précoces proposé",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f89"
          },
          {
            "label": "Accord du représentant légal recueilli pour la transmission à la PCO",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f90"
          }
        ]
      },
      {
        "title": "Signes cliniques et troubles associés",
        "fields": [
          {
            "label": "Énurésie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f91"
          },
          {
            "label": "Encoprésie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f92"
          },
          {
            "label": "Troubles du sommeil",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f93"
          },
          {
            "label": "Troubles du comportement alimentaire",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f94"
          },
          {
            "label": "Signes neurologiques",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f95"
          },
          {
            "label": "Trouble de l’oralité",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f96"
          },
          {
            "label": "Anorexie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f97"
          },
          {
            "label": "Anomalie du développement staturo-pondéral",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f98"
          },
          {
            "label": "Anxiété",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f99"
          },
          {
            "label": "Précisions sur les troubles associés",
            "type": "text",
            "key": "f100"
          }
        ]
      },
      {
        "title": "Bilans souhaités dans le parcours PCO",
        "fields": [
          {
            "label": "Kinésithérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f101"
          },
          {
            "label": "Ophtalmologie / ORL",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f102"
          },
          {
            "label": "Orthophonie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f103"
          },
          {
            "label": "Orthoptie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f104"
          },
          {
            "label": "Neuropédiatrie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f105"
          },
          {
            "label": "Ergothérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f106"
          },
          {
            "label": "Psychomotricité",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f107"
          },
          {
            "label": "Psychologie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f108"
          },
          {
            "label": "Neuropsychologie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f109"
          }
        ]
      },
      {
        "title": "Compléments pour le dossier",
        "fields": [
          {
            "label": "Autres examens, bilans ou interventions souhaités",
            "type": "text",
            "key": "f110"
          },
          {
            "label": "Signes d’alerte, mode de recueil et tests ou grilles utilisés",
            "type": "text",
            "key": "f111"
          }
        ]
      },
      {
        "title": "Orientations retenues",
        "fields": [
          {
            "label": "PCO — plateforme de coordination et d’orientation",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f112"
          },
          {
            "label": "Pédopsychiatrie / neuropédiatrie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f113"
          },
          {
            "label": "CMPP / CAMSP",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f114"
          },
          {
            "label": "Réseau spécialisé TND",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f115"
          }
        ]
      },
      {
        "title": "Bilans complémentaires",
        "fields": [
          {
            "label": "Orthophonie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f116"
          },
          {
            "label": "Orthoptie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f117"
          },
          {
            "label": "Kinésithérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f118"
          },
          {
            "label": "Psychomotricité",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f119"
          },
          {
            "label": "Ergothérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f120"
          },
          {
            "label": "Évaluation (neuro)psychologique",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f121"
          }
        ]
      },
      {
        "title": "Suivi",
        "fields": [
          {
            "label": "Réévaluation dans 3 à 6 mois",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f122"
          },
          {
            "label": "Réévaluation à 1 an",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f123"
          }
        ]
      },
      {
        "title": "Décision et annotations",
        "fields": [
          {
            "label": "Conclusions du médecin, examens, interventions et délai de suivi",
            "type": "text",
            "key": "f124"
          }
        ]
      }
    ],
    "resources": [
      [
        "Livret officiel 0–6 ans",
        "https://handicap.gouv.fr/sites/handicap/files/2024-04/Brochure-reperage-precoce-TND-moins-de-7-ans-version-a-remplir.pdf"
      ],
      [
        "Annuaire PCO",
        "https://www.ameli.fr/content/adresses-et-telephones-plateformes-de-coordination-et-d-orientation-pco"
      ]
    ],
    "mode": "development",
    "threshold": 3,
    "info": "Grille de repérage pour la tranche 48–59 mois. Observer les acquisitions et les éléments transversaux. Les libellés sont reformulés pour la saisie ; se reporter au livret officiel pour la passation et les décisions d’orientation."
  },
  {
    "id": "tnd-5a",
    "name": "Repérage TND · 5 ans",
    "sub": "60–71 mois",
    "group": "Troubles du neurodéveloppement",
    "icon": "🌱",
    "kind": "pathway",
    "questions": [],
    "sections": [
      {
        "title": "Contexte clinique",
        "fields": [
          {
            "label": "Âge et classe / mode de garde",
            "type": "text",
            "key": "f0"
          },
          {
            "label": "Motif, plainte et inquiétudes principales",
            "type": "text",
            "key": "f1"
          },
          {
            "label": "Antécédents, développement précoce, contexte familial et scolaire, bilans déjà réalisés",
            "type": "text",
            "key": "f2"
          }
        ],
        "open": true
      },
      {
        "title": "Facteurs de risque périnataux",
        "fields": [
          {
            "label": "Prématurité",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f3"
          },
          {
            "label": "Poids de naissance inférieur à 1 500 g",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f4"
          },
          {
            "label": "TND chez un parent du premier degré ou dans la fratrie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f5"
          },
          {
            "label": "Exposition prénatale importante à un toxique ou médicament à risque",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f6"
          },
          {
            "label": "Affection néonatale sévère (anoxie, encéphalopathie, cardiopathie complexe, chirurgie lourde, anomalie cérébrale, microcéphalie, infection ou ictère sévère)",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f7"
          },
          {
            "label": "Syndrome génétique",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f8"
          },
          {
            "label": "Précisions sur les facteurs de risque",
            "type": "text",
            "key": "f9"
          }
        ],
        "hint": "Oui = facteur présent. Documenter les circonstances, sans déduire un diagnostic."
      },
      {
        "title": "Régression des compétences",
        "fields": [
          {
            "label": "Perte d’acquisitions antérieures",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "regression": true,
            "key": "f10"
          }
        ],
        "hint": "Une régression nécessite une évaluation médicale rapide ; le comptage de la grille ne doit pas la retarder."
      },
      {
        "title": "Sommeil et alimentation",
        "fields": [
          {
            "label": "Troubles du sommeil durables et quasi quotidiens",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f11"
          },
          {
            "label": "Sélectivité alimentaire importante (textures, morceaux, couleur…)",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f12"
          },
          {
            "label": "Prises alimentaires difficiles, très longues ou peu efficaces",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f13"
          }
        ]
      },
      {
        "title": "Profil sensoriel et sensorimoteur",
        "fields": [
          {
            "label": "Fascination pour les lumières ou objets qui tournent",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f14"
          },
          {
            "label": "Réactivité inhabituelle à des sons, textures ou odeurs",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f15"
          },
          {
            "label": "Réaction à la douleur très faible ou excessive",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f16"
          },
          {
            "label": "Recherche de stimulations sensorielles",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f17"
          }
        ]
      },
      {
        "title": "Comportements et intérêts inhabituels",
        "fields": [
          {
            "label": "Passivité inhabituelle ou faible mobilité, notamment avant 24 mois",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f18"
          },
          {
            "label": "Exploration ou usage inhabituel des objets",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f19"
          },
          {
            "label": "Mouvements répétitifs stéréotypés",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f20"
          },
          {
            "label": "Attachement intense à certains objets ou intérêts très restreints",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f21"
          }
        ]
      },
      {
        "title": "Régulation émotionnelle",
        "fields": [
          {
            "label": "Réactions intenses et répétées au changement, difficilement apaisables",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f22"
          },
          {
            "label": "Colères violentes, répétées, inconsolables",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f23"
          },
          {
            "label": "Activité motrice incontrôlable avec mise en danger",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f24"
          },
          {
            "label": "Opposition forte et fréquente aux adultes",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f25"
          }
        ]
      },
      {
        "title": "Motricité globale",
        "fields": [
          {
            "label": "Tient sur un pied au moins cinq secondes sans appui",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f26"
          },
          {
            "label": "Marche sur une ligne un pied devant l’autre",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f27"
          },
          {
            "label": "Attrape un ballon avec les mains",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f28"
          },
          {
            "label": "Reste assis et tranquille quand nécessaire",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f29"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Motricité fine et praxies",
        "fields": [
          {
            "label": "Dessine un bonhomme comportant au moins deux ovales",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f30"
          },
          {
            "label": "Copie son prénom en majuscules sur modèle",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f31"
          },
          {
            "label": "Copie un carré avec quatre coins distincts",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f32"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Langage",
        "fields": [
          {
            "label": "Fait des phrases de six mots grammaticalement correctes",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f33"
          },
          {
            "label": "Comprend dans / sur / derrière",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f34"
          },
          {
            "label": "Nomme au moins trois couleurs",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f35"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Cognition",
        "fields": [
          {
            "label": "Décrit une scène sur une image",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f36"
          },
          {
            "label": "Récite la suite des nombres jusqu’à dix",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f37"
          },
          {
            "label": "Reste attentif dix minutes sur une tâche intéressante, hors écran, sans recadrage",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f38"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Socialisation",
        "fields": [
          {
            "label": "Connaît les prénoms de plusieurs camarades",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f39"
          },
          {
            "label": "Participe aux jeux collectifs en respectant les règles",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f40"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Inquiétudes signalées",
        "fields": [
          {
            "label": "Parents inquiets du développement",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f41"
          },
          {
            "label": "Professionnel de la petite enfance ou enseignant inquiet",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f42"
          },
          {
            "label": "Source des informations, exemples et compétences préservées",
            "type": "text",
            "key": "f43"
          }
        ]
      },
      {
        "title": "Préparation de l’adressage PCO",
        "fields": [
          {
            "label": "Antécédents personnels et familiaux, grossesse, naissance, environnement psychosocial",
            "type": "text",
            "key": "f44"
          }
        ],
        "hint": "Préparation de synthèse clinique. Cet export n’est pas le formulaire administratif officiel ; les documents officiels sont accessibles dans les ressources."
      },
      {
        "title": "Évaluations et interventions déjà menées ou en cours",
        "fields": [
          {
            "label": "ORL — Évaluation / bilan",
            "type": "text",
            "key": "f45"
          },
          {
            "label": "ORL — Intervention",
            "type": "text",
            "key": "f46"
          },
          {
            "label": "ORL — Année / durée / commentaire",
            "type": "text",
            "key": "f47"
          },
          {
            "label": "ORL — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f48"
          },
          {
            "label": "Ophtalmologie — Évaluation / bilan",
            "type": "text",
            "key": "f49"
          },
          {
            "label": "Ophtalmologie — Intervention",
            "type": "text",
            "key": "f50"
          },
          {
            "label": "Ophtalmologie — Année / durée / commentaire",
            "type": "text",
            "key": "f51"
          },
          {
            "label": "Ophtalmologie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f52"
          },
          {
            "label": "Orthoptie — Évaluation / bilan",
            "type": "text",
            "key": "f53"
          },
          {
            "label": "Orthoptie — Intervention",
            "type": "text",
            "key": "f54"
          },
          {
            "label": "Orthoptie — Année / durée / commentaire",
            "type": "text",
            "key": "f55"
          },
          {
            "label": "Orthoptie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f56"
          },
          {
            "label": "Orthophonie — Évaluation / bilan",
            "type": "text",
            "key": "f57"
          },
          {
            "label": "Orthophonie — Intervention",
            "type": "text",
            "key": "f58"
          },
          {
            "label": "Orthophonie — Année / durée / commentaire",
            "type": "text",
            "key": "f59"
          },
          {
            "label": "Orthophonie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f60"
          },
          {
            "label": "Kinésithérapie — Évaluation / bilan",
            "type": "text",
            "key": "f61"
          },
          {
            "label": "Kinésithérapie — Intervention",
            "type": "text",
            "key": "f62"
          },
          {
            "label": "Kinésithérapie — Année / durée / commentaire",
            "type": "text",
            "key": "f63"
          },
          {
            "label": "Kinésithérapie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f64"
          },
          {
            "label": "Ergothérapie — Évaluation / bilan",
            "type": "text",
            "key": "f65"
          },
          {
            "label": "Ergothérapie — Intervention",
            "type": "text",
            "key": "f66"
          },
          {
            "label": "Ergothérapie — Année / durée / commentaire",
            "type": "text",
            "key": "f67"
          },
          {
            "label": "Ergothérapie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f68"
          },
          {
            "label": "Psychomotricité — Évaluation / bilan",
            "type": "text",
            "key": "f69"
          },
          {
            "label": "Psychomotricité — Intervention",
            "type": "text",
            "key": "f70"
          },
          {
            "label": "Psychomotricité — Année / durée / commentaire",
            "type": "text",
            "key": "f71"
          },
          {
            "label": "Psychomotricité — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f72"
          },
          {
            "label": "Neuropsychologie — Évaluation / bilan",
            "type": "text",
            "key": "f73"
          },
          {
            "label": "Neuropsychologie — Intervention",
            "type": "text",
            "key": "f74"
          },
          {
            "label": "Neuropsychologie — Année / durée / commentaire",
            "type": "text",
            "key": "f75"
          },
          {
            "label": "Neuropsychologie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f76"
          },
          {
            "label": "Psychologie — Évaluation / bilan",
            "type": "text",
            "key": "f77"
          },
          {
            "label": "Psychologie — Intervention",
            "type": "text",
            "key": "f78"
          },
          {
            "label": "Psychologie — Année / durée / commentaire",
            "type": "text",
            "key": "f79"
          },
          {
            "label": "Psychologie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f80"
          }
        ],
        "hint": "Saisir les éléments utiles ; aucun document joint n’est envoyé par cet outil."
      },
      {
        "title": "Plateforme destinataire",
        "fields": [
          {
            "label": "Département / code postal de la plateforme",
            "type": "text",
            "key": "f81"
          },
          {
            "label": "Raison sociale / nom de la plateforme",
            "type": "text",
            "key": "f82"
          },
          {
            "label": "Téléphone professionnel",
            "type": "text",
            "key": "f83"
          },
          {
            "label": "Adresse électronique professionnelle",
            "type": "text",
            "key": "f84"
          },
          {
            "label": "Adresse postale de la plateforme",
            "type": "text",
            "key": "f85"
          }
        ],
        "hint": "Vérifier les coordonnées dans l’annuaire officiel. Aucune transmission automatique."
      },
      {
        "title": "Adressage et accord",
        "fields": [
          {
            "label": "Parcours de bilan et/ou d’interventions précoces proposé",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f86"
          },
          {
            "label": "Accord du représentant légal recueilli pour la transmission à la PCO",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f87"
          }
        ]
      },
      {
        "title": "Signes cliniques et troubles associés",
        "fields": [
          {
            "label": "Énurésie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f88"
          },
          {
            "label": "Encoprésie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f89"
          },
          {
            "label": "Troubles du sommeil",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f90"
          },
          {
            "label": "Troubles du comportement alimentaire",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f91"
          },
          {
            "label": "Signes neurologiques",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f92"
          },
          {
            "label": "Trouble de l’oralité",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f93"
          },
          {
            "label": "Anorexie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f94"
          },
          {
            "label": "Anomalie du développement staturo-pondéral",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f95"
          },
          {
            "label": "Anxiété",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f96"
          },
          {
            "label": "Précisions sur les troubles associés",
            "type": "text",
            "key": "f97"
          }
        ]
      },
      {
        "title": "Bilans souhaités dans le parcours PCO",
        "fields": [
          {
            "label": "Kinésithérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f98"
          },
          {
            "label": "Ophtalmologie / ORL",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f99"
          },
          {
            "label": "Orthophonie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f100"
          },
          {
            "label": "Orthoptie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f101"
          },
          {
            "label": "Neuropédiatrie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f102"
          },
          {
            "label": "Ergothérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f103"
          },
          {
            "label": "Psychomotricité",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f104"
          },
          {
            "label": "Psychologie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f105"
          },
          {
            "label": "Neuropsychologie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f106"
          }
        ]
      },
      {
        "title": "Compléments pour le dossier",
        "fields": [
          {
            "label": "Autres examens, bilans ou interventions souhaités",
            "type": "text",
            "key": "f107"
          },
          {
            "label": "Signes d’alerte, mode de recueil et tests ou grilles utilisés",
            "type": "text",
            "key": "f108"
          }
        ]
      },
      {
        "title": "Orientations retenues",
        "fields": [
          {
            "label": "PCO — plateforme de coordination et d’orientation",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f109"
          },
          {
            "label": "Pédopsychiatrie / neuropédiatrie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f110"
          },
          {
            "label": "CMPP / CAMSP",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f111"
          },
          {
            "label": "Réseau spécialisé TND",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f112"
          }
        ]
      },
      {
        "title": "Bilans complémentaires",
        "fields": [
          {
            "label": "Orthophonie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f113"
          },
          {
            "label": "Orthoptie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f114"
          },
          {
            "label": "Kinésithérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f115"
          },
          {
            "label": "Psychomotricité",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f116"
          },
          {
            "label": "Ergothérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f117"
          },
          {
            "label": "Évaluation (neuro)psychologique",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f118"
          }
        ]
      },
      {
        "title": "Suivi",
        "fields": [
          {
            "label": "Réévaluation dans 3 à 6 mois",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f119"
          },
          {
            "label": "Réévaluation à 1 an",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f120"
          }
        ]
      },
      {
        "title": "Décision et annotations",
        "fields": [
          {
            "label": "Conclusions du médecin, examens, interventions et délai de suivi",
            "type": "text",
            "key": "f121"
          }
        ]
      }
    ],
    "resources": [
      [
        "Livret officiel 0–6 ans",
        "https://handicap.gouv.fr/sites/handicap/files/2024-04/Brochure-reperage-precoce-TND-moins-de-7-ans-version-a-remplir.pdf"
      ],
      [
        "Annuaire PCO",
        "https://www.ameli.fr/content/adresses-et-telephones-plateformes-de-coordination-et-d-orientation-pco"
      ]
    ],
    "mode": "development",
    "threshold": 3,
    "info": "Grille de repérage pour la tranche 60–71 mois. Observer les acquisitions et les éléments transversaux. Les libellés sont reformulés pour la saisie ; se reporter au livret officiel pour la passation et les décisions d’orientation."
  },
  {
    "id": "tnd-6a",
    "name": "Repérage TND · 6 ans",
    "sub": "72–83 mois",
    "group": "Troubles du neurodéveloppement",
    "icon": "🌱",
    "kind": "pathway",
    "questions": [],
    "sections": [
      {
        "title": "Contexte clinique",
        "fields": [
          {
            "label": "Âge et classe / mode de garde",
            "type": "text",
            "key": "f0"
          },
          {
            "label": "Motif, plainte et inquiétudes principales",
            "type": "text",
            "key": "f1"
          },
          {
            "label": "Antécédents, développement précoce, contexte familial et scolaire, bilans déjà réalisés",
            "type": "text",
            "key": "f2"
          }
        ],
        "open": true
      },
      {
        "title": "Facteurs de risque périnataux",
        "fields": [
          {
            "label": "Prématurité",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f3"
          },
          {
            "label": "Poids de naissance inférieur à 1 500 g",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f4"
          },
          {
            "label": "TND chez un parent du premier degré ou dans la fratrie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f5"
          },
          {
            "label": "Exposition prénatale importante à un toxique ou médicament à risque",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f6"
          },
          {
            "label": "Affection néonatale sévère (anoxie, encéphalopathie, cardiopathie complexe, chirurgie lourde, anomalie cérébrale, microcéphalie, infection ou ictère sévère)",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f7"
          },
          {
            "label": "Syndrome génétique",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f8"
          },
          {
            "label": "Précisions sur les facteurs de risque",
            "type": "text",
            "key": "f9"
          }
        ],
        "hint": "Oui = facteur présent. Documenter les circonstances, sans déduire un diagnostic."
      },
      {
        "title": "Régression des compétences",
        "fields": [
          {
            "label": "Perte d’acquisitions antérieures",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "regression": true,
            "key": "f10"
          }
        ],
        "hint": "Une régression nécessite une évaluation médicale rapide ; le comptage de la grille ne doit pas la retarder."
      },
      {
        "title": "Sommeil et alimentation",
        "fields": [
          {
            "label": "Troubles du sommeil durables et quasi quotidiens",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f11"
          },
          {
            "label": "Sélectivité alimentaire importante (textures, morceaux, couleur…)",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f12"
          },
          {
            "label": "Prises alimentaires difficiles, très longues ou peu efficaces",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f13"
          }
        ]
      },
      {
        "title": "Profil sensoriel et sensorimoteur",
        "fields": [
          {
            "label": "Fascination pour les lumières ou objets qui tournent",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f14"
          },
          {
            "label": "Réactivité inhabituelle à des sons, textures ou odeurs",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f15"
          },
          {
            "label": "Réaction à la douleur très faible ou excessive",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f16"
          },
          {
            "label": "Recherche de stimulations sensorielles",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f17"
          }
        ]
      },
      {
        "title": "Comportements et intérêts inhabituels",
        "fields": [
          {
            "label": "Passivité inhabituelle ou faible mobilité, notamment avant 24 mois",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f18"
          },
          {
            "label": "Exploration ou usage inhabituel des objets",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f19"
          },
          {
            "label": "Mouvements répétitifs stéréotypés",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f20"
          },
          {
            "label": "Attachement intense à certains objets ou intérêts très restreints",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f21"
          }
        ]
      },
      {
        "title": "Régulation émotionnelle",
        "fields": [
          {
            "label": "Réactions intenses et répétées au changement, difficilement apaisables",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f22"
          },
          {
            "label": "Colères violentes, répétées, inconsolables",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f23"
          },
          {
            "label": "Activité motrice incontrôlable avec mise en danger",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f24"
          },
          {
            "label": "Opposition forte et fréquente aux adultes",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f25"
          }
        ]
      },
      {
        "title": "Motricité globale",
        "fields": [
          {
            "label": "Saute à cloche-pied trois à cinq fois",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f26"
          },
          {
            "label": "Court de façon fluide et s’arrête net",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f27"
          },
          {
            "label": "Marche sur les pointes ou les talons",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f28"
          },
          {
            "label": "Reste assis et tranquille quand nécessaire",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f29"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Motricité fine et praxies",
        "fields": [
          {
            "label": "Ferme seul son vêtement avec boutons ou fermeture éclair",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f30"
          },
          {
            "label": "Touche chaque doigt avec le pouce de la même main après démonstration",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f31"
          },
          {
            "label": "Copie un triangle",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f32"
          },
          {
            "label": "Se lave et s’essuie les mains sans aide",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f33"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Langage",
        "fields": [
          {
            "label": "Raconte une histoire structurée avec début, milieu et fin",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f34"
          },
          {
            "label": "Respecte le tour de parole dans le dialogue",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f35"
          },
          {
            "label": "Construit des phrases grammaticalement correctes",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f36"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Cognition",
        "fields": [
          {
            "label": "Dénombre dix objets",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f37"
          },
          {
            "label": "Répète trois chiffres non sériés dans l’ordre (ex. 5, 2, 9)",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f38"
          },
          {
            "label": "Reconnaît les chiffres de 0 à 9",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f39"
          },
          {
            "label": "Reste attentif dix minutes sur une activité intéressante sans recadrage",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f40"
          },
          {
            "label": "Réalise seul une routine comportant plusieurs tâches",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f41"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Socialisation",
        "fields": [
          {
            "label": "Reconnaît l’émotion d’autrui et adapte sa réaction",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f42"
          },
          {
            "label": "Se fait des amis et les garde",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f43"
          },
          {
            "label": "Présente des intérêts diversifiés pour son âge",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "milestone": true,
            "key": "f44"
          }
        ],
        "domain": true,
        "open": true,
        "hint": "Oui = compétence acquise ; Non = acquisition non observée ; Non évalué reste distinct de Non."
      },
      {
        "title": "Inquiétudes signalées",
        "fields": [
          {
            "label": "Parents inquiets du développement",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f45"
          },
          {
            "label": "Professionnel de la petite enfance ou enseignant inquiet",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f46"
          },
          {
            "label": "Source des informations, exemples et compétences préservées",
            "type": "text",
            "key": "f47"
          }
        ]
      },
      {
        "title": "Préparation de l’adressage PCO",
        "fields": [
          {
            "label": "Antécédents personnels et familiaux, grossesse, naissance, environnement psychosocial",
            "type": "text",
            "key": "f48"
          }
        ],
        "hint": "Préparation de synthèse clinique. Cet export n’est pas le formulaire administratif officiel ; les documents officiels sont accessibles dans les ressources."
      },
      {
        "title": "Évaluations et interventions déjà menées ou en cours",
        "fields": [
          {
            "label": "ORL — Évaluation / bilan",
            "type": "text",
            "key": "f49"
          },
          {
            "label": "ORL — Intervention",
            "type": "text",
            "key": "f50"
          },
          {
            "label": "ORL — Année / durée / commentaire",
            "type": "text",
            "key": "f51"
          },
          {
            "label": "ORL — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f52"
          },
          {
            "label": "Ophtalmologie — Évaluation / bilan",
            "type": "text",
            "key": "f53"
          },
          {
            "label": "Ophtalmologie — Intervention",
            "type": "text",
            "key": "f54"
          },
          {
            "label": "Ophtalmologie — Année / durée / commentaire",
            "type": "text",
            "key": "f55"
          },
          {
            "label": "Ophtalmologie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f56"
          },
          {
            "label": "Orthoptie — Évaluation / bilan",
            "type": "text",
            "key": "f57"
          },
          {
            "label": "Orthoptie — Intervention",
            "type": "text",
            "key": "f58"
          },
          {
            "label": "Orthoptie — Année / durée / commentaire",
            "type": "text",
            "key": "f59"
          },
          {
            "label": "Orthoptie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f60"
          },
          {
            "label": "Orthophonie — Évaluation / bilan",
            "type": "text",
            "key": "f61"
          },
          {
            "label": "Orthophonie — Intervention",
            "type": "text",
            "key": "f62"
          },
          {
            "label": "Orthophonie — Année / durée / commentaire",
            "type": "text",
            "key": "f63"
          },
          {
            "label": "Orthophonie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f64"
          },
          {
            "label": "Kinésithérapie — Évaluation / bilan",
            "type": "text",
            "key": "f65"
          },
          {
            "label": "Kinésithérapie — Intervention",
            "type": "text",
            "key": "f66"
          },
          {
            "label": "Kinésithérapie — Année / durée / commentaire",
            "type": "text",
            "key": "f67"
          },
          {
            "label": "Kinésithérapie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f68"
          },
          {
            "label": "Ergothérapie — Évaluation / bilan",
            "type": "text",
            "key": "f69"
          },
          {
            "label": "Ergothérapie — Intervention",
            "type": "text",
            "key": "f70"
          },
          {
            "label": "Ergothérapie — Année / durée / commentaire",
            "type": "text",
            "key": "f71"
          },
          {
            "label": "Ergothérapie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f72"
          },
          {
            "label": "Psychomotricité — Évaluation / bilan",
            "type": "text",
            "key": "f73"
          },
          {
            "label": "Psychomotricité — Intervention",
            "type": "text",
            "key": "f74"
          },
          {
            "label": "Psychomotricité — Année / durée / commentaire",
            "type": "text",
            "key": "f75"
          },
          {
            "label": "Psychomotricité — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f76"
          },
          {
            "label": "Neuropsychologie — Évaluation / bilan",
            "type": "text",
            "key": "f77"
          },
          {
            "label": "Neuropsychologie — Intervention",
            "type": "text",
            "key": "f78"
          },
          {
            "label": "Neuropsychologie — Année / durée / commentaire",
            "type": "text",
            "key": "f79"
          },
          {
            "label": "Neuropsychologie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f80"
          },
          {
            "label": "Psychologie — Évaluation / bilan",
            "type": "text",
            "key": "f81"
          },
          {
            "label": "Psychologie — Intervention",
            "type": "text",
            "key": "f82"
          },
          {
            "label": "Psychologie — Année / durée / commentaire",
            "type": "text",
            "key": "f83"
          },
          {
            "label": "Psychologie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f84"
          }
        ],
        "hint": "Saisir les éléments utiles ; aucun document joint n’est envoyé par cet outil."
      },
      {
        "title": "Plateforme destinataire",
        "fields": [
          {
            "label": "Département / code postal de la plateforme",
            "type": "text",
            "key": "f85"
          },
          {
            "label": "Raison sociale / nom de la plateforme",
            "type": "text",
            "key": "f86"
          },
          {
            "label": "Téléphone professionnel",
            "type": "text",
            "key": "f87"
          },
          {
            "label": "Adresse électronique professionnelle",
            "type": "text",
            "key": "f88"
          },
          {
            "label": "Adresse postale de la plateforme",
            "type": "text",
            "key": "f89"
          }
        ],
        "hint": "Vérifier les coordonnées dans l’annuaire officiel. Aucune transmission automatique."
      },
      {
        "title": "Adressage et accord",
        "fields": [
          {
            "label": "Parcours de bilan et/ou d’interventions précoces proposé",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f90"
          },
          {
            "label": "Accord du représentant légal recueilli pour la transmission à la PCO",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f91"
          }
        ]
      },
      {
        "title": "Signes cliniques et troubles associés",
        "fields": [
          {
            "label": "Énurésie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f92"
          },
          {
            "label": "Encoprésie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f93"
          },
          {
            "label": "Troubles du sommeil",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f94"
          },
          {
            "label": "Troubles du comportement alimentaire",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f95"
          },
          {
            "label": "Signes neurologiques",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f96"
          },
          {
            "label": "Trouble de l’oralité",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f97"
          },
          {
            "label": "Anorexie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f98"
          },
          {
            "label": "Anomalie du développement staturo-pondéral",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f99"
          },
          {
            "label": "Anxiété",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f100"
          },
          {
            "label": "Précisions sur les troubles associés",
            "type": "text",
            "key": "f101"
          }
        ]
      },
      {
        "title": "Bilans souhaités dans le parcours PCO",
        "fields": [
          {
            "label": "Kinésithérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f102"
          },
          {
            "label": "Ophtalmologie / ORL",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f103"
          },
          {
            "label": "Orthophonie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f104"
          },
          {
            "label": "Orthoptie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f105"
          },
          {
            "label": "Neuropédiatrie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f106"
          },
          {
            "label": "Ergothérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f107"
          },
          {
            "label": "Psychomotricité",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f108"
          },
          {
            "label": "Psychologie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f109"
          },
          {
            "label": "Neuropsychologie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f110"
          }
        ]
      },
      {
        "title": "Compléments pour le dossier",
        "fields": [
          {
            "label": "Autres examens, bilans ou interventions souhaités",
            "type": "text",
            "key": "f111"
          },
          {
            "label": "Signes d’alerte, mode de recueil et tests ou grilles utilisés",
            "type": "text",
            "key": "f112"
          }
        ]
      },
      {
        "title": "Orientations retenues",
        "fields": [
          {
            "label": "PCO — plateforme de coordination et d’orientation",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f113"
          },
          {
            "label": "Pédopsychiatrie / neuropédiatrie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f114"
          },
          {
            "label": "CMPP / CAMSP",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f115"
          },
          {
            "label": "Réseau spécialisé TND",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f116"
          }
        ]
      },
      {
        "title": "Bilans complémentaires",
        "fields": [
          {
            "label": "Orthophonie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f117"
          },
          {
            "label": "Orthoptie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f118"
          },
          {
            "label": "Kinésithérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f119"
          },
          {
            "label": "Psychomotricité",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f120"
          },
          {
            "label": "Ergothérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f121"
          },
          {
            "label": "Évaluation (neuro)psychologique",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f122"
          }
        ]
      },
      {
        "title": "Suivi",
        "fields": [
          {
            "label": "Réévaluation dans 3 à 6 mois",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f123"
          },
          {
            "label": "Réévaluation à 1 an",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f124"
          }
        ]
      },
      {
        "title": "Décision et annotations",
        "fields": [
          {
            "label": "Conclusions du médecin, examens, interventions et délai de suivi",
            "type": "text",
            "key": "f125"
          }
        ]
      }
    ],
    "resources": [
      [
        "Livret officiel 0–6 ans",
        "https://handicap.gouv.fr/sites/handicap/files/2024-04/Brochure-reperage-precoce-TND-moins-de-7-ans-version-a-remplir.pdf"
      ],
      [
        "Annuaire PCO",
        "https://www.ameli.fr/content/adresses-et-telephones-plateformes-de-coordination-et-d-orientation-pco"
      ]
    ],
    "mode": "development",
    "threshold": 3,
    "info": "Grille de repérage pour la tranche 72–83 mois. Observer les acquisitions et les éléments transversaux. Les libellés sont reformulés pour la saisie ; se reporter au livret officiel pour la passation et les décisions d’orientation."
  },
  {
    "id": "tnd-712",
    "name": "Repérage TND · 7–12 ans",
    "sub": "Volet médecin et préparation PCO",
    "group": "Troubles du neurodéveloppement",
    "icon": "🌱",
    "kind": "pathway",
    "questions": [],
    "sections": [
      {
        "title": "Contexte clinique",
        "fields": [
          {
            "label": "Âge et classe / mode de garde",
            "type": "text",
            "key": "f0"
          },
          {
            "label": "Motif, plainte et inquiétudes principales",
            "type": "text",
            "key": "f1"
          },
          {
            "label": "Antécédents, développement précoce, contexte familial et scolaire, bilans déjà réalisés",
            "type": "text",
            "key": "f2"
          }
        ],
        "open": true
      },
      {
        "title": "Facteurs de risque et développement précoce",
        "fields": [
          {
            "label": "Facteurs de risque périnataux",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f3"
          },
          {
            "label": "Antécédent familial de TND (parents ou fratrie)",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f4"
          },
          {
            "label": "Affection chronique à fort retentissement ou antécédent sévère",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f5"
          },
          {
            "label": "Marche acquise après 17 mois",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f6"
          },
          {
            "label": "Phrases élémentaires sujet-verbe-complément après 3 ans",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f7"
          },
          {
            "label": "Particularités des interactions précoces",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f8"
          },
          {
            "label": "Autre décalage précoce d’acquisition ou d’apprentissage",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f9"
          },
          {
            "label": "Inquiétude parentale antérieure à la démarche actuelle",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f10"
          }
        ]
      },
      {
        "title": "Apprentissages",
        "fields": [
          {
            "label": "Difficultés dans les prérequis en grande section",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f11"
          },
          {
            "label": "Difficultés dès le CP en lecture, écriture ou numération",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f12"
          }
        ]
      },
      {
        "title": "Autres éléments",
        "fields": [
          {
            "label": "Anomalie de la vision",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f13"
          },
          {
            "label": "Anomalie de l’audition",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f14"
          },
          {
            "label": "Énurésie ou encoprésie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f15"
          },
          {
            "label": "Autre diagnostic associé à communiquer",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f16"
          },
          {
            "label": "Souffrance psychique de l’enfant ou de la famille",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f17"
          },
          {
            "label": "Facteurs d’environnement utiles à communiquer (conditions de vie, langue, écrans…)",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f18"
          }
        ]
      },
      {
        "title": "Observation libre",
        "fields": [
          {
            "label": "Examen, tests pratiqués, compétences préservées, homogénéité ou dissociations du développement",
            "type": "text",
            "key": "f19"
          }
        ]
      },
      {
        "title": "Inquiétudes signalées",
        "fields": [
          {
            "label": "Parents inquiets du développement",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f20"
          },
          {
            "label": "Professionnel de la petite enfance ou enseignant inquiet",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f21"
          },
          {
            "label": "Source des informations, exemples et compétences préservées",
            "type": "text",
            "key": "f22"
          }
        ]
      },
      {
        "title": "Questionnaires enseignant et famille",
        "fields": [
          {
            "label": "Analyse du questionnaire enseignant",
            "type": "text",
            "key": "f23"
          },
          {
            "label": "Analyse du questionnaire famille",
            "type": "text",
            "key": "f24"
          },
          {
            "label": "Marqueurs d’apprentissage et de fonctionnement général ; retentissement sur la qualité de vie",
            "type": "text",
            "key": "f25"
          }
        ],
        "hint": "Reporter les résultats des volets officiels (échelle 1–4). Les valeurs 1 ou 2 appellent une attention particulière. Utiliser les documents officiels, accessibles ci-dessous, pour les ancrages et le détail des items."
      },
      {
        "title": "Préparation de l’adressage PCO",
        "fields": [
          {
            "label": "Antécédents personnels et familiaux, grossesse, naissance, environnement psychosocial",
            "type": "text",
            "key": "f26"
          }
        ],
        "hint": "Préparation de synthèse clinique. Cet export n’est pas le formulaire administratif officiel ; les documents officiels sont accessibles dans les ressources."
      },
      {
        "title": "Évaluations et interventions déjà menées ou en cours",
        "fields": [
          {
            "label": "Orthophonie — Évaluation / bilan",
            "type": "text",
            "key": "f27"
          },
          {
            "label": "Orthophonie — Intervention",
            "type": "text",
            "key": "f28"
          },
          {
            "label": "Orthophonie — Année / durée / commentaire",
            "type": "text",
            "key": "f29"
          },
          {
            "label": "Orthophonie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f30"
          },
          {
            "label": "Orthoptie — Évaluation / bilan",
            "type": "text",
            "key": "f31"
          },
          {
            "label": "Orthoptie — Intervention",
            "type": "text",
            "key": "f32"
          },
          {
            "label": "Orthoptie — Année / durée / commentaire",
            "type": "text",
            "key": "f33"
          },
          {
            "label": "Orthoptie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f34"
          },
          {
            "label": "Kinésithérapie — Évaluation / bilan",
            "type": "text",
            "key": "f35"
          },
          {
            "label": "Kinésithérapie — Intervention",
            "type": "text",
            "key": "f36"
          },
          {
            "label": "Kinésithérapie — Année / durée / commentaire",
            "type": "text",
            "key": "f37"
          },
          {
            "label": "Kinésithérapie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f38"
          },
          {
            "label": "Ergothérapie — Évaluation / bilan",
            "type": "text",
            "key": "f39"
          },
          {
            "label": "Ergothérapie — Intervention",
            "type": "text",
            "key": "f40"
          },
          {
            "label": "Ergothérapie — Année / durée / commentaire",
            "type": "text",
            "key": "f41"
          },
          {
            "label": "Ergothérapie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f42"
          },
          {
            "label": "Psychomotricité — Évaluation / bilan",
            "type": "text",
            "key": "f43"
          },
          {
            "label": "Psychomotricité — Intervention",
            "type": "text",
            "key": "f44"
          },
          {
            "label": "Psychomotricité — Année / durée / commentaire",
            "type": "text",
            "key": "f45"
          },
          {
            "label": "Psychomotricité — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f46"
          },
          {
            "label": "(Neuro)psychologie — Évaluation / bilan",
            "type": "text",
            "key": "f47"
          },
          {
            "label": "(Neuro)psychologie — Intervention",
            "type": "text",
            "key": "f48"
          },
          {
            "label": "(Neuro)psychologie — Année / durée / commentaire",
            "type": "text",
            "key": "f49"
          },
          {
            "label": "(Neuro)psychologie — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f50"
          },
          {
            "label": "Autres — Évaluation / bilan",
            "type": "text",
            "key": "f51"
          },
          {
            "label": "Autres — Intervention",
            "type": "text",
            "key": "f52"
          },
          {
            "label": "Autres — Année / durée / commentaire",
            "type": "text",
            "key": "f53"
          },
          {
            "label": "Autres — Conclusions / compte rendu joint",
            "type": "text",
            "key": "f54"
          }
        ],
        "hint": "Saisir les éléments utiles ; aucun document joint n’est envoyé par cet outil."
      },
      {
        "title": "Plateforme destinataire",
        "fields": [
          {
            "label": "Département / code postal de la plateforme",
            "type": "text",
            "key": "f55"
          },
          {
            "label": "Raison sociale / nom de la plateforme",
            "type": "text",
            "key": "f56"
          },
          {
            "label": "Téléphone professionnel",
            "type": "text",
            "key": "f57"
          },
          {
            "label": "Adresse électronique professionnelle",
            "type": "text",
            "key": "f58"
          },
          {
            "label": "Adresse postale de la plateforme",
            "type": "text",
            "key": "f59"
          }
        ],
        "hint": "Vérifier les coordonnées dans l’annuaire officiel. Aucune transmission automatique."
      },
      {
        "title": "Éléments retenus pour l’adressage",
        "fields": [
          {
            "label": "Facteurs de risque ou antécédents exposant aux TND",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f60"
          },
          {
            "label": "Difficultés multiples",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f61"
          },
          {
            "label": "Gêne fonctionnelle sévère",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f62"
          },
          {
            "label": "Décalage scolaire important",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f63"
          },
          {
            "label": "Retentissement important sur la qualité de vie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f64"
          },
          {
            "label": "Retentissement important sur la vie sociale",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f65"
          },
          {
            "label": "Résistance à une prise en charge de première intention",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f66"
          }
        ]
      },
      {
        "title": "Hypothèses à explorer",
        "fields": [
          {
            "label": "Tableau complexe sans trouble précis identifié",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f67"
          },
          {
            "label": "TDAH",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f68"
          },
          {
            "label": "Trouble spécifique des apprentissages",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f69"
          },
          {
            "label": "Trouble du développement intellectuel",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f70"
          },
          {
            "label": "Trouble du langage oral",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f71"
          },
          {
            "label": "Trouble de la coordination",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f72"
          },
          {
            "label": "TSA",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f73"
          }
        ]
      },
      {
        "title": "Démarches",
        "fields": [
          {
            "label": "Démarche MDPH envisagée ou en cours",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f74"
          }
        ]
      },
      {
        "title": "Bilans souhaités dans le parcours PCO",
        "fields": [
          {
            "label": "Kinésithérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f75"
          },
          {
            "label": "Ophtalmologie / ORL",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f76"
          },
          {
            "label": "Orthophonie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f77"
          },
          {
            "label": "Orthoptie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f78"
          },
          {
            "label": "Neuropédiatrie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f79"
          },
          {
            "label": "Ergothérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f80"
          },
          {
            "label": "Psychomotricité",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f81"
          },
          {
            "label": "Psychologie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f82"
          },
          {
            "label": "Neuropsychologie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f83"
          }
        ]
      },
      {
        "title": "Compléments pour le dossier",
        "fields": [
          {
            "label": "Autres examens, bilans ou interventions souhaités",
            "type": "text",
            "key": "f84"
          },
          {
            "label": "Signes d’alerte, mode de recueil et tests ou grilles utilisés",
            "type": "text",
            "key": "f85"
          }
        ]
      },
      {
        "title": "Orientations retenues",
        "fields": [
          {
            "label": "PCO — plateforme de coordination et d’orientation",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f86"
          },
          {
            "label": "Pédopsychiatrie / neuropédiatrie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f87"
          },
          {
            "label": "CMPP / CAMSP",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f88"
          },
          {
            "label": "Réseau spécialisé TND",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f89"
          }
        ]
      },
      {
        "title": "Bilans complémentaires",
        "fields": [
          {
            "label": "Orthophonie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f90"
          },
          {
            "label": "Orthoptie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f91"
          },
          {
            "label": "Kinésithérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f92"
          },
          {
            "label": "Psychomotricité",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f93"
          },
          {
            "label": "Ergothérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f94"
          },
          {
            "label": "Évaluation (neuro)psychologique",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f95"
          }
        ]
      },
      {
        "title": "Suivi",
        "fields": [
          {
            "label": "Réévaluation dans 3 à 6 mois",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f96"
          },
          {
            "label": "Réévaluation à 1 an",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f97"
          }
        ]
      },
      {
        "title": "Décision et annotations",
        "fields": [
          {
            "label": "Conclusions du médecin, examens, interventions et délai de suivi",
            "type": "text",
            "key": "f98"
          }
        ]
      }
    ],
    "resources": [
      [
        "Livret officiel 7–12 ans",
        "https://handicap.gouv.fr/sites/handicap/files/2025-06/Livret-reperage-TND-7-12-ans.pdf"
      ],
      [
        "Volet famille",
        "https://handicap.gouv.fr/sites/handicap/files/2022-04/Volet%20Famille%207-12%20ans_01.pdf"
      ],
      [
        "Volet enseignant",
        "https://handicap.gouv.fr/sites/handicap/files/2022-04/Volet%20Enseignant%207-12%20ans_01.pdf"
      ],
      [
        "Formulaire officiel d’adressage",
        "https://handicap.gouv.fr/sites/handicap/files/2022-04/Formulaire%20d_adressage%20%207-12%20ans_01.pdf"
      ],
      [
        "Annuaire PCO",
        "https://www.ameli.fr/content/adresses-et-telephones-plateformes-de-coordination-et-d-orientation-pco"
      ]
    ],
    "mode": "observation",
    "info": "Recueil clinique, analyse des questionnaires famille/enseignant, bilans antérieurs et préparation d’adressage. Aucun score diagnostique automatique. Les questionnaires famille et enseignant originaux restent accessibles par les liens des ressources."
  },
  {
    "id": "tnd-tdah",
    "name": "TDAH · évaluation complète",
    "sub": "Inattention, hyperactivité et contexte",
    "group": "Troubles du neurodéveloppement",
    "icon": "🌱",
    "kind": "pathway",
    "questions": [],
    "sections": [
      {
        "title": "Contexte clinique",
        "fields": [
          {
            "label": "Âge et classe / mode de garde",
            "type": "text",
            "key": "f0"
          },
          {
            "label": "Motif, plainte et inquiétudes principales",
            "type": "text",
            "key": "f1"
          },
          {
            "label": "Antécédents, développement précoce, contexte familial et scolaire, bilans déjà réalisés",
            "type": "text",
            "key": "f2"
          }
        ],
        "open": true
      },
      {
        "title": "Facteurs de risque périnataux",
        "fields": [
          {
            "label": "Prématurité",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f3"
          },
          {
            "label": "Poids de naissance inférieur à 1 500 g",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f4"
          },
          {
            "label": "TND chez un parent du premier degré ou dans la fratrie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f5"
          },
          {
            "label": "Exposition prénatale importante à un toxique ou médicament à risque",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f6"
          },
          {
            "label": "Affection néonatale sévère (anoxie, encéphalopathie, cardiopathie complexe, chirurgie lourde, anomalie cérébrale, microcéphalie, infection ou ictère sévère)",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f7"
          },
          {
            "label": "Syndrome génétique",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f8"
          },
          {
            "label": "Précisions sur les facteurs de risque",
            "type": "text",
            "key": "f9"
          }
        ],
        "hint": "Oui = facteur présent. Documenter les circonstances, sans déduire un diagnostic."
      },
      {
        "title": "Régression des compétences",
        "fields": [
          {
            "label": "Perte d’acquisitions antérieures",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "regression": true,
            "key": "f10"
          }
        ],
        "hint": "Une régression nécessite une évaluation médicale rapide ; le comptage de la grille ne doit pas la retarder."
      },
      {
        "title": "Profil sensoriel et sensorimoteur",
        "fields": [
          {
            "label": "Fascination pour les lumières ou objets qui tournent",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f11"
          },
          {
            "label": "Réactivité inhabituelle à des sons, textures ou odeurs",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f12"
          },
          {
            "label": "Réaction à la douleur très faible ou excessive",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f13"
          },
          {
            "label": "Recherche de stimulations sensorielles",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f14"
          }
        ]
      },
      {
        "title": "Comportements et intérêts inhabituels",
        "fields": [
          {
            "label": "Passivité inhabituelle ou faible mobilité, notamment avant 24 mois",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f15"
          },
          {
            "label": "Exploration ou usage inhabituel des objets",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f16"
          },
          {
            "label": "Mouvements répétitifs stéréotypés",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f17"
          },
          {
            "label": "Attachement intense à certains objets ou intérêts très restreints",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f18"
          }
        ]
      },
      {
        "title": "Régulation émotionnelle",
        "fields": [
          {
            "label": "Réactions intenses et répétées au changement, difficilement apaisables",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f19"
          },
          {
            "label": "Colères violentes, répétées, inconsolables",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f20"
          },
          {
            "label": "Activité motrice incontrôlable avec mise en danger",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f21"
          },
          {
            "label": "Opposition forte et fréquente aux adultes",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f22"
          }
        ]
      },
      {
        "title": "Inattention",
        "fields": [
          {
            "label": "Erreurs d’inattention ou détails négligés",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f23"
          },
          {
            "label": "Attention difficile à maintenir dans une tâche ou un jeu",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f24"
          },
          {
            "label": "Semble ne pas écouter lors d’un échange direct",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f25"
          },
          {
            "label": "Consignes ou tâches non menées à terme",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f26"
          },
          {
            "label": "Difficultés d’organisation du travail et des activités",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f27"
          },
          {
            "label": "Évitement des efforts mentaux prolongés",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f28"
          },
          {
            "label": "Perte fréquente du matériel nécessaire",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f29"
          },
          {
            "label": "Distractibilité par l’environnement",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f30"
          },
          {
            "label": "Oublis fréquents dans la vie quotidienne",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f31"
          }
        ],
        "countYes": true,
        "open": true
      },
      {
        "title": "Hyperactivité / impulsivité",
        "fields": [
          {
            "label": "Agitation des mains ou pieds en position assise",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f32"
          },
          {
            "label": "Se lève quand la situation demande de rester assis",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f33"
          },
          {
            "label": "Court ou grimpe hors contexte ; agitation intérieure à l’adolescence",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f34"
          },
          {
            "label": "Difficulté à jouer ou s’occuper calmement",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f35"
          },
          {
            "label": "Activité motrice quasi permanente",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f36"
          },
          {
            "label": "Parle excessivement",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f37"
          },
          {
            "label": "Répond avant la fin de la question",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f38"
          },
          {
            "label": "Attend difficilement son tour",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f39"
          },
          {
            "label": "Interrompt ou s’impose dans les activités d’autrui",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f40"
          }
        ],
        "countYes": true,
        "open": true
      },
      {
        "title": "Durée, contexte et diagnostic différentiel",
        "fields": [
          {
            "label": "Symptômes persistants depuis au moins six mois",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f41"
          },
          {
            "label": "Plusieurs symptômes présents avant 12 ans",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f42"
          },
          {
            "label": "Symptômes dans au moins deux contextes",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f43"
          },
          {
            "label": "Retentissement significatif scolaire, social ou familial",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f44"
          },
          {
            "label": "Une autre affection ou un autre trouble mental n’explique pas mieux le tableau",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f45"
          },
          {
            "label": "Sources : enfant, parents, enseignant ; contextes et exemples",
            "type": "text",
            "key": "f46"
          }
        ],
        "hint": "Les comptages ne suffisent pas au diagnostic. Le seuil symptomatique dépend de l’âge ; il faut aussi vérifier la durée, le retentissement et les diagnostics différentiels."
      },
      {
        "title": "Inquiétudes signalées",
        "fields": [
          {
            "label": "Parents inquiets du développement",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f47"
          },
          {
            "label": "Professionnel de la petite enfance ou enseignant inquiet",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f48"
          },
          {
            "label": "Source des informations, exemples et compétences préservées",
            "type": "text",
            "key": "f49"
          }
        ]
      },
      {
        "title": "Orientations retenues",
        "fields": [
          {
            "label": "PCO — plateforme de coordination et d’orientation",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f50"
          },
          {
            "label": "Pédopsychiatrie / neuropédiatrie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f51"
          },
          {
            "label": "CMPP / CAMSP",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f52"
          },
          {
            "label": "Réseau spécialisé TND",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f53"
          },
          {
            "label": "CMP / CMPP",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f54"
          },
          {
            "label": "Bilan psychométrique (WISC-V)",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f55"
          }
        ]
      },
      {
        "title": "Bilans complémentaires",
        "fields": [
          {
            "label": "Orthophonie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f56"
          },
          {
            "label": "Orthoptie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f57"
          },
          {
            "label": "Kinésithérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f58"
          },
          {
            "label": "Psychomotricité",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f59"
          },
          {
            "label": "Ergothérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f60"
          },
          {
            "label": "Évaluation (neuro)psychologique",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f61"
          }
        ]
      },
      {
        "title": "Suivi",
        "fields": [
          {
            "label": "Réévaluation dans 3 à 6 mois",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f62"
          },
          {
            "label": "Réévaluation à 1 an",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f63"
          }
        ]
      },
      {
        "title": "Décision et annotations",
        "fields": [
          {
            "label": "Conclusions du médecin, examens, interventions et délai de suivi",
            "type": "text",
            "key": "f64"
          }
        ]
      },
      {
        "title": "Accompagnement complémentaire",
        "fields": [
          {
            "label": "Évaluation des troubles anxieux, de l’humeur et du sommeil",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f65"
          },
          {
            "label": "Aménagements scolaires (PAP / PPS)",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f66"
          },
          {
            "label": "Accompagnement parental / TCC",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f67"
          }
        ]
      }
    ],
    "resources": [
      [
        "HAS — TDAH 2024",
        "https://www.has-sante.fr/jcms/p_3302482/fr/trouble-du-neurodeveloppement/tdah-diagnostic-et-interventions-therapeutiques-aupres-des-enfants-et-adolescents"
      ],
      [
        "Livret TND",
        "https://handicap.gouv.fr/sites/handicap/files/2024-04/Brochure-reperage-precoce-TND-moins-de-7-ans-version-a-remplir.pdf"
      ]
    ],
    "mode": "tdah",
    "info": "Coter les symptômes fréquents, inadaptés au niveau de développement et persistants. Seuil symptomatique de référence : 6/9 avant 17 ans, 5/9 à partir de 17 ans, dans chaque dimension. Ce recueil ne pose pas de diagnostic."
  },
  {
    "id": "tnd-tsa",
    "name": "TSA · repérage complet",
    "sub": "Signes d’alerte · HAS 2018",
    "group": "Troubles du neurodéveloppement",
    "icon": "🌱",
    "kind": "pathway",
    "questions": [],
    "sections": [
      {
        "title": "Contexte clinique",
        "fields": [
          {
            "label": "Âge et classe / mode de garde",
            "type": "text",
            "key": "f0"
          },
          {
            "label": "Motif, plainte et inquiétudes principales",
            "type": "text",
            "key": "f1"
          },
          {
            "label": "Antécédents, développement précoce, contexte familial et scolaire, bilans déjà réalisés",
            "type": "text",
            "key": "f2"
          }
        ],
        "open": true
      },
      {
        "title": "Facteurs de risque périnataux",
        "fields": [
          {
            "label": "Prématurité",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f3"
          },
          {
            "label": "Poids de naissance inférieur à 1 500 g",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f4"
          },
          {
            "label": "TND chez un parent du premier degré ou dans la fratrie",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f5"
          },
          {
            "label": "Exposition prénatale importante à un toxique ou médicament à risque",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f6"
          },
          {
            "label": "Affection néonatale sévère (anoxie, encéphalopathie, cardiopathie complexe, chirurgie lourde, anomalie cérébrale, microcéphalie, infection ou ictère sévère)",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f7"
          },
          {
            "label": "Syndrome génétique",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f8"
          },
          {
            "label": "Précisions sur les facteurs de risque",
            "type": "text",
            "key": "f9"
          }
        ],
        "hint": "Oui = facteur présent. Documenter les circonstances, sans déduire un diagnostic."
      },
      {
        "title": "Régression des compétences",
        "fields": [
          {
            "label": "Perte d’acquisitions antérieures",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "regression": true,
            "key": "f10"
          }
        ],
        "hint": "Une régression nécessite une évaluation médicale rapide ; le comptage de la grille ne doit pas la retarder."
      },
      {
        "title": "Profil sensoriel et sensorimoteur",
        "fields": [
          {
            "label": "Fascination pour les lumières ou objets qui tournent",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f11"
          },
          {
            "label": "Réactivité inhabituelle à des sons, textures ou odeurs",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f12"
          },
          {
            "label": "Réaction à la douleur très faible ou excessive",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f13"
          },
          {
            "label": "Recherche de stimulations sensorielles",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f14"
          }
        ]
      },
      {
        "title": "Comportements et intérêts inhabituels",
        "fields": [
          {
            "label": "Passivité inhabituelle ou faible mobilité, notamment avant 24 mois",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f15"
          },
          {
            "label": "Exploration ou usage inhabituel des objets",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f16"
          },
          {
            "label": "Mouvements répétitifs stéréotypés",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f17"
          },
          {
            "label": "Attachement intense à certains objets ou intérêts très restreints",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f18"
          }
        ]
      },
      {
        "title": "Régulation émotionnelle",
        "fields": [
          {
            "label": "Réactions intenses et répétées au changement, difficilement apaisables",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f19"
          },
          {
            "label": "Colères violentes, répétées, inconsolables",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f20"
          },
          {
            "label": "Activité motrice incontrôlable avec mise en danger",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f21"
          },
          {
            "label": "Opposition forte et fréquente aux adultes",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f22"
          }
        ]
      },
      {
        "title": "Signes d’alerte majeurs à tout âge",
        "fields": [
          {
            "label": "Inquiétude parentale concernant la communication sociale ou le langage",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f23"
          },
          {
            "label": "Régression des habiletés langagières ou relationnelles",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "regression": true,
            "key": "f24"
          }
        ],
        "open": true
      },
      {
        "title": "Jeune enfant",
        "fields": [
          {
            "label": "Absence de babillage, de pointage ou de gestes sociaux à partir de 12 mois",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f25"
          },
          {
            "label": "Absence de mots à partir de 18 mois",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f26"
          },
          {
            "label": "Absence d’associations de mots non écholaliques à partir de 24 mois",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f27"
          }
        ],
        "hint": "Choisir Non évalué / non applicable pour les jalons hors de l’âge de l’enfant."
      },
      {
        "title": "Avant 18 mois",
        "fields": [
          {
            "label": "Particularités de vigilance ou de sommeil",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f28"
          },
          {
            "label": "Difficultés de diversification alimentaire ou d’oralité",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f29"
          },
          {
            "label": "Difficultés de régulation émotionnelle",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f30"
          },
          {
            "label": "Particularités motrices, hypotonie ou stéréotypies précoces",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f31"
          },
          {
            "label": "Exploration inhabituelle des objets",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f32"
          }
        ]
      },
      {
        "title": "Autour de 18 mois",
        "fields": [
          {
            "label": "Engagement relationnel inhabituel : regard adressé, sourire partagé",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f33"
          },
          {
            "label": "Difficultés d’attention conjointe et de pointage coordonné au regard",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f34"
          },
          {
            "label": "Réponse au prénom absente ou réduite",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f35"
          },
          {
            "label": "Difficultés de langage réceptif ou expressif",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f36"
          },
          {
            "label": "Jeu socio-imitatif ou symbolique inhabituel",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f37"
          },
          {
            "label": "Réponses sensorielles particulières",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f38"
          }
        ]
      },
      {
        "title": "Au-delà de 18 mois et jusqu’à l’adolescence",
        "fields": [
          {
            "label": "Difficultés à créer des liens amicaux ou tenir une conversation",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f39"
          },
          {
            "label": "Difficultés d’initiative sociale",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f40"
          },
          {
            "label": "Compréhension difficile des intentions ou du second degré",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f41"
          },
          {
            "label": "Comportements, intérêts ou activités restreints, répétitifs ou stéréotypés",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f42"
          }
        ]
      },
      {
        "title": "Inquiétudes signalées",
        "fields": [
          {
            "label": "Parents inquiets du développement",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f43"
          },
          {
            "label": "Professionnel de la petite enfance ou enseignant inquiet",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f44"
          },
          {
            "label": "Source des informations, exemples et compétences préservées",
            "type": "text",
            "key": "f45"
          }
        ]
      },
      {
        "title": "Orientations retenues",
        "fields": [
          {
            "label": "PCO — plateforme de coordination et d’orientation",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f46"
          },
          {
            "label": "Pédopsychiatrie / neuropédiatrie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f47"
          },
          {
            "label": "CMPP / CAMSP",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f48"
          },
          {
            "label": "Réseau spécialisé TND",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f49"
          },
          {
            "label": "Centre ressources autisme (CRA)",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f50"
          }
        ]
      },
      {
        "title": "Bilans complémentaires",
        "fields": [
          {
            "label": "Orthophonie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f51"
          },
          {
            "label": "Orthoptie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f52"
          },
          {
            "label": "Kinésithérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f53"
          },
          {
            "label": "Psychomotricité",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f54"
          },
          {
            "label": "Ergothérapie",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f55"
          },
          {
            "label": "Évaluation (neuro)psychologique",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f56"
          }
        ]
      },
      {
        "title": "Suivi",
        "fields": [
          {
            "label": "Réévaluation dans 3 à 6 mois",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f57"
          },
          {
            "label": "Réévaluation à 1 an",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f58"
          }
        ]
      },
      {
        "title": "Décision et annotations",
        "fields": [
          {
            "label": "Conclusions du médecin, examens, interventions et délai de suivi",
            "type": "text",
            "key": "f59"
          }
        ]
      },
      {
        "title": "Outils et suivi complémentaires",
        "fields": [
          {
            "label": "M-CHAT-R/F si indiqué entre 16 et 30 mois",
            "type": "choice",
            "choices": [
              "Retenu",
              "Non retenu",
              "À discuter"
            ],
            "key": "f60"
          }
        ]
      }
    ],
    "resources": [
      [
        "HAS — TSA",
        "https://www.has-sante.fr/jcms/c_468812/fr/trouble-du-spectre-de-l-autisme-signes-d-alerte-reperage-diagnostic-et-evaluation-chez-l-enfant-et-l-adolescent"
      ],
      [
        "Annuaire PCO",
        "https://www.ameli.fr/content/adresses-et-telephones-plateformes-de-coordination-et-d-orientation-pco"
      ]
    ],
    "mode": "observation",
    "info": "Repérage des signes d’alerte selon l’âge. Une régression ou une inquiétude parentale doit être explorée sans attendre un nombre minimal de signes. Les rubriques hors âge peuvent rester non applicables."
  },
  {
    "id": "tnd-dsm",
    "name": "Outil DSM · TND",
    "sub": "Six domaines · aide au recueil",
    "group": "Troubles du neurodéveloppement",
    "icon": "🌱",
    "kind": "pathway",
    "questions": [],
    "sections": [
      {
        "title": "Contexte clinique",
        "fields": [
          {
            "label": "Âge et classe / mode de garde",
            "type": "text",
            "key": "f0"
          },
          {
            "label": "Motif, plainte et inquiétudes principales",
            "type": "text",
            "key": "f1"
          },
          {
            "label": "Antécédents, développement précoce, contexte familial et scolaire, bilans déjà réalisés",
            "type": "text",
            "key": "f2"
          }
        ],
        "open": true
      },
      {
        "title": "Inattention",
        "fields": [
          {
            "label": "Erreurs d’inattention ou détails négligés",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f3"
          },
          {
            "label": "Attention difficile à maintenir dans une tâche ou un jeu",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f4"
          },
          {
            "label": "Semble ne pas écouter lors d’un échange direct",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f5"
          },
          {
            "label": "Consignes ou tâches non menées à terme",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f6"
          },
          {
            "label": "Difficultés d’organisation du travail et des activités",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f7"
          },
          {
            "label": "Évitement des efforts mentaux prolongés",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f8"
          },
          {
            "label": "Perte fréquente du matériel nécessaire",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f9"
          },
          {
            "label": "Distractibilité par l’environnement",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f10"
          },
          {
            "label": "Oublis fréquents dans la vie quotidienne",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f11"
          }
        ],
        "countYes": true,
        "open": true
      },
      {
        "title": "Hyperactivité / impulsivité",
        "fields": [
          {
            "label": "Agitation des mains ou pieds en position assise",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f12"
          },
          {
            "label": "Se lève quand la situation demande de rester assis",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f13"
          },
          {
            "label": "Court ou grimpe hors contexte ; agitation intérieure à l’adolescence",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f14"
          },
          {
            "label": "Difficulté à jouer ou s’occuper calmement",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f15"
          },
          {
            "label": "Activité motrice quasi permanente",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f16"
          },
          {
            "label": "Parle excessivement",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f17"
          },
          {
            "label": "Répond avant la fin de la question",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f18"
          },
          {
            "label": "Attend difficilement son tour",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f19"
          },
          {
            "label": "Interrompt ou s’impose dans les activités d’autrui",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f20"
          }
        ],
        "countYes": true,
        "open": true
      },
      {
        "title": "Durée, contexte et diagnostic différentiel",
        "fields": [
          {
            "label": "Symptômes persistants depuis au moins six mois",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f21"
          },
          {
            "label": "Plusieurs symptômes présents avant 12 ans",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f22"
          },
          {
            "label": "Symptômes dans au moins deux contextes",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f23"
          },
          {
            "label": "Retentissement significatif scolaire, social ou familial",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f24"
          },
          {
            "label": "Une autre affection ou un autre trouble mental n’explique pas mieux le tableau",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f25"
          },
          {
            "label": "Sources : enfant, parents, enseignant ; contextes et exemples",
            "type": "text",
            "key": "f26"
          }
        ],
        "hint": "Les comptages ne suffisent pas au diagnostic. Le seuil symptomatique dépend de l’âge ; il faut aussi vérifier la durée, le retentissement et les diagnostics différentiels."
      },
      {
        "title": "Apprentissages — manifestations",
        "fields": [
          {
            "label": "Lecture lente, laborieuse ou inexacte",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f27"
          },
          {
            "label": "Compréhension de lecture difficile",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f28"
          },
          {
            "label": "Difficultés orthographiques",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f29"
          },
          {
            "label": "Difficultés d’expression écrite",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f30"
          },
          {
            "label": "Difficultés avec le sens des nombres ou le calcul",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f31"
          },
          {
            "label": "Difficultés de raisonnement mathématique",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f32"
          }
        ]
      },
      {
        "title": "Apprentissages — contexte",
        "fields": [
          {
            "label": "Persistance au moins six mois malgré une aide ciblée",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f33"
          },
          {
            "label": "Niveau inférieur à l’attendu pour l’âge avec retentissement",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f34"
          },
          {
            "label": "Début au cours de la scolarité",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f35"
          },
          {
            "label": "Autres explications explorées : fonctionnement intellectuel, sensorialité, neurologie, enseignement ou langue",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f36"
          },
          {
            "label": "Domaine concerné : lecture, expression écrite, mathématiques",
            "type": "text",
            "key": "f37"
          }
        ]
      },
      {
        "title": "Développement intellectuel",
        "fields": [
          {
            "label": "Difficultés intellectuelles étayées par examen clinique et tests standardisés",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f38"
          },
          {
            "label": "Difficultés adaptatives conceptuelles (langage, lecture, temps, argent)",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f39"
          },
          {
            "label": "Difficultés adaptatives sociales (relations, communication, jugement)",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f40"
          },
          {
            "label": "Difficultés adaptatives pratiques (autonomie, sécurité, tâches quotidiennes)",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f41"
          },
          {
            "label": "Début pendant le développement",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f42"
          },
          {
            "label": "Résultats des évaluations ; retard global du développement si cette qualification est retenue",
            "type": "text",
            "key": "f43"
          }
        ],
        "hint": "Documenter les fonctions intellectuelles ET adaptatives. La qualification diagnostique dépend de l’âge et de la possibilité d’une évaluation fiable."
      },
      {
        "title": "Langage oral",
        "fields": [
          {
            "label": "Vocabulaire limité",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f44"
          },
          {
            "label": "Construction des phrases limitée",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f45"
          },
          {
            "label": "Difficultés à enchaîner, raconter ou expliquer",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f46"
          },
          {
            "label": "Difficultés durables d’acquisition et d’utilisation du langage",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f47"
          },
          {
            "label": "Capacités inférieures à l’attendu avec retentissement",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f48"
          },
          {
            "label": "Début pendant le développement",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f49"
          },
          {
            "label": "Causes auditives, sensorielles, motrices ou neurologiques explorées",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f50"
          }
        ]
      },
      {
        "title": "Coordination",
        "fields": [
          {
            "label": "Acquisition ou exécution motrice coordonnée inférieure à l’attendu",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f51"
          },
          {
            "label": "Retentissement durable sur vie quotidienne, scolarité ou loisirs",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f52"
          },
          {
            "label": "Début pendant le développement",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f53"
          },
          {
            "label": "Explications intellectuelles, visuelles ou neurologiques explorées",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f54"
          }
        ]
      },
      {
        "title": "TSA — communication et interactions sociales",
        "fields": [
          {
            "label": "Difficultés de réciprocité sociale ou émotionnelle",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f55"
          },
          {
            "label": "Difficultés de communication non verbale",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f56"
          },
          {
            "label": "Difficultés à développer, maintenir ou comprendre les relations",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f57"
          }
        ]
      },
      {
        "title": "TSA — comportements et intérêts",
        "fields": [
          {
            "label": "Mouvements, objets ou langage répétitifs / stéréotypés",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f58"
          },
          {
            "label": "Routines rigides ou difficulté importante face au changement",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f59"
          },
          {
            "label": "Intérêts restreints d’intensité ou de contenu inhabituels",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f60"
          },
          {
            "label": "Réactivité sensorielle atypique",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f61"
          }
        ]
      },
      {
        "title": "TSA — contexte",
        "fields": [
          {
            "label": "Présence dès le développement précoce, parfois révélée plus tard",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f62"
          },
          {
            "label": "Retentissement cliniquement significatif",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f63"
          },
          {
            "label": "Tableau non mieux expliqué par le seul fonctionnement intellectuel",
            "type": "choice",
            "choices": [
              "Oui",
              "Non",
              "Non évalué / non applicable"
            ],
            "key": "f64"
          }
        ]
      },
      {
        "title": "Conclusion clinique",
        "fields": [
          {
            "label": "Hypothèses retenues, arguments, diagnostics différentiels et évaluations à compléter",
            "type": "text",
            "key": "f65"
          }
        ]
      }
    ],
    "resources": [
      [
        "HAS — TDAH",
        "https://www.has-sante.fr/jcms/p_3302482/fr/trouble-du-neurodeveloppement/tdah-diagnostic-et-interventions-therapeutiques-aupres-des-enfants-et-adolescents"
      ],
      [
        "HAS — TSA",
        "https://www.has-sante.fr/jcms/c_468812/fr/trouble-du-spectre-de-l-autisme-signes-d-alerte-reperage-diagnostic-et-evaluation-chez-l-enfant-et-l-adolescent"
      ],
      [
        "Livret TND 7–12 ans",
        "https://handicap.gouv.fr/sites/handicap/files/2025-06/Livret-reperage-TND-7-12-ans.pdf"
      ]
    ],
    "mode": "observation",
    "info": "Aide structurée et reformulée couvrant attention/hyperactivité, apprentissages, développement intellectuel, langage, coordination et autisme. Ce n’est ni une reproduction intégrale du manuel DSM ni un questionnaire validé ; ne pas additionner les domaines pour poser un diagnostic."
  },
  {
    "id": "sex-f",
    "name": "Consultation Femme",
    "sub": "Prévention et santé sexuelle",
    "group": "Santé sexuelle",
    "icon": "🛡️",
    "kind": "pathway",
    "questions": [],
    "sections": [
      {
        "title": "Contexte de la consultation",
        "fields": [
          {
            "label": "Motif, attentes et contexte clinique",
            "type": "text",
            "key": "f0"
          },
          {
            "label": "Antécédents et éléments utiles au choix contraceptif",
            "type": "text",
            "key": "f1"
          }
        ],
        "open": true
      },
      {
        "title": "Contraception",
        "fields": [
          {
            "label": "Information sur les méthodes",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f2"
          },
          {
            "label": "Modalités d’emploi expliquées",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f3"
          },
          {
            "label": "Conduite en cas d’oubli",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f4"
          },
          {
            "label": "Risque thromboembolique et contre-indications aux œstroprogestatifs évalués",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f5"
          },
          {
            "label": "Retour de fertilité discuté",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f6"
          }
        ],
        "theme": true,
        "open": true,
        "hint": "Choix partagé selon la situation et les préférences. Le préservatif participe à la prévention des IST. Vérifier les contre-indications, interactions et modalités propres à chaque méthode."
      },
      {
        "title": "Méthode retenue",
        "fields": [
          {
            "label": "Méthode contraceptive",
            "type": "choice",
            "choices": [
              "Pilule œstroprogestative",
              "Pilule progestative",
              "DIU cuivre",
              "DIU hormonal",
              "Implant",
              "Anneau",
              "Patch",
              "Préservatif",
              "Aucune",
              "Autre"
            ],
            "key": "f7"
          },
          {
            "label": "Autre méthode, prescription et modalités retenues",
            "type": "text",
            "key": "f8"
          }
        ],
        "open": true
      },
      {
        "title": "Contraception d’urgence",
        "fields": [
          {
            "label": "Information délivrée",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f9"
          },
          {
            "label": "Lévonorgestrel / ulipristal / DIU cuivre expliqués",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f10"
          },
          {
            "label": "Accès et gratuité expliqués",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f11"
          }
        ],
        "theme": true,
        "hint": "Après un rapport à risque, agir le plus tôt possible : lévonorgestrel au plus tard à 72 h, ulipristal à 120 h ; DIU cuivre dans le délai adapté à la situation, généralement jusqu’à 5 jours après le rapport. La contraception d’urgence hormonale est disponible gratuitement sans ordonnance en pharmacie, quel que soit l’âge."
      },
      {
        "title": "IST / VIH et dépistage",
        "fields": [
          {
            "label": "Information sur les IST et le VIH",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f12"
          },
          {
            "label": "Rôle du préservatif expliqué",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f13"
          },
          {
            "label": "Dépistage proposé selon les indications",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f14"
          },
          {
            "label": "Orientation CeGIDD / information du partenaire",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f15"
          }
        ],
        "theme": true,
        "hint": "Adapter les examens aux pratiques, symptômes et expositions. En cas d’exposition à risque VIH, évaluation urgente : TPE idéalement dans les 4 h, au plus tard dans les 48 h selon les recommandations françaises. Prévention : préservatifs, PrEP si indiquée, vaccination."
      },
      {
        "title": "Vaccination",
        "fields": [
          {
            "label": "Statut HPV évalué / vaccination proposée",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f16"
          },
          {
            "label": "Statut hépatite B discuté / rattrapage envisagé",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f17"
          }
        ],
        "theme": true,
        "hint": "Vérifier le statut et le calendrier vaccinal en vigueur ; la vaccination HPV concerne filles et garçons."
      },
      {
        "title": "Sexualité et vie affective",
        "fields": [
          {
            "label": "Consentement et respect abordés",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f18"
          },
          {
            "label": "Repérage des violences ou contraintes",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f19"
          },
          {
            "label": "Comportements à risque explorés",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f20"
          }
        ],
        "theme": true,
        "hint": "Prévoir un échange confidentiel et adapté à la personne. Documenter les ressources proposées et la conduite à tenir en cas de violence."
      },
      {
        "title": "Tabac et mode de vie",
        "fields": [
          {
            "label": "Tabagisme évalué",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f21"
          },
          {
            "label": "Aide au sevrage proposée",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f22"
          },
          {
            "label": "Autres addictions abordées",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f23"
          }
        ],
        "theme": true,
        "hint": "Prendre en compte le risque cardiovasculaire dans le choix d’une contraception œstroprogestative."
      },
      {
        "title": "Examen et bilan",
        "fields": [
          {
            "label": "Poids, tension artérielle et IMC évalués",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f24"
          },
          {
            "label": "Suivi gynécologique et dépistage du col discutés",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f25"
          },
          {
            "label": "Bilan biologique si contraception œstroprogestative",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f26"
          }
        ],
        "theme": true,
        "hint": "Dépistage du col selon l’âge et les situations particulières : cytologie entre 25 et 29 ans, puis HPV-HR entre 30 et 65 ans. Adapter le suivi aux résultats et antécédents ; les liens officiels précisent le calendrier."
      },
      {
        "title": "Conclusion de consultation",
        "fields": [
          {
            "label": "Méthode choisie, prescriptions et examens proposés",
            "type": "text",
            "key": "f27"
          },
          {
            "label": "Conseils, ressources remises, orientation et suivi",
            "type": "text",
            "key": "f28"
          },
          {
            "label": "Observations complémentaires",
            "type": "text",
            "key": "f29"
          }
        ],
        "open": true
      }
    ],
    "resources": [
      [
        "Contraception d’urgence",
        "https://www.ameli.fr/assure/sante/themes/contraception-urgence/comprendre-contraception-urgence"
      ],
      [
        "Accès et gratuité",
        "https://www.ameli.fr/assure/sante/themes/contraception-urgence/contraception-urgence-gratuite"
      ],
      [
        "Prévention VIH / TPE",
        "https://www.ameli.fr/assure/sante/themes/vih/prevention"
      ],
      [
        "Dépistage du col",
        "https://www.ameli.fr/assure/sante/themes/cancer-col-uterus/depistage-organise-cancer-col-uterus"
      ],
      [
        "QuestionSexualité",
        "https://www.questionsexualite.fr/"
      ]
    ],
    "mode": "sexual",
    "info": "Parcours de prévention par thèmes, adapté au patient. Les rubriques non pertinentes peuvent être marquées non applicables. Une rubrique non renseignée n’est jamais considérée comme abordée. Les choix médicaux restent saisis par le médecin."
  },
  {
    "id": "sex-h",
    "name": "Consultation Homme",
    "sub": "Prévention et santé sexuelle",
    "group": "Santé sexuelle",
    "icon": "🛡️",
    "kind": "pathway",
    "questions": [],
    "sections": [
      {
        "title": "Contexte de la consultation",
        "fields": [
          {
            "label": "Motif, attentes et contexte clinique",
            "type": "text",
            "key": "f0"
          },
          {
            "label": "Antécédents et éléments utiles au choix contraceptif",
            "type": "text",
            "key": "f1"
          }
        ],
        "open": true
      },
      {
        "title": "Contraception",
        "fields": [
          {
            "label": "Information sur les méthodes",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f2"
          },
          {
            "label": "Utilisation du préservatif expliquée",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f3"
          },
          {
            "label": "Contraception partagée discutée",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f4"
          },
          {
            "label": "Limites et taux d’échec du retrait expliqués",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f5"
          }
        ],
        "theme": true,
        "open": true,
        "hint": "Choix partagé selon la situation et les préférences. Le préservatif participe à la prévention des IST. Vérifier les contre-indications, interactions et modalités propres à chaque méthode."
      },
      {
        "title": "Méthode retenue",
        "fields": [
          {
            "label": "Méthode contraceptive",
            "type": "choice",
            "choices": [
              "Préservatif",
              "Retrait",
              "Aucune",
              "Autre"
            ],
            "key": "f6"
          },
          {
            "label": "Autre méthode, prescription et modalités retenues",
            "type": "text",
            "key": "f7"
          }
        ],
        "open": true
      },
      {
        "title": "Contraception d’urgence",
        "fields": [
          {
            "label": "Information délivrée pour la partenaire",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f8"
          },
          {
            "label": "Modalités d’accès expliquées",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f9"
          }
        ],
        "theme": true,
        "hint": "Après un rapport à risque, agir le plus tôt possible : lévonorgestrel au plus tard à 72 h, ulipristal à 120 h ; DIU cuivre dans le délai adapté à la situation, généralement jusqu’à 5 jours après le rapport. La contraception d’urgence hormonale est disponible gratuitement sans ordonnance en pharmacie, quel que soit l’âge."
      },
      {
        "title": "IST / VIH et dépistage",
        "fields": [
          {
            "label": "Information sur les IST et le VIH",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f10"
          },
          {
            "label": "Rôle du préservatif expliqué",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f11"
          },
          {
            "label": "Dépistage proposé selon les indications",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f12"
          },
          {
            "label": "Orientation CeGIDD / information du partenaire",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f13"
          }
        ],
        "theme": true,
        "hint": "Adapter les examens aux pratiques, symptômes et expositions. En cas d’exposition à risque VIH, évaluation urgente : TPE idéalement dans les 4 h, au plus tard dans les 48 h selon les recommandations françaises. Prévention : préservatifs, PrEP si indiquée, vaccination."
      },
      {
        "title": "Vaccination",
        "fields": [
          {
            "label": "Statut HPV évalué / vaccination proposée",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f14"
          },
          {
            "label": "Statut hépatite B discuté / rattrapage envisagé",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f15"
          }
        ],
        "theme": true,
        "hint": "Vérifier le statut et le calendrier vaccinal en vigueur ; la vaccination HPV concerne filles et garçons."
      },
      {
        "title": "Sexualité et vie affective",
        "fields": [
          {
            "label": "Consentement et respect abordés",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f16"
          },
          {
            "label": "Repérage des violences ou contraintes",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f17"
          },
          {
            "label": "Comportements à risque explorés",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f18"
          }
        ],
        "theme": true,
        "hint": "Prévoir un échange confidentiel et adapté à la personne. Documenter les ressources proposées et la conduite à tenir en cas de violence."
      },
      {
        "title": "Tabac et mode de vie",
        "fields": [
          {
            "label": "Tabagisme évalué",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f19"
          },
          {
            "label": "Aide au sevrage proposée",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f20"
          },
          {
            "label": "Autres addictions abordées",
            "type": "choice",
            "choices": [
              "Abordé",
              "Non abordé",
              "Non applicable"
            ],
            "key": "f21"
          }
        ],
        "theme": true,
        "hint": "Évaluer les consommations et proposer une aide adaptée."
      },
      {
        "title": "Conclusion de consultation",
        "fields": [
          {
            "label": "Méthode choisie, prescriptions et examens proposés",
            "type": "text",
            "key": "f22"
          },
          {
            "label": "Conseils, ressources remises, orientation et suivi",
            "type": "text",
            "key": "f23"
          },
          {
            "label": "Observations complémentaires",
            "type": "text",
            "key": "f24"
          }
        ],
        "open": true
      }
    ],
    "resources": [
      [
        "Contraception d’urgence",
        "https://www.ameli.fr/assure/sante/themes/contraception-urgence/comprendre-contraception-urgence"
      ],
      [
        "Accès et gratuité",
        "https://www.ameli.fr/assure/sante/themes/contraception-urgence/contraception-urgence-gratuite"
      ],
      [
        "Prévention VIH / TPE",
        "https://www.ameli.fr/assure/sante/themes/vih/prevention"
      ],
      [
        "Dépistage du col",
        "https://www.ameli.fr/assure/sante/themes/cancer-col-uterus/depistage-organise-cancer-col-uterus"
      ],
      [
        "QuestionSexualité",
        "https://www.questionsexualite.fr/"
      ]
    ],
    "mode": "sexual",
    "info": "Parcours de prévention par thèmes, adapté au patient. Les rubriques non pertinentes peuvent être marquées non applicables. Une rubrique non renseignée n’est jamais considérée comme abordée. Les choix médicaux restent saisis par le médecin."
  }
];
if(typeof module!=="undefined")module.exports={PATHWAYS};
