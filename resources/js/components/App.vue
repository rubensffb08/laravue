<template>

        <h2>Escolha a empresa</h2>
        <button @click="Padaria">Padaria bom dia</button>
        <button @click="Estacao">Estacao</button>


</template>

<script >
export default {
  methods: {
    Padaria() {
      window.location.href = '/products'; // Substitua pela URL correspondente
    },
    Estacao() {
      window.location.href = '/estacao'; // Substitua pela URL correspondente
    },
  },
};
</script>

