declare module 'next/server' {
  export interface NextRequest extends Request {
    json(): Promise<any>;
    nextUrl: URL;
  }

  export class NextResponse extends Response {
    static json(body: any, init?: ResponseInit): NextResponse;
  }
}

