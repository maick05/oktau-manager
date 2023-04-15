export class Anime {
  nome: string;
  descricao?: string;
  status: Status;
  finalizado: boolean;
  dataInicio: Date;
  dataUltimaVisualizacao?: Date;
  categorias: Categoria[];
  avaliacao?: Avaliacao;
  ultimoEpisodio?: UltimoEpisodio;
}

export interface UltimoEpisodio {
  temporada: number;
  episodio: number;
}

export interface Avaliacao {
  media: number;
  animacao: number;
  enredo: number;
  objetividade: number;
  roteiro: number;
  originalidade: number;
  expansaoUniverso: number;
  antiCliche: number;
  trilha: number;
}

export enum Status {
  NAO_VISTO = 1,
  INICIADO = 2,
  COMPLETO = 3,
}

export enum Categoria {
  ISEKAI = 'Isekai',
  SHONEN = 'Shonen',
  SEINEI = 'Seinen',
  ESPIRITUAL = 'Espiritual',
  DRAMA = 'Drama',
  NINJA = 'Nija',
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
