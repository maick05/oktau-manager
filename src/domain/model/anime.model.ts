export class Anime {
  code: string;
  nome: string;
  descricao?: string;
  finalizado: boolean;
  categorias: Categoria[];
  alias?: string[];
}

export enum Categoria {
  ISEKAI = 'Isekai',
  SHONEN = 'Shonen',
  SEINEI = 'Seinen',
  ESPIRITUAL = 'Espiritual',
  DRAMA = 'Drama',
  NINJA = 'Ninja',
  LUTA = 'Luta',
  SUSPENSE = 'Suspense',
  INVESTIGACAO = 'Investigação',
  ESPORTE = 'Esporte',
  COMEDIA = 'Comédia',
  SCI_FI = 'Ficção Científica',
  AVENTURA = 'Aventura',
  ACAO = 'Ação',
  SOBRENATURAL = 'Sobrenatural',
  MEDIEVAL = 'Medieval',
  COTIDIANO = 'Cotidiano',
  APOCALIPTICO = 'Apocalíptico',
  GUERRA = 'Guerra',
  TERROR = 'Terror',
  PISCODELICO = 'Piscodélico',
  FANTASIA = 'Fantasia',
  HENTAI = 'Hentai',
  COLEGIAL = 'Colegial',
  GAME_ISEKAI = 'Game Isekai',
  HEROIS = 'Heróis',
  MAGIA = 'Magia',
  ROMANCE = 'Romance',
  VIAGEM_NO_TEMPO = 'Viagem no Tempo',
  SOMBRIO = 'Sombrio',
  FUTURISTA = 'Futurista',
  MONSTROS = 'Monstros',
}
