const IMAGE_FILES = [
  '01_tobo_mixto_polar_light_y_pilsen.png',
  '02_tobo_polar_light.png',
  '04_tobo_polar_pilsen.png',
  '05_minalba_sparkling_pet_500ml.png',
  '06_agua_bienestar_600ml.png',
  '07_minalba_sparkling_pet_1l.png',
  '08_minalba_sparkling_soda_lata_355ml.png',
  '09_aguakina_agua_tonica.png',
  '10_agua_minalba_600ml.png',
  '11_pepsi_golden_lata_355ml.png',
  '12_gatorade_mandarina.png',
  '13_refresco_de_litron_pepsi_7up_frescolita.png',
  '16_refresco_de_litro.png',
  '17_maltin_polar.png',
  '18_te_lipton_durazno_o_limon_500ml.png',
  '19_maltin_polar_lata_355ml.png',
  '20_jugo_durazno.png',
  '21_jugo_de_fresa_grande.png',
  '22_jugo_de_mora.png',
  '23_yukery_botella_250ml.png',
  '24_vaso_jugo_de_naranja.png',
  '25_jugo_de_fresa.png',
  '26_limonada_frappe.png',
  '27_casique_500.png',
  '28_michelada.png',
  '29_negroni.png',
  '30_moscow_mule.png',
  '31_trago_silver_old_parr.png',
  '32_trago_tanqueray_ten.png',
  '33_aperol_spritz.png',
  '34_santa_teresa_linaje_trago.png',
  '35_vodka_tonic.png',
  '36_stolichnaya_trago.png',
  '37_buchannas_trago.png',
  '38_casique.png',
  '39_margarita_spicy.png',
  '40_smirnoff_trago.png',
  '41_old_parr_trago.png',
  '42_santa_teresa_gran_reserva_trago.png',
  '43_salchipapas.png',
  '44_papas_fritas_x_kilos.png',
  '45_racion_de_chistoras.png',
  '46_pastelito_de_carne.png',
  '47_mini_empanadas_surtidas.png',
  '48_tequenos_de_capresa_x5.png',
  '49_racion_de_nuggets_con_papas.png',
  '50_combo_mini_empanadas.png',
  '51_pastelito_de_pollo.png',
  '52_tequenos_de_papas_x5.png',
  '53_tequenos_de_chistorra_x5.png',
  '54_tequenos_de_queso_x5.png',
  '55_vodka_absolut.png',
  '56_smirnoff.png',
  '57_ron_carupano_6_anos.png',
  '58_old_parr_silver.png',
  '59_tequila_arraigo_silver.png',
  '60_santa_teresa_gran_reserva.png',
  '61_aperol.png',
  '62_black_and_white_075lts.png',
  '63_ron_carupano_12_anos.png',
  '64_vino_castellblanc_cava.png',
  '65_buchanans.png',
  '66_ron_carupano_reserva_limitada.png',
  '67_ron_carupano_cristalino.png',
  '68_old_parr.png',
  '69_don_julio_reposado.png',
  '70_santa_teresa_1796.png',
  '71_ron_cacique.png',
  '72_black_and_white_1litro.png',
  'Agua_bienestar_600ml.png',
  'Aguakina_Agua_tonica.png',
  'aperol.png',
  'aperol_spritz.png',
  'Capresa.png',
  'Daiquiri_de_durazno.png',
  'limonada_frappe.png',
  'Maltin_polar.png',
  'Maltin_polar_lata_355ml.png',
  'Menu_ejecutivo.png',
  'Mini_empanadas_surtidas.png',
  'santa_teresa_1796.png',
  'santa_teresa_gran_reserva_trago.png',
  'Shot_de_limon.png',
  'Tequeños_de_papa.png',
  'Tequila_Arraigo_Silver.png'
];

