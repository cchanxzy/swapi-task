export type Film = {
  /**
   * The title of this film
   */
  title: string;

  /**
   * The episode number of this film.
   */
  episode_id: number;

  /**
   * The opening paragraphs at the beginning of this film.
   */
  opening_crawl: string;

  /**
   * The name of the director of this film.
   */
  director: string;

  /**
   * The name(s) of the producer(s) of this film. Comma separated.
   */
  producer: string;

  /**
   * The ISO 8601 date format of film release at original creator country.
   */
  release_date: string;

  /**
   * An array of species resource URLs that are in this film.
   */
  species: Array<string>;

  /**
   * An array of starship resource URLs that are in this film.
   */
  starships: Array<string>;

  /**
   * An array of vehicle resource URLs that are in this film.
   */
  vehicles: Array<string>;

  /**
   * An array of people resource URLs that are in this film.
   */
  characters: Array<string>;

  /**
   * An array of planet resource URLs that are in this film.
   */
  planets: Array<string>;

  /**
   * the hypermedia URL of this resource.
   */
  url: string;

  /**
   * the ISO 8601 date format of the time that this resource was created.
   */
  created: string;

  /**
   * the ISO 8601 date format of the time that this resource was edited.
   */
  edited: string;
};
