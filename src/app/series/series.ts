export class Serie {
  id: number;
  name: string;
  channel: string;
  seasons: number;
  descripcion: string;
  web: string;
  image: string;


  constructor(id: number, name: string, channel: string, seasons: number, descripcion: string, web: string, image: string)
  {
      this.id = id;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.descripcion = descripcion;
      this.web = web;
      this. image = image;
  }
}
