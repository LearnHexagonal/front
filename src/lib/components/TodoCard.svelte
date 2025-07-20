<script lang="ts">
	export let title: string;
	export let category: string;
	export let date: string;
	export let level: string;

	function getLevelClasses(level: string) {
		if (level === 'high') return 'bg-red-100 text-red-700';
		if (level === 'medium') return 'bg-yellow-100 text-yellow-800';
		if (level === 'low') return 'bg-green-100 text-green-700';
		return '';
	}
</script>

<li
	class="flex justify-between items-start rounded-lg border border-gray-200 px-4 py-3
    bg-white shadow-sm"
>
	<div class="flex-1">
		<p class="text-sm font-medium text-gray-800">{title}</p>
		<p class="text-xs text-gray-500">{category}</p>
		<p class="text-xs text-gray-500">{date}</p>
	</div>
	<span
		class={`ml-4 self-start px-2 py-0.5 text-xs font-semibold rounded-full ${getLevelClasses(level)}`}
	>
		{level}
	</span>
</li>
