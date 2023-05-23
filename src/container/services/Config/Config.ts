export class Config {
  public get(key: string): TMaybe<string> {
    return process.env[key];
  }
}
