<script lang="ts">
	export let icon: string;
	export let title: string;
	export let description: string;
	export let progress: { current: number; total: number };
	export let completedAt: string | null = null;
	export let achieved: boolean;
</script>

<li
	class={`rounded-lg border px-4 py-3 ${
		achieved
			? 'bg-green-50 border-green-200 text-green-800'
			: 'bg-white border-gray-200 text-gray-800'
	}`}
>
	<div class="flex gap-3 items-start">
		<div class="text-xl">{icon}</div>
		<div class="flex-1">
			<p>{title}</p>
			<p class="text-sm">{description}</p>
			{#if achieved}
				<p class="text-xs mt-1">{completedAt}</p>
			{:else}
				<p class="text-xs mt-1 text-gray-600">{progress.current}/{progress.total}</p>
			{/if}
		</div>
	</div>
</li>
