<script lang="ts">
	export let label: string;
	export let href: string;
	export let variant: 'primary' | 'secondary' = 'secondary';

	$: classes =
		variant === 'primary'
			? 'bg-blue-600 text-white hover:bg-blue-800'
			: 'bg-white border text-gray-800 hover:bg-gray-100';
</script>

<a
	{href}
	class={`block w-full text-center text-sm font-medium rounded-md px-4 py-2.5 transition ${classes}`}
>
	{label}
</a>
