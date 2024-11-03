const questions = [
    {
      question: "¿Qué porcentaje del peso corporal representa la piel?",
      options: ["5%", "16%", "23%", "10%"],
      answer: 1 // 16%
    },
    {
      question: "Marque la opción correcta en relación a las membranas serosas:",
      options: [
        "Están formadas por una capa de tejido epitelial y una capa de tejido conjuntivo",
        "Son una lámina continua y única de tejido que se repliega sobre sí misma",
        "La hoja parietal se encuentra en contacto con la superficie externa de los órganos",
        "Entre la hoja parietal y visceral hay una pequeña cantidad de líquido que disminuye la fricción"
      ],
      answer: 2
    },
    {
        question: "Cómo se denomina la membrana serosa que rodea los pulmones:",
        options: ["Peritoneo", "Pericardio", "Pleura", "Fascia"],
        answer: 2 // Índice de la respuesta correcta (Pleura)
      },
      {
        question: "Cómo se denomina la membrana serosa que rodea los órganos abdominales:",
        options: ["Peritoneo", "Pericardio", "Pleura", "Fascia"],
        answer: 0 // Índice de la respuesta correcta (Peritoneo)
      },
      {
        question: "Señale cuál de los siguientes sistemas no se encuentra recubierto por una membrana mucosa:",
        options: ["Sistema respiratorio", "Sistema digestivo", "Sistema cardiovascular", "Sistema reproductor"],
        answer: 2 // Índice de la respuesta correcta (Sistema cardiovascular)
      },
      {
        question: "Qué tipo de epitelio forma la membrana mucosa del esófago:",
        options: ["Epitelio simple plano", "Epitelio simple cilíndrico", "Epitelio estratificado plano", "Epitelio estratificado cúbico"],
        answer: 2 // Índice de la respuesta correcta (Epitelio estratificado plano)
      },
      {
        question: "Qué tipo de epitelio forma la membrana mucosa de los segmentos inferiores del tubo digestivo:",
        options: ["Epitelio simple plano", "Epitelio simple cilíndrico", "Epitelio estratificado plano", "Epitelio estratificado cúbico"],
        answer: 1 // Índice de la respuesta correcta (Epitelio simple cilíndrico)
      },
      {
        question: "Cómo se denomina el tejido conjuntivo fibroso situado por debajo del epitelio en las membranas mucosas:",
        options: ["Membrana sinovial", "Lámina propia", "Membrana reticular", "Lámina conjuntiva"],
        answer: 1 // Índice de la respuesta correcta (Lámina propia)
      },
      {
        question: "Cuál de las siguientes es una membrana de tejido conjuntivo:",
        options: ["Membrana serosa", "Membrana cutánea", "Membrana mucosa", "Membrana sinovial"],
        answer: 3 // Índice de la respuesta correcta (Membrana sinovial)
      },
      {
        question: "Dónde se encuentra ubicada la membrana sinovial:",
        options: ["Rodea la diáfisis de huesos largos", "Reviste las cápsulas articulares", "Rodea la epífisis de huesos largos", "Reviste los huesos planos"],
        answer: 1 // Índice de la respuesta correcta (Reviste las cápsulas articulares)
      },
          {
            question: "Cuál es la capa más externa de la piel:",
            options: ["Dermis", "Tejido subcutáneo", "Epidermis", "Fascia muscular"],
            answer: 2 // Epidermis
          },
          {
            question: "Qué tipo de tejido forma la epidermis:",
            options: ["Epitelio estratificado plano", "Epitelio estratificado cilíndrico", "Epitelio simple plano", "Tejido conjuntivo denso irregular"],
            answer: 0 // Epitelio estratificado plano
          },
          {
            question: "Qué tipo de tejido forma la dermis:",
            options: ["Tejido adiposo", "Tejido conjuntivo", "Tejido muscular", "Tejido epitelial"],
            answer: 1 // Tejido conjuntivo
          },
          {
            question: "Qué tipo de tejido forma el tejido subcutáneo:",
            options: ["Tejido adiposo", "Tejido conjuntivo", "Tejido muscular", "Tejido epitelial"],
            answer: 0 // Tejido adiposo
          },
          {
            question: "Cómo se denomina la capa más interna de la epidermis:",
            options: ["Estrato córneo", "Estrato lúcido", "Estrato germinativo", "Estrato espinoso"],
            answer: 2 // Estrato germinativo
          },
          {
            question: "Señale la proteína que se encuentra en la epidermis y le otorga dureza:",
            options: ["Vibrastina", "Miosina", "Queratina", "Laminina"],
            answer: 2 // Queratina
          },
          {
            question: "Cómo se denomina la capa más externa de la epidermis:",
            options: ["Estrato córneo", "Estrato lúcido", "Estrato germinativo", "Estrato espinoso"],
            answer: 0 // Estrato córneo
          },
          {
            question: "Señale la opción incorrecta en relación a la melanina:",
            options: [
              "Absorbe la radiación ultravioleta que llega a la epidermis",
              "Es secretada por los microgliocitos",
              "Rodea el núcleo de las células del tejido conjuntivo",
              "Mientras mayor sea la exposición a la luz solar, menor será la cantidad de melanina"
            ],
            answer: 3 // Mientras mayor sea la exposición a la luz solar...
          },
          {
            question: "En qué parte de la piel se ubican las papilas dérmicas:",
            options: [
              "Capa reticular de la dermis",
              "Capa papilar de la dermis",
              "Capa germinativa de la epidermis",
              "Tejido subcutáneo"
            ],
            answer: 1 // Capa papilar de la dermis
          },
          {
            question: "Señale qué tipo de tejido forma la capa papilar de la dermis:",
            options: [
              "Tejido conjuntivo denso regular",
              "Tejido conjuntivo denso irregular",
              "Tejido conjuntivo laxo",
              "Tejido adiposo"
            ],
            answer: 2 // Tejido conjuntivo laxo
          },
          {
            question: "Señale cuál de las siguientes fibras son las más abundantes en la capa reticular de la dermis:",
            options: ["Fibras colágenas", "Fibras reticulares", "Fibras elásticas", "Todas son correctas"],
            answer: 0 // Fibras colágenas
          },
          {
            question: "Qué capa de la epidermis recibe la papila del pelo:",
            options: ["Estrato lúcido", "Estrato córneo", "Estrato germinativo", "Estrato espinoso"],
            answer: 2 // Estrato germinativo
          },
          {
            question: "A qué estructuras se une el músculo erector del pelo:",
            options: [
              "Papila dérmica y folículo piloso",
              "Papila epidérmica y tejido subcutáneo",
              "Estrato germinativo y dermis papilar",
              "Papila dérmica y estrato córneo"
            ],
            answer: 0 // Papila dérmica y folículo piloso
          },
          {
            question: "Cómo se denomina la parte visible de la uña:",
            options: ["Raíz", "Cuerpo ungueal", "Lánugo", "Cutícula"],
            answer: 1 // Cuerpo ungueal
          },
          {
            question: "Cómo se denomina el pliegue de piel que recubre la raíz de la uña:",
            options: ["Cuerpo ungueal", "Cutícula", "Lánugo", "Papila dérmica"],
            answer: 1 // Cutícula
          },
          {
            question: "Qué tipo de información es detectada por el corpúsculo de Meissner:",
            options: ["Presión profunda en la dermis", "Dolor", "Tacto ligero", "Vibraciones"],
            answer: 2 // Tacto ligero
          },
          {
            question: "Cuál de las siguientes no es una función de la transpiración o sudoración:",
            options: [
              "Eliminar amoníaco",
              "Eliminar ácido úrico",
              "Mantener la homeostasis de la temperatura",
              "Evitar el sobrecrecimiento de bacterias"
            ],
            answer: 3 // Evitar el sobrecrecimiento de bacterias
          },
          {
            question: "Señale la opción incorrecta en relación a las glándulas sudoríparas apocrinas:",
            options: [
              "Se encuentran principalmente en la piel de la axila y en las áreas alrededor de los genitales",
              "Secretan un líquido más espeso en comparación con las glándulas ecrinas",
              "Aumentan de tamaño y comienzan a funcionar en la infancia",
              "Son más grandes que las glándulas ecrinas"
            ],
            answer: 2 // Aumentan de tamaño y comienzan a funcionar en la infancia
          },
          {
            question: "Señale la opción incorrecta en relación a las glándulas sebáceas:",
            options: [
              "Secretan una sustancia lipídica para la piel y el pelo",
              "Se abren directamente a poros ubicados en la piel",
              "Su secreción previene la sequedad y las grietas de la piel",
              "Su actividad aumenta en la adolescencia y disminuye al final de la etapa adulta"
            ],
            answer: 1 // Se abren directamente a poros ubicados en la piel
          },
          {
            question: "Cuál de las siguientes no es una función de la piel:",
            options: [
              "Protección",
              "Regulación de la temperatura",
              "Síntesis de vitamina K",
              "Actividad como órgano sensitivo"
            ],
            answer: 2 // Síntesis de vitamina K
          },
          {
            question: "Señale cuál de los siguientes órganos participan de la síntesis de vitamina D:",
            options: [
              "Intestino grueso e hígado",
              "Piel, hígado y riñones",
              "Piel, riñones y sistema cardiovascular",
              "Piel, riñones y bazo"
            ],
            answer: 1 // Piel, hígado y riñones
          },
          {
            question: "Cuál de las siguientes no es una función del sistema esquelético:",
            options: [
              "Aporta soporte al organismo",
              "Protege órganos vitales como el encéfalo y la médula espinal",
              "Contribuye al movimiento al actuar como palancas",
              "Almacena iones como sodio y potasio"
            ],
            answer: 3 // Almacena iones como sodio y potasio
          },
          {
            question: "Señale el que es un hueso corto:",
            options: ["Radio", "Semilunar", "Esfenoides", "Rótula"],
            answer: 1 // Semilunar
          },
          {
            question: "Señale el que es un hueso irregular:",
            options: ["Frontal", "Vértebras", "Escafoides", "Costillas"],
            answer: 1 // Vértebras
          },
          {
            question: "Qué es la diáfisis:",
            options: [
              "Son los extremos de los huesos largos",
              "Es el revestimiento de tejido conjuntivo que rodea los huesos",
              "Es el cuerpo de los huesos largos",
              "Es la capa intermedia de los huesos planos"
            ],
            answer: 2 // Es el cuerpo de los huesos largos
          },
          {
            question: "Dónde se ubica la médula ósea amarilla:",
            options: [
              "Entre las trabéculas de las epífisis",
              "En órganos como el hígado y el bazo",
              "En la cavidad medular de los huesos largos",
              "Alrededor de la médula espinal"
            ],
            answer: 2 // En la cavidad medular de los huesos largos
          },
          {
            question: "Qué es el endostio:",
            options: [
              "Es una capa de cartílago hialino que cubre cada epífisis",
              "Es una membrana fuerte de tejido fibroso denso que cubre el exterior de los huesos",
              "Es una membrana delgada que tapiza la cavidad medular",
              "Es la membrana que reviste las trabéculas de hueso esponjoso"
            ],
            answer: 2 // Es una membrana delgada que tapiza la cavidad medular
          },
          {
            question: "Cómo se denominan las láminas que forman la estructura del hueso esponjoso:",
            options: [
              "Osteonas",
              "Láminas circunferenciales",
              "Trabéculas",
              "Laminillas concéntricas"
            ],
            answer: 2 // Trabéculas
          },
      // Continuación de las preguntas anteriores...
      {
        question: "Qué son los osteocitos:",
        options: [
          "Células formadoras de hueso en estado activo",
          "Células óseas maduras que anteriormente fueron osteoblastos activos",
          "Células removedoras de hueso",
          "Células del sistema inmunitario"
        ],
        answer: 1 // Células óseas maduras...
      },
      {
        question: "Marque la opción incorrecta en relación al músculo liso:",
        options: [
          "Es involuntario, ya que no se puede controlar sus contracciones",
          "Se une al sistema esquelético para facilitar el movimiento",
          "Las células que lo forman tienen un solo núcleo",
          "Carecen de bandas o estrías transversales"
        ],
        answer: 1 // Se une al sistema esquelético...
      },
      {
        question: "Señale la unidad contráctil o funcional básica del músculo esquelético:",
        options: ["Miofibrillas", "Microfilamentos", "Microfilamentos finos y gruesos", "Sarcomero"],
        answer: 3 // Sarcomero
      },
      {
        question: "Cuál de los siguientes iones es necesario para la contracción muscular:",
        options: ["Potasio", "Magnesio", "Calcio", "Sodio"],
        answer: 2 // Calcio
      },
      {
        question: "Señale la opción incorrecta en relación a la unión neuromuscular:",
        options: [
          "Es un punto de contacto entre una terminación nerviosa y una fibra muscular",
          "La neurona y la fibra muscular están directamente en contacto para facilitar la transmisión de impulsos",
          "La acetilcolina es el neurotransmisor que se libera en esta unión y estimula el músculo",
          "La neurona implicada en la unión neuromuscular es de tipo motor"
        ],
        answer: 1 // La neurona y la fibra muscular están directamente en contacto...
      },
      {
        question: "Qué es una contracción espasmódica:",
        options: [
          "Contracción sostenida y estable",
          "Respuesta brusca a un estímulo",
          "Contracción que cambia la longitud del músculo",
          "Contracción que no cambia la longitud del músculo"
        ],
        answer: 1 // Respuesta brusca a un estímulo
      },
      {
        question: "Señale cuál de los siguientes es un músculo de la masticación:",
        options: ["Pectoral mayor", "Masetero", "Diafragma", "Sartorio"],
        answer: 1 // Masetero
      },
      {
        question: "Señale la parte de la neurona que recibe información desde otras neuronas:",
        options: ["Axón", "Dendritas", "Soma", "Terminales axónicos"],
        answer: 1 // Dendritas
      },
      {
        question: "Cuál de las siguientes células forma la vaina de mielina en el sistema nervioso periférico:",
        options: ["Célula satélite", "Oligodendrocito", "Célula de Schwann", "Astrocito"],
        answer: 2 // Célula de Schwann
      },
      {
        question: "Cómo se denomina al conjunto de somas y dendritas ubicado en el sistema nervioso periférico:",
        options: ["Núcleo", "Ganglio", "Tracto", "Nervio"],
        answer: 1 // Ganglio
      },
      {
        question: "Señale cuál de las siguientes partes del encéfalo se encarga de regular la temperatura corporal:",
        options: ["Tálamo", "Hipotálamo", "Bulbo raquídeo", "Mesencéfalo"],
        answer: 1 // Hipotálamo
      },
      {
        question: "Dónde se ubica el área de asociación visual:",
        options: ["Lóbulo frontal", "Lóbulo parietal", "Lóbulo occipital", "Lóbulo temporal"],
        answer: 2 // Lóbulo occipital
      },
      {
        question: "Señale la que no es una función del nervio trigémino:",
        options: [
          "Sensibilidad de la cara",
          "Movimientos oculares",
          "Movimientos masticatorios",
          "Sensibilidad del cuero cabelludo"
        ],
        answer: 1 // Movimientos oculares
      },
      {
        question: "Cuál de los siguientes nervios se encarga del sentido del olfato:",
        options: ["II", "III", "I", "XI"],
        answer: 2 // I
      },
      {
        question: "Cuál de las siguientes hormonas es secretada por la placenta:",
        options: ["Melatonina", "Gonadotropina coriónica", "Oxitocina", "Insulina"],
        answer: 1 // Gonadotropina coriónica
      },
      {
        question: "Cuál de las siguientes células produce glucagón:",
        options: ["Células A", "Células B", "Células C", "Células D"],
        answer: 0 // Células A
      },
      {
        question: "Cuál de las siguientes hormonas es liberada por los folículos ováricos:",
        options: ["Progesterona", "Estrógeno", "Gonadotropina coriónica", "Relaxina"],
        answer: 1 // Estrógeno
      },
      {
        question: "Cuál de las siguientes hormonas actúa cuando los niveles de calcio en sangre están elevados:",
        options: ["Hormona paratiroidea", "Cortisol", "Calcitonina", "Aldosterona"],
        answer: 2 // Calcitonina
      },
      {
        question: "Señale el mecanismo de acción de la aldosterona:",
        options: [
          "Aumenta la reabsorción de potasio y de forma indirecta de agua",
          "Aumenta la cantidad de acuaporinas en el tubo colector para aumentar la reabsorción de agua",
          "Aumentan la reabsorción de sodio y de forma indirecta de agua",
          "Aumenta la diuresis para regular la volemia"
        ],
        answer: 2 // Aumenta la cantidad de agua reabsorbida en el túbulo colector...
      },
      {
        question: "Señale cuál de las siguientes zonas de la corteza suprarrenal secreta hormonas sexuales:",
        options: [
          "Zona glomerular",
          "Zona fasciculada",
          "Zona reticular",
          "Zona medular"
        ],
        answer: 2 // Zona reticular
      },
      {
        question: "Cuál de las siguientes células es un granulocito:",
        options: ["Linfocito", "Monocito", "Macrófago", "Eosinófilo"],
        answer: 3 // Eosinófilo
      },
      {
        question: "Dónde se ubica principalmente la médula ósea roja en los adultos:",
        options: ["Tibia", "Coxal", "Carpo", "Húmero"],
        answer: 1 // Coxal
      },
      {
        question: "Cómo se denomina la proteína que ayuda a retener el agua en los vasos sanguíneos:",
        options: ["Globulinas", "Fibrinógeno", "Albumina", "Prothrombina"],
        answer: 2 // Albumina
      },
      {
        question: "Qué es el suero sanguíneo:",
        options: [
          "Plasma menos los factores de coagulación",
          "Plasma menor albúmina",
          "Plasma menos globulina",
          "Plasma menos electrolitos"
        ],
        answer: 0 // Plasma menos los factores de coagulación
      },
      {
        question: "Qué porcentaje de leucocitos son neutrófilos:",
        options: ["20 a 25%", "2 a 5%", "65 a 75%", "3 a 8%"],
        answer: 2 // 65 a 75%
      },
      {
        question: "Cuál de los siguientes elementos es esencial para la capacidad transportadora de oxígeno de la hemoglobina:",
        options: ["Magnesio", "Sulfuro", "Hierro", "Calcio"],
        answer: 2 // Hierro
      },
      {
        question: "Señale la opción incorrecta en relación a los eritrocitos:",
        options: [
          "Tienen una forma de disco bicóncavo que le permite ingresar en los capilares de menor diámetro",
          "Están formados por un núcleo celular y múltiples organelas citoplasmáticas",
          "Tienen una vida media de entre 80 y 120 días",
          "Están principalmente formados por hemoglobina"
        ],
        answer: 1 // Están formados por un núcleo celular...
      },
      {
        question: "Cuál de los siguientes grupos sanguíneos recibe el nombre de donador universal:",
        options: ["AB-", "O-", "AB+", "A+"],
        answer: 2 // O-
      },
      {
        question: "Cómo se denomina la capa que reviste directamente las cámaras cardíacas y está en contacto con la sangre:",
        options: ["Pericardio", "Endocardio", "Miocardio", "Epicardio"],
        answer: 1 // Endocardio
      },
      // Continuación de las preguntas anteriores...
      {
        question: "Señale la opción incorrecta en relación a los ruidos cardíacos:",
        options: [
          "El primer tono o lub está causado por la vibración y cierre de las válvulas AV",
          "El segundo tono o dup está causado por la vibración y cierre de las válvulas semilunares",
          "El segundo tono dura más y es más bajo que el primero",
          "El segundo tono aparece en la diástole ventricular"
        ],
        answer: 2 // El segundo tono dura más y es más bajo que el primero
      },
      {
        question: "A través de cuál de los siguientes vasos ingresa la sangre a la aurícula derecha:",
        options: ["Venas pulmonares", "Venas cavas", "Vena safena", "Venas yugulares"],
        answer: 1 // Venas cavas
      },
      {
        question: "En qué momento del ciclo cardíaco se irriga el miocardio:",
        options: [
          "Sístole auricular",
          "Sístole ventricular",
          "Diástole auricular",
          "Diástole ventricular"
        ],
        answer: 3 // Diástole ventricular
      },
      {
        question: "Cómo se denominan las arterias que irrigan el miocardio:",
        options: ["Arterias carótidas", "Tronco braquiocefálico", "Arterias coronarias", "Arterias ilíacas"],
        answer: 2 // Arterias coronarias
      },
      {
        question: "Cuál de las siguientes partes del sistema de conducción recibe el nombre de marcapasos:",
        options: [
          "Nodo auriculoventricular",
          "Fascículo AV o de His",
          "Nódulo sinusal",
          "Fibras de Purkinje"
        ],
        answer: 2 // Nódulo sinusal
      },
      {
        question: "Señale la opción correcta en relación a la inmunidad innata:",
        options: [
          "Es específica para cada microorganismo",
          "Aparece a medida que nos exponemos al medioambiente",
          "Es menos lenta que la inmunidad adaptativa",
          "No genera células de memoria"
        ],
        answer: 3 // No genera células de memoria
      },
      {
        question: "Cuál de los siguientes no es un signo característico de inflamación:",
        options: ["Enrojecimiento", "Dolor", "Hinchazón", "Frío"],
        answer: 3 // Frío
      },
      {
        question: "Cuál de los siguientes mecanismos de la defensa innata se lo llama primera línea de defensa:",
        options: ["Secreciones", "Fagocitos", "Piel y mucosas", "Sistema de complemento"],
        answer: 2 // Piel y mucosas
      },
      {
        question: "Cuál de los siguientes es la función del sistema del complemento:",
        options: [
          "Promueve la apoptosis de patógenos",
          "Inhibir la diseminación de una infección viral",
          " Lisis o rotura de una célula extraña",
          "Separar el medio interno del medio externo"
        ],
        answer: 2 //  Lisis o rotura de una célula extraña
      },
      {
        question: "Cuál de los siguientes es un ejemplo de inmunidad pasiva",
        options: [
          "Un niño que sufre sarampión adquiere inmunidad frente a una infección subsiguiente",
          "Inyección de un agente causal, como en la vacunación contra la poliomielitis",
          " Un adulto que ha adquirido recientemente infección por coronavirus y produce anticuerpos",
          "Una inyección de un material protector formado por sistema inmunitario de otro individuo"
        ],
        answer: 3 // Una inyección de un material protector formado por sistema inmunitario de otro individuo

      },
      {
        question: "Cuál de las siguientes células forman los anticuerpos:",
        options: [
          "Linfocitos T colaboradores",
          "Linfocitos T reguladores",
          "Linfocitos B",
          "Macrófagos y neutrófilos"
        ],
        answer: 2 // Linfocitos B
      },
      {
        question: "Dónde está ubicado el tálamo:",
        options: ["Telencéfalo", "Rombencéfalo", "Diencéfalo", "Mesencéfalo"],
        answer: 2 // Diencéfalo
      },
      {
        question: "Cuál es la longitud aproximada del intestino delgado del adulto:",
        options: ["7 m", "2.2 m", "1.5 m", "2 m"],
        answer: 0 // 7 m
      },
      {
        question: "Cuál de estas hormonas es regulada por retrocontrol positivo:",
        options: [
          "Hormona del crecimiento (GH)",
          "Insulina",
          "Oxitocina",
          "Glucagón"
        ],
        answer: 2 // Oxitocina
      },
      {
        question: "Qué nombre reciben los capilares linfáticos de la pared del intestino delgado:",
        options: [
          "Venas linfáticas",
          "Vasos linfáticos aferentes",
          "Vasos quilíferos",
          "Vasos linfáticos eferentes"
        ],
        answer: 2 // Vasos quilíferos
      },
      {
        question: "La liberación de noradrenalina en el corazón provoca:",
        options: [
          "Disminución en el ritmo del nodo SA y aumento de la FC",
          "Aumento en el ritmo del nodo SA y disminución en la FC",
          "Disminución en el ritmo del nodo SA y disminución de la FC",
          "Aumento en el ritmo del nodo SA y aumento de la FC"
        ],
        answer: 3 // Aumento en el ritmo del nodo SA y aumento de la FC
      },
      {
        question: "Cuál es el catión extracelular más abundante:",
        options: ["Proteína", "Potasio", "Bicarbonato", "Sodio"],
        answer: 3 // Sodio
      },
      {
        question: "Qué se denomina lanugo:",
        options: [
          "Al vello facial",
          "Al vello del recién nacido",
          "Al vello axilar",
          "Al vello del conducto auditivo externo"
        ],
        answer: 1 // Al vello del recién nacido
      },
      {
        question: "En relación a la calcitonina, elija la opción correcta:",
        options: [
          "Inhibe la liberación de hormonas por la adenohipófisis",
          "Estimula el catabolismo del hueso",
          "Inhibe el catabolismo del hueso",
          "Estimular la liberación de hormonas por la adenohipófisis"
        ],
        answer: 2 // Inhibe el catabolismo del hueso
      },
      {
        question: "Cuál de los siguientes huesos NO pertenece al oído medio:",
        options: ["Estribo", "Escafoides", "Martillo", "Yunque"],
        answer: 1 // Escafoides
      },
      {
        question: "Señale el sitio donde se reabsorbe el líquido cefalorraquídeo:",
        options: [
          "Acueducto cerebral",
          "Espacio subaracnoideo",
          "Plexos coroideos",
          "Sangre venosa"
        ],
        answer: 1 // Espacio subaracnoideo
      },
      {
        question: "A qué hueso pertenece el olécranon:",
        options: ["Cúbito", "Húmero", "Fémur", "Radio"],
        answer: 0 // Cúbito
      },
      {
        question: "Dentro de los leucocitos de una muestra sanguínea de un adulto normal, los linfocitos representan el...",
        options: ["0.5-1%", "65-75%", "3-8%", "20-25%"],
        answer: 3 // 20-25%
      },
      {
        question: "Cuál de los siguientes huesos tiene cavidades llamadas senos:",
        options: ["Cigomático", "Frontal", "Temporal", "Occipital"],
        answer: 1 // Frontal
      },
      {
        question: "Cuál es la capa de la dermis que tiene menor cantidad de fibras:",
        options: ["Capa basal", "Capa córnea", "Capa papilar", "Capa reticular"],
        answer: 2 // Capa papilar
      },
      {
        question: "La hormona luteinizante actúa sobre...",
        options: [
          "la hipófisis",
          "la glándula tiroides",
          "los folículos ováricos",
          "la corteza suprarrenal"
        ],
        answer: 2 // los folículos ováricos
      },
      {
        question: "La túnica media, presente en las arterias y las venas de mediano calibre, está formada por....",
        options: [
          "tejido conjuntivo con fibras reforzantes",
          "tejido muscular liso",
          "células epiteliales escamosas",
          "tejido fibroso elástico"
        ],
        answer: 1 // tejido muscular liso
      },
      {
        question: "El corpúsculo de Meissner es un receptor de...",
        options: ["tacto fino", "presión", "propiocepción", "dolor"],
        answer: 0 // tacto fino
      },
      {
        question: "Qué célula contribuye a formar la llamada barrera hematoencefálica?",
        options: ["Astrocito", "Oligodendrocito", "Microglócito", "Lemocito"],
        answer: 0 // Astrocito
      },
      {
        question: "El nervio craneal VII se conoce también como...",
        options: ["hipogloso", "trigémino", "facial", "abducens"],
        answer: 2 // facial
      },
      // Continuación de las preguntas anteriores...
      {
        question: "La contracción del diafragma es estimulada por el...",
        options: ["nervio espinal", "nervio radial", "nervio frénico", "nervio vago"],
        answer: 2 // nervio frénico
      },
      {
        question: "¿Cuántos cromosomas tiene una espermatide?",
        options: ["8", "13", "23", "46"],
        answer: 2 // 23
      },
      {
        question: "¿Cuál es la longitud aproximada del esófago de un adulto?",
        options: ["35 cm", "25 cm", "15 cm", "45 cm"],
        answer: 1 // 25 cm
      },
      {
        question: "Indique cuál de estas células principales NO pertenece al sistema inmunitario.",
        options: ["Células mioides", "Macrófagos", "Células dendríticas", "Linfocitos T"],
        answer: 0 // Células mioides
      },
      {
        question: "En el plasma se encuentra disuelto...",
        options: [
          "el 20% de CO2 transportado por la sangre",
          "el 100% de CO2 transportado por la sangre",
          "el 80% de CO2 transportado por la sangre",
          "el 50% de CO2 transportado por la sangre"
        ],
        answer: 0 // el 20% de CO2 transportado por la sangre
      },
      {
        question: "Indique el glucocorticoide suprarrenal.",
        options: ["Cortisona", "Dehidroepiandrosterona.", "Aldosterona", "Adrenalina"],
        answer: 0 // Cortisona
      },
      {
        question: "Cuál de las siguientes NO forma parte de las principales estructuras del sistema de conducción del corazón:",
        options: ["Fascículo AV", "Válvula mitral", "Fibras de Purkinje", "Nódulo sinusal"],
        answer: 1 // Válvula mitral
      },
      {
        question: "El apéndice vermiforme está relacionado con:",
        options: [
          "el mantenimiento de la microbiota intestinal",
          "la percepción extrasensorial",
          "los procesos hematopoyéticos",
          "la actividad reproductiva"
        ],
        answer: 0 // el mantenimiento de la microbiota intestinal
      },
      {
        question: "Cómo se denomina el conducto más grande por donde la linfa termina drenando en las venas grandes del cuello:",
        options: ["Conducto abdominal", "Conducto terminal", "Conducto pélvico", "Conducto torácico"],
        answer: 3 // Conducto torácico
      },
      {
        question: "Señale la estructura que sigue a continuación del túbulo contorneado proximal.",
        options: ["Túbulo colector.", "Conducto papilar", "Asa de la nefrona", "Túbulo contorneado distal."],
        answer: 2 // Asa de la nefrona
      },
      {
        question: "La válvula atrioventricular izquierda se conoce como...",
        options: ["válvula aórtica", "válvula mitral", "válvula tricúspide", "válvula pulmonar"],
        answer: 1 // válvula mitral
      },
      {
        question: "En qué etapa de la vida aumenta la secreción de un unto sebáceo (sebo)?",
        options: ["Niñez", "Adolescencia", "Adultez femenina", "Lactancia"],
        answer: 1 // Adolescencia
      },
      {
        question: "Cuál es el potente anticoagulante segregado por los basófilos?",
        options: ["Histamina", "Protrombina", "Heparina", "Eritropoyetina."],
        answer: 2 // Heparina
      },
      {
        question: "Cómo se reabsorben los iones cloruro en el túbulo contorneado proximal?",
        options: [
          "Mediante el consumo de ATP",
          "En forma pasiva",
          "No se reabsorben",
          "Mediante el consumo de GTP"
        ],
        answer: 1 // En forma pasiva
      },
      {
        question: "Señale el catión intracelular más abundante",
        options: ["Bicarbonato", "Sodio", "Proteína", "Potasio"],
        answer: 3 // Potasio
      },
      {
        question: "Elija solo la opción que contenga todas las vitaminas que pueden almacenarse en el hígado",
        options: ["A y D", "A, D, E, K", "A y K", "D, E, K"],
        answer: 1 // A, D, E, K
      },
      {
        question: "El movimiento a través de la mucosa intestinal hasta el medio interno, de las sustancias nutritivas digeridas, es el mecanismo denominado ...",
        options: ["digestión", "motilidad", "regulación", "absorción"],
        answer: 3 // absorción
      },
      {
        question: "Cuál es el ritmo de la filtración glomerular?",
        options: ["180ml/min", "125ml/min", "60ml/min", "250ml/min"],
        answer: 1 // 125ml/min
      },
      {
        question: "Cuál de los siguientes músculos corresponde a la región anterolateral del cuello?",
        options: ["Ancóneo", "Cigomático mayor", "Masetero", "Esternocleidomastoideo"],
        answer: 3 // Esternocleidomastoideo
      },
      {
        question: "Señale el sitio donde se forma el líquido cefalorraquídeo:",
        options: ["Acueducto cerebral", "Plexos coroideos", "Cisterna magna", "Espacio subaracnoideo"],
        answer: 1 // Plexos coroideos
      },
      {
        question: "Qué presenta una persona de grupo sanguíneo O (+)?",
        options: [
          "Tiene antígeno cero",
          "No tiene antígenos",
          "Tiene antígenos A y B",
          "No tiene antígenos ni anti A ni anti B"
        ],
        answer: 1 // No tiene antígenos
      },
      {
        question: "En qué parte del oído interno se encuentra la endolinfa?",
        options: [
          "Canales semicirculares óseos",
          "Caja timpánica",
          "Laberinto membranoso",
          "Laberinto óseo"
        ],
        answer: 2 // Laberinto membranoso
      },
      {
        question: "Cuál de los siguientes huesos tiene cavidades llamadas senos?",
        options: ["Cigomático", "Temporal", "Esfenoides", "Occipital"],
        answer: 2 // Esfenoides
      },
      {
        question: "Cuál es la función de la hormona paratiroidea?",
        options: [
          "Controla la sensación de hambre",
          "Estimula el catabolismo del hueso",
          "Estimula la liberación de hormonas por la adenohipófisis",
          "Inhibe la homeostasis de líquidos"
        ],
        answer: 1 // Estimula el catabolismo del hueso
      },
      {
        question: "La máxima cantidad de aire que podemos respirar, inhalando lo máximo posible y luego espirando por completo se denomina...",
        options: [
          "volumen de reserva espiratorio",
          "capacidad vital",
          "volumen residual",
          "volumen corriente"
        ],
        answer: 1 // capacidad vital
      },
      {
        question: "Cuál es la longitud aproximada del intestino grueso?",
        options: ["1.5m", "1m", "1.2m", "2m"],
        answer: 0 // 1.5m
      },
      {
        question: "Cuál es una función del ovario?",
        options: [
          "Producción de hormona foliculoestimulante",
          "Producción de prolactina",
          "Producción de progesterona",
          "Producción de somatotrofina"
        ],
        answer: 2 // Producción de progesterona
      }
    ];
    
    // Agrega más preguntas aquí
  
    let currentQuestionIndex = 0;
