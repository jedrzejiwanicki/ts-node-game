export class DataDirectory {
  private data: any = {
    'user': [],
    'grid': [],
    'landscape': [],
  };

  remove(type: string, id: number) {
    this.data = {
      ...this.data,
      [type]: [...(this.data[type] || []).filter((item: any) => item.id && item.id !== id)]
    }
  }

  add(type: string, data: any) {
    this.data = {
      ...this.data,
      [type]: [
        ...(this.data[type] || []),
        data,
      ]
    }
  }

  addMany(type: string, data: any[]) {
    data.forEach((datum: any) => this.add(type, datum))
  }

  getAll(type: string) {
    return this.data[type];
  }

  get(type: string, index: number) {
    return this.data[type].find((item: any) => item.id === index);
  }

  update(type: string, index: number, data: any) {
    this.remove(type, index);
    this.add(type, data);
  }

  keys(): string[] {
    return Object.keys(this.data);
  }
}