<script lang="ts" setup>
// TODO Change the website's name.
const websiteName = 'Template';

const links = [
	{
		label: 'Home',
		icon: 'i-heroicons-home',
		to: '/',
	},
	{
		label: 'Services',
		icon: 'i-heroicons-square-3-stack-3d',
		to: '/services',
	},
	{
		label: 'Pricing',
		icon: 'i-heroicons-currency-dollar',
		to: '/pricing',
	},
	{
		label: 'Contact',
		icon: 'i-heroicons-envelope',
		to: '/contact',
	},
];
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      {{ websiteName }}
      <UBadge variant="outline">dev</UBadge>
    </template>

    <template #right>
      <UColorModeButton class="hidden md:flex"/>
      <UButton class="hidden md:flex" to="/auth/login" variant="outline">Login</UButton>
      <UButton class="hidden md:flex" to="/auth/register">Get started</UButton>
    </template>

    <template #panel>
      <div class="flex justify-center gap-x-3">
        <UColorModeButton/>
        <UButton to="/auth/login" variant="outline">Login</UButton>
        <UButton to="/auth/register">Get started</UButton>
      </div>
      <UDivider class="py-5"/>
      <UAsideLinks :links="links"/>
    </template>
  </UHeader>
</template>
