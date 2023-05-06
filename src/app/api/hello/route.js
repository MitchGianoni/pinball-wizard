export async function GET(req) {
    console.log('\n=====');
    console.log('/api GET request after clicking "Sign In" button');
    console.log('===== \n');

    return new Response('Hello, Next.js!');
}

export async function POST(req) {
    console.log('/api POST request');
    return new Response('Hello, Next.js!');
}
