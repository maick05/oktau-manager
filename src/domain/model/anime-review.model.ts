export class AnimeReview {
  codAnime: string;
  idUsuario: number;
  status: Status;
  dataInicio: Date;
  dataUltimaVisualizacao?: Date;
  avaliacao?: Avaliacao;
  ultimoEpisodio?: UltimoEpisodio;
}

export interface UltimoEpisodio {
  temporada?: number;
  episodio: number;
}

export interface Avaliacao {
  nota: number;
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