let score = 0;
let selectedOptionIndex = null;

function loadQuestion() {
  const questionElement = document.getElementById("question-text");
  const questionNumberElement = document.getElementById("question-number");
  const optionsContainer = document.getElementById("options-container");
  const backButton = document.getElementById("back-button");
  const submitButton = document.getElementById("submit-button");

  // Cambiar el fondo según el rango de preguntas
  changeBackground();

  // Cargar la pregunta actual
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  questionNumberElement.textContent = `Pregunta ${currentQuestionIndex + 1} de ${questions.length}`;

  // Limpiar opciones anteriores
  optionsContainer.innerHTML = "";

  // Crear opciones con letras A, B, C, D y radio buttons
  currentQuestion.options.forEach((option, index) => {
    const optionWrapper = document.createElement("div");
    optionWrapper.classList.add("option");

    const optionInput = document.createElement("input");
    optionInput.type = "radio";
    optionInput.name = "option";
    optionInput.value = index;
    optionInput.id = `option${index}`;
    optionInput.onclick = () => {
      selectedOptionIndex = index;
      submitButton.disabled = false; // Habilitar botón Enviar cuando se selecciona una opción
    };

    const optionLabel = document.createElement("label");
    optionLabel.htmlFor = `option${index}`;
    optionLabel.textContent = `${String.fromCharCode(65 + index)}: ${option}`;

    optionWrapper.appendChild(optionInput);
    optionWrapper.appendChild(optionLabel);
    optionsContainer.appendChild(optionWrapper);
  });

  // Activar/desactivar el botón "Regresar"
  backButton.disabled = currentQuestionIndex === 0;
  submitButton.disabled = true; // Desactivar botón "Enviar" hasta seleccionar una opción
}

function submitAnswer() {
  if (selectedOptionIndex !== null) {
    const currentQuestion = questions[currentQuestionIndex];

    // Verificar si la opción seleccionada es correcta
    if (selectedOptionIndex === currentQuestion.answer) {
      score++;
    }

    // Reiniciar la selección
    selectedOptionIndex = null;

    // Pasar a la siguiente pregunta o mostrar resultados si es la última
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }
}

function goBack() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
}

function showResults() {
  const questionContainer = document.querySelector(".question-container");
  questionContainer.innerHTML = `<h2>Cuestionario terminado</h2><p>Puntuación: ${score} de ${questions.length}</p>`;
}

function changeBackground() {
  const body = document.body;
  if (currentQuestionIndex < 20) {
    body.className = "bg1";
  } else if (currentQuestionIndex < 40) {
    body.className = "bg2";
  } else if (currentQuestionIndex < 60) {
    body.className = "bg3";
  } else if (currentQuestionIndex < 80) {
    body.className = "bg4";
  } else {
    body.className = "bg5";
  }
}

// Cargar la primera pregunta al iniciar
loadQuestion();