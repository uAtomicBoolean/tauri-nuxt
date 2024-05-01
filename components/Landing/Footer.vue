<script lang="ts" setup>
const links = [
	{
		label: 'Home',
		to: '/',
	},
	{
		label: 'Services',
		to: '/services',
	},
	{
		label: 'Pricing',
		to: '/pricing',
	},
	{
		label: 'Contact',
		to: '/contact',
	},
];
</script>

<template>
  <UFooter :links="links">
    <template #left>
      Copyright @ {{ new Date().getFullYear() }}
    </template>
  </UFooter>
</template>