export default {
  async fetch(request, env, ctx) {
    return new Response("¡Hola desde el Edge de Cloudflare!", {
      headers: {
        "content-type": "text/plain",
      },
    });
  },
};
