const fs = require('fs');
const vm = require('vm');
const path = require('path');

const htmlPath = path.join(process.cwd(), 'menu_downtown_billiards.html');
const outPath = path.join(process.cwd(), 'menu_data.json');
const html = fs.readFileSync(htmlPath, 'utf8');
const match = html.match(/const DATA = ([\s\S]*?);\n\nfunction buildSection/);
if (!match) throw new Error('No se encontró la estructura DATA en el HTML');
const data = vm.runInNewContext(`(${match[1]})`, {});

const imageMap = {
  'salchipapas': 'menu_recortes/43_salchipapas.png',
  'papas fritas x kilos': 'menu_recortes/44_papas_fritas_x_kilos.png',
  'ración de chistoras': 'menu_recortes/45_racion_de_chistoras.png',
  'pastelito de carne': 'menu_recortes/46_pastelito_de_carne.png',
  'pastelito de pollo': 'menu_recortes/51_pastelito_de_pollo.png',
  'mini empanadas surtidas': 'menu_recortes/Mini_empanadas_surtidas.png',
  'combo mini empanadas': 'menu_recortes/50_combo_mini_empanadas.png',
  'tequeños de capresa x5': 'menu_recortes/48_tequenos_de_capresa_x5.png',
  'tequeños de chistorra x5': 'menu_recortes/53_tequenos_de_chistorra_x5.png',
  'tequeños de queso x5': 'menu_recortes/54_tequenos_de_queso_x5.png',
  'tequeños de papas x5': 'menu_recortes/Tequeños_de_papa.png',
  'ración de nuggets con papas': 'menu_recortes/49_racion_de_nuggets_con_papas.png',
  'hamburguesa carne': 'menu_recortes/13_hamburguesa_carne.png',
  'hamburguesa doble carne': 'menu_recortes/14_hamburguesa_doble_carne.png',
  'granjero pollo': 'menu_recortes/11_granjero_pollo.png',
  'choripán juan canalla': 'menu_recortes/10_choripan_juan_canalla.png',
  'combo choripán canalla': 'menu_recortes/12_combo_choripan_canalla.png',
  'menú ejecutivo': 'menu_recortes/Menu_ejecutivo.png',
  'perros normales': 'menu_recortes/24_perros_normales.png',
  'combo 3 perros calientes': 'menu_recortes/23_combo_3_perros_calientes.png',
  '1/8 pepperoni': 'menu_recortes/15_1-8_peperoni.png',
  '1/4 pepperoni': 'menu_recortes/18_1-4_peperoni.png',
  '1/8 campagnola': 'menu_recortes/17_campagnolo_1-8.png',
  '1/4 campagnola': 'menu_recortes/16_1-4_campagnola.png',
  'capresa (entera)': 'menu_recortes/19_capresa.png',
  '1/8 margarita': 'menu_recortes/21_1-8_margarita.png',
  '1/4 margarita': 'menu_recortes/20_1-4_margarita.png',
  '1 pincho de lomito': 'menu_recortes/06_1_pincho_de_lomito.png',
  'pinchos': 'menu_recortes/07_pinchos.png',
  'parrilla': 'menu_recortes/08_parrillas.png',
  'parrilla de carne': 'menu_recortes/09_parrilla_de_carne.png',
  'cuba libre': 'menu_recortes/07_cuba_libre.png',
  'destornillador': 'menu_recortes/08_destornillador.png',
  'margarita': 'menu_recortes/10_margarita.png',
  'margarita spicy': 'menu_recortes/39_margarita_spicy.png',
  'gin tonic': 'menu_recortes/11_gin_tonic.png',
  'mojito': 'menu_recortes/12_mojito.png',
  'daiquiri de fresa': 'menu_recortes/09_daiquiri_de_fresa.png',
  'daiquiri de durazno': 'menu_recortes/Daiquiri_de_durazno.png',
  'shot de limón': 'menu_recortes/Shot_de_limon.png',
  'shot de tequila': 'menu_recortes/15_shot_de_tequila.png',
  'michelada': 'menu_recortes/28_michelada.png',
  'aperol spritz': 'menu_recortes/aperol_spritz.png',
  'smirnoff trago': 'menu_recortes/40_smirnoff_trago.png',
  'stolichnaya trago': 'menu_recortes/36_stolichnaya_trago.png',
  'vodka tonic': 'menu_recortes/35_vodka_tonic.png',
  'casique': 'menu_recortes/38_casique.png',
  'casique 500': 'menu_recortes/27_casique_500.png',
  'santa teresa gran reserva': 'menu_recortes/60_santa_teresa_gran_reserva.png',
  'santa teresa linaje': 'menu_recortes/34_santa_teresa_linaje_trago.png',
  'trago silver old parr': 'menu_recortes/31_trago_silver_old_parr.png',
  'old parr trago': 'menu_recortes/41_old_parr_trago.png',
  'trago tanqueray ten': 'menu_recortes/32_trago_tanqueray_ten.png',
  "buchanan's trago": 'menu_recortes/37_buchannas_trago.png',
  'negroni': 'menu_recortes/29_negroni.png',
  'moscow mule': 'menu_recortes/30_moscow_mule.png',
  'smirnoff': 'menu_recortes/56_smirnoff.png',
  'absolut': 'menu_recortes/55_vodka_absolut.png',
  'stolichnaya': 'menu_recortes/01_vodka_stolichnaya.png',
  'ron carupano cristalino': 'menu_recortes/67_ron_carupano_cristalino.png',
  'ron cacique / cacique 500': 'menu_recortes/71_ron_cacique.png',
  'ron carupano 6 años': 'menu_recortes/57_ron_carupano_6_anos.png',
  'ron carupano 12 años': 'menu_recortes/63_ron_carupano_12_anos.png',
  'ron carupano reserva lim.': 'menu_recortes/66_ron_carupano_reserva_limitada.png',
  'black & white 0.75l': 'menu_recortes/62_black_and_white_075lts.png',
  'black & white 1l': 'menu_recortes/72_black_and_white_1litro.png',
  'old parr silver': 'menu_recortes/58_old_parr_silver.png',
  'old parr': 'menu_recortes/68_old_parr.png',
  "buchanan's": 'menu_recortes/65_buchanans.png',
  "buchanan's 18 años": 'menu_recortes/04_buchanans_18_anos.png',
  'promo whisky 12 años': 'menu_recortes/16_promocion_whisky_12_anos.png',
  'tanqueray 10': 'menu_recortes/03_tanqueray_10.png',
  'don julio reposado': 'menu_recortes/69_don_julio_reposado.png',
  'arraigo silver': 'menu_recortes/59_tequila_arraigo_silver.png',
  'volcanes de chile cab. sauv.': 'menu_recortes/05_volcanes_de_chile_cabernet_sauvignon.png',
  'castellblanc cava': 'menu_recortes/64_vino_castellblanc_cava.png',
  'aperol': 'menu_recortes/aperol.png',
  'regional morena': 'menu_recortes/20_polar_pilsen.png',
  'zulia': 'menu_recortes/23_solera_verde.png',
  'polar pilsen': 'menu_recortes/20_polar_pilsen.png',
  'polar light': 'menu_recortes/21_polar_light.png',
  'solera azul': 'menu_recortes/22_solera_azul.png',
  'solera verde': 'menu_recortes/23_solera_verde.png',
  'tobo polar light': 'menu_recortes/02_tobo_polar_light.png',
  'tobo polar pilsen': 'menu_recortes/04_tobo_polar_pilsen.png',
  'tobo zulia': 'menu_recortes/01_tobo_mixto_polar_light_y_pilsen.png',
  'tobo mixto polar light + pilsen': 'menu_recortes/01_tobo_mixto_polar_light_y_pilsen.png',
  'pepsi / golden lata 355ml': 'menu_recortes/11_pepsi_golden_lata_355ml.png',
  'refresco litrón pepsi/7up/frescolita': 'menu_recortes/13_refresco_de_litron_pepsi_7up_frescolita.png',
  'refresco de litro': 'menu_recortes/16_refresco_de_litro.png',
  'maltin polar lata 355ml': 'menu_recortes/19_maltin_polar_lata_355ml.png',
  'maltin polar': 'menu_recortes/17_maltin_polar.png',
  'gatorade (varios sabores)': 'menu_recortes/12_gatorade_mandarina.png',
  'té lipton 500ml': 'menu_recortes/18_te_lipton_durazno_o_limon_500ml.png',
  'agua bienestar 600ml': 'menu_recortes/06_agua_bienestar_600ml.png',
  'agua minalba 600ml': 'menu_recortes/10_agua_minalba_600ml.png',
  'minalba sparkling 500ml': 'menu_recortes/05_minalba_sparkling_pet_500ml.png',
  'minalba sparkling 1l': 'menu_recortes/07_minalba_sparkling_pet_1l.png',
  'minalba sparkling lata 355ml': 'menu_recortes/08_minalba_sparkling_soda_lata_355ml.png',
  'aguakina (agua tónica)': 'menu_recortes/09_aguakina_agua_tonica.png',
  'jugo durazno': 'menu_recortes/20_jugo_durazno.png',
  'jugo de mora': 'menu_recortes/22_jugo_de_mora.png',
  'jugo de fresa / vaso': 'menu_recortes/25_jugo_de_fresa.png',
  'vaso jugo de naranja': 'menu_recortes/24_vaso_jugo_de_naranja.png',
  'limonada frappé': 'menu_recortes/26_limonada_frappe.png',
  'yukery botella 250ml': 'menu_recortes/23_yukery_botella_250ml.png',
  'café expreso': 'menu_recortes/01_cafe_expreso.png',
  'café americano': 'menu_recortes/05_cafe_americano.png',
  'café negro grande': 'menu_recortes/06_cafe_negro_grande.png',
  'café marrón pequeño': 'menu_recortes/04_cafe_marron_pequeno.png',
  'toddy mediano': 'menu_recortes/03_toddy_frio_o_caliente_mediano.png',
  'toddy grande': 'menu_recortes/02_toddy_frio_o_caliente_grande.png',
};

