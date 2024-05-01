<script setup lang="ts">
const test = Math.random();
</script>

<template>
	<h1> Salut benjos !</h1>
	<p v-if="test < .5">Inférieur</p>
	<p v-else>Supérieur</p>
</template>
