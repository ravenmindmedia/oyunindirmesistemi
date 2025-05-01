export async function onRequestPost({ request }) {
  const formData = await request.formData();
  const code = formData.get("code");

  // Kod doğrulama mantığı
  if (code === "ABC123") {
    return new Response("Kod geçerli! İndirme bağlantısı: https://ranemnind.net/oyun.zip");
  } else {
    return new Response("Kod geçersiz.", { status: 403 });
  }
}
