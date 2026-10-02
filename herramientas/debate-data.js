/* Banco de preguntas provocadoras del debate
   Salud Internacional (SI) vs. Salud Global (SG) — implicaciones de la modernidad para la salud pública.
   Lo usan dos páginas: debate.html (sección pública, preparación) y arena.html (arena de juego, con clave docente).
   Cada pregunta tiene: eje de tensión, la pregunta, una pista por cada postura y las fuentes
   (los números remiten a DEBATE_FUENTES, al final del archivo).
   El docente puede añadir preguntas propias desde la configuración de la arena: se guardan solo en su navegador. */
window.DEBATE_EQUIPOS = {
  A: { nombre: 'Salud Internacional', corto: 'SI', lema: 'Estados, soberanía y cooperación' },
  B: { nombre: 'Salud Global', corto: 'SG', lema: 'Interdependencia, redes y equidad planetaria' }
};

window.DEBATE_PREGUNTAS = [
  {
    id: 'quien-decide',
    eje: 'Poder y agenda',
    icono: '🧭',
    q: 'Si la salud es «global», ¿por qué las decisiones sobre ella se siguen tomando en Ginebra, Washington o Seattle y no en Quibdó, Leticia o Puerto Príncipe?',
    si: 'El marco internacional al menos reconoce a cada Estado como sujeto con voz y voto en la Asamblea Mundial de la Salud. Sin ese piso, ¿quién representa a Quibdó?',
    sg: 'La salud global abrió la mesa a ONG, redes de pacientes y comunidades afectadas que la diplomacia entre cancillerías dejaba por fuera.',
    fuentes: [5, 10, 6]
  },
  {
    id: 'renombrar',
    eje: 'Historia',
    icono: '🏷️',
    q: '¿La salud global supera a la salud internacional… o es el mismo proyecto con un nombre más amable?',
    si: 'Brown, Cueto y Fee muestran que el giro hacia lo «global» en los años 90 coincidió con la pérdida de liderazgo de la OMS frente al Banco Mundial: cambiar de nombre también fue una estrategia institucional.',
    sg: 'La interdependencia es real: pandemias, clima, comercio y migración no esperan permiso de las fronteras. Un marco pensado para Estados aislados ya no describe el mundo.',
    fuentes: [3, 7, 12]
  },
  {
    id: 'herencia-colonial',
    eje: 'Herencia colonial',
    icono: '⚓',
    q: 'La salud internacional nació protegiendo puertos y rutas comerciales de las potencias. Defenderla hoy, ¿es defender la soberanía del Sur o defender a su abuela colonial?',
    si: 'América Latina resignificó el campo: la salud internacional Sur-Sur propone un giro decolonial que piensa la salud desde los propios pueblos y Estados de la región.',
    sg: 'Ninguno de los dos marcos está libre de esa herencia; justamente el debate sobre «decolonizar la salud global» la reconoce y la pone en el centro.',
    fuentes: [12, 13, 6]
  },
  {
    id: 'filantropia',
    eje: 'Dinero y democracia',
    icono: '💰',
    q: 'Cuando una fundación privada figura entre los mayores financiadores de la OMS, ¿a quién le rinde cuentas? ¿Quién votó por ella?',
    si: 'Los Estados, con todos sus defectos, tienen mandato democrático y responden ante su ciudadanía. El multilateralismo debería financiarse con recursos públicos, no con la voluntad de un donante.',
    sg: 'Sin esos recursos muchos programas de vacunación y control de enfermedades no existirían. El reto es gobernar a los nuevos actores, no expulsarlos.',
    fuentes: [5, 10]
  },
  {
    id: 'vacunas',
    eje: 'Pandemia',
    icono: '💉',
    q: 'En la COVID-19, ¿qué falló: la salud global, que prometió vacunas para todos, o la salud internacional, que dejó a cada Estado comprar para sí?',
    si: 'Cada Estado protegió primero a su población: eso produce el sistema interestatal. La lección es fortalecer la capacidad soberana —y regional— de producir vacunas y medicamentos.',
    sg: 'Mecanismos como COVAX mostraron el camino de los bienes públicos globales; fracasaron por el nacionalismo de los países ricos, no por la idea de solidaridad global.',
    fuentes: [10, 6, 8]
  },
  {
    id: 'destiempos',
    eje: 'Modernidad',
    icono: '⏳',
    q: 'Martín-Barbero habla de modernidades «a destiempo» en América Latina. ¿La salud global llega a nuestros territorios como modernidad… o como un nuevo destiempo?',
    si: 'Pensar desde lo nacional permite reconocer los tiempos, saberes y culturas propias de cada país, y negociar con el mundo desde ellos, no a pesar de ellos.',
    sg: 'Lo global también trae tecnologías, datos y redes que pueden acelerar respuestas en territorios que el propio Estado nacional ha olvidado durante décadas.',
    fuentes: [2, 8]
  },
  {
    id: 'colombia',
    eje: 'Colombia',
    icono: '🇨🇴',
    q: 'Quevedo describe una salud pública colombiana atrapada «entre los intereses internacionales y el desinterés nacional». ¿Sigue siendo así? ¿Cuál de los dos marcos nos saca de esa trampa?',
    si: 'La salida al desinterés nacional es recuperar la rectoría del Estado y exigir una cooperación entre iguales, no seguir importando prioridades.',
    sg: 'Mientras el Estado no responde, las redes globales de vigilancia, financiamiento y academia sostienen lo que queda en pie. Renunciar a ellas es dejar solo al territorio.',
    fuentes: [11, 1]
  },
  {
    id: 'fronteras',
    eje: 'Migración',
    icono: '🧳',
    q: 'Una persona migrante que cruza el Darién o la frontera colombo-venezolana: ¿es un asunto de salud internacional (entre Estados) o de salud global (de la humanidad)? ¿Cuál la protege de verdad?',
    si: 'Solo los Estados garantizan derechos exigibles: afiliación, acceso a servicios, regularización. Lo «global» no expide documentos ni abre hospitales.',
    sg: 'La migración desborda cualquier frontera: exige responsabilidad compartida y respuestas que no dependan de la voluntad de un solo gobierno.',
    fuentes: [10, 8]
  },
  {
    id: 'reduccionismo',
    eje: 'Reduccionismo biomédico',
    icono: '🔬',
    q: '¿Por qué la agenda global se entusiasma más con una vacuna o una app que con el agua potable, la tierra o el salario? ¿Es casualidad?',
    si: 'La tradición latinoamericana, cercana a la medicina social, pone en el centro las condiciones de vida, el desarrollo y la soberanía, no solo la tecnología.',
    sg: 'Las intervenciones costo-efectivas salvan vidas medibles hoy; la transformación estructural puede tardar generaciones. ¿Esperamos mientras tanto?',
    fuentes: [7, 9]
  },
  {
    id: 'alma-ata',
    eje: 'APS',
    icono: '🏥',
    q: 'En 1978 Alma-Ata prometió «Salud para todos en el año 2000»; poco después llegó la APS selectiva. ¿Fue una traición de la salud internacional o el primer ensayo de la salud global?',
    si: 'Alma-Ata fue el punto más alto del multilateralismo entre Estados: un acuerdo político sobre el derecho a la salud. La APS selectiva fue su recorte técnico.',
    sg: 'La APS selectiva anticipó la lógica de metas e indicadores comparables que hoy permite medir —y exigir— avances entre países.',
    fuentes: [9, 12]
  },
  {
    id: 'quien-escribe',
    eje: '¿Quién produce el saber?',
    icono: '✍️',
    q: '¿Quién escribe la salud global? Si las revistas, los programas y el financiamiento están mayoritariamente en el Norte, ¿el Sur es sujeto de conocimiento o «terreno de campo»?',
    si: 'La salud internacional Sur-Sur reivindica producir conocimiento desde aquí, con categorías propias y no traducidas.',
    sg: 'La crítica decolonial nació dentro de la propia salud global, y su definición —equidad para todas las personas del mundo— obliga a horizontalizar.',
    fuentes: [6, 14, 13]
  },
  {
    id: 'definicion',
    eje: 'Definiciones',
    icono: '📖',
    q: 'Koplan y colegas definen la salud global como un área que prioriza la equidad en salud para todas las personas del mundo. Una definición tan amplia, ¿lo abarca todo… o no compromete a nadie?',
    si: 'Una definición sin sujeto político responsable se vuelve retórica. La salud internacional al menos dice quién debe responder: los Estados.',
    sg: 'La amplitud es su fuerza: reúne disciplinas, sectores y países alrededor de la equidad, más allá de los intereses de cada cancillería.',
    fuentes: [4, 1]
  },
  {
    id: 'extractivismo',
    eje: 'Extractivismo',
    icono: '⛏️',
    q: 'Una multinacional minera financia un programa de salud en el mismo territorio que contamina. ¿Eso es salud global, salud internacional… o ninguna de las dos?',
    si: 'Sin un Estado fuerte que regule y ejerza soberanía sobre sus recursos, la empresa decide qué es salud y para quién.',
    sg: 'Las cadenas de valor son globales; los estándares, la vigilancia ciudadana y la responsabilidad corporativa también deben serlo.',
    fuentes: [8, 5, 2]
  },
  {
    id: 'tu-territorio',
    eje: 'Tu territorio',
    icono: '📍',
    q: 'Piensa en tu municipio: ¿qué programa de salud llegó «de afuera»? ¿Quién lo diseñó, quién lo pagó y qué pasó cuando se acabó el financiamiento?',
    si: 'Si el programa desapareció con el dinero, el problema es de soberanía: lo que no asume el Estado no es sostenible.',
    sg: 'Si el programa dejó capacidades, datos o redes, lo global sembró algo que lo nacional no había querido sembrar.',
    fuentes: [11, 14]
  }
];

