// API endpoint for security.txt
// Helps security researchers report vulnerabilities

export async function GET() {
  const securityTxt = `Contact: security@eventara.com
Expires: 2026-12-31T00:00:00Z
Preferred-Languages: en
`;

  return new Response(securityTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
