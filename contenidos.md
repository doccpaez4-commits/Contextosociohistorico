---
layout: default
title: Contenidos
---

<h1>Programación por sesiones</h1>
<p class="lede">9 sesiones · {{ site.data.curso.horario_general }} · {{ site.data.curso.salon }}</p>

<div class="callout">
  El recorrido de la asignatura transita de la <strong>burbuja cartesiana</strong> (el pensamiento causal, individual y fragmentado con el que solemos llegar a la salud pública) hacia la <strong>comprensión del contexto socio histórico y cultural</strong> — relacional, crítico y situado — de los procesos de salud-enfermedad.
</div>

<div class="timeline-strip">
  <a href="#sesion-1"><span class="tl-icon">1</span><span class="tl-label">Burbuja<br>cartesiana</span></a>
  <a href="#sesion-2" class="highlight"><span class="tl-icon">2</span><span class="tl-label">Carta a<br>Lucas 🎯</span></a>
  <a href="#sesion-3" class="highlight"><span class="tl-icon">3</span><span class="tl-label">Debate<br>🎯</span></a>
  <a href="#sesion-4"><span class="tl-icon">4</span><span class="tl-label">APS e<br>inequidades</span></a>
  <a href="#sesion-5"><span class="tl-icon">5</span><span class="tl-label">Sistemas<br>de salud</span></a>
  <a href="#sesion-6"><span class="tl-icon">6</span><span class="tl-label">Determinación<br>social</span></a>
  <a href="#sesion-7"><span class="tl-icon">7</span><span class="tl-label">Medicina<br>social</span></a>
  <a href="#sesion-8"><span class="tl-icon">8</span><span class="tl-label">Trabajo<br>colaborativo</span></a>
  <a href="#sesion-9" class="highlight"><span class="tl-icon">9</span><span class="tl-label">Presentación<br>final 🎯</span></a>
</div>

