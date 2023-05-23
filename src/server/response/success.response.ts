export class SuccessResponse<T> {
  public readonly success = true;

  public readonly data: T;

  constructor(data: T) {
    this.data = data;
  }

  public toJSON() {
    return {
      success: true,
      data: this.data,
    };
  }
}
