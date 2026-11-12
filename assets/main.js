(function(){
  "use strict";
  var root = document.documentElement;
  var mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var reduceMotion = mqReduce.matches || root.classList.contains('a11y-motion');

  /* ============================================================
     I18N — Spanish (default) / English dictionary + toggle.
     Every key that appears in cms/content/schema.php is editable in the
     Content Manager (/admin); values edited there are published into
     index.html as an inert JSON block (#siteContent) and merged below.
     tools/extract-defaults.mjs regenerates cms/content/defaults.php from
     this object, so this is the single source of the approved copy.
     ============================================================ */
  var I18N = {
    es: {
      "meta.title": "Nivela Desarrollos · Apartamentos y construcción en Guatemala",
      "meta.description": "Desarrollos residenciales en Zona 15, Zona 16 y Carretera a El Salvador. Apartamentos desde Q 985,000, financiamiento bancario y construcción a la medida.",
      "og.locale": "es_GT",
      "brand.aria": "Nivela Desarrollos, ir al inicio",
      "lang.toggle_aria": "Cambiar idioma a inglés",
      "lang.switch_to": "English",
      "menu.open_aria": "Abrir menú",
      "menu.close_aria": "Cerrar menú",
      "mobilenav.aria": "Menú principal",
      "skip": "Saltar al contenido",
      "backtotop.aria": "Volver arriba",
      "a11y.new_tab": " (se abre en una pestaña nueva)",
      "a11y.open_aria": "Opciones de accesibilidad",
      "a11y.close": "Listo",
      "a11y.size_small": "Texto normal",
      "a11y.size_medium": "Texto grande",
      "a11y.size_large": "Texto muy grande",
      "actions.call": "Llamar",
      "actions.whatsapp": "WhatsApp",
      "actions.directions": "Cómo llegar",
      "actions.aria": "Acciones rápidas",
      "whatsapp.aria": "Escríbanos por WhatsApp (se abre en una pestaña nueva)",
      "contact.map_aria": "Abrir la ubicación de la sala de ventas en Google Maps (se abre en una pestaña nueva)",
      "nav.services": "Servicios",
      "nav.maternity": "Proyecto destacado",
      "nav.facilities": "Amenidades",
      "nav.patients": "Clientes",
      "nav.insurance": "Financiamiento",
      "nav.contact": "Contacto",
      "nav.emergency": "Llamar",
      "hero.eyebrow": "Desarrollo inmobiliario y construcción",
      "hero.title": "Desarrollo y construcción de <em>vivienda</em> en Guatemala",
      "hero.desc": "Apartamentos y casas en Zona 15, Zona 16 y Carretera a El Salvador. Trabajamos con presupuestos detallados, informes mensuales de avance y acompañamiento en su crédito.",
      "hero.cta1": "Agendar una visita",
      "hero.cta2": "Escribir por WhatsApp",
      "hero.status": "Sala de ventas abierta de lunes a sábado",
      "hero.badge1": "Precalificación bancaria sin costo",
      "hero.badge2": "Enganche en cuotas",
      "hero.badge3": "Garantía por escrito",
      "quick.emergency": "Llamar a ventas",
      "quick.whatsapp": "WhatsApp directo",
      "quick.visits": "Sala de ventas",
      "quick.directions": "Cómo llegar",
      "quick.aria": "Información rápida",
      "stat1.value": "18",
      "stat1.label": "años construyendo",
      "stat2.value": "34",
      "stat2.label": "proyectos entregados",
      "stat3.value": "1,250",
      "stat3.label": "unidades entregadas",
      "stat4.value": "5",
      "stat4.label": "proyectos en venta",
      "services.eyebrow": "Servicios",
      "services.title": "Del diseño a la entrega de llaves",
      "services.desc": "Un solo equipo responsable de la planificación, la construcción y la entrega, con presupuestos detallados y supervisión profesional en cada etapa.",
      "services.cta": "Consultar por WhatsApp",
      "services.more": "Ver más",
      "services.more_aria": "Ver más sobre {name}",
      "services.call": "Llamar",
      "services.close": "Cerrar",
      "service1.title": "Desarrollo inmobiliario",
      "service1.desc": "Apartamentos y casas en zonas residenciales de la ciudad, con planes de pago y acompañamiento en el crédito.",
      "service1.more": "Desarrollamos proyectos residenciales completos: estudio de mercado, diseño, licencias, construcción, venta y administración inicial.\n\nCada proyecto se comercializa con precios publicados, planes de enganche en cuotas y precalificación con bancos aliados.\n\nAl recibir su unidad, cuenta con un manual del propietario y un período de garantía por escrito.",
      "service2.title": "Construcción residencial",
      "service2.desc": "Construcción de viviendas unifamiliares en su terreno, con presupuesto cerrado y cronograma de obra.",
      "service2.more": "Construimos su casa a partir de su diseño o del que desarrollemos con usted. Antes de iniciar, recibe un presupuesto detallado por partidas y un cronograma de obra.\n\nUn ingeniero residente supervisa la obra y usted recibe reportes periódicos con fotografías del avance.\n\nTrabajamos con materiales de proveedores reconocidos y entregamos la documentación de las instalaciones al finalizar.",
      "service3.title": "Construcción comercial e industrial",
      "service3.desc": "Oficinas, locales comerciales, bodegas y naves industriales, con estructura metálica o de concreto.",
      "service3.more": "Ejecutamos proyectos comerciales e industriales de pequeña y mediana escala: oficinas, locales, bodegas y naves con estructura metálica o de concreto.\n\nCoordinamos los estudios de suelo, el cálculo estructural y las instalaciones especiales que requiera su operación.\n\nPlanificamos la obra para reducir el tiempo de interrupción de su negocio.",
      "service4.title": "Remodelación y ampliaciones",
      "service4.desc": "Remodelación de cocinas, baños y áreas sociales, ampliaciones y segundos niveles con revisión estructural.",
      "service4.more": "Renovamos espacios habitados con un plan de trabajo que protege sus pertenencias y mantiene el orden en la obra.\n\nPara ampliaciones y segundos niveles, revisamos primero la estructura existente y tramitamos la licencia municipal correspondiente.\n\nLe presentamos opciones de acabados con precios, para que decida con información clara.",
      "service5.title": "Diseño arquitectónico",
      "service5.desc": "Anteproyecto, planos constructivos y visualizaciones 3D, con diseño estructural e instalaciones.",
      "service5.more": "Desarrollamos el diseño de su proyecto desde el anteproyecto hasta los planos constructivos, con visualizaciones 3D para que conozca el resultado antes de construir.\n\nEl juego de planos incluye arquitectura, estructura e instalaciones eléctricas, hidráulicas y sanitarias.\n\nLos planos quedan listos para el trámite de licencia y para cotizar la obra.",
      "service6.title": "Planificación y licencias",
      "service6.desc": "Presupuestos por partidas, cronogramas y gestión de licencias municipales de construcción.",
      "service6.more": "Elaboramos presupuestos por partidas, cronogramas y flujos de caja para la obra.\n\nGestionamos la licencia de construcción ante la municipalidad y los requisitos de las entidades que correspondan.\n\nCon esta información usted puede solicitar financiamiento o comparar ofertas.",
      "service7.title": "Supervisión de obra",
      "service7.desc": "Supervisión técnica independiente, control de calidad y reportes de avance para propietarios e inversionistas.",
      "service7.more": "Si ya tiene un contratista, le ofrecemos supervisión técnica independiente para verificar que la obra cumpla con los planos, las especificaciones y el presupuesto.\n\nRealizamos visitas programadas, control de calidad de materiales y estimaciones de avance para autorizar pagos.\n\nRecibe reportes con fotografías y recomendaciones claras.",
      "service8.title": "Obra gris",
      "service8.desc": "Cimentación, estructura, muros y losas, ejecutados con control de calidad de concreto y acero.",
      "service8.more": "Ejecutamos la obra gris de su proyecto: cimentación, columnas, vigas, muros y losas.\n\nControlamos la calidad del concreto con pruebas de resistencia y verificamos el armado antes de cada fundición.",
      "service9.title": "Acabados e interiores",
      "service9.desc": "Pisos, cielos, carpintería, cocinas y baños, con muestras de materiales y precios por opción.",
      "service9.more": "Le presentamos muestras de pisos, revestimientos, carpintería y grifería con su precio por opción.\n\nCoordinamos a los instaladores y revisamos los acabados antes de la entrega.\n\nPuede elegir un paquete de acabados o personalizarlo.",
      "service10.title": "Instalaciones",
      "service10.desc": "Instalaciones eléctricas, hidráulicas, sanitarias y de iluminación, con planos actualizados al finalizar.",
      "service10.more": "Diseñamos y ejecutamos instalaciones eléctricas, hidráulicas, sanitarias y de iluminación para vivienda y comercio.\n\nRealizamos pruebas de presión y de carga antes de cerrar muros y cielos.\n\nAl finalizar, entregamos los planos de instalaciones tal como quedaron construidas.",
      "service11.title": "Mantenimiento de edificios",
      "service11.desc": "Mantenimiento preventivo y correctivo para condominios, oficinas y residencias.",
      "service11.more": "Ofrecemos planes de mantenimiento preventivo para condominios, oficinas y residencias: impermeabilización, pintura, instalaciones y áreas comunes.\n\nAtendemos también reparaciones puntuales, con diagnóstico y cotización previa.",
      "maternity.eyebrow": "Proyecto destacado",
      "maternity.title": "Torre Ceiba, <em>apartamentos</em> en Zona 15",
      "maternity.desc": "Dieciséis niveles con apartamentos de 2 y 3 habitaciones, terraza social y vista hacia el valle. La estructura está terminada y la entrega está programada para diciembre de 2027. El enganche puede pagarse en cuotas.",
      "maternity.cta": "Solicitar información",
      "projects.cta": "Descargar brochure",
      "projects.cta_aria": "Descargar el brochure del proyecto en PDF",
      "mfeat1.title": "Desde Q 985,000",
      "mfeat1.desc": "Apartamentos de 68 a 112 m², con 1 o 2 parqueos y bodega según el modelo.",
      "mfeat2.title": "Enganche en 24 cuotas",
      "mfeat2.desc": "Reserve con Q 10,000 y complete el enganche durante la construcción, sin intereses.",
      "mfeat3.title": "Amenidades completas",
      "mfeat3.desc": "Rooftop con área social, gimnasio, área infantil, coworking y lobby con seguridad las 24 horas.",
      "mfeat4.title": "Construcción sostenible",
      "mfeat4.desc": "Paneles solares para áreas comunes, captación de agua de lluvia e iluminación LED.",
      "bag.title": "Documentos para precalificar",
      "bag.desc": "Marque lo que ya tiene listo. Con estos documentos, el banco puede darle una respuesta más rápida.",
      "bag1": "DPI vigente",
      "bag2": "Constancia de ingresos o de trabajo",
      "bag3": "Estados de cuenta de los últimos 3 meses",
      "bag4": "Recibo de luz, agua o teléfono reciente",
      "bag5": "Constancia de inscripción en el RTU",
      "bag6": "Declaración del ISR (si es independiente)",
      "bag7": "Referencias personales y bancarias",
      "bag8": "Formulario de solicitud del banco",
      "bag9": "",
      "bag10": "",
      "bag.note": "Cada banco puede pedir requisitos adicionales. Le orientamos sin costo.",
      "bag.progress": "{n} de {total} listos",
      "about.eyebrow": "Quiénes somos",
      "about.title": "Construimos con orden y transparencia",
      "about.desc": "Nivela es una empresa guatemalteca de desarrollo inmobiliario y construcción. Desde la planificación hasta la entrega de llaves, trabajamos con presupuestos detallados, cronogramas realistas e informes de avance, para que cada cliente sepa en qué etapa está su proyecto y qué sigue. Nuestro equipo de ingenieros y arquitectos supervisa cada obra en persona.",
      "about.art_caption": "Planificación, construcción y entrega con un solo equipo responsable.",
      "about.mission_title": "Nuestro propósito",
      "about.mission_desc": "Construir espacios seguros, funcionales y duraderos, con la calidad, el costo y el plazo acordados.",
      "about.vision_title": "Nuestro compromiso",
      "about.vision_desc": "Cumplir lo pactado en plazo, costo y calidad, informar con claridad en cada etapa y responder por nuestro trabajo después de la entrega.",
      "why.title": "Por qué elegirnos",
      "why1": "Presupuesto por partidas",
      "why2": "Ingeniero residente",
      "why3": "Reportes con fotos",
      "why4": "Licencias en regla",
      "why5": "Garantía por escrito",
      "why6": "Entrega puntual",
      "projects.eyebrow": "Amenidades",
      "projects.title": "Áreas comunes",
      "projects.desc": "Nuestros desarrollos incluyen áreas comunes pensadas para el día a día de las familias, con mantenimiento a cargo de la administración.",
      "projects.view_details": "Ver fotos",
      "proj1.tag": "Área social",
      "proj1.title": "Rooftop con terraza",
      "proj1.desc": "Terraza con vista al valle, área de asador y salón para reuniones familiares.",
      "proj2.tag": "Bienestar",
      "proj2.title": "Gimnasio equipado",
      "proj2.desc": "Equipo cardiovascular y de pesas, con iluminación natural y horario extendido.",
      "proj3.tag": "Recepción",
      "proj3.title": "Lobby y seguridad",
      "proj3.desc": "Lobby de doble altura con recepción y control de acceso las 24 horas.",
      "proj4.tag": "Para la familia",
      "proj4.title": "Jardín y área infantil",
      "proj4.desc": "Áreas verdes con juegos infantiles y senderos para caminar.",
      "proj5.tag": "Interiores",
      "proj5.title": "Apartamento modelo",
      "proj5.desc": "Visite el apartamento modelo amueblado y conozca los acabados incluidos.",
      "proj6.tag": "Cocina",
      "proj6.title": "Cocinas abiertas",
      "proj6.desc": "Cocinas integradas a la sala, con gabinetes y superficies de cuarzo.",
      "amen.title": "Todos nuestros desarrollos incluyen",
      "amen1.title": "Seguridad 24 horas",
      "amen1.desc": "Garita, control de acceso y circuito cerrado de cámaras.",
      "amen2.title": "Planta eléctrica",
      "amen2.desc": "Respaldo para elevadores, bombas y áreas comunes.",
      "amen3.title": "Cisterna y bombeo",
      "amen3.desc": "Reserva de agua con sistema de presión constante.",
      "amen4.title": "Parqueo de visitas",
      "amen4.desc": "Espacios para sus invitados dentro del proyecto.",
      "amen5.title": "Pet friendly",
      "amen5.desc": "Área para mascotas y reglamento que las admite.",
      "amen6.title": "Elevadores",
      "amen6.desc": "Elevadores con respaldo eléctrico.",
      "amen7.title": "Coworking",
      "amen7.desc": "Espacio de trabajo con internet para residentes.",
      "amen8.title": "Paneles solares",
      "amen8.desc": "Energía solar para la iluminación de áreas comunes.",
      "amen9.title": "Bodega privada",
      "amen9.desc": "Bodegas disponibles según el modelo de apartamento.",
      "amen10.title": "Fibra óptica",
      "amen10.desc": "Preparación para fibra óptica.",
      "amen11.title": "Administración",
      "amen11.desc": "Administración profesional desde la entrega.",
      "amen12.title": "Accesibilidad",
      "amen12.desc": "Rampas y elevadores para personas con movilidad reducida.",
      "projects.modal_close": "Cerrar",
      "projects.modal_prev": "Foto anterior",
      "projects.modal_next": "Foto siguiente",
      "projects.modal_dots_aria": "Elegir foto",
      "projects.modal_goto_slide": "Ir a la foto {n}",
      "projects.modal_image_of": "Foto {n} de {total}",
      "projects.modal_photo_alt": "Foto {n} de {title}",
      "projects.modal_placeholder_note": "Aún no hay fotografías de este espacio.",
      "process.eyebrow": "Cómo comprar",
      "process.title": "Proceso de compra",
      "process1.title": "Visite la sala de ventas",
      "process1.desc": "Conozca el apartamento modelo, los planos y los acabados, y elija la unidad que le conviene.",
      "process2.title": "Reserve su unidad",
      "process2.desc": "Separe su apartamento con la reserva y firme la promesa de compraventa.",
      "process3.title": "Precalifique su crédito",
      "process3.desc": "Le acompañamos con los bancos aliados mientras paga su enganche en cuotas.",
      "process4.title": "Reciba sus llaves",
      "process4.desc": "Revise su unidad con nuestro equipo, firme la escritura y reciba su manual del propietario.",
      "patients.eyebrow": "Clientes",
      "patients.title": "Información para compradores y propietarios",
      "patients.desc": "Respuestas prácticas antes de comprar, durante su visita y después de recibir su unidad. Si tiene dudas, llámenos en horario de atención.",
      "patients.tab1": "Antes de comprar",
      "patients.tab2": "Su visita",
      "patients.tab3": "Garantía y postventa",
      "patients.tabs_aria": "Información para clientes",
      "visits.title": "Horario de la sala de ventas",
      "visits.hours_text": "Lun–Vie 9:00–18:00 · Sáb 9:00–14:00",
      "visits.open": "Abierta ahora",
      "visits.closed": "Cerrada en este momento",
      "visits.next": "Abrimos: {time}",
      "visits.until": "Hasta las {time}",
      "guide1": "Defina su presupuesto mensual: la cuota del crédito no debería superar un tercio de sus ingresos.",
      "guide2": "Precalifique antes de reservar para conocer el monto que el banco puede financiar.",
      "guide3": "Revise los planos, las medidas y los acabados incluidos en su modelo.",
      "guide4": "Pregunte por la cuota de mantenimiento y lo que incluye.",
      "guide5": "Verifique que el proyecto cuente con licencia de construcción vigente.",
      "guide6": "Solicite por escrito el plan de pagos y la fecha estimada de entrega.",
      "guide7": "Considere los gastos de escrituración e impuestos al calcular su inversión.",
      "guide8": "",
      "guide9": "",
      "guide10": "",
      "visit1": "Agende su visita para que un asesor le atienda sin espera.",
      "visit2": "Traiga su DPI si desea reservar el mismo día.",
      "visit3": "Los recorridos de obra se realizan con casco y chaleco, que le proporcionamos.",
      "visit4": "Por seguridad, los menores no pueden ingresar al área de obra.",
      "visit5": "Puede tomar fotografías del apartamento modelo y de los planos.",
      "visit6": "Al final recibirá una cotización por escrito de la unidad que le interesa.",
      "visit7": "",
      "visit8": "",
      "mat1": "Al recibir su unidad, revisamos juntos cada ambiente y anotamos cualquier detalle pendiente.",
      "mat2": "La garantía cubre la estructura, las instalaciones y los acabados según el manual del propietario.",
      "mat3": "Reporte cualquier solicitud de postventa por WhatsApp o correo, con una fotografía.",
      "mat4": "Programamos la visita técnica en un plazo máximo de 5 días hábiles.",
      "mat5": "Antes de remodelar, consulte el reglamento del condominio y las especificaciones estructurales.",
      "mat6": "",
      "ext.title": "Contactos directos",
      "ext1.label": "Ventas",
      "ext2.label": "Postventa",
      "ext3.label": "Cobros",
      "ext4.label": "Proveedores",
      "insurance.eyebrow": "Financiamiento",
      "insurance.title": "Opciones para financiar su compra",
      "insurance.desc": "Trabajamos con bancos del sistema y le acompañamos en la precalificación. Pague su enganche en cuotas durante la construcción y financie el saldo con un crédito hipotecario.",
      "insurance.insurers_title": "Bancos aliados",
      "insurance.insurers_desc": "Estos bancos conocen nuestros proyectos y pueden agilizar el análisis de su crédito.",
      "insurance.missing": "¿Prefiere otro banco? También le acompañamos.",
      "banks.title": "Tipos de crédito",
      "pay.title": "Formas de pago",
      "pay1": "Reserva con Q 10,000",
      "pay2": "Enganche en hasta 24 cuotas",
      "pay3": "Crédito hipotecario bancario",
      "pay4": "Transferencia o depósito",
      "pay5": "Descuento por pago de contado",
      "pay6": "",
      "pay7": "",
      "pay8": "",
      "ctabanner.title": "¿Desea conocer el proyecto?",
      "ctabanner.desc": "Agende una visita a la sala de ventas o escríbanos por WhatsApp y le enviamos planos y precios.",
      "ctabanner.cta": "Llamar ahora",
      "contact.eyebrow": "Contacto",
      "contact.title": "Hablemos de su proyecto",
      "contact.desc": "Escríbanos o llámenos para agendar una visita, solicitar una cotización o resolver sus dudas. Le respondemos en horario de atención.",
      "contact.label_address": "Dirección",
      "contact.label_phone": "Teléfonos",
      "contact.label_email": "Correo",
      "contact.label_hours": "Horario",
      "contact.label_social": "Redes sociales",
      "contact.hours_value": "Lunes a viernes 9:00–18:00 · Sábado 9:00–14:00",
      "contact.map_open": "Abrir en Google Maps",
      "contact.vcard": "Guardar contacto",
      "contact.vcard_aria": "Guardar el contacto de Nivela en su teléfono (archivo vCard)",
      "contact.waze": "Abrir en Waze",
      "contact.map_load": "Ver mapa aquí",
      "contact.map_note": "Al mostrar el mapa, Google recibe su dirección IP.",
      "contact.map_frame": "Mapa de la ubicación de la sala de ventas",
      "contact.phone_main": "Principal",
      "contact.phone_direct": "Directo",
      "form.title": "Envíenos un mensaje",
      "form.privacy_hint": "Por su privacidad, no incluya números de cuenta ni datos bancarios en este formulario.",
      "form.name_label": "Nombre completo",
      "form.name_err": "Ingrese su nombre completo.",
      "form.phone_label": "Teléfono",
      "form.phone_err": "Ingrese un número de teléfono válido.",
      "form.email_label": "Correo electrónico",
      "form.email_err": "Ingrese un correo electrónico válido.",
      "form.service_label": "¿En qué podemos ayudarle?",
      "form.opt_placeholder": "Seleccione una opción",
      "form.opt_maternity": "Información de Torre Ceiba",
      "form.opt_surgery": "Comprar un apartamento o casa",
      "form.opt_emergency": "Construir en mi terreno",
      "form.opt_specialist": "Remodelación o ampliación",
      "form.opt_lab": "Construcción comercial o industrial",
      "form.opt_insurance": "Financiamiento",
      "form.opt_other": "Otro",
      "form.service_err": "Seleccione una opción.",
      "form.message_label": "Su mensaje",
      "form.message_err": "Escriba un poco más (mínimo 10 caracteres).",
      "form.optional": "(opcional)",
      "form.choose": "Seleccione una opción",
      "form.err_required": "Complete este campo.",
      "form.err_choose": "Elija una opción.",
      "form.err_number": "Ingrese un número válido.",
      "form.err_date": "Elija una fecha válida.",
      "form.consent_label": "Acepto que usen mis datos solo para responder a mi solicitud, según el Aviso de Privacidad.",
      "form.consent_err": "Necesitamos su autorización para responderle.",
      "form.hp_label": "No completar este campo",
      "form.submit": "Enviar mensaje",
      "form.note": "Usaremos sus datos únicamente para responder a su solicitud. Consulte nuestro <a href=\"privacy-notice.html\">Aviso de Privacidad</a>.",
      "form.fallback": "¿Prefiere no usar el formulario? Comuníquese por <a href=\"tel:+50200000000\">teléfono</a>, <a href=\"mailto:ventas@nivela.example\">correo</a> o <a href=\"https://wa.me/50200000000\" target=\"_blank\" rel=\"noopener noreferrer\">WhatsApp</a>.",
      "form.status_sending": "Enviando…",
      "form.status_ok": "¡Gracias! Recibimos su mensaje y le contactaremos pronto.",
      "form.status_invalid": "Revise los campos marcados antes de enviar.",
      "form.status_error": "Hubo un problema al enviar su mensaje. Intente de nuevo o escríbanos por WhatsApp.",
      "form.status_rate_limited": "Ha enviado varias solicitudes en poco tiempo. Espere unos minutos e intente de nuevo.",
      "form.status_offline": "Parece que no tiene conexión a internet. Revise su conexión e intente de nuevo.",
      "form.status_timeout": "El envío tardó demasiado. Revise su conexión e intente de nuevo.",
      "form.status_verifying": "Verificando que no es un robot…",
      "form.status_captcha": "No pudimos completar la verificación anti-spam. Recargue la página e intente de nuevo, o escríbanos por WhatsApp.",
      "form.status_turnstile": "Complete la verificación de seguridad y vuelva a enviar.",
      "form.captcha_idle": "Protegido contra spam con verificación automática.",
      "form.captcha_pending": "Verificación anti-spam en curso…",
      "form.captcha_ok": "Verificación anti-spam completa.",
      "form.captcha_error": "No se pudo cargar la verificación anti-spam. Recargue la página.",
      "faq.eyebrow": "Preguntas frecuentes",
      "faq.title": "Preguntas frecuentes",
      "faq.q1": "¿Cuánto necesito para reservar?",
      "faq.a1": "La reserva es de Q 10,000 y se abona al enganche. Con ella separamos su unidad y preparamos la promesa de compraventa.",
      "faq.q2": "¿Con qué bancos trabajan?",
      "faq.a2": "Trabajamos con Banco Demo Uno, Banco Demo Dos y Banco Demo Tres, y le acompañamos si prefiere otro banco. La precalificación no tiene costo.",
      "faq.q3": "¿Cuánto es el enganche y cómo lo pago?",
      "faq.a3": "El enganche suele ser del 10 al 20 % del precio, según el banco. Puede pagarlo en hasta 24 cuotas sin intereses durante la construcción.",
      "faq.q4": "¿Cuándo se entrega el proyecto?",
      "faq.a4": "Cada proyecto tiene una fecha estimada de entrega que consta en la promesa de compraventa. Publicamos el avance de obra en este sitio y lo enviamos por correo a los compradores.",
      "faq.q5": "¿Construyen en mi terreno?",
      "faq.a5": "Sí. Visitamos su terreno, revisamos el estudio de suelo y le presentamos el diseño, el presupuesto por partidas y el cronograma de obra.",
      "faq.q6": "¿Qué garantía tiene mi unidad?",
      "faq.a6": "La garantía cubre estructura, instalaciones y acabados durante los plazos indicados en el manual del propietario que recibe al firmar la entrega.",
      "faq.q7": "¿Puedo personalizar los acabados?",
      "faq.a7": "Sí, mientras la obra esté en la etapa correspondiente. Le presentamos opciones con su diferencia de precio antes de confirmar.",
      "faq.q8": "¿Cuánto es la cuota de mantenimiento?",
      "faq.a8": "Depende del proyecto y del tamaño de la unidad. Se la indicamos por escrito antes de reservar, con el detalle de lo que incluye.",
      "a11y.title": "Accesibilidad",
      "a11y.desc": "Ajuste el sitio a su comodidad. Sus preferencias se guardan en este dispositivo.",
      "a11y.text_size": "Tamaño del texto",
      "a11y.contrast": "Alto contraste",
      "a11y.motion": "Reducir animaciones",
      "a11y.links": "Subrayar enlaces",
      "a11y.spacing": "Texto más espaciado",
      "a11y.reset": "Restablecer",
      "footer.about_desc": "Desarrollo inmobiliario, construcción y remodelación en la Ciudad de Guatemala.",
      "footer.links_heading": "Navegación",
      "footer.services_heading": "Servicios",
      "footer.contact_heading": "Contacto",
      "footer.privacy_link": "Aviso de Privacidad",
      "footer.rights": "Todos los derechos reservados.",
      "footer.made_by": "Sitio administrado por TeraDevs",
      "notice.text": "",
      "notice.close": "Cerrar aviso",
      "notice.label": "Aviso",
      "doctors.eyebrow": "Proyectos",
      "doctors.title": "Proyectos en venta y entregados",
      "doctors.desc": "Busque por nombre, zona o tipo de proyecto y agende una visita al que le interese.",
      "doctors.cta": "WhatsApp",
      "doctors.search_label": "Buscar proyecto",
      "doctors.search_ph": "Nombre, zona o tipo",
      "doctors.filter_aria": "Filtrar por tipo de proyecto",
      "doctors.all": "Todos",
      "doctors.empty": "No encontramos proyectos con esa búsqueda.",
      "doctors.license": "Entrega",
      "doctors.hours": "Ubicación",
      "doctors.insurers": "Unidades",
      "doctors.request": "Agendar visita",
      "doctors.wa_msg": "Hola, quisiera información del proyecto {name} ({specialty}) de {site}.",
      "doctors.results": "{n} proyectos",
      "doctors.result1": "1 proyecto",
      "appt.eyebrow": "Visitas",
      "appt.title": "",
      "appt.desc": "Elija el proyecto y la fecha que prefiere. Le llamaremos para confirmar la hora de su visita a la sala de ventas o a la obra.",
      "appt.submit": "Solicitar visita",
      "appt.ok": "Recibimos su solicitud. Le llamaremos para confirmar la fecha y la hora de su visita.",
      "appt.specialty_label": "Tipo de proyecto",
      "appt.doctor_label": "Proyecto",
      "appt.doctor_any": "Cualquier proyecto",
      "appt.date_label": "Fecha preferida",
      "appt.time_label": "Horario preferido",
      "appt.time_morning": "Mañana",
      "appt.time_afternoon": "Tarde",
      "appt.time_any": "Cualquiera",
      "req.name_label": "Nombre completo",
      "req.phone_label": "Teléfono",
      "req.email_label": "Correo electrónico",
      "req.notes_label": "Comentarios",
      "req.health_notice": "Por su privacidad, no incluya números de cuenta ni datos bancarios: solo lo necesario para atender su solicitud.",
      "pkg.eyebrow": "Modelos",
      "pkg.title": "Modelos y precios de referencia",
      "pkg.desc": "Precios de referencia de los modelos disponibles en Torre Ceiba. Todos incluyen parqueo.",
      "pkg.from": "Desde",
      "pkg.cta": "Solicitar cotización",
      "pkg.note": "Precios de referencia en quetzales, sujetos a disponibilidad y cambios sin previo aviso. Le confirmamos el precio vigente por escrito.",
      "pkg.includes": "Incluye",
      "pkg.pdf": "Descargar lista de precios en PDF",
      "comp.title": "",
      "labprep.eyebrow": "Avance de obra",
      "labprep.title": "Avance de obra",
      "labprep.desc": "Actualizamos el avance de cada obra todos los meses. Los compradores reciben además un informe con fotografías.",
      "labprep.time": "Avance",
      "inshow.title": "",
      "insck.title": "",
      "insck.desc": "Indíquenos el banco de su preferencia y su ingreso mensual aproximado. Un asesor le contactará con una estimación sin compromiso.",
      "insck.submit": "Solicitar precalificación",
      "insck.ok": "Recibimos su información. Un asesor le llamará con una estimación de crédito.",
      "insck.insurer_label": "Banco de preferencia",
      "insck.other": "Otro banco",
      "insck.policy_label": "Ingreso familiar mensual (Q)",
      "insck.holder_label": "Nombre del solicitante",
      "insck.service_label": "Proyecto de interés",
      "reviews.eyebrow": "Testimonios",
      "reviews.title": "Opiniones de propietarios",
      "reviews.based": "Calificación promedio (ejemplo)",
      "reviews.cta": "Deje su opinión en Google",
      "reviews.stars_aria": "{n} de 5 estrellas",
      "reviews.count_text": "{n} opiniones",
      "ctabanner.directions": "Cómo llegar a la sala de ventas",
      "actions.emergency": "Llamar",
      "svcpage.back": "Volver al inicio",
      "svcpage.doctors": "Proyectos relacionados",
      "svcpage.request_title": "¿Tiene un proyecto en mente?",
      "svcpage.request_desc": "Solicite una cotización en línea, escríbanos por WhatsApp o llámenos.",
      "svcpage.more_services": "Otros servicios",
      "services.page": "Ver página de {name}",
      "nav.doctors": "Proyectos",
      "doctor1.specialty": "",
      "doctor1.hours": "",
      "doctor1.bio": "",
      "doctor2.specialty": "",
      "doctor2.hours": "",
      "doctor2.bio": "",
      "doctor3.specialty": "",
      "doctor3.hours": "",
      "doctor3.bio": "",
      "doctor4.specialty": "",
      "doctor4.hours": "",
      "doctor4.bio": "",
      "doctor5.specialty": "",
      "doctor5.hours": "",
      "doctor5.bio": "",
      "doctor6.specialty": "",
      "doctor6.hours": "",
      "doctor6.bio": "",
      "doctor7.specialty": "",
      "doctor7.hours": "",
      "doctor7.bio": "",
      "doctor8.specialty": "",
      "doctor8.hours": "",
      "doctor8.bio": "",
      "doctor9.specialty": "",
      "doctor9.hours": "",
      "doctor9.bio": "",
      "doctor10.specialty": "",
      "doctor10.hours": "",
      "doctor10.bio": "",
      "doctor11.specialty": "",
      "doctor11.hours": "",
      "doctor11.bio": "",
      "doctor12.specialty": "",
      "doctor12.hours": "",
      "doctor12.bio": "",
      "pkg1.name": "",
      "pkg1.badge": "",
      "pkg1.desc": "",
      "pkg1.includes": "",
      "comp1": "",
      "review1.text": "",
      "review1.when": "",
      "pkg2.name": "",
      "pkg2.badge": "",
      "pkg2.desc": "",
      "pkg2.includes": "",
      "comp2": "",
      "review2.text": "",
      "review2.when": "",
      "pkg3.name": "",
      "pkg3.badge": "",
      "pkg3.desc": "",
      "pkg3.includes": "",
      "comp3": "",
      "review3.text": "",
      "review3.when": "",
      "pkg4.name": "",
      "pkg4.badge": "",
      "pkg4.desc": "",
      "pkg4.includes": "",
      "comp4": "",
      "review4.text": "",
      "review4.when": "",
      "pkg5.name": "",
      "pkg5.badge": "",
      "pkg5.desc": "",
      "pkg5.includes": "",
      "comp5": "",
      "review5.text": "",
      "review5.when": "",
      "pkg6.name": "",
      "pkg6.badge": "",
      "pkg6.desc": "",
      "pkg6.includes": "",
      "comp6": "",
      "review6.text": "",
      "review6.when": "",
      "exam1.name": "",
      "exam1.prep": "",
      "exam1.time": "",
      "exam2.name": "",
      "exam2.prep": "",
      "exam2.time": "",
      "exam3.name": "",
      "exam3.prep": "",
      "exam3.time": "",
      "exam4.name": "",
      "exam4.prep": "",
      "exam4.time": "",
      "exam5.name": "",
      "exam5.prep": "",
      "exam5.time": "",
      "exam6.name": "",
      "exam6.prep": "",
      "exam6.time": "",
      "exam7.name": "",
      "exam7.prep": "",
      "exam7.time": "",
      "exam8.name": "",
      "exam8.prep": "",
      "exam8.time": "",
      "exam9.name": "",
      "exam9.prep": "",
      "exam9.time": "",
      "exam10.name": "",
      "exam10.prep": "",
      "exam10.time": "",
      "inshow1": "",
      "inshow2": "",
      "inshow3": "",
      "inshow4": "",
      "inshow5": "",
      "whatsapp.message": "Hola, quisiera información sobre los proyectos de Nivela.",
      "brand.tagline": "Desarrollos",
      "nav.packages": "Modelos",
      "profile.specialty": "Especialidad",
      "demo.banner": "Datos ficticios.",
      "demo.banner_cta": "Solicitar cotización",
      "demo.form_ok": "Vista previa: así se confirma el envío. En el sitio en producción, la solicitud se registra en el panel y se notifica por correo.",
      "demo.preview_label": "Vista previa",
      "demo.view_aria": "Ver otro paquete",
      "demo.view_clinic": "Desarrolladora",
      "demo.view_practice": "Constructora",
      "brand.aria@consultorio": "Nivela Construcción, ir al inicio",
      "contact.map_aria@consultorio": "Abrir la ubicación de la oficina en Google Maps (se abre en una pestaña nueva)",
      "contact.vcard_aria@consultorio": "Guardar el contacto de Nivela Construcción en su teléfono (archivo vCard)",
      "contact.map_frame@consultorio": "Mapa de la ubicación de la oficina",
      "ctabanner.directions@consultorio": "Cómo llegar a la oficina",
      "nav.doctors@consultorio": "El director",
      "doctors.wa_msg@consultorio": "Hola, quisiera una cotización con {name} ({specialty}).",
      "form.opt_surgery@consultorio": "Construir mi casa",
      "form.opt_emergency@consultorio": "Remodelación",
      "form.opt_specialist@consultorio": "Ampliación o segundo nivel",
      "form.opt_lab@consultorio": "Diseño y planos",
      "form.opt_maternity@consultorio": "Presupuesto de obra",
      "req.name_label@consultorio": "Nombre completo",
      "appt.specialty_label@consultorio": "Servicio",
      "insck.service_label@consultorio": "Servicio",
      "demo.packages": "← Ver paquetes",
      "demo.sum_express": "Express · Q4,800 + IVA · plazo: 2 semanas",
      "demo.sum_starter": "Starter · Q6,800 + IVA · plazo: 3 semanas",
      "demo.sum_profesional": "Profesional · Q10,500 + IVA · plazo: 4 a 5 semanas",
      "demo.sum_premium": "Premium · desde Q19,500 + IVA · plazo: 6 a 8 semanas",
      "doctors.license@consultorio": "Colegiado",
      "doctors.hours@consultorio": "Atención",
      "doctors.insurers@consultorio": "Obras",
      "profile.specialty@consultorio": "Cargo",
      "svcpage.doctors@consultorio": "Responsable",
      "projects.cta_aria@consultorio": "Descargar el catálogo de acabados en PDF"
    },
    en: {
      "meta.title": "Nivela Desarrollos · Apartments and construction in Guatemala City",
      "meta.description": "Residential developments in Zona 15, Zona 16 and Carretera a El Salvador. Apartments from Q 985,000, bank financing and custom construction.",
      "og.locale": "en_US",
      "brand.aria": "Nivela Desarrollos, go to home",
      "lang.toggle_aria": "Switch language to Spanish",
      "lang.switch_to": "Español",
      "menu.open_aria": "Open menu",
      "menu.close_aria": "Close menu",
      "mobilenav.aria": "Main menu",
      "skip": "Skip to content",
      "backtotop.aria": "Back to top",
      "a11y.new_tab": " (opens in a new tab)",
      "a11y.open_aria": "Accessibility options",
      "a11y.close": "Done",
      "a11y.size_small": "Normal text",
      "a11y.size_medium": "Large text",
      "a11y.size_large": "Extra large text",
      "actions.call": "Call",
      "actions.whatsapp": "WhatsApp",
      "actions.directions": "Directions",
      "actions.aria": "Quick actions",
      "whatsapp.aria": "Message us on WhatsApp (opens in a new tab)",
      "contact.map_aria": "Open the sales office location in Google Maps (opens in a new tab)",
      "nav.services": "Services",
      "nav.maternity": "Featured project",
      "nav.facilities": "Amenities",
      "nav.patients": "Clients",
      "nav.insurance": "Financing",
      "nav.contact": "Contact",
      "nav.emergency": "Call",
      "hero.eyebrow": "Real-estate development and construction",
      "hero.title": "<em>Housing</em> development and construction in Guatemala",
      "hero.desc": "Apartments and houses in Zona 15, Zona 16 and Carretera a El Salvador. We work with detailed budgets, monthly progress reports and support with your mortgage.",
      "hero.cta1": "Book a visit",
      "hero.cta2": "Message us on WhatsApp",
      "hero.status": "Sales office open Monday to Saturday",
      "hero.badge1": "Free bank pre-qualification",
      "hero.badge2": "Down payment in instalments",
      "hero.badge3": "Written warranty",
      "quick.emergency": "Call sales",
      "quick.whatsapp": "WhatsApp",
      "quick.visits": "Sales office",
      "quick.directions": "Directions",
      "quick.aria": "Quick information",
      "stat1.value": "18",
      "stat1.label": "years building",
      "stat2.value": "34",
      "stat2.label": "projects delivered",
      "stat3.value": "1,250",
      "stat3.label": "units delivered",
      "stat4.value": "5",
      "stat4.label": "projects for sale",
      "services.eyebrow": "Services",
      "services.title": "From design to key handover",
      "services.desc": "One team responsible for planning, construction and handover, with detailed budgets and professional supervision at every stage.",
      "services.cta": "Ask on WhatsApp",
      "services.more": "Learn more",
      "services.more_aria": "Learn more about {name}",
      "services.call": "Call",
      "services.close": "Close",
      "service1.title": "Real-estate development",
      "service1.desc": "Apartments and houses in residential areas of the city, with payment plans and support with your mortgage.",
      "service1.more": "We develop complete residential projects: market study, design, permits, construction, sales and initial administration.\n\nEvery project is sold with published prices, down-payment instalment plans and pre-qualification with partner banks.\n\nWhen you receive your unit, you get an owner's manual and a written warranty period.",
      "service2.title": "Residential construction",
      "service2.desc": "Single-family homes built on your land, with a fixed budget and a construction schedule.",
      "service2.more": "We build your house from your design or one we develop with you. Before starting, you receive a detailed itemised budget and a construction schedule.\n\nA resident engineer supervises the work and you receive regular reports with progress photos.\n\nWe use materials from recognised suppliers and hand over the documentation of the installations at the end.",
      "service3.title": "Commercial and industrial construction",
      "service3.desc": "Offices, retail units, warehouses and industrial buildings, in steel or concrete.",
      "service3.more": "We carry out small and medium-scale commercial and industrial projects: offices, retail units, warehouses and buildings in steel or concrete.\n\nWe coordinate soil studies, structural design and any special installations your operation needs.\n\nWe plan the work to minimise disruption to your business.",
      "service4.title": "Remodelling and extensions",
      "service4.desc": "Remodelling of kitchens, bathrooms and living areas, extensions and second floors with a structural review.",
      "service4.more": "We renovate lived-in spaces with a work plan that protects your belongings and keeps the site tidy.\n\nFor extensions and second floors, we first review the existing structure and obtain the corresponding municipal permit.\n\nWe present finish options with prices, so you can decide with clear information.",
      "service5.title": "Architectural design",
      "service5.desc": "Preliminary design, construction drawings and 3D renderings, with structural and MEP design.",
      "service5.more": "We develop your project's design from the preliminary stage to construction drawings, with 3D renderings so you know the result before building.\n\nThe drawing set includes architecture, structure and electrical, water and drainage installations.\n\nThe drawings are ready for the permit process and for pricing the work.",
      "service6.title": "Planning and permits",
      "service6.desc": "Itemised budgets, schedules and municipal building permit management.",
      "service6.more": "We prepare itemised budgets, schedules and cash-flow plans for the work.\n\nWe manage the building permit with the municipality and the requirements of any other authorities involved.\n\nWith this information you can apply for financing or compare offers.",
      "service7.title": "Construction supervision",
      "service7.desc": "Independent technical supervision, quality control and progress reports for owners and investors.",
      "service7.more": "If you already have a contractor, we offer independent technical supervision to check that the work meets the drawings, specifications and budget.\n\nWe make scheduled visits, check material quality and estimate progress to approve payments.\n\nYou receive reports with photos and clear recommendations.",
      "service8.title": "Structural shell",
      "service8.desc": "Foundations, structure, walls and slabs, built with concrete and steel quality control.",
      "service8.more": "We build your project's structural shell: foundations, columns, beams, walls and slabs.\n\nWe control concrete quality with strength tests and check the reinforcement before every pour.",
      "service9.title": "Finishes and interiors",
      "service9.desc": "Floors, ceilings, joinery, kitchens and bathrooms, with material samples and prices per option.",
      "service9.more": "We show you samples of flooring, cladding, joinery and fittings with the price of each option.\n\nWe coordinate the installers and check the finishes before handover.\n\nYou can choose a finishes package or customise it.",
      "service10.title": "Building services",
      "service10.desc": "Electrical, water, drainage and lighting installations, with as-built drawings at the end.",
      "service10.more": "We design and install electrical, water, drainage and lighting systems for homes and businesses.\n\nWe run pressure and load tests before closing walls and ceilings.\n\nAt the end, we hand over as-built drawings of the installations.",
      "service11.title": "Building maintenance",
      "service11.desc": "Preventive and corrective maintenance for condominiums, offices and homes.",
      "service11.more": "We offer preventive maintenance plans for condominiums, offices and homes: waterproofing, painting, installations and common areas.\n\nWe also handle one-off repairs, with a prior assessment and quote.",
      "maternity.eyebrow": "Featured project",
      "maternity.title": "Torre Ceiba, <em>apartments</em> in Zona 15",
      "maternity.desc": "Sixteen floors of 2 and 3-bedroom apartments, a social roof terrace and valley views. The structure is finished and handover is scheduled for December 2027. The down payment can be paid in instalments.",
      "maternity.cta": "Request information",
      "projects.cta": "Download brochure",
      "projects.cta_aria": "Download the project brochure as a PDF",
      "mfeat1.title": "From Q 985,000",
      "mfeat1.desc": "Apartments from 68 to 112 m², with 1 or 2 parking spaces and storage depending on the model.",
      "mfeat2.title": "Down payment in 24 instalments",
      "mfeat2.desc": "Reserve with Q 10,000 and complete the down payment during construction, interest-free.",
      "mfeat3.title": "Full amenities",
      "mfeat3.desc": "Rooftop social area, gym, children's area, coworking and a lobby with 24-hour security.",
      "mfeat4.title": "Sustainable construction",
      "mfeat4.desc": "Solar panels for common areas, rainwater harvesting and LED lighting.",
      "bag.title": "Documents to pre-qualify",
      "bag.desc": "Tick what you already have. With these documents, the bank can answer you faster.",
      "bag1": "Valid ID (DPI)",
      "bag2": "Proof of income or employment",
      "bag3": "Bank statements for the last 3 months",
      "bag4": "Recent electricity, water or phone bill",
      "bag5": "Tax registration (RTU) certificate",
      "bag6": "Income tax return (if self-employed)",
      "bag7": "Personal and bank references",
      "bag8": "The bank's application form",
      "bag9": "",
      "bag10": "",
      "bag.note": "Each bank may ask for additional requirements. We guide you free of charge.",
      "bag.progress": "{n} of {total} ready",
      "about.eyebrow": "About us",
      "about.title": "We build with order and transparency",
      "about.desc": "Nivela is a Guatemalan real-estate development and construction company. From planning to key handover, we work with detailed budgets, realistic schedules and progress reports, so every client knows what stage their project is at and what comes next. Our team of engineers and architects supervises every site in person.",
      "about.art_caption": "Planning, construction and handover with one accountable team.",
      "about.mission_title": "Our purpose",
      "about.mission_desc": "To build safe, functional and durable spaces, with the agreed quality, cost and schedule.",
      "about.vision_title": "Our commitment",
      "about.vision_desc": "To deliver what we agree on time, cost and quality, to report clearly at every stage and to stand behind our work after handover.",
      "why.title": "Why choose us",
      "why1": "Itemised budgets",
      "why2": "Resident engineer",
      "why3": "Photo reports",
      "why4": "Permits in order",
      "why5": "Written warranty",
      "why6": "On-time handover",
      "projects.eyebrow": "Amenities",
      "projects.title": "Common areas",
      "projects.desc": "Our developments include common areas designed for families' everyday life, maintained by the building administration.",
      "projects.view_details": "View photos",
      "proj1.tag": "Social area",
      "proj1.title": "Rooftop terrace",
      "proj1.desc": "Terrace with valley views, barbecue area and a lounge for family gatherings.",
      "proj2.tag": "Wellbeing",
      "proj2.title": "Equipped gym",
      "proj2.desc": "Cardio and weight equipment, with natural light and extended hours.",
      "proj3.tag": "Reception",
      "proj3.title": "Lobby and security",
      "proj3.desc": "Double-height lobby with reception and 24-hour access control.",
      "proj4.tag": "For the family",
      "proj4.title": "Garden and play area",
      "proj4.desc": "Green areas with a playground and walking paths.",
      "proj5.tag": "Interiors",
      "proj5.title": "Show apartment",
      "proj5.desc": "Visit the furnished show apartment and see the finishes included.",
      "proj6.tag": "Kitchen",
      "proj6.title": "Open kitchens",
      "proj6.desc": "Kitchens open to the living room, with cabinets and quartz countertops.",
      "amen.title": "All our developments include",
      "amen1.title": "24-hour security",
      "amen1.desc": "Gatehouse, access control and CCTV.",
      "amen2.title": "Backup generator",
      "amen2.desc": "Backup for lifts, pumps and common areas.",
      "amen3.title": "Water tank and pumps",
      "amen3.desc": "Water reserve with a constant-pressure system.",
      "amen4.title": "Visitor parking",
      "amen4.desc": "Spaces for your guests inside the project.",
      "amen5.title": "Pet friendly",
      "amen5.desc": "Pet area and rules that welcome pets.",
      "amen6.title": "Lifts",
      "amen6.desc": "Lifts with backup power.",
      "amen7.title": "Coworking",
      "amen7.desc": "Workspace with internet for residents.",
      "amen8.title": "Solar panels",
      "amen8.desc": "Solar energy for common-area lighting.",
      "amen9.title": "Private storage",
      "amen9.desc": "Storage rooms available depending on the model.",
      "amen10.title": "Fibre internet",
      "amen10.desc": "Ready for fibre-optic internet.",
      "amen11.title": "Administration",
      "amen11.desc": "Professional administration from handover.",
      "amen12.title": "Accessibility",
      "amen12.desc": "Ramps and lifts for people with reduced mobility.",
      "projects.modal_close": "Close",
      "projects.modal_prev": "Previous photo",
      "projects.modal_next": "Next photo",
      "projects.modal_dots_aria": "Choose photo",
      "projects.modal_goto_slide": "Go to photo {n}",
      "projects.modal_image_of": "Photo {n} of {total}",
      "projects.modal_photo_alt": "Photo {n} of {title}",
      "projects.modal_placeholder_note": "There are no photos of this space yet.",
      "process.eyebrow": "How to buy",
      "process.title": "The buying process",
      "process1.title": "Visit the sales office",
      "process1.desc": "See the show apartment, the floor plans and the finishes, and choose the unit that suits you.",
      "process2.title": "Reserve your unit",
      "process2.desc": "Hold your apartment with the reservation deposit and sign the purchase agreement.",
      "process3.title": "Pre-qualify for a mortgage",
      "process3.desc": "We help you with partner banks while you pay your down payment in instalments.",
      "process4.title": "Receive your keys",
      "process4.desc": "Inspect your unit with our team, sign the deed and receive your owner's manual.",
      "patients.eyebrow": "Clients",
      "patients.title": "Information for buyers and owners",
      "patients.desc": "Practical answers before you buy, during your visit and after you receive your unit. If you have questions, call us during office hours.",
      "patients.tab1": "Before you buy",
      "patients.tab2": "Your visit",
      "patients.tab3": "Warranty and after-sales",
      "patients.tabs_aria": "Information for clients",
      "visits.title": "Sales office hours",
      "visits.hours_text": "Mon–Fri 9:00–18:00 · Sat 9:00–14:00",
      "visits.open": "Open now",
      "visits.closed": "Closed right now",
      "visits.next": "Opens: {time}",
      "visits.until": "Until {time}",
      "guide1": "Set your monthly budget: the mortgage payment should not exceed a third of your income.",
      "guide2": "Pre-qualify before reserving to know how much the bank can finance.",
      "guide3": "Review the floor plans, measurements and finishes included in your model.",
      "guide4": "Ask about the maintenance fee and what it covers.",
      "guide5": "Check that the project has a valid building permit.",
      "guide6": "Ask for the payment plan and estimated handover date in writing.",
      "guide7": "Include deed and tax costs when you calculate your investment.",
      "guide8": "",
      "guide9": "",
      "guide10": "",
      "visit1": "Book your visit so an adviser can see you without waiting.",
      "visit2": "Bring your ID if you want to reserve on the same day.",
      "visit3": "Site tours are done with a hard hat and vest, which we provide.",
      "visit4": "For safety, children cannot enter the construction area.",
      "visit5": "You may take photos of the show apartment and the floor plans.",
      "visit6": "At the end you will receive a written quote for the unit you are interested in.",
      "visit7": "",
      "visit8": "",
      "mat1": "When you receive your unit, we inspect every room together and note any pending details.",
      "mat2": "The warranty covers the structure, installations and finishes as described in the owner's manual.",
      "mat3": "Report any after-sales request by WhatsApp or e-mail, with a photo.",
      "mat4": "We schedule the technical visit within 5 working days at most.",
      "mat5": "Before remodelling, check the condominium rules and the structural specifications.",
      "mat6": "",
      "ext.title": "Direct contacts",
      "ext1.label": "Sales",
      "ext2.label": "After-sales",
      "ext3.label": "Payments",
      "ext4.label": "Suppliers",
      "insurance.eyebrow": "Financing",
      "insurance.title": "Options to finance your purchase",
      "insurance.desc": "We work with local banks and help you through pre-qualification. Pay your down payment in instalments during construction and finance the balance with a mortgage.",
      "insurance.insurers_title": "Partner banks",
      "insurance.insurers_desc": "These banks know our projects and can speed up the review of your mortgage.",
      "insurance.missing": "Prefer another bank? We can help with that too.",
      "banks.title": "Types of loan",
      "pay.title": "Payment options",
      "pay1": "Reservation with Q 10,000",
      "pay2": "Down payment in up to 24 instalments",
      "pay3": "Bank mortgage",
      "pay4": "Transfer or deposit",
      "pay5": "Discount for cash payment",
      "pay6": "",
      "pay7": "",
      "pay8": "",
      "ctabanner.title": "Would you like to see the project?",
      "ctabanner.desc": "Book a visit to the sales office or message us on WhatsApp and we will send you floor plans and prices.",
      "ctabanner.cta": "Call now",
      "contact.eyebrow": "Contact",
      "contact.title": "Let's talk about your project",
      "contact.desc": "Write or call us to book a visit, request a quote or ask your questions. We reply during office hours.",
      "contact.label_address": "Address",
      "contact.label_phone": "Phones",
      "contact.label_email": "Email",
      "contact.label_hours": "Hours",
      "contact.label_social": "Social media",
      "contact.hours_value": "Monday to Friday 9:00–18:00 · Saturday 9:00–14:00",
      "contact.map_open": "Open in Google Maps",
      "contact.vcard": "Save contact",
      "contact.vcard_aria": "Save Nivela's contact on your phone (vCard file)",
      "contact.waze": "Open in Waze",
      "contact.map_load": "Show map here",
      "contact.map_note": "Showing the map sends your IP address to Google.",
      "contact.map_frame": "Map of the sales office location",
      "contact.phone_main": "Main",
      "contact.phone_direct": "Direct",
      "form.title": "Send us a message",
      "form.privacy_hint": "For your privacy, do not include account numbers or bank details in this form.",
      "form.name_label": "Full name",
      "form.name_err": "Enter your full name.",
      "form.phone_label": "Phone",
      "form.phone_err": "Enter a valid phone number.",
      "form.email_label": "Email address",
      "form.email_err": "Enter a valid email address.",
      "form.service_label": "How can we help?",
      "form.opt_placeholder": "Choose an option",
      "form.opt_maternity": "Torre Ceiba information",
      "form.opt_surgery": "Buy an apartment or house",
      "form.opt_emergency": "Build on my land",
      "form.opt_specialist": "Remodelling or extension",
      "form.opt_lab": "Commercial or industrial construction",
      "form.opt_insurance": "Financing",
      "form.opt_other": "Other",
      "form.service_err": "Choose an option.",
      "form.message_label": "Your message",
      "form.message_err": "Please write a little more (at least 10 characters).",
      "form.optional": "(optional)",
      "form.choose": "Choose an option",
      "form.err_required": "Complete this field.",
      "form.err_choose": "Choose an option.",
      "form.err_number": "Enter a valid number.",
      "form.err_date": "Choose a valid date.",
      "form.consent_label": "I agree that my details are used only to answer my request, as described in the Privacy Notice.",
      "form.consent_err": "We need your permission to reply.",
      "form.hp_label": "Leave this field empty",
      "form.submit": "Send message",
      "form.note": "We'll only use your details to answer your request. See our <a href=\"privacy-notice.html\">Privacy Notice</a>.",
      "form.fallback": "Prefer not to use the form? Contact us by <a href=\"tel:+50200000000\">phone</a>, <a href=\"mailto:ventas@nivela.example\">e-mail</a> or <a href=\"https://wa.me/50200000000\" target=\"_blank\" rel=\"noopener noreferrer\">WhatsApp</a>.",
      "form.status_sending": "Sending…",
      "form.status_ok": "Thank you! We received your message and will contact you soon.",
      "form.status_invalid": "Please check the highlighted fields before sending.",
      "form.status_error": "There was a problem sending your message. Try again or message us on WhatsApp.",
      "form.status_rate_limited": "You've sent several requests in a short time. Please wait a few minutes and try again.",
      "form.status_offline": "You seem to be offline. Check your connection and try again.",
      "form.status_timeout": "Sending took too long. Check your connection and try again.",
      "form.status_verifying": "Checking that you're not a robot…",
      "form.status_captcha": "We couldn't complete the anti-spam check. Reload the page and try again, or message us on WhatsApp.",
      "form.status_turnstile": "Complete the security check and send again.",
      "form.captcha_idle": "Protected against spam with an automatic check.",
      "form.captcha_pending": "Anti-spam check in progress…",
      "form.captcha_ok": "Anti-spam check complete.",
      "form.captcha_error": "The anti-spam check couldn't load. Reload the page.",
      "faq.eyebrow": "FAQ",
      "faq.title": "Frequently asked questions",
      "faq.q1": "How much do I need to reserve?",
      "faq.a1": "The reservation is Q 10,000 and counts towards the down payment. It holds your unit while we prepare the purchase agreement.",
      "faq.q2": "Which banks do you work with?",
      "faq.a2": "We work with Banco Demo Uno, Banco Demo Dos and Banco Demo Tres, and we can help if you prefer another bank. Pre-qualification is free.",
      "faq.q3": "How much is the down payment and how do I pay it?",
      "faq.a3": "The down payment is usually 10 to 20% of the price, depending on the bank. You can pay it in up to 24 interest-free instalments during construction.",
      "faq.q4": "When is the project handed over?",
      "faq.a4": "Each project has an estimated handover date stated in the purchase agreement. We publish construction progress on this site and e-mail it to buyers.",
      "faq.q5": "Do you build on my land?",
      "faq.a5": "Yes. We visit your land, review the soil study and present the design, an itemised budget and a construction schedule.",
      "faq.q6": "What warranty does my unit have?",
      "faq.a6": "The warranty covers structure, installations and finishes for the periods stated in the owner's manual you receive at handover.",
      "faq.q7": "Can I customise the finishes?",
      "faq.a7": "Yes, while the work is at the relevant stage. We present options with their price difference before you confirm.",
      "faq.q8": "How much is the maintenance fee?",
      "faq.a8": "It depends on the project and the size of the unit. We give it to you in writing before you reserve, with what it covers.",
      "a11y.title": "Accessibility",
      "a11y.desc": "Adjust the site to suit you. Your preferences are saved on this device.",
      "a11y.text_size": "Text size",
      "a11y.contrast": "High contrast",
      "a11y.motion": "Reduce motion",
      "a11y.links": "Underline links",
      "a11y.spacing": "More text spacing",
      "a11y.reset": "Reset",
      "footer.about_desc": "Real-estate development, construction and remodelling in Guatemala City.",
      "footer.links_heading": "Navigation",
      "footer.services_heading": "Services",
      "footer.contact_heading": "Contact",
      "footer.privacy_link": "Privacy Notice",
      "footer.rights": "All rights reserved.",
      "footer.made_by": "Site managed by TeraDevs",
      "notice.text": "",
      "notice.close": "Close notice",
      "notice.label": "Notice",
      "doctors.eyebrow": "Projects",
      "doctors.title": "Projects for sale and delivered",
      "doctors.desc": "Search by name, area or type of project and book a visit to the one you like.",
      "doctors.cta": "WhatsApp",
      "doctors.search_label": "Search projects",
      "doctors.search_ph": "Name, area or type",
      "doctors.filter_aria": "Filter by project type",
      "doctors.all": "All",
      "doctors.empty": "No projects match that search.",
      "doctors.license": "Handover",
      "doctors.hours": "Location",
      "doctors.insurers": "Units",
      "doctors.request": "Book a visit",
      "doctors.wa_msg": "Hello, I would like information about the {name} project ({specialty}) by {site}.",
      "doctors.results": "{n} projects",
      "doctors.result1": "1 project",
      "appt.eyebrow": "Visits",
      "appt.title": "",
      "appt.desc": "Choose the project and the date you prefer. We will call you to confirm the time of your visit to the sales office or the site.",
      "appt.submit": "Request a visit",
      "appt.ok": "We have received your request. We will call you to confirm the date and time of your visit.",
      "appt.specialty_label": "Project type",
      "appt.doctor_label": "Project",
      "appt.doctor_any": "Any project",
      "appt.date_label": "Preferred date",
      "appt.time_label": "Preferred time",
      "appt.time_morning": "Morning",
      "appt.time_afternoon": "Afternoon",
      "appt.time_any": "Any",
      "req.name_label": "Full name",
      "req.phone_label": "Phone",
      "req.email_label": "Email",
      "req.notes_label": "Comments",
      "req.health_notice": "For your privacy, do not include account numbers or bank details: only what we need to handle your request.",
      "pkg.eyebrow": "Models",
      "pkg.title": "Models and reference prices",
      "pkg.desc": "Reference prices for the models available at Torre Ceiba. All include parking.",
      "pkg.from": "From",
      "pkg.cta": "Request a quote",
      "pkg.note": "Reference prices in quetzales, subject to availability and change without notice. We confirm the current price in writing.",
      "pkg.includes": "Includes",
      "pkg.pdf": "Download the price list as a PDF",
      "comp.title": "",
      "labprep.eyebrow": "Construction progress",
      "labprep.title": "Construction progress",
      "labprep.desc": "We update each site's progress every month. Buyers also receive a report with photos.",
      "labprep.time": "Progress",
      "inshow.title": "",
      "insck.title": "",
      "insck.desc": "Tell us your preferred bank and approximate monthly income. An adviser will contact you with a no-obligation estimate.",
      "insck.submit": "Request pre-qualification",
      "insck.ok": "We have received your information. An adviser will call you with a loan estimate.",
      "insck.insurer_label": "Preferred bank",
      "insck.other": "Another bank",
      "insck.policy_label": "Monthly household income (Q)",
      "insck.holder_label": "Applicant's name",
      "insck.service_label": "Project of interest",
      "reviews.eyebrow": "Testimonials",
      "reviews.title": "Owner reviews",
      "reviews.based": "Average rating (example)",
      "reviews.cta": "Leave a review on Google",
      "reviews.stars_aria": "{n} out of 5 stars",
      "reviews.count_text": "{n} reviews",
      "ctabanner.directions": "Directions to the sales office",
      "actions.emergency": "Call",
      "svcpage.back": "Back to home",
      "svcpage.doctors": "Related projects",
      "svcpage.request_title": "Have a project in mind?",
      "svcpage.request_desc": "Request a quote online, message us on WhatsApp or call us.",
      "svcpage.more_services": "Other services",
      "services.page": "{name} page",
      "nav.doctors": "Projects",
      "doctor1.specialty": "",
      "doctor1.hours": "",
      "doctor1.bio": "",
      "doctor2.specialty": "",
      "doctor2.hours": "",
      "doctor2.bio": "",
      "doctor3.specialty": "",
      "doctor3.hours": "",
      "doctor3.bio": "",
      "doctor4.specialty": "",
      "doctor4.hours": "",
      "doctor4.bio": "",
      "doctor5.specialty": "",
      "doctor5.hours": "",
      "doctor5.bio": "",
      "doctor6.specialty": "",
      "doctor6.hours": "",
      "doctor6.bio": "",
      "doctor7.specialty": "",
      "doctor7.hours": "",
      "doctor7.bio": "",
      "doctor8.specialty": "",
      "doctor8.hours": "",
      "doctor8.bio": "",
      "doctor9.specialty": "",
      "doctor9.hours": "",
      "doctor9.bio": "",
      "doctor10.specialty": "",
      "doctor10.hours": "",
      "doctor10.bio": "",
      "doctor11.specialty": "",
      "doctor11.hours": "",
      "doctor11.bio": "",
      "doctor12.specialty": "",
      "doctor12.hours": "",
      "doctor12.bio": "",
      "pkg1.name": "",
      "pkg1.badge": "",
      "pkg1.desc": "",
      "pkg1.includes": "",
      "comp1": "",
      "review1.text": "",
      "review1.when": "",
      "pkg2.name": "",
      "pkg2.badge": "",
      "pkg2.desc": "",
      "pkg2.includes": "",
      "comp2": "",
      "review2.text": "",
      "review2.when": "",
      "pkg3.name": "",
      "pkg3.badge": "",
      "pkg3.desc": "",
      "pkg3.includes": "",
      "comp3": "",
      "review3.text": "",
      "review3.when": "",
      "pkg4.name": "",
      "pkg4.badge": "",
      "pkg4.desc": "",
      "pkg4.includes": "",
      "comp4": "",
      "review4.text": "",
      "review4.when": "",
      "pkg5.name": "",
      "pkg5.badge": "",
      "pkg5.desc": "",
      "pkg5.includes": "",
      "comp5": "",
      "review5.text": "",
      "review5.when": "",
      "pkg6.name": "",
      "pkg6.badge": "",
      "pkg6.desc": "",
      "pkg6.includes": "",
      "comp6": "",
      "review6.text": "",
      "review6.when": "",
      "exam1.name": "",
      "exam1.prep": "",
      "exam1.time": "",
      "exam2.name": "",
      "exam2.prep": "",
      "exam2.time": "",
      "exam3.name": "",
      "exam3.prep": "",
      "exam3.time": "",
      "exam4.name": "",
      "exam4.prep": "",
      "exam4.time": "",
      "exam5.name": "",
      "exam5.prep": "",
      "exam5.time": "",
      "exam6.name": "",
      "exam6.prep": "",
      "exam6.time": "",
      "exam7.name": "",
      "exam7.prep": "",
      "exam7.time": "",
      "exam8.name": "",
      "exam8.prep": "",
      "exam8.time": "",
      "exam9.name": "",
      "exam9.prep": "",
      "exam9.time": "",
      "exam10.name": "",
      "exam10.prep": "",
      "exam10.time": "",
      "inshow1": "",
      "inshow2": "",
      "inshow3": "",
      "inshow4": "",
      "inshow5": "",
      "whatsapp.message": "Hello, I would like information about Nivela's projects.",
      "brand.tagline": "Developments",
      "nav.packages": "Models",
      "profile.specialty": "Specialty",
      "demo.banner": "Fictional data.",
      "demo.banner_cta": "Request a quote",
      "demo.form_ok": "Preview: this is how the form confirms a message. On the real site, the request reaches the panel and the inbox.",
      "demo.preview_label": "Preview",
      "demo.view_aria": "See another package",
      "demo.view_clinic": "Developer",
      "demo.view_practice": "Contractor",
      "brand.aria@consultorio": "Nivela Construcción, go to home",
      "contact.map_aria@consultorio": "Open the office location in Google Maps (opens in a new tab)",
      "contact.vcard_aria@consultorio": "Save Nivela Construcción's contact on your phone (vCard file)",
      "contact.map_frame@consultorio": "Map of the office location",
      "ctabanner.directions@consultorio": "Directions to the office",
      "nav.doctors@consultorio": "Our director",
      "doctors.wa_msg@consultorio": "Hello, I would like a quote from {name} ({specialty}).",
      "form.opt_surgery@consultorio": "Build my house",
      "form.opt_emergency@consultorio": "Remodelling",
      "form.opt_specialist@consultorio": "Extension or second floor",
      "form.opt_lab@consultorio": "Design and drawings",
      "form.opt_maternity@consultorio": "Construction budget",
      "req.name_label@consultorio": "Full name",
      "appt.specialty_label@consultorio": "Service",
      "insck.service_label@consultorio": "Service",
      "demo.packages": "← All packages",
      "demo.sum_express": "Express · Q4,800 + VAT · lead time: 2 weeks",
      "demo.sum_starter": "Starter · Q6,800 + VAT · lead time: 3 weeks",
      "demo.sum_profesional": "Profesional · Q10,500 + VAT · lead time: 4 to 5 weeks",
      "demo.sum_premium": "Premium · from Q19,500 + VAT · lead time: 6 to 8 weeks",
      "doctors.license@consultorio": "Licence no.",
      "doctors.hours@consultorio": "Availability",
      "doctors.insurers@consultorio": "Work",
      "profile.specialty@consultorio": "Role",
      "svcpage.doctors@consultorio": "In charge",
      "projects.cta_aria@consultorio": "Download the finishes catalogue as a PDF"
    }
  };

  /* ============================================================
     CONTENT MANAGER OVERRIDES — text, contact details and photo alt
     text edited in /admin arrive as an inert JSON block (#siteContent).
     ============================================================ */
  var SITE_CONTENT = (function(){
    var el = document.getElementById('siteContent');
    if (!el) return {};
    try {
      var data = JSON.parse(el.textContent);
      return (data && typeof data === 'object') ? data : {};
    } catch (e) { return {}; }
  })();
  /* Profile variants of fixed texts ("key@consultorio"), as the server renders them. */
  (function(){
    var m = /(?:^|\s)profile-(\w+)/.exec(root.className);
    if (!m) return;
    var suffix = '@' + m[1];
    ['es', 'en'].forEach(function(lang){
      Object.keys(I18N[lang]).forEach(function(k){
        if (k.slice(-suffix.length) === suffix) I18N[lang][k.slice(0, -suffix.length)] = I18N[lang][k];
      });
    });
  })();
  /* Only these keys may carry markup (built and escaped server-side). */
  var HTML_OVERRIDE_KEYS = { 'hero.title': true, 'maternity.title': true, 'form.fallback': true };
  if (SITE_CONTENT.i18n && typeof SITE_CONTENT.i18n === 'object'){
    ['es', 'en'].forEach(function(lang){
      var overrides = SITE_CONTENT.i18n[lang];
      if (!overrides || typeof overrides !== 'object') return;
      Object.keys(overrides).forEach(function(key){
        var val = overrides[key];
        if (typeof val !== 'string') return;
        if (val.indexOf('<') !== -1 && !HTML_OVERRIDE_KEYS[key]) return;
        I18N[lang][key] = val;
      });
    });
  }
  var SITE_IMAGES = (SITE_CONTENT.images && typeof SITE_CONTENT.images === 'object') ? SITE_CONTENT.images : {};

  // Nothing is stored until the visitor actually sets something (empty values remove the key).
  function store(key, val){ try { if (val === undefined) return localStorage.getItem(key); if (val === '{}' || val === '[]') localStorage.removeItem(key); else localStorage.setItem(key, val); } catch (e) { return null; } return null; }

  var LANG_KEY = 'clinica_lang';
  var currentLang = (function(){
    var saved = store(LANG_KEY);
    /* Packages without the English version stay in Spanish, whatever was chosen elsewhere on this domain. */
    if (root.hasAttribute('data-es-only')) return 'es';
    return (saved === 'es' || saved === 'en') ? saved : 'es';
  })();
  var WHATSAPP_NUMBER = (typeof SITE_CONTENT.whatsapp === 'string' && /^\d{8,15}$/.test(SITE_CONTENT.whatsapp))
    ? SITE_CONTENT.whatsapp : (root.getAttribute('data-wa') || '50256192730');

  /** Name of the clinic or practice, as published (Perfil del sitio → Nombre). */
  function siteName(){ var el = document.querySelector('.brand-name'); return (el && el.textContent.trim()) || document.title.split(' · ')[0]; }
  function t(key){ return (I18N[currentLang] && I18N[currentLang][key]) || I18N.es[key] || key; }

  /* Shareable preview (static hosting, no PHP): the form answers itself so
     prospects can try it, and says plainly that nothing was sent. */
  var PREVIEW = document.documentElement.getAttribute('data-preview') === '1';
  function handlerFetch(url, opts){
    if (!PREVIEW) return fetch(url, opts);
    var reply = function(o){ return new Response(JSON.stringify(o), { status: 200, headers: { 'Content-Type': 'application/json' } }); };
    if (url.indexOf('challenge=1') !== -1){
      return window.crypto.subtle.digest('SHA-256', new TextEncoder().encode('preview0')).then(function(h){
        var hex = Array.prototype.map.call(new Uint8Array(h), function(b){ return ('0' + b.toString(16)).slice(-2); }).join('');
        return reply({ algorithm: 'SHA-256', challenge: hex, salt: 'preview', maxnumber: 10, signature: 'preview' });
      });
    }
    return new Promise(function(r){ setTimeout(r, 600); }).then(function(){ return reply({ ok: true }); });
  }
  function okKey(k){ return PREVIEW ? 'demo.form_ok' : (k || 'form.status_ok'); }
  function fmt(s, vars){ return String(s).replace(/\{(\w+)\}/g, function(m, k){ return vars[k] !== undefined ? vars[k] : m; }); }
  /* Shareable preview: messages say which package the visitor was looking at. */
  var PKG = (root.className.match(/\bpkg-(\w+)/) || [])[1] || '';
  function waUrl(text){
    if (PREVIEW && PKG) text = '[Demo ' + PKG.charAt(0).toUpperCase() + PKG.slice(1) + '] ' + text;
    return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text);
  }

  var langToggle = document.getElementById('langToggle');
  var langListeners = [];

  function applyLang(lang){
    var dict = I18N[lang] || I18N.es;
    currentLang = lang;
    root.lang = (lang === 'es') ? 'es-GT' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var val = dict[el.getAttribute('data-i18n')];
      if (val === undefined) return;
      if (val.indexOf('<') !== -1) el.innerHTML = val; else el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function(el){
      var val = dict[el.getAttribute('data-i18n-html')];
      if (val !== undefined) el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function(el){
      el.getAttribute('data-i18n-attr').split(';').forEach(function(pair){
        var parts = pair.split(':');
        if (parts.length !== 2) return;
        var val = dict[parts[1].trim()];
        if (val !== undefined) el.setAttribute(parts[0].trim(), val);
      });
    });
    /* Service pages keep their own title (the home page's title is for the home page). */
    if (dict['meta.title'] && document.body.getAttribute('data-page') !== 'service') document.title = dict['meta.title'];
    [['metaDescription', 'meta.description'], ['ogTitle', 'meta.title'], ['ogDescription', 'meta.description'], ['twTitle', 'meta.title'], ['twDescription', 'meta.description'], ['ogLocale', 'og.locale']].forEach(function(p){
      var el = document.getElementById(p[0]);
      if (el && dict[p[1]]) el.setAttribute('content', dict[p[1]]);
    });
    if (langToggle){
      langToggle.querySelector('span').textContent = (lang === 'es') ? 'EN' : 'ES';
    }
    /* WhatsApp links: the general message, or one per service. */
    document.querySelectorAll('[data-wa]').forEach(function(a){
      var key = a.getAttribute('data-wa');
      var text = dict['whatsapp.message'];
      if (key){
        var name = dict[key] || '';
        text = (lang === 'es' ? 'Hola, quisiera información sobre ' : 'Hello, I\'d like information about ') + name.toLowerCase() + (lang === 'es' ? ' en ' : ' at ') + siteName() + '.';
      }
      a.setAttribute('href', waUrl(text));
    });
    if (!root.hasAttribute('data-es-only')) store(LANG_KEY, lang);
    langListeners.forEach(function(fn){ fn(lang); });
  }

  document.querySelectorAll('[data-lang-toggle]').forEach(function(b){
    b.addEventListener('click', function(){
      var next = currentLang === 'es' ? 'en' : 'es';
      // A soft cross-fade between languages where the browser supports it.
      if (document.startViewTransition && !root.classList.contains('a11y-motion') && !mqReduce.matches) document.startViewTransition(function(){ applyLang(next); });
      else applyLang(next);
    });
  });

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* ---------- Header: translucent material once content scrolls under it ---------- */
  var header = document.getElementById('siteHeader');
  var ticking = false;
  function onScroll(){
    ticking = false;
    var sy = window.scrollY;
    if (header) header.classList.toggle('is-scrolled', sy > 8);
    if (backToTop) backToTop.classList.toggle('show', sy > 900);
  }
  window.addEventListener('scroll', function(){ if (!ticking){ ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });

  /* ---------- Cards: a soft light follows the pointer (mouse only) ---------- */
  if (window.matchMedia && matchMedia('(hover: hover) and (pointer: fine)').matches){
    document.addEventListener('pointermove', function(e){
      var c = e.target.closest && e.target.closest('.service-card, .mv-card, .ins-card, .review-card, .stat, .doctor-card, .pkg-card');
      if (!c) return;
      var r = c.getBoundingClientRect();
      c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      c.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }, { passive: true });
  }

  /* ---------- Sheets (native <dialog>): menu, accessibility, gallery ----------
     A <dialog> opened with showModal() already traps focus, makes the page
     behind it inert and closes with Escape. Each sheet enters and leaves
     along the same path (spatial consistency); closing waits for the exit
     transition, but a new open interrupts it immediately. */
  function sheet(dialog, opener){
    if (!dialog || typeof dialog.showModal !== 'function') return null;
    var closingTimer = null;
    var returnFocus = null;
    function open(from){
      returnFocus = from || opener || document.activeElement;
      clearTimeout(closingTimer);
      dialog.classList.remove('is-closing');
      /* A popover grows from its trigger, wherever banners above the header put it. */
      if (opener && dialog.classList.contains('sheet-pop')){
        var r = opener.getBoundingClientRect();
        dialog.style.setProperty('--pop-top', Math.round(Math.max(r.bottom, 0) + 8) + 'px');
        dialog.style.setProperty('--pop-right', Math.round(Math.max(window.innerWidth - r.right - 8, 16)) + 'px');
      }
      if (!dialog.open) dialog.showModal();
      if (opener) opener.setAttribute('aria-expanded', 'true');
      requestAnimationFrame(function(){ dialog.classList.add('is-open'); });
      root.classList.add('has-sheet');
    }
    function close(){
      if (!dialog.open) return;
      dialog.classList.remove('is-open');
      dialog.classList.add('is-closing');
      if (opener) opener.setAttribute('aria-expanded', 'false');
      var done = function(){ dialog.classList.remove('is-closing'); if (dialog.open) dialog.close(); root.classList.remove('has-sheet'); if (returnFocus && returnFocus.focus) returnFocus.focus(); };
      if (reduceMotion) done(); else closingTimer = setTimeout(done, 260);
    }
    dialog.addEventListener('cancel', function(e){ e.preventDefault(); close(); });
    /* A tap on the dimmed backdrop (the <dialog> box itself) closes it. */
    dialog.addEventListener('click', function(e){ if (e.target === dialog) close(); });
    dialog.querySelectorAll('[data-close]').forEach(function(b){ b.addEventListener('click', close); });
    if (opener) opener.addEventListener('click', function(){ dialog.open && !dialog.classList.contains('is-closing') ? close() : open(opener); });
    return { open: open, close: close, el: dialog };
  }

  var menu = sheet(document.getElementById('mobileNav'), document.getElementById('menuToggle'));
  if (menu){
    menu.el.querySelectorAll('a[href^="#"]').forEach(function(a){ a.addEventListener('click', function(){ menu.close(); }); });
    window.matchMedia('(min-width: 1200px)').addEventListener('change', function(e){ if (e.matches) menu.close(); });
  }

  /* ---------- Accessibility preferences ---------- */
  var A11Y_KEY = 'clinica_a11y';
  var a11y = (function(){ try { return JSON.parse(store(A11Y_KEY) || '{}') || {}; } catch (e) { return {}; } })();
  var a11ySheet = sheet(document.getElementById('a11yPanel'), document.getElementById('a11yToggle'));
  function applyA11y(){
    root.setAttribute('data-text', a11y.size || '0');
    ['contrast', 'motion', 'links', 'spacing'].forEach(function(k){ root.classList.toggle('a11y-' + k, !!a11y[k]); });
    reduceMotion = mqReduce.matches || !!a11y.motion;
    root.classList.toggle('js-motion', !reduceMotion);
    document.querySelectorAll('[data-a11y]').forEach(function(sw){ sw.setAttribute('aria-checked', a11y[sw.getAttribute('data-a11y')] ? 'true' : 'false'); });
    document.querySelectorAll('[data-text-size]').forEach(function(b){ b.setAttribute('aria-pressed', String(b.getAttribute('data-text-size') === String(a11y.size || '0'))); });
    store(A11Y_KEY, JSON.stringify(a11y));
  }
  document.querySelectorAll('[data-a11y]').forEach(function(sw){
    sw.addEventListener('click', function(){ var k = sw.getAttribute('data-a11y'); a11y[k] = !a11y[k]; applyA11y(); });
  });
  document.querySelectorAll('[data-text-size]').forEach(function(b){
    b.addEventListener('click', function(){ a11y.size = b.getAttribute('data-text-size'); applyA11y(); });
  });
  var a11yReset = document.getElementById('a11yReset');
  if (a11yReset) a11yReset.addEventListener('click', function(){ a11y = {}; applyA11y(); });
  applyA11y();
  mqReduce.addEventListener && mqReduce.addEventListener('change', applyA11y);

  /* ---------- Reveal on scroll (content is visible without JS) ---------- */
  /* Nothing fades in on scroll: the hero has its own entrance and every section is simply there. */
  Array.prototype.forEach.call(document.querySelectorAll('.reveal'), function(el){ el.classList.remove('reveal'); });
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion){
    root.classList.add('js-reveal');
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if (en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(function(el){ io.observe(el); });
  }

  /* ---------- Stats: count up once, from 0 to the published number ---------- */
  var statEls = document.querySelectorAll('[data-count]');
  function countUp(el){
    var text = el.textContent;
    var m = text.match(/^(\D*)(\d+)(.*)$/);
    if (!m || reduceMotion || m[2] === '24') return;
    var target = parseInt(m[2], 10), start = null, dur = 900;
    function frame(ts){
      if (start === null) start = ts;
      var p = Math.min(1, (ts - start) / dur);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = m[1] + Math.round(target * eased) + m[3];
      if (p < 1) requestAnimationFrame(frame); else el.textContent = text;
    }
    requestAnimationFrame(frame);
  }
  if ('IntersectionObserver' in window && statEls.length){
    var sio = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if (en.isIntersecting){ countUp(en.target); sio.unobserve(en.target); } });
    }, { threshold: 0.6 });
    statEls.forEach(function(el){ sio.observe(el); });
  }

  /* ---------- Active section in the desktop navigation ---------- */
  var navLinks = document.querySelectorAll('.nav-desktop a[href^="#"]');
  if ('IntersectionObserver' in window && navLinks.length){
    var byId = {};
    navLinks.forEach(function(a){ byId[a.getAttribute('href').slice(1)] = a; });
    var nio = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if (!en.isIntersecting) return;
        navLinks.forEach(function(a){ a.removeAttribute('aria-current'); });
        var a = byId[en.target.id];
        if (a) a.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(byId).forEach(function(id){ var s = document.getElementById(id); if (s) nio.observe(s); });
  }

  /* ---------- Visiting hours: live status in Guatemala time (UTC−6, no DST) ---------- */
  var visitEls = Array.prototype.slice.call(document.querySelectorAll('#visitStatus, [data-visit-status]'));
  function visitStatus(){
    visitEls.forEach(function(visitEl){
      var windows = (visitEl.getAttribute('data-windows') || '').split(',').map(function(w){
        var m = w.trim().match(/^(\d{1,2}):(\d{2})-(\d{1,2}):(\d{2})$/);
        return m ? [(+m[1]) * 60 + (+m[2]), (+m[3]) * 60 + (+m[4]), m[1] + ':' + m[2], m[3] + ':' + m[4]] : null;
      }).filter(Boolean);
      if (!windows.length){ visitEl.hidden = true; return; }
      var now = new Date(Date.now() - 6 * 3600 * 1000);
      var mins = now.getUTCHours() * 60 + now.getUTCMinutes();
      var open = null, next = null;
      windows.forEach(function(w){
        if (mins >= w[0] && mins < w[1]) open = w;
        if (mins < w[0] && (!next || w[0] < next[0])) next = w;
      });
      if (!open && !next) next = windows.slice().sort(function(a, b){ return a[0] - b[0]; })[0];
      visitEl.setAttribute('data-state', open ? 'open' : 'closed');
      var label = visitEl.querySelector('[data-role="label"]');
      var detail = visitEl.querySelector('[data-role="detail"]');
      var detailText = open ? fmt(t('visits.until'), { time: open[3] }) : fmt(t('visits.next'), { time: next[2] });
      if (detail){ label.textContent = t(open ? 'visits.open' : 'visits.closed'); detail.textContent = detailText; }
      else if (label) label.textContent = open ? t('visits.open') : detailText;
    });
  }
  visitStatus();
  setInterval(visitStatus, 60000);
  langListeners.push(visitStatus);

  /* ---------- Patients: tabs (WAI-ARIA pattern) with a sliding indicator ---------- */
  var tablist = document.querySelector('[role="tablist"]');
  if (tablist){
    var tabs = Array.prototype.slice.call(tablist.querySelectorAll('[role="tab"]'));
    var indicator = tablist.querySelector('.tab-indicator');
    var moveIndicator = function(tab){
      if (!indicator) return;
      indicator.style.width = tab.offsetWidth + 'px';
      indicator.style.transform = 'translateX(' + tab.offsetLeft + 'px)';
    };
    var select = function(tab, focus){
      tabs.forEach(function(tb){
        var on = tb === tab;
        tb.setAttribute('aria-selected', String(on));
        tb.tabIndex = on ? 0 : -1;
        var panel = document.getElementById(tb.getAttribute('aria-controls'));
        var was = !panel.hidden;
        panel.hidden = !on;
        if (on && !was && panel.animate && !reduceMotion){
          panel.animate([{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }], { duration: 360, easing: 'cubic-bezier(.22, 1, .36, 1)' });
        }
      });
      moveIndicator(tab);
      if (focus) tab.focus();
    };
    tabs.forEach(function(tab, i){
      /* Feedback on press, not on release. */
      tab.addEventListener('pointerdown', function(){ select(tab, false); });
      tab.addEventListener('click', function(){ select(tab, false); });
      tab.addEventListener('keydown', function(e){
        var n = null;
        if (e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
        if (e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
        if (e.key === 'Home') n = tabs[0];
        if (e.key === 'End') n = tabs[tabs.length - 1];
        if (n){ e.preventDefault(); select(n, true); }
      });
    });
    var current = function(){ return tabs.filter(function(tb){ return tb.getAttribute('aria-selected') === 'true'; })[0] || tabs[0]; };
    window.addEventListener('resize', function(){ moveIndicator(current()); });
    langListeners.push(function(){ requestAnimationFrame(function(){ moveIndicator(current()); }); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function(){ moveIndicator(current()); });
    requestAnimationFrame(function(){ moveIndicator(current()); });
  }

  /* ---------- Hospital bag checklist, saved only on this device ---------- */
  var BAG_KEY = 'clinica_bag';
  var bag = document.getElementById('bagList');
  if (bag){
    var saved = (function(){ try { return JSON.parse(store(BAG_KEY) || '[]') || []; } catch (e) { return []; } })();
    var boxes = Array.prototype.slice.call(bag.querySelectorAll('input[type="checkbox"]'));
    var progress = document.getElementById('bagProgress');
    var ring = document.getElementById('bagRing');
    var update = function(){
      var done = boxes.filter(function(b){ return b.checked; });
      if (progress) progress.textContent = fmt(t('bag.progress'), { n: done.length, total: boxes.length });
      if (ring){ ring.style.setProperty('--p', boxes.length ? done.length / boxes.length : 0); ring.toggleAttribute('data-empty', done.length === 0); }
      store(BAG_KEY, JSON.stringify(done.map(function(b){ return b.value; })));
    };
    boxes.forEach(function(b){ b.checked = saved.indexOf(b.value) !== -1; b.addEventListener('change', update); });
    update();
    langListeners.push(update);
  }

  /* ---------- "Get a quote" buttons pick the matching form option ---------- */
  document.querySelectorAll('[data-preselect]').forEach(function(a){
    a.addEventListener('click', function(){
      var sel = document.getElementById('service');
      var val = a.getAttribute('data-preselect');
      if (sel && sel.querySelector('option[value="' + val + '"]')) sel.value = val;
    });
  });

  /* ---------- Facilities gallery: native scroll-snap carousel in a sheet ----------
     Native scrolling gives 1:1 tracking, momentum projection and rubber-band
     edges for free; the buttons and dots only ask it to scroll. */
  var gallery = sheet(document.getElementById('galleryModal'));
  if (gallery){
    var slidesEl = document.getElementById('gallerySlides');
    var dotsEl = document.getElementById('galleryDots');
    var titleEl = document.getElementById('galleryTitle');
    var tagEl = document.getElementById('galleryTag');
    var descEl = document.getElementById('galleryDesc');
    var noteEl = document.getElementById('galleryNote');
    var liveEl = document.getElementById('galleryLive');
    var prev = document.getElementById('galleryPrev');
    var next = document.getElementById('galleryNext');
    var index = 0, count = 0;
    var go = function(i){
      i = Math.max(0, Math.min(count - 1, i));
      var w = slidesEl.clientWidth;
      slidesEl.scrollTo({ left: i * w, behavior: reduceMotion ? 'auto' : 'smooth' });
    };
    var sync = function(){
      var i = Math.round(slidesEl.scrollLeft / Math.max(1, slidesEl.clientWidth));
      if (i === index && dotsEl.childNodes.length) return;
      index = i;
      Array.prototype.forEach.call(dotsEl.children, function(d, k){ d.setAttribute('aria-current', k === i ? 'true' : 'false'); });
      prev.disabled = i <= 0;
      next.disabled = i >= count - 1;
      liveEl.textContent = count > 1 ? fmt(t('projects.modal_image_of'), { n: i + 1, total: count }) : '';
    };
    slidesEl.addEventListener('scroll', function(){ requestAnimationFrame(sync); }, { passive: true });
    prev.addEventListener('click', function(){ go(index - 1); });
    next.addEventListener('click', function(){ go(index + 1); });
    slidesEl.addEventListener('keydown', function(e){
      if (e.key === 'ArrowRight'){ e.preventDefault(); go(index + 1); }
      if (e.key === 'ArrowLeft'){ e.preventDefault(); go(index - 1); }
    });
    document.querySelectorAll('.area-card[data-project]').forEach(function(card){
      var btn = card.querySelector('.area-open');
      if (!btn) return;
      btn.addEventListener('click', function(){
        var pid = card.getAttribute('data-project');
        var title = t(pid + '.title');
        var paths = (card.getAttribute('data-images') || '').split(',').map(function(s){ return s.trim(); }).filter(Boolean);
        tagEl.textContent = t(pid + '.tag');
        titleEl.textContent = title;
        descEl.textContent = t(pid + '.desc');
        slidesEl.innerHTML = '';
        dotsEl.innerHTML = '';
        if (!paths.length){
          var ph = document.createElement('div');
          var art = card.querySelector('.area-art');
          ph.className = 'gallery-slide is-placeholder ' + (art ? art.className : '');
          ph.innerHTML = art ? art.innerHTML : '';
          slidesEl.appendChild(ph);
        }
        paths.forEach(function(p, k){
          var meta = SITE_IMAGES[p] || {};
          var alt = (meta.alt && (meta.alt[currentLang] || meta.alt.es)) || fmt(t('projects.modal_photo_alt'), { n: k + 1, title: title });
          var slide = document.createElement('div');
          slide.className = 'gallery-slide';
          var img = document.createElement('img');
          img.src = p;
          if (meta.srcset){ img.srcset = meta.srcset; img.sizes = '(max-width: 760px) 100vw, 760px'; }
          img.alt = alt;
          img.decoding = 'async';
          if (k > 0) img.loading = 'lazy';
          slide.appendChild(img);
          slidesEl.appendChild(slide);
          var dot = document.createElement('button');
          dot.type = 'button';
          dot.setAttribute('aria-label', fmt(t('projects.modal_goto_slide'), { n: k + 1 }));
          dot.addEventListener('click', function(){ go(k); });
          dotsEl.appendChild(dot);
        });
        count = Math.max(1, paths.length);
        noteEl.hidden = paths.length > 0;
        dotsEl.hidden = prev.hidden = next.hidden = paths.length < 2;
        index = -1;
        gallery.open(btn);
        slidesEl.scrollLeft = 0;
        sync();
      });
    });
  }

  /* ---------- Service details: a sheet anchored to the card that opened it ---------- */
  var serviceSheet = sheet(document.getElementById('serviceModal'));
  if (serviceSheet){
    var sHero = document.getElementById('serviceHero');
    var sIcon = document.getElementById('serviceIcon');
    var sTitle = document.getElementById('serviceTitle');
    var sText = document.getElementById('serviceText');
    var sWa = document.getElementById('serviceWa');
    var openService = function(card, btn){
      var key = card.getAttribute('data-service');
      var photo = card.querySelector('.service-photo');
      var icon = card.querySelector('.service-icon');
      sHero.innerHTML = '';
      var img = null;
      if (photo){
        img = photo.cloneNode(false);
        img.removeAttribute('loading');
        img.className = '';
        img.sizes = '(max-width: 760px) 100vw, 640px';
        sHero.appendChild(img);
      }
      sIcon.innerHTML = icon ? icon.innerHTML : '';
      sIcon.className = 'service-icon' + (key === 'service1' ? ' is-emergency' : '');
      sTitle.textContent = t(key + '.title');
      sText.innerHTML = '';
      [t(key + '.desc')].concat(String(t(key + '.more') || '').split(/\n\s*\n/)).forEach(function(par){
        par = par.trim();
        if (!par) return;
        var p = document.createElement('p');
        p.textContent = par;
        sText.appendChild(p);
      });
      sWa.setAttribute('data-wa', key + '.title');
      sWa.setAttribute('href', waUrl((currentLang === 'es' ? 'Hola, quisiera información sobre ' : 'Hello, I\'d like information about ') + t(key + '.title').toLowerCase() + (currentLang === 'es' ? ' en ' : ' at ') + siteName() + '.'));
      /* Open only once the photo is decoded, so the sheet never shows an empty
         frame that then pops; a slow network waits at most 350 ms. */
      var show = function(){ serviceSheet.open(btn); sText.scrollTop = 0; };
      if (img && img.decode){
        var shown = false, go = function(){ if (!shown){ shown = true; show(); } };
        img.decode().then(go, go);
        setTimeout(go, 350);
      } else show();
    };
    /* Warm the service photos once the browser is idle, so the first open is instant. */
    var warm = function(){
      document.querySelectorAll('.service-card[data-service] .service-photo').forEach(function(ph){
        var i = new Image(); i.sizes = '(max-width: 760px) 100vw, 640px'; if (ph.srcset) i.srcset = ph.srcset; i.src = ph.currentSrc || ph.src;
      });
    };
    if ('requestIdleCallback' in window) requestIdleCallback(warm, { timeout: 3000 }); else setTimeout(warm, 1500);
    var labelServices = function(){
      document.querySelectorAll('.service-card[data-service]').forEach(function(card){
        var btn = card.querySelector('.service-open');
        if (btn) btn.setAttribute('aria-label', fmt(t('services.more_aria'), { name: t(card.getAttribute('data-service') + '.title') }));
      });
    };
    document.querySelectorAll('.service-card[data-service]').forEach(function(card){
      var btn = card.querySelector('.service-open');
      if (btn) btn.addEventListener('click', function(){ openService(card, btn); });
    });
    langListeners.push(labelServices);
  }

  /* ---------- Map: loaded only when the visitor asks (no Google request before) ---------- */
  var mapBox = document.getElementById('mapBox');
  var mapLoad = document.getElementById('mapLoad');
  if (mapBox && mapLoad){
    mapLoad.addEventListener('click', function(){
      if (mapBox.querySelector('iframe')) return;
      var f = document.createElement('iframe');
      f.src = mapBox.getAttribute('data-src');
      f.title = t('contact.map_frame');
      f.loading = 'lazy';
      f.referrerPolicy = 'no-referrer-when-downgrade';
      f.setAttribute('allowfullscreen', '');
      f.addEventListener('load', function(){ mapBox.classList.add('is-loaded'); f.focus(); });
      mapBox.appendChild(f);
    });
  }

  /* ---------- Save contact: a correct vCard built on the device ---------- */
  var vcardBtn = document.getElementById('vcardBtn');
  if (vcardBtn){
    vcardBtn.addEventListener('click', function(){
      var d = {};
      try { d = JSON.parse(vcardBtn.getAttribute('data-vcard') || '{}'); } catch (e) { return; }
      var esc = function(v){ return String(v || '').replace(/([\\,;])/g, '\\$1').replace(/\n/g, '\\n'); };
      var lines = ['BEGIN:VCARD', 'VERSION:3.0', 'KIND:org', 'FN:' + esc(d.name), 'ORG:' + esc(d.name)];
      (d.tel || []).forEach(function(n, i){ lines.push('TEL;TYPE=' + (i === 0 ? 'WORK,VOICE' : 'CELL,VOICE') + ':' + n); });
      if (d.email) lines.push('EMAIL;TYPE=WORK:' + d.email);
      lines.push('ADR;TYPE=WORK:;;' + esc(d.street) + ';' + esc(d.city) + ';;;Guatemala');
      if (d.url) lines.push('URL:' + d.url);
      lines.push('END:VCARD');
      var blob = new Blob([lines.join('\r\n') + '\r\n'], { type: 'text/vcard;charset=utf-8' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = siteName().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^A-Za-z0-9]+/g, '-').replace(/^-|-$/g, '') + '.vcf';
      document.body.appendChild(a);
      a.click();
      setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    });
  }

  /* ---------- Photos fade in once loaded (no pop-in on slow connections) ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('.service-photo, .area-photo, .about-photo, .maternity-img, .hero-photo img'), function(img){
    if (img.complete && img.naturalWidth) return;
    img.classList.add('is-loading');
    function done(){ img.classList.remove('is-loading'); }
    img.addEventListener('load', done, { once: true });
    img.addEventListener('error', done, { once: true });
  });

  /* ---------- Gentle parallax on the large photos (transform only, rAF-batched) ---------- */
  var parallaxEls = []; /* the page scrolls plainly: no parallax on a service site */
  var mqWide = window.matchMedia('(min-width: 900px)');
  var plxTicking = false;
  function parallax(){
    plxTicking = false;
    var vh = window.innerHeight;
    parallaxEls.forEach(function(el){
      if (reduceMotion || !mqWide.matches){ el.style.transform = ''; return; }
      var r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      var offset = (r.top + r.height / 2 - vh / 2) * -0.06;
      el.style.transform = 'translate3d(0,' + offset.toFixed(1) + 'px,0)';
    });
  }
  if (parallaxEls.length){
    window.addEventListener('scroll', function(){ if (!plxTicking){ plxTicking = true; requestAnimationFrame(parallax); } }, { passive: true });
    window.addEventListener('resize', parallax);
    requestAnimationFrame(parallax);
  }

  /* ---------- Back to top ---------- */
  var backToTop = document.getElementById('backToTop');
  if (backToTop){
    backToTop.addEventListener('click', function(){
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
      var skip = document.getElementById('inicio');
      if (skip) skip.focus({ preventScroll: true });
    });
  }

  applyLang(currentLang);
  requestAnimationFrame(onScroll);

  /* ============================================================
     Contact form — client-side validation (a UX convenience only;
     assets/contact-handler.php re-validates everything server-side),
     honeypot + minimum-completion-time anti-spam signals, and a
     defensive fetch() that handles non-JSON responses, HTTP status
     categories, timeouts, duplicate submits, offline errors, and
     field-specific errors returned by the server. Field values are
     preserved on any failure and cleared only after a confirmed
     success.
     ============================================================ */
  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');
  var summary = document.getElementById('formSummary');

  /* Minimum-completion-time signal: stamped once, invisible, never an
     expectation placed on the visitor — purely a server-side anti-spam
     input alongside the honeypot. */
  var loadedAtField = document.getElementById('formLoadedAt');
  if (loadedAtField) loadedAtField.value = String(Date.now());

  /* ------------------------------------------------------------
     Captcha, two layers (verified again in assets/contact-handler.php):
     1. Built-in, always on: the handler issues a signed, single-use
        challenge and the browser finds the matching number with the
        Web Crypto API (SHA-256) in the background while the visitor
        types. Invisible: the visitor never has to do anything.
     2. Optional Cloudflare Turnstile, only when the page carries a
        site key (the owner enables it in the Content Manager). It
        stays hidden unless Cloudflare needs the visitor to click.
     ------------------------------------------------------------ */
  var captchaInput = document.getElementById('formCaptchaAnswer');
  var captchaText = document.getElementById('formCaptchaText');
  var captchaNote = document.getElementById('formCaptcha');
  var captchaJob = null;      /* Promise of the current answer */
  var captchaIssued = 0;      /* when the current challenge was requested */
  var CAPTCHA_FRESH_MS = 25 * 60 * 1000; /* the server accepts 30 min */

  function setCaptchaState(state){
    if (captchaNote) captchaNote.setAttribute('data-state', state);
    if (captchaText){
      captchaText.setAttribute('data-i18n', 'form.captcha_' + state);
      captchaText.textContent = t('form.captcha_' + state);
    }
  }

  function hexToBytes(hex){
    var out = new Uint8Array(hex.length / 2);
    for (var i = 0; i < out.length; i++) out[i] = parseInt(hex.substr(i * 2, 2), 16);
    return out;
  }

  function sameBytes(buf, target){
    var a = new Uint8Array(buf);
    for (var i = 0; i < target.length; i++) if (a[i] !== target[i]) return false;
    return true;
  }

  function solveCaptcha(){
    if (!captchaInput) return Promise.resolve();
    if (!window.crypto || !window.crypto.subtle || typeof TextEncoder === 'undefined' || typeof fetch === 'undefined'){
      setCaptchaState('error');
      return Promise.reject(new Error('captcha_unsupported'));
    }
    captchaInput.value = '';
    captchaIssued = Date.now();
    setCaptchaState('pending');
    return handlerFetch('assets/contact-handler.php?challenge=1', { headers: { 'Accept': 'application/json' }, cache: 'no-store', credentials: 'same-origin' })
      .then(function(res){
        if (!res.ok) throw new Error('captcha_challenge_' + res.status);
        return res.json();
      })
      .then(function(c){
        if (!c || c.algorithm !== 'SHA-256' || typeof c.salt !== 'string' || typeof c.challenge !== 'string') throw new Error('captcha_bad_challenge');
        var enc = new TextEncoder();
        var target = hexToBytes(c.challenge);
        var BATCH = 1000;
        var search = function(start){
          if (start > c.maxnumber) throw new Error('captcha_unsolved');
          var end = Math.min(start + BATCH, c.maxnumber + 1);
          var jobs = [];
          for (var n = start; n < end; n++) jobs.push(window.crypto.subtle.digest('SHA-256', enc.encode(c.salt + n)));
          return Promise.all(jobs).then(function(hashes){
            for (var i = 0; i < hashes.length; i++) if (sameBytes(hashes[i], target)) return start + i;
            return search(end);
          });
        };
        return search(0).then(function(number){
          captchaInput.value = btoa(JSON.stringify({ algorithm: c.algorithm, challenge: c.challenge, number: number, salt: c.salt, signature: c.signature }));
          setCaptchaState('ok');
        });
      })
      .catch(function(err){
        setCaptchaState('error');
        captchaJob = null;
        throw err;
      });
  }

  /* The current answer, or a new one when there is none or it is getting old. */
  function ensureCaptcha(){
    if (!captchaJob || Date.now() - captchaIssued > CAPTCHA_FRESH_MS) captchaJob = solveCaptcha();
    return captchaJob;
  }

  function startCaptcha(){
    ensureCaptcha().catch(function(){ /* shown in the note; retried on submit */ });
    loadTurnstile();
  }

  /* Optional Cloudflare Turnstile. */
  var tsBox = document.getElementById('formTurnstile');
  var tsSiteKey = tsBox ? (tsBox.getAttribute('data-sitekey') || '') : '';
  var tsWidget = null;
  var tsToken = '';
  var tsWaiters = [];
  var tsLoading = false;

  function tsSettle(){
    var w = tsWaiters; tsWaiters = [];
    w.forEach(function(fn){ fn(); });
  }

  function loadTurnstile(){
    if (!tsSiteKey || tsLoading) return;
    tsLoading = true;
    window.clinicaTurnstileReady = function(){
      if (!window.turnstile) return;
      tsWidget = window.turnstile.render(tsBox, {
        sitekey: tsSiteKey,
        action: 'contact',
        appearance: 'interaction-only',
        language: currentLang === 'en' ? 'en' : 'es',
        callback: function(token){ tsToken = token; tsSettle(); },
        'expired-callback': function(){ tsToken = ''; },
        'error-callback': function(){ tsToken = ''; tsSettle(); }
      });
    };
    var sc = document.createElement('script');
    sc.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=clinicaTurnstileReady';
    sc.async = true;
    sc.defer = true;
    document.head.appendChild(sc);
  }

  /* Resolves with true when Turnstile is off or has a token; false after waiting. */
  function turnstileReady(){
    if (!tsSiteKey) return Promise.resolve(true);
    loadTurnstile();
    if (tsToken) return Promise.resolve(true);
    return new Promise(function(resolve){
      var timer = setTimeout(function(){ resolve(!!tsToken); }, 20000);
      tsWaiters.push(function(){ clearTimeout(timer); resolve(!!tsToken); });
    });
  }

  function resetTurnstile(){
    tsToken = '';
    if (tsWidget !== null && window.turnstile) {
      try { window.turnstile.reset(tsWidget); } catch (e) { /* widget gone */ }
    }
  }

  /* Start as soon as the visitor shows interest in the form (or it scrolls into view). */
  var contactFormEl = document.getElementById('contactForm');
  if (contactFormEl && captchaInput){
    var started = false;
    var kick = function(){ if (!started){ started = true; startCaptcha(); } };
    contactFormEl.addEventListener('focusin', kick);
    contactFormEl.addEventListener('pointerdown', kick);
    if ('IntersectionObserver' in window){
      var io = new IntersectionObserver(function(entries){
        if (entries.some(function(e){ return e.isIntersecting; })){ io.disconnect(); kick(); }
      }, { rootMargin: '300px' });
      io.observe(contactFormEl);
    }
  }

  if (form){
    /* The questions come from the Content Manager (Sitio web → Formulario de
       contacto): each .field holds one question — an input, select or
       textarea, or a group of radio buttons / checkboxes. */
    var questionFields = function(){
      return Array.prototype.filter.call(form.querySelectorAll('.field'), function(f){
        return !f.classList.contains('hp-field') && f.querySelector('input[name],select[name],textarea[name]');
      });
    };
    var fieldName = function(field){
      return field.querySelector('input[name],select[name],textarea[name]').name.replace(/\[\]$/, '');
    };
    var controlsOf = function(field){ return field.querySelectorAll('input[name],select[name],textarea[name]'); };
    var fieldValid = function(field){
      var controls = controlsOf(field);
      if (controls[0].type === 'checkbox'){
        if (!field.hasAttribute('data-required')) return true;
        return Array.prototype.some.call(controls, function(c){ return c.checked; });
      }
      return controls[0].checkValidity(); /* a radio's validity covers its whole group */
    };
    var markField = function(field, ok){
      field.classList.toggle('invalid', !ok);
      Array.prototype.forEach.call(controlsOf(field), function(c){ c.setAttribute('aria-invalid', ok ? 'false' : 'true'); });
    };
    var fieldByName = function(name){
      var found = null;
      questionFields().forEach(function(f){ if (!found && fieldName(f) === name) found = f; });
      return found;
    };
    /* Dates that must be from today on (the page is static: today is set here). */
    var today = new Date();
    var todayIso = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    Array.prototype.forEach.call(form.querySelectorAll('input[type="date"][data-future]'), function(d){ d.min = todayIso; });

    var submitBtn = form.querySelector('button[type="submit"]');
    var submitting = false;

    var validateAll = function(){
      var valid = true;
      var firstInvalid = null;
      questionFields().forEach(function(field){
        var ok = fieldValid(field);
        markField(field, ok);
        if (!ok){
          valid = false;
          if (!firstInvalid) firstInvalid = controlsOf(field)[0];
        }
      });
      return { valid: valid, firstInvalid: firstInvalid };
    }

    var showSummary = function(message){
      if (!summary) return;
      summary.textContent = message;
      summary.hidden = false;
    }
    var hideSummary = function(){
      if (!summary) return;
      summary.hidden = true;
      summary.textContent = '';
    }

    var setStatus = function(message, kind){
      if (!status) return;
      status.textContent = message;
      status.className = 'form-status show' + (kind ? ' ' + kind : '');
    }

    form.addEventListener('submit', function(e){
      e.preventDefault();
      if (submitting) return; /* duplicate-submission guard */

      hideSummary();

      var result = validateAll();

      /* Honeypot check — if this hidden field has a value, silently drop
         as bot spam without hitting the network or alarming the (bot)
         "user" that anything was detected. */
      var hp = document.getElementById('website');
      if (hp && hp.value){
        setStatus(t('form.status_ok'), 'ok');
        form.reset();
        if (loadedAtField) loadedAtField.value = String(Date.now());
        return;
      }

      if (!result.valid){
        showSummary(t('form.status_invalid'));
        setStatus(t('form.status_invalid'), 'error');
        if (result.firstInvalid) result.firstInvalid.focus();
        return;
      }

      if (typeof navigator !== 'undefined' && navigator.onLine === false){
        setStatus(t('form.status_offline'), 'error');
        return;
      }

      submitting = true;
      if (submitBtn) submitBtn.disabled = true;
      var done = function(){
        submitting = false;
        if (submitBtn) submitBtn.disabled = false;
      };
      if (captchaInput && !captchaInput.value) setStatus(t('form.status_verifying'), '');

      ensureCaptcha()
        .then(function(){ return turnstileReady(); })
        .then(function(ok){
          if (!ok){ setStatus(t('form.status_turnstile'), 'error'); done(); return; }
          send(false);
        }, function(){
          setStatus(t('form.status_captcha'), 'error');
          done();
        });

      function send(retried){
      setStatus(t('form.status_sending'), '');
      var controller = (typeof AbortController !== 'undefined') ? new AbortController() : null;
      var timeoutId = controller ? setTimeout(function(){ controller.abort(); }, 15000) : null;

      var formData = new FormData(form);
      formData.append('lang', currentLang === 'en' ? 'en' : 'es'); /* reply in the visitor's language */
      handlerFetch('assets/contact-handler.php', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData,
        signal: controller ? controller.signal : undefined
      })
        .then(function(res){
          if (timeoutId) clearTimeout(timeoutId);
          var contentType = res.headers.get('Content-Type') || '';
          var parse = contentType.indexOf('application/json') !== -1
            ? res.json().catch(function(){ return null; })
            : Promise.resolve(null);
          return parse.then(function(data){ return { res: res, data: data }; });
        })
        .then(function(result){
          var res = result.res, data = result.data;

          if (res.ok && data && data.ok){
            setStatus(t(okKey()), 'ok');
            hideSummary();
            form.reset();
            questionFields().forEach(function(f){ markField(f, true); });
            if (loadedAtField) loadedAtField.value = String(Date.now());
            /* Each captcha answer works once: prepare the next one. */
            captchaJob = null;
            resetTurnstile();
            ensureCaptcha().catch(function(){});
            return;
          }

          if (res.status === 400 && data && data.error === 'captcha_failed'){
            /* Expired or already used answer (e.g. the page was open for
               hours): solve a fresh one and try once more on our own. */
            captchaJob = null;
            resetTurnstile();
            if (!retried){
              ensureCaptcha()
                .then(function(){ return turnstileReady(); })
                .then(function(ok){
                  if (!ok){ setStatus(t('form.status_turnstile'), 'error'); done(); return; }
                  send(true);
                }, function(){ setStatus(t('form.status_captcha'), 'error'); done(); });
              return 'pending';
            }
            setStatus(t('form.status_captcha'), 'error');
            return;
          }

          if (res.status === 429){
            setStatus(t('form.status_rate_limited'), 'error');
            return;
          }

          if (res.status === 422 && data && Array.isArray(data.fields) && data.fields.length){
            var firstBad = null;
            data.fields.forEach(function(name){
              var bad = fieldByName(String(name));
              if (!bad) return;
              markField(bad, false);
              if (!firstBad) firstBad = controlsOf(bad)[0];
            });
            showSummary(t('form.status_invalid'));
            setStatus(t('form.status_invalid'), 'error');
            if (firstBad) firstBad.focus();
            return;
          }

          if (res.status >= 500){
            setStatus(t('form.status_error'), 'error');
            return;
          }

          /* Any other non-success status (403 origin check, unexpected
             field rejected, malformed/non-JSON response, etc.) — generic,
             non-revealing error message. Values are preserved either way. */
          setStatus(t('form.status_error'), 'error');
        })
        .catch(function(err){
          if (timeoutId) clearTimeout(timeoutId);
          if (err && err.name === 'AbortError'){
            setStatus(t('form.status_timeout'), 'error');
          } else if (typeof navigator !== 'undefined' && navigator.onLine === false){
            setStatus(t('form.status_offline'), 'error');
          } else {
            setStatus(t('form.status_error'), 'error');
          }
        })
        .then(function(outcome){
          if (outcome !== 'pending') done();
        });
      }
    });

    questionFields().forEach(function(field){
      Array.prototype.forEach.call(controlsOf(field), function(input){
        var check = function(){ markField(field, fieldValid(field)); };
        input.addEventListener('blur', check);
        /* choices: re-check as soon as one is picked */
        if (input.type === 'radio' || input.type === 'checkbox') input.addEventListener('change', check);
      });
    });
  }
  /* ============================================================
     HOSPITAL MODULES (cms/src/HospitalModules.php) — every block is
     optional: each part below does nothing when its markup is absent.
     ============================================================ */
  var todayYmd = (function(){ var d = new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); })();
  var fold = function(s){
    return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
  };

  /* ---------- Featured notice: hidden after its end date; closing hides it for this visit ---------- */
  var notice = document.getElementById('siteNotice');
  if (notice){
    var until = notice.getAttribute('data-until') || '';
    var noticeKey = 'clinica_notice_closed';
    var noticeSig = String((I18N.es['notice.text'] || notice.textContent || '').length) + ':' + until;
    var closed = false;
    try { closed = sessionStorage.getItem(noticeKey) === noticeSig; } catch (e) { /* storage blocked */ }
    if ((until && until < todayYmd) || closed) notice.hidden = true;
    var noticeClose = document.getElementById('noticeClose');
    if (noticeClose) noticeClose.addEventListener('click', function(){
      notice.hidden = true;
      try { sessionStorage.setItem(noticeKey, noticeSig); } catch (e) { /* storage blocked */ }
      var main = document.getElementById('main');
      if (main) main.focus({ preventScroll: true });
    });
  }

  /* ---------- Texts made of several pieces (package lists, service page paragraphs) ---------- */
  var applyPieces = function(){
    document.querySelectorAll('[data-split-i18n]').forEach(function(ul){
      var val = t(ul.getAttribute('data-split-i18n'));
      if (!val || val === ul.getAttribute('data-split-i18n')) return;
      var items = val.split(/[;\n]+/).map(function(s){ return s.trim(); }).filter(Boolean);
      ul.innerHTML = '';
      items.forEach(function(text){
        var li = document.createElement('li');
        li.innerHTML = '<svg aria-hidden="true"><use href="#i-check"/></svg>';
        var span = document.createElement('span');
        span.textContent = text;
        li.appendChild(span);
        ul.appendChild(li);
      });
    });
    document.querySelectorAll('[data-i18n-paras]').forEach(function(box){
      var val = t(box.getAttribute('data-i18n-paras'));
      if (!val || val === box.getAttribute('data-i18n-paras')) return;
      box.innerHTML = '';
      val.split(/\n\s*\n/).forEach(function(par){
        par = par.trim();
        if (!par) return;
        var p = document.createElement('p');
        p.textContent = par;
        box.appendChild(p);
      });
    });
    document.querySelectorAll('[data-stars]').forEach(function(s){ s.setAttribute('aria-label', fmt(t('reviews.stars_aria'), { n: s.getAttribute('data-stars') })); });
    document.querySelectorAll('[data-reviews-count]').forEach(function(s){ s.textContent = fmt(t('reviews.count_text'), { n: s.getAttribute('data-reviews-count') }); });
    /* «Pedir cita» by WhatsApp: a message naming the doctor and the specialty. */
    document.querySelectorAll('[data-wa-doc]').forEach(function(a){
      var k = a.getAttribute('data-wa-doc');
      a.setAttribute('href', waUrl(fmt(t('doctors.wa_msg'), { site: siteName(), name: a.getAttribute('data-doc-name') || '', specialty: t(k + '.specialty') === k + '.specialty' ? '' : t(k + '.specialty') })));
    });
  };
  langListeners.push(applyPieces);
  if (currentLang !== 'es') applyPieces();

  /* ---------- Doctors: search by name or specialty, filter by specialty ---------- */
  var docGrid = document.getElementById('doctorsGrid');
  if (docGrid){
    var docSearch = document.getElementById('docSearch');
    var docFilter = document.getElementById('docFilter');
    var docEmpty = document.getElementById('docEmpty');
    var docCount = document.getElementById('docCount');
    var activeSpec = '';
    var docTimer = null;
    /* Filtering animates like a physical rearrangement (FLIP): cards that stay
       glide from where they are on screen right now, leaving cards fade and
       shrink in place, arriving cards rise in. Every pass starts from the
       live (presentation) positions, so a new tap mid-motion redirects
       smoothly instead of jumping. Reduced motion: an instant swap. */
    var flipEase = 'cubic-bezier(.22, 1, .36, 1)';
    var canAnimate = !!(docGrid.animate) && !reduceMotion;
    var leaving = [];
    var filterDoctors = function(announce){
      var q = fold(docSearch ? docSearch.value : '');
      var cards = Array.prototype.slice.call(docGrid.children);
      var match = function(card){
        var okSpec = !activeSpec || card.getAttribute('data-spec') === activeSpec;
        var okText = !q || q.split(' ').every(function(w){ return (card.getAttribute('data-search') || '').indexOf(w) !== -1; });
        return okSpec && okText;
      };
      var shown = cards.filter(match).length;
      if (docEmpty) docEmpty.hidden = shown !== 0;
      if (docCount && announce) docCount.textContent = shown === 1 ? t('doctors.result1') : fmt(t('doctors.results'), { n: shown });
      if (!canAnimate){
        cards.forEach(function(card){ card.hidden = !match(card); if (!card.hidden) card.classList.add('in'); });
        return;
      }
      /* First: live positions of everything visible (includes running transforms). */
      leaving.forEach(function(card){ card.hidden = true; card.style.position = card.style.top = card.style.left = card.style.width = ''; });
      leaving = [];
      var first = new Map();
      cards.forEach(function(card){ if (!card.hidden) first.set(card, card.getBoundingClientRect()); });
      cards.forEach(function(card){ if (card.getAnimations) card.getAnimations().forEach(function(an){ an.cancel(); }); });
      var gridBox = docGrid.getBoundingClientRect();
      /* Last: apply the new state. Leaving cards stay visible, lifted out of the flow. */
      cards.forEach(function(card){
        var want = match(card);
        if (!want && first.has(card)){
          var r = first.get(card);
          card.style.position = 'absolute';
          card.style.top = (r.top - gridBox.top) + 'px';
          card.style.left = (r.left - gridBox.left) + 'px';
          card.style.width = r.width + 'px';
          leaving.push(card);
        } else {
          card.hidden = !want;
        }
      });
      docGrid.style.position = 'relative';
      /* Invert + play. */
      cards.forEach(function(card){
        if (leaving.indexOf(card) !== -1){
          card.animate([{ opacity: 1, transform: 'scale(1)' }, { opacity: 0, transform: 'scale(.94)' }], { duration: 220, easing: 'ease-out', fill: 'forwards' })
            .onfinish = function(){
              if (leaving.indexOf(card) === -1) return;
              card.hidden = true;
              card.style.position = card.style.top = card.style.left = card.style.width = '';
              leaving.splice(leaving.indexOf(card), 1);
            };
          return;
        }
        if (card.hidden) return;
        card.classList.add('in');
        var r0 = first.get(card);
        if (r0){
          var r1 = card.getBoundingClientRect();
          var dx = r0.left - r1.left, dy = r0.top - r1.top;
          if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5){
            card.animate([{ transform: 'translate(' + dx + 'px,' + dy + 'px)' }, { transform: 'none' }], { duration: 520, easing: flipEase });
          }
        } else {
          card.animate([{ opacity: 0, transform: 'translateY(14px) scale(.97)' }, { opacity: 1, transform: 'none' }], { duration: 460, delay: 90, easing: flipEase, fill: 'backwards' });
        }
      });
    };
    if (docSearch) docSearch.addEventListener('input', function(){
      clearTimeout(docTimer);
      docTimer = setTimeout(function(){ filterDoctors(true); }, 180);
    });
    if (docFilter) docFilter.addEventListener('click', function(e){
      var b = e.target.closest ? e.target.closest('.chip-btn') : null;
      if (!b) return;
      activeSpec = b.getAttribute('data-filter') || '';
      Array.prototype.forEach.call(docFilter.querySelectorAll('.chip-btn'), function(x){ x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      filterDoctors(true);
    });
  }

  /* ---------- Appointment: preselect specialty / doctor (cards, service pages, ?proyecto= / ?servicio=) ---------- */
  var apptForm = document.getElementById('appointmentForm');
  var apptSpec = document.getElementById('apptSpecialty');
  var apptDoc = document.getElementById('apptDoctor');
  var preselectAppointment = function(doctor, spec){
    if (!apptForm) return false;
    if (apptDoc && doctor && apptDoc.querySelector('option[value="' + doctor + '"]')){
      apptDoc.value = doctor;
      spec = spec || apptDoc.options[apptDoc.selectedIndex].getAttribute('data-spec');
    }
    if (apptSpec && spec && apptSpec.querySelector('option[value="' + spec + '"]')) apptSpec.value = spec;
    return true;
  };
  if (apptForm){
    document.querySelectorAll('[data-appt-doctor],[data-appt-spec]').forEach(function(a){
      a.addEventListener('click', function(e){
        if (!preselectAppointment(a.getAttribute('data-appt-doctor'), a.getAttribute('data-appt-spec'))) return;
        e.preventDefault();
        var target = document.getElementById('visitas');
        if (target) target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
        setTimeout(function(){ var f = document.getElementById('apptDate'); if (f) f.focus({ preventScroll: true }); }, reduceMotion ? 0 : 450);
      });
    });
    /* Picking a doctor also picks the specialty. */
    if (apptDoc) apptDoc.addEventListener('change', function(){
      var o = apptDoc.options[apptDoc.selectedIndex];
      var s = o ? o.getAttribute('data-spec') : '';
      if (s && apptSpec && apptSpec.querySelector('option[value="' + s + '"]')) apptSpec.value = s;
    });
    try {
      var params = new URLSearchParams(window.location.search);
      if (params.get('proyecto') || params.get('servicio')) preselectAppointment(params.get('proyecto'), params.get('servicio'));
    } catch (e) { /* old browser */ }
  }

  /* ---------- Request forms (appointment, insurance check) ----------
     Same handler, anti-spam and captcha as the contact form; stored in
     «Prospectos» with their kind. */
  Array.prototype.forEach.call(document.querySelectorAll('form.lead-form'), function(lf){
    var stamp = lf.querySelector('[data-loaded-at]');
    if (stamp) stamp.value = String(Date.now());
    var statusEl = lf.querySelector('[data-form-status]');
    var btn = lf.querySelector('button[type="submit"]');
    var busy = false;
    var kicked = false;
    var kickOff = function(){ if (!kicked){ kicked = true; startCaptcha(); } };
    lf.addEventListener('focusin', kickOff);
    lf.addEventListener('pointerdown', kickOff);
    Array.prototype.forEach.call(lf.querySelectorAll('input[type="date"][data-future]'), function(d){ d.min = todayYmd; });
    var fields = function(){ return Array.prototype.filter.call(lf.querySelectorAll('.field'), function(f){ return f.querySelector('input[name],select[name],textarea[name]'); }); };
    var ctl = function(f){ return f.querySelector('input[name],select[name],textarea[name]'); };
    var valid = function(f){ return ctl(f).checkValidity(); };
    var mark = function(f, ok){ f.classList.toggle('invalid', !ok); ctl(f).setAttribute('aria-invalid', ok ? 'false' : 'true'); };
    var say = function(msg, kind){ if (!statusEl) return; statusEl.textContent = msg; statusEl.className = 'form-status show' + (kind ? ' ' + kind : ''); };
    fields().forEach(function(f){ ctl(f).addEventListener('blur', function(){ mark(f, valid(f)); }); ctl(f).addEventListener('change', function(){ if (f.classList.contains('invalid')) mark(f, valid(f)); }); });
    var finish = function(){ busy = false; if (btn) btn.disabled = false; };
    var post = function(retried){
      say(t('form.status_sending'), '');
      var fd = new FormData(lf);
      fd.set('captcha', captchaInput ? captchaInput.value : '');
      if (tsToken) fd.set('cf-turnstile-response', tsToken);
      fd.append('lang', currentLang === 'en' ? 'en' : 'es');
      handlerFetch('assets/contact-handler.php', { method: 'POST', headers: { 'Accept': 'application/json' }, body: fd })
        .then(function(res){ return res.json().catch(function(){ return null; }).then(function(data){ return { res: res, data: data }; }); })
        .then(function(r){
          if (r.res.ok && r.data && r.data.ok){
            say(t(okKey(lf.getAttribute('data-ok'))), 'ok');
            lf.reset();
            fields().forEach(function(f){ mark(f, true); });
            if (stamp) stamp.value = String(Date.now());
            captchaJob = null; resetTurnstile(); ensureCaptcha().catch(function(){});
            finish();
            return;
          }
          if (r.res.status === 400 && r.data && r.data.error === 'captcha_failed' && !retried){
            captchaJob = null; resetTurnstile();
            ensureCaptcha().then(turnstileReady).then(function(ok){ if (ok) post(true); else { say(t('form.status_turnstile'), 'error'); finish(); } }, function(){ say(t('form.status_captcha'), 'error'); finish(); });
            return;
          }
          if (r.res.status === 422 && r.data && Array.isArray(r.data.fields)){
            var first = null;
            r.data.fields.forEach(function(name){
              var c = lf.querySelector('[name="' + String(name).replace(/[^a-z_]/g, '') + '"]');
              var f = c && c.closest('.field');
              if (f){ mark(f, false); if (!first) first = c; }
            });
            say(t('form.status_invalid'), 'error');
            if (first) first.focus();
          } else if (r.res.status === 429){
            say(t('form.status_rate_limited'), 'error');
          } else {
            say(t('form.status_error'), 'error');
          }
          finish();
        })
        .catch(function(){ say(t(navigator.onLine === false ? 'form.status_offline' : 'form.status_error'), 'error'); finish(); });
    };
    lf.addEventListener('submit', function(e){
      e.preventDefault();
      if (busy) return;
      var hp = lf.querySelector('input[name="website"]');
      if (hp && hp.value){ say(t(lf.getAttribute('data-ok') || 'form.status_ok'), 'ok'); lf.reset(); return; }
      var first = null;
      fields().forEach(function(f){ var ok = valid(f); mark(f, ok); if (!ok && !first) first = ctl(f); });
      if (first){ say(t('form.status_invalid'), 'error'); first.focus(); return; }
      busy = true;
      if (btn) btn.disabled = true;
      kickOff();
      if (captchaInput && !captchaInput.value) say(t('form.status_verifying'), '');
      ensureCaptcha().then(turnstileReady).then(function(ok){
        if (!ok){ say(t('form.status_turnstile'), 'error'); finish(); return; }
        post(false);
      }, function(){ say(t('form.status_captcha'), 'error'); finish(); });
    });
  });
})();