/* Cartas de réplica: frases cortas para tensionar a la postura contraria. */
window.DEBATE_TENSORES = [
  '¿Compartidas por quién?',
  'Denos un caso real, no hipotético.',
  '¿Quién queda sin voz en su modelo?',
  '¿Quién paga… y quién decide?',
  '¿Qué pasa cuando se acaba el financiamiento?',
  '¿Qué comunidad sale perdiendo si su enfoque se aplica sin ajustes?',
  'Eso describe el problema; ¿cómo lo transforma?'
];

/* Fuentes (verificadas en PubMed cuando están indexadas; las demás son de la bibliografía del curso). */
window.DEBATE_FUENTES = {
  1:  'Rojas Ochoa F. Debate teórico sobre salud pública y salud internacional. Rev Cubana Salud Pública. 2019;45(1). (Lectura de la sesión 3)',
  2:  'Martín-Barbero J. Modernidades y destiempos latinoamericanos. Nómadas. (8). (Lectura de la sesión 3)',
  3:  'Brown TM, Cueto M, Fee E. The World Health Organization and the transition from «international» to «global» public health. Am J Public Health. 2006;96(1):62–72. PMID 16322464.',
  4:  'Koplan JP, Bond TC, Merson MH, et al. Towards a common definition of global health. Lancet. 2009;373(9679):1993–1995. PMID 19493564.',
  5:  'Birn AE. Philanthrocapitalism, past and present: the Rockefeller Foundation, the Gates Foundation, and the setting(s) of the international/global health agenda. Hypothesis. 2014;12(1):e8. PMID 25067900.',
  6:  'Abimbola S, Pai M. Will global health survive its decolonisation? Lancet. 2020;396(10263):1627–1628. PMID 33220735.',
  7:  'Holst J. Global Health – emergence, hegemonic trends and biomedical reductionism. Global Health. 2020;16:42. PMID 32375801.',
  8:  'Franco-Giraldo Á. Salud global: una visión latinoamericana. Rev Panam Salud Pública. 2016;39(2):128–136. PMID 27754524.',
  9:  'Cueto M. The origins of primary health care and selective primary health care. Am J Public Health. 2004;94(11):1864–1874. PMID 15514221.',
  10: 'Frenk J, Moon S. Governance challenges in global health. N Engl J Med. 2013;368(10):936–942.',
  11: 'Quevedo E, Quevedo MC. La salud pública en Colombia: cien años atrapada entre los intereses internacionales y el desinterés nacional. Nova et Vetera. 2001;95(588):5–29.',
  12: 'Packard RM. A history of global health: interventions into the lives of other peoples. Baltimore: Johns Hopkins University Press; 2016.',
  13: 'Basile G. Salud internacional Sur-Sur: hacia un giro decolonial y epistemológico. Grupo de Trabajo Salud Internacional, CLACSO; 2018.',
  14: 'Feierman S, Kleinman A, Stewart K, Farmer P, Das V. Anthropology, knowledge-flows and global health. Glob Public Health. 2010;5(2):122–128.'
};

