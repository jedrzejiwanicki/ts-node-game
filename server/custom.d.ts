declare namespace Express {
  export interface Response {
    io?: any
  }
}

declare module NodeJS  {
  interface Global {
    io: any
  }
}