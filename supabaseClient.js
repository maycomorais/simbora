// supabaseClient.js — Simbora Food Park

const _SUPABASE_URL = 'https://elmvaxrnhimfrhlxixab.supabase.co';
const _SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsbXZheHJuaGltZnJobHhpeGFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2MDczNzgsImV4cCI6MjA4ODE4MzM3OH0.OQttHOGxe-Apklb7uDawJQ46YiK-23EM2c5-0mcnNBQ';

if (typeof window.supabase === 'undefined' || !window.supabase.createClient) {
    console.error("ERRO CRÍTICO: A biblioteca do Supabase não carregou. Verifique o HTML.");
    alert("Erro de conexão. Por favor, recarregue a página.");
} else {
    window.supa = window.supabase.createClient(_SUPABASE_URL, _SUPABASE_KEY);
    console.log("Simbora Food Park — Banco iniciado com sucesso");
}

async function checkUser() {
    const { data: { session } } = await window.supa.auth.getSession();
    if (!session) {
        window.location.href = 'login.html';
    }
    return session;
}