/* Clave docente: solo se guarda su huella SHA-256, nunca el texto (misma clave que la arena de Determinantes). */
window.DEBATE_CLAVE_SHA256 = '46ee352dd9e53fd109608a46e2394ab830cf482701bf13fff789010984c1cb05';

/* Verifica la clave. Usa Web Crypto si existe; si no (contextos no seguros), un SHA-256 en JS puro. */
window.debateVerificarClave = function (texto) {
  var limpio = String(texto || '').trim().toLowerCase();
  function hex(buf) {
    return Array.prototype.map.call(new Uint8Array(buf), function (b) { return ('0' + b.toString(16)).slice(-2); }).join('');
  }
  if (window.crypto && window.crypto.subtle && window.TextEncoder) {
    return window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(limpio))
      .then(function (buf) { return hex(buf) === window.DEBATE_CLAVE_SHA256; });
  }
  return Promise.resolve(sha256(limpio) === window.DEBATE_CLAVE_SHA256);

  function sha256(ascii) {
    function rr(v, a) { return (v >>> a) | (v << (32 - a)); }
    var maxWord = Math.pow(2, 32), result = '', words = [], k = [], hash = [], primeCounter = 0, isComposite = {};
    ascii = unescape(encodeURIComponent(ascii));
    var asciiBitLength = ascii.length * 8;
    for (var candidate = 2; primeCounter < 64; candidate++) {
      if (!isComposite[candidate]) {
        for (var i = 0; i < 313; i += candidate) isComposite[i] = candidate;
        if (primeCounter < 8) hash[primeCounter] = (Math.pow(candidate, .5) * maxWord) | 0;
        k[primeCounter++] = (Math.pow(candidate, 1 / 3) * maxWord) | 0;
      }
    }
    ascii += '\x80';
    while (ascii.length % 64 - 56) ascii += '\x00';
    for (i = 0; i < ascii.length; i++) words[i >> 2] |= ascii.charCodeAt(i) << ((3 - i) % 4) * 8;
    words[words.length] = ((asciiBitLength / maxWord) | 0);
    words[words.length] = (asciiBitLength);
    for (var j = 0; j < words.length;) {
      var w = words.slice(j, j += 16), oldHash = hash;
      hash = hash.slice(0, 8);
      for (i = 0; i < 64; i++) {
        var w15 = w[i - 15], w2 = w[i - 2], a = hash[0], e = hash[4];
        var temp1 = hash[7] + (rr(e, 6) ^ rr(e, 11) ^ rr(e, 25)) + ((e & hash[5]) ^ ((~e) & hash[6])) + k[i] +
          (w[i] = (i < 16) ? w[i] : (w[i - 16] + (rr(w15, 7) ^ rr(w15, 18) ^ (w15 >>> 3)) + w[i - 7] + (rr(w2, 17) ^ rr(w2, 19) ^ (w2 >>> 10))) | 0);
        var temp2 = (rr(a, 2) ^ rr(a, 13) ^ rr(a, 22)) + ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));
        hash = [(temp1 + temp2) | 0].concat(hash);
        hash[4] = (hash[4] + temp1) | 0;
      }
      for (i = 0; i < 8; i++) hash[i] = (hash[i] + oldHash[i]) | 0;
    }
    for (i = 0; i < 8; i++) for (j = 3; j + 1; j--) { var b = (hash[i] >> (j * 8)) & 255; result += ((b < 16) ? 0 : '') + b.toString(16); }
    return result;
  }
};
