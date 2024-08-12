<script setup lang="ts">
const test = Math.random();
</script>

<template>
	<div class="p-4">
		<h1 class="font-medium text-2xl"> Salut benjos !</h1>
		<p v-if="test < .5">Inférieur</p>
		<p v-else>Supérieur</p>
	</div>
</template>
