<script lang="ts">
  import { enhance } from '$app/forms';
  let error: string | null = null;
  let success = false;

  let formData = {
    email: '',
    password: '',
    name: '',
    surname: ''
  };
</script>

<div class="max-w-md mx-auto p-6">
  <h1 class="text-2xl font-bold mb-6">Vytvořit účet</h1>

  {#if success}
    <div class="bg-green-100 text-green-800 p-4 mb-4 rounded">
      Vytvoření účtu proběhlo úspěšně! Nyní zkontrolujte váš e-mail a klikněte na odkaz pro aktivaci účtu.
    </div>
  {:else}
    <form method="POST" use:enhance class="space-y-4" action="?/register">
      {#if error}
        <div class="bg-red-100 text-red-800 p-4 rounded">{error}</div>
      {/if}

      <div>
        <label for="email" class="block mb-2">Email *</label>
        <input
          id="email"
          name="email"
          type="email"
          bind:value={formData.email}
          required
          class="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label for="password" class="block mb-2">Heslo *</label>
        <input
          id="password"
          name="password"
          type="password"
          bind:value={formData.password}
          required
          minlength="8"
          class="w-full p-2 border rounded"
        />
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="name" class="block mb-2">Jméno</label>
          <input
            id="name"
            name="name"
            bind:value={formData.name}
            class="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label for="surname" class="block mb-2">Příjmení</label>
          <input
            id="surname"
            name="surname"
            bind:value={formData.surname}
            class="w-full p-2 border rounded"
          />
        </div>
      </div>

      <button
        type="submit"
        class="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark"
      >
        Zaregistrovat
      </button>
    </form>

    <div class="mt-4 text-center">
      <p>Už máte účet? <a href="/auth/login" class="text-primary underline">Přihlásit se</a></p>
    </div>
  {/if}
</div>