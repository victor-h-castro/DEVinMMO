type SystemRequiriments = {
  os: string,
  processor: string,
  memory: string,
  graphics: string,
  storage: string,
}

type KeyPair = {
  id: number,
  image: string,
}

export type GameProps = {
    id: number,
    title: string,
    thumbnail: string,
    status: string,
    short_description: string,
    description: string,
    game_url: string,
    genre: string,
    platform: string,
    publisher: string,
    developer: string,
    release_date: string,
    profile_url: string,
    minimum_system_requirements: SystemRequiriments,
    screenshots: KeyPair[],
};