function normalize(str) {
  return (str || '').toLowerCase().normalize('NFD').replace(/[^\w\s]/g, '').replace(/\s+/g, ' ').trim();
}

function getDescription(name) {
  const n = normalize(name);
  if (n.includes('hamburguesa')) return 'Hamburguesa preparada con ingredientes frescos.';
  if (n.includes('pizza') || n.includes('pepperoni') || n.includes('margarita') || n.includes('campagnola') || n.includes('capresa')) return 'Pizza artesanal con salsa y cobertura de la casa.';
  if (n.includes('parrilla')) return 'Parrilla de la casa con cortes seleccionados.';
  if (n.includes('pincho')) return 'Pincho preparado al momento.';
  if (n.includes('choripan')) return 'Choripán con salsa y acompañamiento.';
  if (n.includes('perro') || n.includes('perros')) return 'Perro caliente con ingredientes clásicos.';
  if (n.includes('empanada') || n.includes('teque')) return 'Bocado salado ideal para compartir.';
  if (n.includes('papas') || n.includes('salchipapa') || n.includes('nugget')) return 'Acompañante crocante y sabroso.';
  if (n.includes('cuba') || n.includes('margarita') || n.includes('mojito') || n.includes('gin') || n.includes('daiquiri') || n.includes('negroni') || n.includes('moscow') || n.includes('spritz') || n.includes('michelada') || n.includes('aperol')) return 'Cóctel preparado con mezcla de la casa.';
  if (n.includes('vodka') || n.includes('smirnoff') || n.includes('stolichnaya') || n.includes('tanqueray') || n.includes('old parr') || n.includes('buchanan') || n.includes('ron') || n.includes('tequila') || n.includes('whisky') || n.includes('cava') || n.includes('vino') || n.includes('aperol')) return 'Bebida de autor con presentación especial.';
  if (n.includes('cerve') || n.includes('polar') || n.includes('solera') || n.includes('zulia')) return 'Cerveza seleccionada para acompañar.';
  if (n.includes('refresco') || n.includes('gatorade') || n.includes('lipton') || n.includes('agua') || n.includes('minalba') || n.includes('pepsi') || n.includes('maltin') || n.includes('aguakina')) return 'Bebida refrescante disponible.';
  if (n.includes('jugo') || n.includes('cafe') || n.includes('toddy') || n.includes('limonada')) return 'Bebida preparada para disfrutar.';
  return 'Producto del menú Downtown Billiards.';
}

function getImage(name) {
  const key = normalize(name);
  return imageMap[key] || null;
}

const sections = {};
for (const [sectionKey, items] of Object.entries(data)) {
  const cleaned = items.filter(item => {
    const name = (item.n || '').toLowerCase();
    return !name.includes('regional') && !name.includes('zulia');
  });
  sections[sectionKey] = cleaned.map(item => ({
    nombre: item.n,
    precio: item.p === null ? null : Number(String(item.p).replace(/[$,]/g, '')),
    descripcion: getDescription(item.n),
    imagen: getImage(item.n)
  }));
}

fs.writeFileSync(outPath, JSON.stringify(sections, null, 2));
console.log(`JSON creado con ${Object.values(sections).reduce((acc, items) => acc + items.length, 0)} productos.`);
