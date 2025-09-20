import pack from '../../../package.json';

export async function generateStaticParams() {
  return [];
}

export async function GET() {
  return Response.json({ version: pack.version, status: 'ok' });
}