{% for s in site.data.curso.sesiones %}
<div class="unit-card" id="sesion-{{ s.numero }}">
  <h3>Sesión {{ s.numero }} · {{ s.fecha }}</h3>

  {% case s.numero %}

  {% when 1 %}
  <p><strong>La burbuja cartesiana.</strong> Sesión de apertura: discusión y ejercicios prácticos sobre desde dónde se para el pensamiento en salud pública, por qué la salud pública, y la importancia de la relacionalidad para comprender los procesos de salud más allá del causalismo cartesiano con el que solemos aprender sobre "salud y factores".</p>
  <p><em>Lectura principal:</em> Restrepo, D. A. (2011). <a href="{{ '/bibliografia.html' | relative_url }}">La salud pública como ciencia social: reflexiones en torno a las posibilidades de una salud pública comprensiva</a>.</p>

  {% when 2 %}
  <p><strong>Aspectos históricos de la salud pública y funciones esenciales de la salud pública.</strong> Se amplía la comprensión de los modelos en salud (unicausal, multicausal, etc.) y los momentos históricos — las "eras" de comprensión de la salud pública hasta hoy. Se introduce la idea de que todas las personas tienen competencias en salud pública, y se revisan las funciones del profesional de la salud en Colombia.</p>
  <div class="update-block" style="background:#eef6ff; border-color:#bfdcff; border-left-color:#2563eb;">
    <h3 style="color:#1d4ed8;">🎯 Actividad evaluada — Corte 1 (30%)</h3>
    <p><strong>Carta-audio a Lucas.</strong> Reflexión personal, no textual, inspirada en la canción <a href="https://www.youtube.com/watch?v=pbV099sJVN8" target="_blank" rel="noopener">"La Historia de Lucas"</a> sobre el tránsito de la burbuja cartesiana a la relacionalidad. Ver el diseño completo de la actividad y su rúbrica SOLO en <a href="{{ '/rubricas.html' | relative_url }}">Rúbricas SOLO</a>.</p>
  </div>

  {% when 3 %}
  <p><strong>Salud pública contemporánea: modernidad, globalización y salud internacional.</strong> Se profundiza en el aspecto cultural y social de la salud — la salud como ciencia social, la modernidad y el extractivismo en América Latina.</p>
  <p><em>Lecturas:</em></p>
  <ul>
    <li>Martín-Barbero, J. <a href="https://nomadas.ucentral.edu.co/nomadas/pdf/nomadas_8/08_2M_Modernidadesydestiempos.pdf" target="_blank" rel="noopener">Modernidades y destiempos latinoamericanos</a>. Revista Nómadas, 8.</li>
    <li>Rojas Ochoa, F. (2019). <a href="{{ '/bibliografia.html' | relative_url }}">Debate teórico sobre salud pública y salud internacional</a>. Revista Cubana de Salud Pública, 45(1).</li>
  </ul>
  <div class="update-block" style="background:#eef6ff; border-color:#bfdcff; border-left-color:#2563eb;">
    <h3 style="color:#1d4ed8;">🎯 Actividad evaluada — Corte 2 (30%)</h3>
    <p><strong>Debate estructurado:</strong> Salud Internacional vs. Salud Global — implicaciones de la modernidad para la salud pública. Se realiza con la <a href="{{ '/herramientas/debate.html' | relative_url }}">herramienta de debate interactiva</a> del curso (reglas, temporizador de apertura y réplicas). Rúbrica en <a href="{{ '/rubricas.html' | relative_url }}">Rúbricas SOLO</a>.</p>
  </div>

  {% when 4 %}
  <p><strong>Salud pública, APS e inequidades en salud.</strong> Se profundiza en las inequidades en salud y se revisa el informe <em>"Cuando la muerte es evitable"</em> del Instituto Nacional de Salud (INS). La Atención Primaria en Salud (APS) se aborda solo de forma introductoria, pues se desarrolla en profundidad en otra asignatura del programa.</p>
  <p><em>Lectura latinoamericana:</em> Comisión de la OPS sobre Equidad y Desigualdades en Salud en las Américas (2021). <a href="https://journal.paho.org/es/articulos/sociedades-justas-nueva-vision-equidad-salud-region-americas-despues-covid-19" target="_blank" rel="noopener">Sociedades justas: una nueva visión de la equidad en la salud en la Región de las Américas después de la COVID-19</a>. Revista Panamericana de Salud Pública, 45.</p>

  {% when 5 %}
  <p><strong>Salud pública y sistemas de salud.</strong> Se discute el funcionamiento del sistema de salud colombiano y, en especial, el reto actual que enfrenta: la tensión de poder que acarrea su modificación y el papel del neoliberalismo en su configuración.</p>
  <p><em>Lectura:</em> De Groote, T., De Paepe, P. &amp; Unger, J-P. (2008). <a href="https://revistas.udea.edu.co/index.php/fnsp/article/view/217" target="_blank" rel="noopener">Las consecuencias del neoliberalismo. Colombia: prueba in vivo de la privatización del sector salud en países en desarrollo</a>. Revista Facultad Nacional de Salud Pública, 25(1).</p>

  {% when 6 %}
  <p><strong>Introducción a modelos comprensivos en salud.</strong> Se profundiza en dos lentes para analizar la salud: los antiguos "factores" —hoy determinantes— y la determinación social.</p>
  <p><em>Lectura (debate conceptual):</em> Morales-Borrero, C. et al. (2013). Determinación social o determinantes sociales: diferencias conceptuales e implicaciones praxiológicas. Revista de Salud Pública, 15(6), 797-808.</p>

  {% when 7 %}
  <p><strong>Corrientes alternativas en salud pública: Medicina Social Latinoamericana y Salud Colectiva.</strong> Se profundiza en la salud colectiva y el movimiento latinoamericano de medicina social. Aquí inicia el reto de la sesión final.</p>
  <div class="callout">
    Arranca el <strong>Análisis de la problemática de los territorios</strong>, el trabajo final del curso, que integra los aprendizajes de todos los módulos. Solo se evalúa si el estudiante logra <strong>romper el causalismo</strong> — no si aplica "correctamente" la determinación social.
  </div>

  {% when 8 %}
  <p><strong>Sesión de trabajo colaborativo.</strong> Espacio de asesoría y trabajo en equipo para avanzar en el análisis de la problemática territorial, de cara a la presentación final de la sesión 9.</p>

  {% when 9 %}
  <p><strong>Presentación final.</strong> Análisis de la problemática de los territorios — cierre del curso.</p>
  <div class="update-block" style="background:#eef6ff; border-color:#bfdcff; border-left-color:#2563eb;">
    <h3 style="color:#1d4ed8;">🎯 Actividad evaluada — Corte 3 (40%)</h3>
    <p>Presentación final del análisis. El estudiante debe:</p>
    <ol>
      <li>Elegir un municipio, ciudad o departamento.</li>
      <li>Identificar una problemática relevante para el territorio a través del ASIS (Análisis de Situación en Salud), DANE u otras bases de datos oficiales — de preferencia con datos actualizados.</li>
      <li>Analizar la problemática a la luz de la determinación social de la salud y la salud colectiva, con enfoque crítico.</li>
      <li>Presentar la problemática con apoyo de recursos audiovisuales.</li>
    </ol>
    <p>Ver la rúbrica SOLO completa en <a href="{{ '/rubricas.html' | relative_url }}">Rúbricas SOLO</a>.</p>
  </div>

  {% endcase %}
</div>
{% endfor %}
