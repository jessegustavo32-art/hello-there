import paoDeQueijo from "@/assets/pao-de-queijo.jpg";
import frango from "@/assets/frango-arroz.jpg";
import brigadeiro from "@/assets/brigadeiro.jpg";
import misto from "@/assets/misto-quente.jpg";
import quinoa from "@/assets/salada-quinoa.jpg";
import bolo from "@/assets/bolo-cenoura.jpg";
import aveia from "@/assets/aveia.jpg";

export const CATEGORIES = ["Todas", "Café da manhã", "Almoço", "Lanches", "Sobremesas", "Saudáveis"] as const;
export type Category = Exclude<(typeof CATEGORIES)[number], "Todas">;

export type Recipe = {
  slug: string;
  name: string;
  description: string;
  image: string;
  time: string;
  servings: string;
  categories: Category[];
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    slug: "pao-de-queijo",
    name: "Pão de queijo mineiro",
    description: "Casquinha crocante, miolo macio e muito queijo.",
    image: paoDeQueijo, time: "50 min", servings: "25 unidades",
    categories: ["Café da manhã", "Lanches"],
    ingredients: [
      "500 g de polvilho azedo", "1 xícara (240 ml) de leite", "1/2 xícara (120 ml) de óleo",
      "1 colher (chá) de sal", "2 ovos", "200 g de queijo meia cura ralado (ou parmesão)",
    ],
    steps: [
      "Preaqueça o forno a 200 °C e unte levemente uma assadeira.",
      "Em uma panela, aqueça o leite, o óleo e o sal até ferver.",
      "Coloque o polvilho em uma tigela grande e despeje o líquido quente por cima, mexendo com uma colher até escaldar todo o polvilho.",
      "Espere amornar, junte os ovos um a um e sove com as mãos até ficar homogêneo.",
      "Acrescente o queijo e misture até a massa ficar lisa e desgrudar das mãos.",
      "Com as mãos untadas, faça bolinhas de cerca de 3 cm e disponha na assadeira com espaço entre elas.",
      "Asse por 25 a 30 minutos, até dourar. Sirva quente.",
    ],
  },
  {
    slug: "frango-grelhado-arroz-feijao",
    name: "Frango grelhado com arroz e feijão",
    description: "O prato do dia a dia brasileiro, simples e completo.",
    image: frango, time: "40 min", servings: "4 porções",
    categories: ["Almoço"],
    ingredients: [
      "4 filés de peito de frango (cerca de 600 g)", "2 dentes de alho amassados", "Suco de 1 limão",
      "Sal e pimenta-do-reino a gosto", "1 colher (sopa) de azeite", "2 xícaras de arroz branco",
      "4 xícaras de água quente", "1/2 cebola picada", "2 xícaras de feijão-preto cozido com caldo",
      "Alface, tomate e cebola roxa para a salada",
    ],
    steps: [
      "Tempere os filés com metade do alho, limão, sal e pimenta. Deixe descansar 15 minutos.",
      "Arroz: refogue a cebola e o restante do alho em um fio de azeite, junte o arroz e frite por 2 minutos. Adicione a água quente e sal, tampe e cozinhe em fogo baixo por 15 minutos.",
      "Feijão: aqueça o feijão cozido em uma panela, acerte o sal e deixe engrossar levemente por 5 minutos.",
      "Aqueça uma frigideira ou grelha com o azeite em fogo médio-alto.",
      "Grelhe os filés por 5 a 6 minutos de cada lado, até dourarem e ficarem cozidos por dentro.",
      "Monte a salada e sirva tudo junto.",
    ],
  },
  {
    slug: "brigadeiro",
    name: "Brigadeiro tradicional",
    description: "O docinho que não pode faltar em nenhuma festa.",
    image: brigadeiro, time: "30 min", servings: "20 unidades",
    categories: ["Sobremesas"],
    ingredients: [
      "1 lata de leite condensado (395 g)", "1 colher (sopa) de manteiga",
      "3 colheres (sopa) de chocolate em pó 50%", "Chocolate granulado para enrolar",
    ],
    steps: [
      "Em uma panela, misture o leite condensado, a manteiga e o chocolate em pó.",
      "Leve ao fogo baixo, mexendo sem parar com uma espátula.",
      "Cozinhe por 10 a 12 minutos, até a massa desgrudar do fundo da panela.",
      "Transfira para um prato untado e deixe esfriar completamente.",
      "Com as mãos untadas com manteiga, enrole bolinhas e passe no granulado.",
      "Coloque em forminhas e sirva.",
    ],
  },
  {
    slug: "misto-quente",
    name: "Misto quente na frigideira",
    description: "Lanche rápido, queijo derretido e pão douradinho.",
    image: misto, time: "10 min", servings: "1 porção",
    categories: ["Lanches", "Café da manhã"],
    ingredients: [
      "2 fatias de pão de forma", "2 fatias de presunto", "2 fatias de queijo muçarela",
      "1 colher (chá) de manteiga",
    ],
    steps: [
      "Passe a manteiga no lado de fora das duas fatias de pão.",
      "Monte o sanduíche com o lado sem manteiga para dentro: pão, queijo, presunto e pão.",
      "Aqueça uma frigideira em fogo médio-baixo.",
      "Coloque o sanduíche e pressione levemente com uma espátula. Doure por 2 a 3 minutos.",
      "Vire e doure o outro lado até o queijo derreter. Corte ao meio e sirva.",
    ],
  },
  {
    slug: "salada-de-quinoa",
    name: "Salada de quinoa com grão-de-bico",
    description: "Fresca, colorida e cheia de proteína vegetal.",
    image: quinoa, time: "25 min", servings: "4 porções",
    categories: ["Saudáveis", "Almoço"],
    ingredients: [
      "1 xícara de quinoa", "2 xícaras de água", "1 xícara de grão-de-bico cozido",
      "1 pepino em cubos", "200 g de tomate-cereja cortado ao meio", "1/2 xícara de salsinha picada",
      "Folhas de hortelã a gosto", "Suco de 1 limão", "3 colheres (sopa) de azeite", "Sal a gosto",
    ],
    steps: [
      "Lave bem a quinoa em uma peneira sob água corrente.",
      "Cozinhe a quinoa na água com uma pitada de sal, em fogo baixo e panela tampada, por 15 minutos.",
      "Desligue, solte os grãos com um garfo e deixe esfriar.",
      "Em uma tigela, junte a quinoa, o grão-de-bico, o pepino, o tomate, a salsinha e a hortelã.",
      "Misture o limão, o azeite e o sal e regue a salada. Sirva fria.",
    ],
  },
  {
    slug: "bolo-de-cenoura",
    name: "Bolo de cenoura com cobertura de chocolate",
    description: "Fofinho, de liquidificador, com calda brilhante.",
    image: bolo, time: "1 h", servings: "12 fatias",
    categories: ["Sobremesas", "Café da manhã"],
    ingredients: [
      "3 cenouras médias (cerca de 300 g) em rodelas", "3 ovos", "1 xícara (240 ml) de óleo",
      "2 xícaras de açúcar", "2 1/2 xícaras de farinha de trigo", "1 colher (sopa) de fermento em pó",
      "Cobertura: 4 colheres (sopa) de chocolate em pó, 1 colher (sopa) de manteiga, 1 xícara de açúcar e 5 colheres (sopa) de leite",
    ],
    steps: [
      "Preaqueça o forno a 180 °C e unte uma forma com furo central.",
      "Bata no liquidificador a cenoura, os ovos e o óleo até ficar liso.",
      "Despeje em uma tigela, junte o açúcar e a farinha e misture bem.",
      "Por último, adicione o fermento delicadamente.",
      "Asse por cerca de 40 minutos, até o palito sair limpo.",
      "Cobertura: leve todos os ingredientes ao fogo, mexendo, até ferver e engrossar levemente (3 a 5 minutos).",
      "Desenforme o bolo morno e espalhe a cobertura quente por cima.",
    ],
  },
  {
    slug: "aveia-dormida",
    name: "Aveia dormida com frutas",
    description: "Café da manhã pronto na geladeira, leve e nutritivo.",
    image: aveia, time: "5 min + 8 h", servings: "1 porção",
    categories: ["Café da manhã", "Saudáveis"],
    ingredients: [
      "1/2 xícara de aveia em flocos", "1/2 xícara de leite (ou bebida vegetal)",
      "3 colheres (sopa) de iogurte natural", "1 colher (chá) de chia", "1 colher (chá) de mel",
      "1/2 banana em rodelas", "4 morangos picados",
    ],
    steps: [
      "Em um pote com tampa, misture a aveia, o leite, o iogurte e a chia.",
      "Tampe e leve à geladeira por pelo menos 8 horas (ou durante a noite).",
      "Pela manhã, mexa bem e, se quiser mais cremosa, junte um pouco de leite.",
      "Cubra com a banana e os morangos e finalize com o mel.",
    ],
  },
  {
    slug: "omelete-de-queijo",
    name: "Omelete de queijo",
    description: "Omelete douradinha e pronta em poucos minutos.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
    time: "15 min", servings: "1 porção",
    categories: ["Café da manhã","Lanches"],
    ingredients: ["2 ovos","2 colheres (sopa) de leite","2 fatias de queijo muçarela picado","1 colher (chá) de manteiga","Sal e orégano a gosto"],
    steps: ["Bata os ovos com o leite e o sal.","Derreta a manteiga em frigideira antiaderente em fogo baixo.","Despeje os ovos e cozinhe até começar a firmar.","Adicione o queijo e o orégano, dobre ao meio e cozinhe até derreter."],
  },
  {
    slug: "strogonoff-de-frango",
    name: "Strogonoff de frango",
    description: "Cremoso e delicioso para um almoço em família.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    time: "35 min", servings: "4 porções",
    categories: ["Almoço"],
    ingredients: ["500 g de peito de frango em cubos","1 colher (sopa) de óleo","1/2 cebola picada","2 dentes de alho","3 colheres (sopa) de ketchup","1 colher (sopa) de mostarda","1 caixinha (200 g) de creme de leite","Sal e pimenta a gosto"],
    steps: ["Aqueça o óleo e doure o frango em uma panela.","Acrescente cebola e alho e refogue por 3 minutos.","Tempere com sal e pimenta e misture ketchup e mostarda.","Cozinhe até o frango estar completamente cozido.","Desligue o fogo, incorpore o creme de leite e sirva com arroz."],
  },
  {
    slug: "tapioca-de-queijo",
    name: "Tapioca de queijo",
    description: "Lanche simples, quentinho e sem complicação.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    time: "10 min", servings: "1 unidade",
    categories: ["Café da manhã","Lanches"],
    ingredients: ["4 colheres (sopa) de goma de tapioca hidratada","2 fatias de queijo muçarela","1 pitada de sal","Orégano a gosto"],
    steps: ["Aqueça uma frigideira antiaderente em fogo médio.","Espalhe a goma peneirada formando um disco uniforme.","Cozinhe por cerca de 2 minutos até unir os grãos.","Coloque o queijo e orégano, dobre e aqueça até o queijo derreter."],
  },
  {
    slug: "panqueca-de-banana",
    name: "Panqueca de banana",
    description: "Uma opção prática e naturalmente docinha.",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=80",
    time: "15 min", servings: "4 pequenas",
    categories: ["Café da manhã","Saudáveis"],
    ingredients: ["1 banana madura","2 ovos","4 colheres (sopa) de aveia em flocos finos","1 pitada de canela","1 colher (chá) de óleo para untar"],
    steps: ["Amasse a banana com um garfo.","Misture os ovos, a aveia e a canela.","Aqueça uma frigideira levemente untada em fogo baixo.","Faça panquecas pequenas e doure dos dois lados até firmarem."],
  },
  {
    slug: "sopa-de-legumes",
    name: "Sopa caseira de legumes",
    description: "Reconfortante e cheia de vegetais.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
    time: "40 min", servings: "4 porções",
    categories: ["Almoço","Saudáveis"],
    ingredients: ["2 batatas em cubos","2 cenouras em rodelas","1 abobrinha em cubos","1/2 cebola picada","2 dentes de alho","1 colher (sopa) de azeite","1 litro de água","Sal e cheiro-verde a gosto"],
    steps: ["Refogue cebola e alho no azeite.","Adicione batatas, cenouras, abobrinha e água.","Tempere com sal e cozinhe em fogo médio por 25 a 30 minutos, até amaciar.","Amasse uma parte dos legumes para engrossar e finalize com cheiro-verde."],
  },
  {
    slug: "mousse-de-maracuja",
    name: "Mousse de maracujá",
    description: "Sobremesa cremosa com apenas três ingredientes.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
    time: "10 min + 3 h", servings: "6 porções",
    categories: ["Sobremesas"],
    ingredients: ["1 lata (395 g) de leite condensado","1 caixinha (200 g) de creme de leite","200 ml de suco concentrado de maracujá"],
    steps: ["Bata todos os ingredientes no liquidificador por 2 minutos.","Distribua em potinhos ou uma travessa.","Cubra e leve à geladeira por pelo menos 3 horas antes de servir."],
  },
  {
    slug: "arroz-de-forno",
    name: "Arroz de forno com queijo",
    description: "Perfeito para aproveitar arroz já cozido.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80",
    time: "35 min", servings: "4 porções",
    categories: ["Almoço"],
    ingredients: ["3 xícaras de arroz cozido","1 xícara de milho-verde escorrido","1 tomate em cubinhos","1/2 xícara de ervilha","150 g de muçarela ralada","1/2 xícara de molho de tomate","Sal e cheiro-verde a gosto"],
    steps: ["Preaqueça o forno a 200 °C.","Misture o arroz com milho, tomate, ervilha, molho e temperos.","Passe para um refratário e cubra com a muçarela.","Asse por 15 a 20 minutos até aquecer e gratinar."],
  },
  {
    slug: "salada-de-frutas",
    name: "Salada de frutas fresquinhas",
    description: "Colorida, leve e refrescante.",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=900&q=80",
    time: "15 min", servings: "4 porções",
    categories: ["Saudáveis","Sobremesas"],
    ingredients: ["1 banana em rodelas","1 maçã em cubinhos","1 laranja em pedaços","1 xícara de mamão em cubos","1 xícara de uvas sem sementes cortadas ao meio","Suco de 1 laranja"],
    steps: ["Lave bem todas as frutas.","Descasque e corte as frutas em pedaços pequenos.","Misture tudo em uma tigela e regue com suco de laranja.","Sirva imediatamente ou mantenha refrigerado."],
  },
  {
    slug: "cookies-de-aveia",
    name: "Cookies de aveia e banana",
    description: "Biscoitinhos macios feitos com poucos ingredientes.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80",
    time: "25 min", servings: "10 unidades",
    categories: ["Lanches","Saudáveis"],
    ingredients: ["2 bananas maduras","1 xícara de aveia em flocos","1 colher (chá) de canela","2 colheres (sopa) de uvas-passas (opcional)"],
    steps: ["Preaqueça o forno a 180 °C e forre uma assadeira com papel manteiga.","Amasse as bananas e misture com a aveia, canela e passas.","Modele pequenas porções com uma colher na assadeira.","Asse por 15 a 20 minutos, até as bordas dourarem."],
  },
  {
    slug: "macarrao-alho-e-oleo",
    name: "Macarrão alho e óleo",
    description: "Clássico econômico e saboroso.",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
    time: "20 min", servings: "3 porções",
    categories: ["Almoço"],
    ingredients: ["250 g de espaguete","4 dentes de alho fatiados","4 colheres (sopa) de azeite","Sal a gosto","Salsinha picada a gosto"],
    steps: ["Cozinhe o macarrão em água com sal até ficar al dente.","Reserve meia xícara da água do cozimento e escorra.","Doure levemente o alho no azeite em fogo baixo, sem deixar queimar.","Junte a massa e um pouco da água reservada, misturando bem.","Finalize com salsinha e sirva."],
  },
];

export function filterRecipes(list: Recipe[], query: string, category: string) {
  const norm = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const q = norm(query.trim());
  return list.filter(
    (r) =>
      (category === "Todas" || r.categories.includes(category as Category)) &&
      (!q || norm(r.name).includes(q)),
  );
}
