<script lang="ts">
	import QuickActionButton from './QuickActionButton.svelte';

	const quickActions = [
		{ label: '학습 계속하기', href: '/learn/continue', variant: 'primary' },
		{ label: '새 강의 찾기', href: '/learn', variant: 'secondary' },
		{ label: '퀴즈 풀기', href: '/quiz', variant: 'secondary' }
	] as const;
</script>

<div class="rounded-xl bg-white border p-6 shadow-sm">
	<h2 class="text-xl font-semibold mb-4">빠른 실행</h2>
	<div class="space-y-2">
		{#each quickActions as action}
			<QuickActionButton label={action.label} href={action.href} variant={action.variant} />
		{/each}
	</div>
</div>