function normalizeName(name) {
  return (name || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
}

function normalizeKey(name) {
  return normalizeName(name).replace(/ /g, '');
}

function baseImageName(fileName) {
  return normalizeName(fileName.replace(/\.[^.]+$/, '').replace(/^\d+[_-]/, '').replace(/[-_]/g, ' '));
}

function getImageForItem(name) {
  const target = normalizeName(name);
  if (!target) return null;

  const targetKey = normalizeKey(name);
  const directMatch = IMAGE_FILES.find(file => {
    const fileKey = normalizeKey(file.replace(/\.[^.]+$/, '').replace(/^\d+[_-]/, '').replace(/[-_]/g, ' '));
    return fileKey === targetKey;
  });

  if (directMatch) {
    return 'menu_recortes/' + directMatch;
  }

  let bestMatch = null;
  let bestScore = 0;

  for (const file of IMAGE_FILES) {
    const fileBase = baseImageName(file);
    if (!fileBase) continue;

    const fileTokens = fileBase.split(' ').filter(Boolean);
    const targetTokens = target.split(' ').filter(Boolean);
    let score = 0;

    if (fileBase === target) {
      score = 100;
    } else if (fileBase.includes(target) || target.includes(fileBase)) {
      score = 90;
    } else {
      const overlap = fileTokens.filter(token => targetTokens.includes(token)).length;
      if (overlap > 0) score = overlap * 20;

      const strippedTarget = target.replace(/\b(de|del|la|el|y|a|o|con|para|por|x|und)\b/g, '').replace(/\s+/g, ' ').trim();
      const strippedBase = fileBase.replace(/\b(de|del|la|el|y|a|o|con|para|por|x|und)\b/g, '').replace(/\s+/g, ' ').trim();
      if (strippedTarget && strippedBase && (strippedTarget.includes(strippedBase) || strippedBase.includes(strippedTarget))) {
        score = Math.max(score, 70);
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = file;
    }
  }

  return bestScore >= 55 ? 'menu_recortes/' + bestMatch : null;
}

const DATA = {
  1: [
    {n:'Salchipapas', p:'$6.80'},
    {n:'Papas Fritas x Kilos', p:'$5.80'},
    {n:'Ración de Chistoras', p:'$6.00'},
    {n:'Pastelito de Carne', p:'$1.50'},
    {n:'Pastelito de Pollo', p:'$1.50'},
    {n:'Mini Empanadas Surtidas', p:'$1.00'},
    {n:'Combo Mini Empanadas', p:'$5.00'},
    {n:'Tequeños de Capresa x5', p:'$7.00'},
    {n:'Tequeños de Chistorra x5', p:'$8.50'},
    {n:'Tequeños de Queso x5', p:'$6.96'},
    {n:'Tequeños de Papas x5', p:null},
    {n:'Ración de Nuggets con Papas', p:'$8.70'},
  ],
  2: [
    {n:'Hamburguesa Carne', p:'$9.00'},
    {n:'Hamburguesa Doble Carne', p:'$11.60'},
    {n:'Granjero Pollo', p:'$8.50'},
    {n:'Choripán Juan Canalla', p:'$5.00'},
    {n:'Combo Choripán Canalla', p:'$12.00'},
    {n:'Menú Ejecutivo', p:'$8.00'},
    {n:'Perros Normales', p:'$1.50'},
    {n:'Combo 3 Perros Calientes', p:'$4.00'},
  ],
  3: [
    {n:'1/8 Pepperoni', p:'$5.80'},
    {n:'1/4 Pepperoni', p:'$11.02'},
    {n:'1/8 Campagnola', p:'$6.38'},
    {n:'1/4 Campagnola', p:'$12.76'},
    {n:'Capresa (entera)', p:'$15.08'},
    {n:'1/8 Margarita', p:'$5.80'},
    {n:'1/4 Margarita', p:'$9.86'},
  ],
  4: [
    {n:'1 Pincho de Lomito', p:'$5.00'},
    {n:'Pinchos', p:null},
    {n:'Parrilla', p:null},
    {n:'Parrilla de Carne', p:'$16.24'},
  ],
  5: [
    {n:'Cuba Libre', p:'$7.00'},
    {n:'Destornillador', p:'$7.00'},
    {n:'Margarita', p:'$8.00'},
    {n:'Margarita Spicy', p:'$10.00'},
    {n:'Gin Tonic', p:'$8.00'},
    {n:'Mojito', p:'$9.00'},
    {n:'Daiquiri de Fresa', p:'$11.00'},
    {n:'Daiquiri de Durazno', p:null},
    {n:'Shot de Limón', p:'$2.00'},
    {n:'Shot de Tequila', p:'$7.50'},
  ],
  6: [
    {n:'Michelada', p:'$1.80'},
    {n:'Aperol Spritz', p:'$6.50'},
    {n:'Smirnoff Trago', p:'$6.50'},
    {n:'Stolichnaya Trago', p:'$4.64'},
    {n:'Vodka Tonic', p:'$8.00'},
    {n:'Casique', p:'$7.00'},
    {n:'Casique 500', p:'$8.00'},
    {n:'Santa Teresa Gran Reserva', p:'$7.00'},
    {n:'Santa Teresa Linaje', p:'$8.00'},
    {n:'Trago Silver Old Parr', p:'$7.00'},
    {n:'Old Parr Trago', p:'$9.00'},
    {n:'Trago Tanqueray Ten', p:'$9.50'},
    {n:"Buchanan's Trago", p:'$9.00'},
    {n:'Negroni', p:'$13.00'},
    {n:'Moscow Mule', p:'$11.00'},
  ],
  7: [
    {n:'Smirnoff', p:'$46.40'},
    {n:'Absolut', p:'$52.20'},
    {n:'Stolichnaya', p:'$45.00'},
    {n:'Ron Carupano Cristalino', p:'$25.00'},
    {n:'Ron Cacique / Cacique 500', p:'$28.00'},
    {n:'Ron Carupano 6 Años', p:'$20.00'},
    {n:'Ron Carupano 12 Años', p:'$35.00'},
    {n:'Santa Teresa Gran Reserva', p:'$46.40'},
    {n:'Santa Teresa Linaje', p:'$58.00'},
    {n:'Ron Carupano Reserva Lim.', p:'$45.00'},
    {n:'Black & White 0.75L', p:'$30.00'},
    {n:'Black & White 1L', p:'$35.00'},
    {n:'Old Parr Silver', p:'$52.20'},
    {n:'Old Parr', p:'$55.00'},
    {n:"Buchanan's", p:'$60.00'},
    {n:"Buchanan's 18 Años", p:'$162.40'},
    {n:'Promo Whisky 12 Años', p:'$56.84'},
    {n:'Tanqueray 10', p:'$92.80'},
    {n:'Don Julio Reposado', p:'$95.00'},
    {n:'Arraigo Silver', p:'$55.00'},
    {n:'Volcanes de Chile Cab. Sauv.', p:'$29.00'},
    {n:'CastellBlanc Cava', p:'$29.00'},
    {n:'Aperol', p:null},
  ],
  8: [
    {n:'Polar Pilsen', p:'$1.74'},
    {n:'Polar Light', p:'$1.74'},
    {n:'Solera Azul', p:'$1.98'},
    {n:'Solera Verde', p:'$1.97'},
    {n:'Tobo Polar Light', p:'$10.00'},
    {n:'Tobo Polar Pilsen', p:'$10.00'},
    {n:'Tobo Mixto Polar Light + Pilsen', p:'$10.00'},
  ],
  9: [
    {n:'Pepsi / Golden Lata 355ml', p:'$2.00'},
    {n:'Refresco Litrón Pepsi/7up/Frescolita', p:'$3.80'},
    {n:'Refresco de Litro', p:'$3.50'},
    {n:'Maltin Polar Lata 355ml', p:'$2.00'},
    {n:'Maltin Polar', p:'$1.16'},
    {n:'Gatorade (varios sabores)', p:'$3.00'},
    {n:'Té Lipton 500ml', p:'$3.00'},
    {n:'Agua Bienestar 600ml', p:'$1.80'},
    {n:'Agua Minalba 600ml', p:'$2.00'},
    {n:'Minalba Sparkling 500ml', p:'$3.00'},
    {n:'Minalba Sparkling 1L', p:'$4.00'},
    {n:'Minalba Sparkling Lata 355ml', p:'$2.50'},
    {n:'Aguakina (Agua Tónica)', p:'$3.00'},
  ],
  10: [
    {n:'Jugo Durazno', p:'$3.80'},
    {n:'Jugo de Mora', p:'$3.80'},
    {n:'Jugo de Fresa / vaso', p:'$3.80–$4.64'},
    {n:'Vaso Jugo de Naranja', p:'$2.32'},
    {n:'Limonada Frappé', p:'$3.50'},
    {n:'Yukery Botella 250ml', p:'$2.00'},
    {n:'Café Expreso', p:'$1.50'},
    {n:'Café Americano', p:'$2.00'},
    {n:'Café Negro Grande', p:'$2.50'},
    {n:'Café Marrón Pequeño', p:'$3.00'},
    {n:'Toddy Mediano', p:'$3.00'},
    {n:'Toddy Grande', p:'$4.50'},
  ]
};
