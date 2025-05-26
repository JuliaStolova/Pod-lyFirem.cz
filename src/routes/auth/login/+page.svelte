<script lang="ts">
  import { enhance } from '$app/forms';
  import { page } from '$app/stores';
  
  let error: string | null = null;
  let formData = {
    email: '',
    password: ''
  };
</script>

<div class="max-w-md mx-auto p-6">
  <h1 class="text-2xl font-bold mb-6">Přihlásit se</h1>

  {#if $page.form?.error}
    <div class="bg-red-100 text-red-800 p-4 mb-4 rounded">
      {$page.form.error}
    </div>
  {/if}

  <form method="POST" use:enhance class="space-y-4">
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
        class="w-full p-2 border rounded"
      />
    </div>

    <button
      type="submit"
      class="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark"
    >
      Přihlásit se
    </button>
  </form>

  <div class="mt-6 text-center space-y-2">
    <!-- <p>
      <a href="/auth/reset-password" class="text-primary underline">
        Zapomněli jste heslo?
      </a>
    </p> -->
    <p>
      Nemáte účet? <a href="/auth/register" class="text-primary underline">Zaregistrovat</a>
    </p>
  </div>
</div>