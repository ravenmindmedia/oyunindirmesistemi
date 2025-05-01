export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  const code = url.searchParams.get("code");

  const data = await fetch("https://raw.githubusercontent.com/ravenmindmedia/oyun-indirme-sistemi/main/codes.json")
    .then(res => res.json());

  const item = data.find(x => x.code === code);

  if (!item) {
    return new Response("Şifre geçersiz.", { status: 400 });
  }

  if (item.used) {
    return new Response("Bu şifre zaten kullanılmış.", { status: 400 });
  }

  return Response.redirect("https://example.com/oyun-dosyasi.zip", 302);
}
