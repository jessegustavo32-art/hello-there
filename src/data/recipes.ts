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
  {
    "slug": "cuscuz-com-ovo",
    "name": "Cuscuz com ovo",
    "description": "Receita caseira de cuscuz com ovo, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
    "time": "20 min",
    "servings": "2 porções",
    "categories": [
      "Café da manhã",
      "Lanches"
    ],
    "ingredients": [
      "1 xícara de flocão de milho",
      "1/2 xícara de água",
      "1/2 colher (chá) de sal",
      "2 ovos",
      "1 colher (chá) de manteiga"
    ],
    "steps": [
      "Misture flocão, água e sal e hidrate por 10 minutos.",
      "Cozinhe na cuscuzeira por cerca de 10 minutos depois de começar o vapor.",
      "Prepare os ovos na manteiga até cozinharem.",
      "Sirva os ovos com o cuscuz."
    ]
  },
  {
    "slug": "mingau-de-aveia",
    "name": "Mingau de aveia",
    "description": "Receita caseira de mingau de aveia, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
    "time": "12 min",
    "servings": "2 porções",
    "categories": [
      "Café da manhã",
      "Saudáveis"
    ],
    "ingredients": [
      "1 xícara de leite",
      "4 colheres (sopa) de aveia",
      "1 banana madura",
      "Canela a gosto"
    ],
    "steps": [
      "Amasse a banana.",
      "Misture com leite e aveia em uma panela.",
      "Cozinhe mexendo em fogo baixo por 6 a 8 minutos.",
      "Finalize com canela."
    ]
  },
  {
    "slug": "pao-na-chapa",
    "name": "Pão na chapa",
    "description": "Receita caseira de pão na chapa, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
    "time": "8 min",
    "servings": "2 porções",
    "categories": [
      "Café da manhã",
      "Lanches"
    ],
    "ingredients": [
      "2 pães franceses",
      "1 colher (sopa) de manteiga"
    ],
    "steps": [
      "Corte os pães ao meio.",
      "Espalhe manteiga sobre a parte cortada.",
      "Doure na frigideira quente por 2 a 3 minutos com o lado da manteiga para baixo."
    ]
  },
  {
    "slug": "vitamina-de-banana",
    "name": "Vitamina de banana",
    "description": "Receita caseira de vitamina de banana, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    "time": "5 min",
    "servings": "2 copos",
    "categories": [
      "Café da manhã",
      "Saudáveis"
    ],
    "ingredients": [
      "2 bananas",
      "400 ml de leite gelado",
      "2 colheres (sopa) de aveia",
      "Canela a gosto"
    ],
    "steps": [
      "Descasque e pique as bananas.",
      "Bata com leite e aveia até ficar cremoso.",
      "Sirva com canela."
    ]
  },
  {
    "slug": "crepioca-de-frango",
    "name": "Crepioca de frango",
    "description": "Receita caseira de crepioca de frango, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    "time": "20 min",
    "servings": "2 unidades",
    "categories": [
      "Café da manhã",
      "Lanches"
    ],
    "ingredients": [
      "2 ovos",
      "4 colheres (sopa) de goma de tapioca",
      "1 pitada de sal",
      "1 xícara de frango já cozido e desfiado",
      "2 colheres (sopa) de requeijão"
    ],
    "steps": [
      "Misture os ovos, a goma e o sal.",
      "Prepare dois discos em frigideira antiaderente, dourando ambos os lados.",
      "Misture frango previamente cozido com requeijão.",
      "Recheie os discos e dobre."
    ]
  },
  {
    "slug": "ovos-mexidos-cremosos",
    "name": "Ovos mexidos cremosos",
    "description": "Receita caseira de ovos mexidos cremosos, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
    "time": "10 min",
    "servings": "2 porções",
    "categories": [
      "Café da manhã"
    ],
    "ingredients": [
      "4 ovos",
      "2 colheres (sopa) de leite",
      "1 colher (chá) de manteiga",
      "Sal e cebolinha a gosto"
    ],
    "steps": [
      "Misture os ovos com leite e sal.",
      "Derreta manteiga em fogo baixo.",
      "Mexa delicadamente até os ovos ficarem cozidos e macios.",
      "Finalize com cebolinha."
    ]
  },
  {
    "slug": "bolo-de-fuba-simples",
    "name": "Bolo de fubá simples",
    "description": "Receita caseira de bolo de fubá simples, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
    "time": "50 min",
    "servings": "10 fatias",
    "categories": [
      "Café da manhã",
      "Sobremesas"
    ],
    "ingredients": [
      "2 ovos",
      "1 xícara de açúcar",
      "1 xícara de fubá",
      "1 xícara de farinha",
      "1 xícara de leite",
      "1/2 xícara de óleo",
      "1 colher (sopa) de fermento"
    ],
    "steps": [
      "Preaqueça o forno a 180 °C e unte uma forma.",
      "Bata os ovos, o açúcar, o leite e o óleo.",
      "Incorpore fubá e farinha e depois o fermento.",
      "Asse por 35 minutos ou até o palito sair limpo."
    ]
  },
  {
    "slug": "pao-de-queijo-de-frigideira",
    "name": "Pão de queijo de frigideira",
    "description": "Receita caseira de pão de queijo de frigideira, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
    "time": "12 min",
    "servings": "1 porção",
    "categories": [
      "Café da manhã",
      "Lanches"
    ],
    "ingredients": [
      "1 ovo",
      "3 colheres (sopa) de goma de tapioca",
      "2 colheres (sopa) de parmesão ralado",
      "1 colher (sopa) de requeijão",
      "Sal a gosto"
    ],
    "steps": [
      "Misture todos os ingredientes.",
      "Despeje em frigideira antiaderente aquecida em fogo baixo.",
      "Tampe por 4 minutos, vire e doure mais 3 minutos."
    ]
  },
  {
    "slug": "smoothie-de-morango",
    "name": "Smoothie de morango",
    "description": "Receita caseira de smoothie de morango, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    "time": "5 min",
    "servings": "2 copos",
    "categories": [
      "Café da manhã",
      "Saudáveis"
    ],
    "ingredients": [
      "1 xícara de morangos",
      "1 banana congelada",
      "200 ml de iogurte natural",
      "100 ml de leite"
    ],
    "steps": [
      "Lave os morangos e retire as folhas.",
      "Bata tudo no liquidificador até obter bebida cremosa.",
      "Sirva imediatamente."
    ]
  },
  {
    "slug": "torrada-com-abacate",
    "name": "Torrada com abacate",
    "description": "Receita caseira de torrada com abacate, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    "time": "10 min",
    "servings": "2 porções",
    "categories": [
      "Café da manhã",
      "Saudáveis"
    ],
    "ingredients": [
      "2 fatias de pão integral",
      "1/2 abacate pequeno",
      "Suco de 1/2 limão",
      "1 colher (chá) de azeite",
      "Sal e pimenta a gosto"
    ],
    "steps": [
      "Toste as fatias de pão.",
      "Amasse o abacate e tempere com limão, sal e pimenta.",
      "Espalhe nas torradas e finalize com azeite."
    ]
  },
  {
    "slug": "lasanha-de-carne-moida",
    "name": "Lasanha de carne moída",
    "description": "Receita caseira de lasanha de carne moída, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
    "time": "1 h 10 min",
    "servings": "6 porções",
    "categories": [
      "Almoço"
    ],
    "ingredients": [
      "500 g de carne moída",
      "1 cebola",
      "2 dentes de alho",
      "600 g de molho de tomate",
      "250 g de massa para lasanha pré-cozida",
      "300 g de muçarela",
      "Sal e azeite a gosto"
    ],
    "steps": [
      "Refogue cebola, alho e carne até cozinhar.",
      "Junte molho de tomate, sal e cozinhe por 10 minutos.",
      "Monte camadas de molho, massa e queijo em refratário.",
      "Cubra com alumínio e asse a 200 °C por 25 minutos, depois retire o papel e gratine por 10 minutos.",
      "Observe também as instruções da embalagem da massa."
    ]
  },
  {
    "slug": "escondidinho-de-carne-moida",
    "name": "Escondidinho de carne moída",
    "description": "Receita caseira de escondidinho de carne moída, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
    "time": "55 min",
    "servings": "5 porções",
    "categories": [
      "Almoço"
    ],
    "ingredients": [
      "700 g de batatas",
      "400 g de carne moída",
      "1/2 cebola",
      "2 dentes de alho",
      "1/2 xícara de leite",
      "1 colher (sopa) de manteiga",
      "100 g de muçarela",
      "Sal a gosto"
    ],
    "steps": [
      "Cozinhe as batatas, amasse com leite, manteiga e sal.",
      "Refogue a carne com cebola e alho até ficar completamente cozida.",
      "Espalhe carne num refratário e cubra com purê e queijo.",
      "Leve ao forno a 200 °C por 15 minutos."
    ]
  },
  {
    "slug": "feijao-tropeiro",
    "name": "Feijão tropeiro",
    "description": "Receita caseira de feijão tropeiro, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
    "time": "35 min",
    "servings": "5 porções",
    "categories": [
      "Almoço"
    ],
    "ingredients": [
      "3 xícaras de feijão cozido escorrido",
      "150 g de bacon em cubos",
      "2 ovos",
      "1/2 cebola",
      "1 xícara de farinha de mandioca",
      "Cheiro-verde e sal a gosto"
    ],
    "steps": [
      "Doure o bacon e refogue a cebola.",
      "Adicione os ovos e mexa até cozinharem.",
      "Junte o feijão escorrido e depois a farinha.",
      "Misture e finalize com cheiro-verde."
    ]
  },
  {
    "slug": "frango-assado-com-batatas",
    "name": "Frango assado com batatas",
    "description": "Receita caseira de frango assado com batatas, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
    "time": "1 h 20 min",
    "servings": "4 porções",
    "categories": [
      "Almoço"
    ],
    "ingredients": [
      "1 kg de coxas e sobrecoxas de frango",
      "600 g de batatas",
      "3 dentes de alho",
      "Suco de 1 limão",
      "2 colheres (sopa) de azeite",
      "Páprica e sal a gosto"
    ],
    "steps": [
      "Preaqueça o forno a 200 °C.",
      "Tempere frango com alho, limão, sal e páprica.",
      "Disponha com as batatas temperadas com azeite numa assadeira.",
      "Asse por 60 minutos ou até dourar e o frango ficar completamente cozido."
    ]
  },
  {
    "slug": "pure-de-batatas",
    "name": "Purê de batatas",
    "description": "Receita caseira de purê de batatas, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
    "time": "30 min",
    "servings": "4 porções",
    "categories": [
      "Almoço"
    ],
    "ingredients": [
      "800 g de batatas",
      "1/2 xícara de leite quente",
      "2 colheres (sopa) de manteiga",
      "Sal e noz-moscada a gosto"
    ],
    "steps": [
      "Descasque as batatas e cozinhe até amaciar.",
      "Escorra e amasse ainda quentes.",
      "Misture manteiga e leite quente até ficar cremoso.",
      "Tempere a gosto."
    ]
  },
  {
    "slug": "peixe-assado-com-limao",
    "name": "Peixe assado com limão",
    "description": "Receita caseira de peixe assado com limão, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
    "time": "35 min",
    "servings": "4 porções",
    "categories": [
      "Almoço",
      "Saudáveis"
    ],
    "ingredients": [
      "600 g de filés de tilápia",
      "Suco de 1 limão",
      "2 dentes de alho",
      "2 colheres (sopa) de azeite",
      "1 tomate",
      "Sal e pimenta a gosto"
    ],
    "steps": [
      "Preaqueça o forno a 200 °C.",
      "Tempere os filés com limão, alho, sal e pimenta.",
      "Disponha numa travessa com tomate em rodelas e azeite.",
      "Asse por 20 a 25 minutos até os filés ficarem totalmente cozidos."
    ]
  },
  {
    "slug": "carne-de-panela-com-cenoura",
    "name": "Carne de panela com cenoura",
    "description": "Receita caseira de carne de panela com cenoura, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
    "time": "1 h 20 min",
    "servings": "5 porções",
    "categories": [
      "Almoço"
    ],
    "ingredients": [
      "800 g de acém em cubos",
      "1 cebola",
      "3 dentes de alho",
      "2 cenouras",
      "2 tomates",
      "2 colheres (sopa) de óleo",
      "2 xícaras de água",
      "Sal a gosto"
    ],
    "steps": [
      "Doure a carne no óleo numa panela de pressão aberta.",
      "Refogue cebola, alho e tomate, junte água e sal.",
      "Tampe e cozinhe sob pressão por cerca de 35 minutos.",
      "Espere a pressão sair completamente antes de abrir.",
      "Adicione as cenouras e cozinhe sem pressão até ficarem macias."
    ]
  },
  {
    "slug": "risoto-de-cogumelos",
    "name": "Risoto de cogumelos",
    "description": "Receita caseira de risoto de cogumelos, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
    "time": "40 min",
    "servings": "3 porções",
    "categories": [
      "Almoço"
    ],
    "ingredients": [
      "1 xícara de arroz arbóreo",
      "200 g de cogumelos",
      "1/2 cebola",
      "1 litro de caldo de legumes quente",
      "2 colheres (sopa) de manteiga",
      "2 colheres (sopa) de parmesão",
      "Sal a gosto"
    ],
    "steps": [
      "Refogue cebola e cogumelos em metade da manteiga.",
      "Acrescente o arroz e mexa por 2 minutos.",
      "Adicione caldo quente em pequenas porções, mexendo até o arroz ficar al dente.",
      "Desligue e incorpore a manteiga restante e parmesão."
    ]
  },
  {
    "slug": "abobrinha-refogada",
    "name": "Abobrinha refogada",
    "description": "Receita caseira de abobrinha refogada, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
    "time": "15 min",
    "servings": "3 porções",
    "categories": [
      "Almoço",
      "Saudáveis"
    ],
    "ingredients": [
      "2 abobrinhas",
      "1 dente de alho",
      "1 colher (sopa) de azeite",
      "Sal e pimenta a gosto",
      "Salsinha a gosto"
    ],
    "steps": [
      "Corte abobrinhas em meias-luas.",
      "Refogue o alho no azeite.",
      "Adicione a abobrinha e cozinhe mexendo por 5 a 7 minutos.",
      "Tempere e finalize com salsinha."
    ]
  },
  {
    "slug": "quibe-de-forno",
    "name": "Quibe de forno",
    "description": "Receita caseira de quibe de forno, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
    "time": "55 min",
    "servings": "6 porções",
    "categories": [
      "Almoço",
      "Lanches"
    ],
    "ingredients": [
      "250 g de trigo para quibe",
      "400 g de carne moída",
      "1 cebola",
      "2 colheres (sopa) de hortelã",
      "3 colheres (sopa) de azeite",
      "Sal e pimenta a gosto"
    ],
    "steps": [
      "Hidrate o trigo em água por 30 minutos, escorra e esprema.",
      "Misture trigo, carne, cebola, hortelã, sal e pimenta.",
      "Espalhe em refratário untado e regue com azeite.",
      "Asse a 200 °C por 30 minutos até ficar completamente cozido."
    ]
  },
  {
    "slug": "sanduiche-de-atum",
    "name": "Sanduíche de atum",
    "description": "Receita caseira de sanduíche de atum, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    "time": "10 min",
    "servings": "2 unidades",
    "categories": [
      "Lanches"
    ],
    "ingredients": [
      "4 fatias de pão integral",
      "1 lata de atum escorrido",
      "2 colheres (sopa) de iogurte natural",
      "1/2 cenoura",
      "2 folhas de alface",
      "Sal e limão a gosto"
    ],
    "steps": [
      "Misture o atum com iogurte e cenoura ralada.",
      "Tempere com sal e gotas de limão.",
      "Monte os sanduíches com o recheio e alface.",
      "Sirva ou mantenha refrigerado."
    ]
  },
  {
    "slug": "pipoca-de-panela",
    "name": "Pipoca de panela",
    "description": "Receita caseira de pipoca de panela, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    "time": "10 min",
    "servings": "3 porções",
    "categories": [
      "Lanches"
    ],
    "ingredients": [
      "1/2 xícara de milho para pipoca",
      "2 colheres (sopa) de óleo",
      "Sal a gosto"
    ],
    "steps": [
      "Aqueça o óleo numa panela funda.",
      "Acrescente o milho e tampe.",
      "Agite a panela com cuidado enquanto estoura.",
      "Desligue quando os estouros diminuírem e tempere."
    ]
  },
  {
    "slug": "mini-pizza-de-pao",
    "name": "Mini pizza de pão",
    "description": "Receita caseira de mini pizza de pão, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    "time": "15 min",
    "servings": "4 unidades",
    "categories": [
      "Lanches"
    ],
    "ingredients": [
      "4 fatias de pão de forma",
      "4 colheres (sopa) de molho de tomate",
      "100 g de muçarela",
      "1 tomate",
      "Orégano a gosto"
    ],
    "steps": [
      "Preaqueça o forno a 200 °C.",
      "Espalhe molho nas fatias de pão.",
      "Cubra com queijo, tomate e orégano.",
      "Asse por 8 a 10 minutos até derreter."
    ]
  },
  {
    "slug": "bolinho-de-arroz-assado",
    "name": "Bolinho de arroz assado",
    "description": "Receita caseira de bolinho de arroz assado, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    "time": "30 min",
    "servings": "12 unidades",
    "categories": [
      "Lanches"
    ],
    "ingredients": [
      "2 xícaras de arroz cozido",
      "1 ovo",
      "1/2 xícara de queijo ralado",
      "3 colheres (sopa) de farinha",
      "Salsinha e sal a gosto"
    ],
    "steps": [
      "Preaqueça o forno a 200 °C.",
      "Misture arroz, ovo, queijo, farinha e temperos.",
      "Modele bolinhos e coloque em forma untada.",
      "Asse por 20 minutos, virando na metade."
    ]
  },
  {
    "slug": "pate-de-ricota",
    "name": "Patê de ricota",
    "description": "Receita caseira de patê de ricota, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    "time": "10 min",
    "servings": "6 porções",
    "categories": [
      "Lanches",
      "Saudáveis"
    ],
    "ingredients": [
      "250 g de ricota",
      "3 colheres (sopa) de iogurte",
      "1 colher (sopa) de azeite",
      "1 colher (sopa) de salsinha",
      "Sal e pimenta a gosto"
    ],
    "steps": [
      "Amasse a ricota.",
      "Misture iogurte e azeite até ficar cremoso.",
      "Tempere com salsinha, sal e pimenta.",
      "Mantenha refrigerado até servir."
    ]
  },
  {
    "slug": "muffin-de-banana-e-aveia",
    "name": "Muffin de banana e aveia",
    "description": "Receita caseira de muffin de banana e aveia, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    "time": "35 min",
    "servings": "8 unidades",
    "categories": [
      "Lanches",
      "Café da manhã"
    ],
    "ingredients": [
      "2 bananas",
      "2 ovos",
      "1 xícara de farinha de aveia",
      "1/4 xícara de óleo",
      "2 colheres (sopa) de açúcar",
      "1 colher (chá) de fermento"
    ],
    "steps": [
      "Preaqueça o forno a 180 °C.",
      "Amasse bananas, misture ovos, óleo e açúcar.",
      "Incorpore farinha e fermento.",
      "Distribua em forminhas e asse por 20 a 25 minutos."
    ]
  },
  {
    "slug": "homus-simples",
    "name": "Homus simples",
    "description": "Receita caseira de homus simples, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    "time": "10 min",
    "servings": "6 porções",
    "categories": [
      "Lanches",
      "Saudáveis"
    ],
    "ingredients": [
      "2 xícaras de grão-de-bico cozido",
      "2 colheres (sopa) de tahine",
      "Suco de 1 limão",
      "1 dente de alho",
      "2 colheres (sopa) de azeite",
      "Água e sal a gosto"
    ],
    "steps": [
      "Processe o grão-de-bico com tahine, limão, alho e azeite.",
      "Acrescente água aos poucos até ficar cremoso.",
      "Tempere com sal e sirva."
    ]
  },
  {
    "slug": "wrap-de-frango-e-alface",
    "name": "Wrap de frango e alface",
    "description": "Receita caseira de wrap de frango e alface, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    "time": "15 min",
    "servings": "2 unidades",
    "categories": [
      "Lanches"
    ],
    "ingredients": [
      "2 discos de wrap",
      "1 xícara de frango cozido e desfiado",
      "2 colheres (sopa) de requeijão",
      "4 folhas de alface",
      "1/2 tomate"
    ],
    "steps": [
      "Misture o frango cozido com requeijão.",
      "Aqueça os discos rapidamente.",
      "Recheie com alface, tomate e frango.",
      "Dobre as bordas e enrole."
    ]
  },
  {
    "slug": "bolo-de-laranja",
    "name": "Bolo de laranja",
    "description": "Receita caseira de bolo de laranja, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
    "time": "50 min",
    "servings": "10 fatias",
    "categories": [
      "Sobremesas",
      "Café da manhã"
    ],
    "ingredients": [
      "3 ovos",
      "1 xícara de açúcar",
      "1/2 xícara de óleo",
      "1 xícara de suco de laranja",
      "2 xícaras de farinha",
      "1 colher (sopa) de fermento"
    ],
    "steps": [
      "Preaqueça o forno a 180 °C.",
      "Bata ovos, açúcar, óleo e suco.",
      "Misture farinha e depois fermento.",
      "Asse em forma untada por 35 a 40 minutos."
    ]
  },
  {
    "slug": "pudim-de-leite-condensado",
    "name": "Pudim de leite condensado",
    "description": "Receita caseira de pudim de leite condensado, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
    "time": "1 h 30 min + geladeira",
    "servings": "8 porções",
    "categories": [
      "Sobremesas"
    ],
    "ingredients": [
      "1 xícara de açúcar",
      "1/2 xícara de água quente",
      "1 lata de leite condensado",
      "400 ml de leite",
      "3 ovos"
    ],
    "steps": [
      "Caramelize o açúcar em fogo baixo e adicione água quente com cuidado.",
      "Coloque a calda em forma de pudim.",
      "Bata ovos, leite e leite condensado, despeje na forma.",
      "Cubra com alumínio e asse em banho-maria a 180 °C por cerca de 1 hora.",
      "Refrigere por pelo menos 4 horas antes de desenformar."
    ]
  },
  {
    "slug": "arroz-doce-cremoso",
    "name": "Arroz-doce cremoso",
    "description": "Receita caseira de arroz-doce cremoso, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
    "time": "40 min",
    "servings": "6 porções",
    "categories": [
      "Sobremesas"
    ],
    "ingredients": [
      "1 xícara de arroz",
      "3 xícaras de água",
      "500 ml de leite",
      "1/2 xícara de açúcar",
      "1 pau de canela",
      "Canela em pó a gosto"
    ],
    "steps": [
      "Cozinhe o arroz com água e o pau de canela até quase secar.",
      "Junte leite e açúcar.",
      "Cozinhe mexendo por cerca de 15 minutos até ficar cremoso.",
      "Sirva com canela."
    ]
  },
  {
    "slug": "beijinho-de-coco",
    "name": "Beijinho de coco",
    "description": "Receita caseira de beijinho de coco, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
    "time": "25 min",
    "servings": "20 unidades",
    "categories": [
      "Sobremesas"
    ],
    "ingredients": [
      "1 lata de leite condensado",
      "100 g de coco ralado",
      "1 colher (sopa) de manteiga",
      "Coco para finalizar"
    ],
    "steps": [
      "Misture leite condensado, coco e manteiga.",
      "Cozinhe em fogo baixo mexendo até desgrudar do fundo.",
      "Espere esfriar completamente.",
      "Enrole e passe no coco."
    ]
  },
  {
    "slug": "gelatina-colorida-cremosa",
    "name": "Gelatina colorida cremosa",
    "description": "Receita caseira de gelatina colorida cremosa, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
    "time": "25 min + 4 h",
    "servings": "8 porções",
    "categories": [
      "Sobremesas"
    ],
    "ingredients": [
      "3 caixas de gelatina de sabores diferentes",
      "Água conforme as embalagens",
      "1 lata de leite condensado",
      "1 caixinha de creme de leite",
      "1 envelope (12 g) de gelatina incolor"
    ],
    "steps": [
      "Prepare as gelatinas separadamente conforme cada embalagem e deixe firmar.",
      "Corte as gelatinas em cubos.",
      "Hidrate e dissolva a gelatina incolor conforme a embalagem.",
      "Bata com leite condensado e creme de leite.",
      "Misture aos cubos e refrigere por pelo menos 4 horas."
    ]
  },
  {
    "slug": "biscoito-amanteigado",
    "name": "Biscoito amanteigado",
    "description": "Receita caseira de biscoito amanteigado, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
    "time": "35 min",
    "servings": "25 unidades",
    "categories": [
      "Sobremesas",
      "Lanches"
    ],
    "ingredients": [
      "200 g de manteiga",
      "1/2 xícara de açúcar",
      "2 xícaras de farinha de trigo",
      "1 colher (chá) de baunilha"
    ],
    "steps": [
      "Preaqueça o forno a 180 °C.",
      "Misture manteiga, açúcar e baunilha.",
      "Incorpore a farinha, modele bolinhas e achate.",
      "Asse por 15 a 20 minutos até dourar levemente nas bordas."
    ]
  },
  {
    "slug": "maca-assada-com-canela",
    "name": "Maçã assada com canela",
    "description": "Receita caseira de maçã assada com canela, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
    "time": "30 min",
    "servings": "2 porções",
    "categories": [
      "Saudáveis",
      "Sobremesas"
    ],
    "ingredients": [
      "2 maçãs",
      "1 colher (chá) de canela",
      "2 colheres (chá) de mel",
      "2 colheres (sopa) de água"
    ],
    "steps": [
      "Preaqueça o forno a 180 °C.",
      "Retire as sementes das maçãs sem perfurar o fundo.",
      "Polvilhe canela, adicione mel e coloque água no refratário.",
      "Asse por 20 a 25 minutos até macias."
    ]
  },
  {
    "slug": "salada-de-grao-de-bico",
    "name": "Salada de grão-de-bico",
    "description": "Receita caseira de salada de grão-de-bico, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    "time": "15 min",
    "servings": "4 porções",
    "categories": [
      "Saudáveis",
      "Almoço"
    ],
    "ingredients": [
      "2 xícaras de grão-de-bico cozido",
      "1 tomate",
      "1 pepino",
      "1/2 cebola roxa",
      "2 colheres (sopa) de azeite",
      "Suco de 1 limão",
      "Sal a gosto"
    ],
    "steps": [
      "Misture grão-de-bico frio com tomate, pepino e cebola picados.",
      "Tempere com azeite, limão e sal.",
      "Sirva fria."
    ]
  },
  {
    "slug": "legumes-assados",
    "name": "Legumes assados",
    "description": "Receita caseira de legumes assados, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    "time": "40 min",
    "servings": "4 porções",
    "categories": [
      "Saudáveis",
      "Almoço"
    ],
    "ingredients": [
      "2 cenouras",
      "1 abobrinha",
      "1 batata-doce",
      "1 cebola roxa",
      "2 colheres (sopa) de azeite",
      "Sal, pimenta e alecrim"
    ],
    "steps": [
      "Preaqueça o forno a 210 °C.",
      "Corte os legumes em pedaços de tamanho semelhante.",
      "Misture azeite e temperos.",
      "Asse sem amontoar por 25 a 35 minutos, virando na metade."
    ]
  },
  {
    "slug": "frango-desfiado-com-legumes",
    "name": "Frango desfiado com legumes",
    "description": "Receita caseira de frango desfiado com legumes, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    "time": "35 min",
    "servings": "4 porções",
    "categories": [
      "Saudáveis",
      "Almoço"
    ],
    "ingredients": [
      "500 g de peito de frango",
      "1 cenoura",
      "1 abobrinha",
      "1/2 cebola",
      "1 dente de alho",
      "1 colher (sopa) de azeite",
      "Sal e páprica"
    ],
    "steps": [
      "Cozinhe o frango até ficar completamente cozido e desfie.",
      "Refogue cebola e alho no azeite.",
      "Acrescente cenoura e abobrinha e cozinhe até ficarem macias.",
      "Misture o frango e tempere."
    ]
  },
  {
    "slug": "creme-de-abobora",
    "name": "Creme de abóbora",
    "description": "Receita caseira de creme de abóbora, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    "time": "35 min",
    "servings": "4 porções",
    "categories": [
      "Saudáveis",
      "Almoço"
    ],
    "ingredients": [
      "700 g de abóbora",
      "1 cebola",
      "2 dentes de alho",
      "1 colher (sopa) de azeite",
      "700 ml de água",
      "Sal e gengibre a gosto"
    ],
    "steps": [
      "Refogue cebola e alho.",
      "Junte abóbora, água, sal e gengibre.",
      "Cozinhe por 20 a 25 minutos até amaciar.",
      "Bata com cuidado por estar quente e retorne à panela para ajustar os temperos."
    ]
  },
  {
    "slug": "berinjela-assada-com-tomate",
    "name": "Berinjela assada com tomate",
    "description": "Receita caseira de berinjela assada com tomate, com preparo explicado passo a passo.",
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    "time": "40 min",
    "servings": "3 porções",
    "categories": [
      "Saudáveis",
      "Almoço"
    ],
    "ingredients": [
      "2 berinjelas",
      "2 tomates",
      "2 colheres (sopa) de azeite",
      "2 dentes de alho",
      "Sal e orégano a gosto"
    ],
    "steps": [
      "Preaqueça o forno a 200 °C.",
      "Corte berinjelas e tomates em rodelas.",
      "Distribua numa assadeira e tempere com alho, azeite, sal e orégano.",
      "Asse por 25 a 30 minutos até ficarem macias."
    ]
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
