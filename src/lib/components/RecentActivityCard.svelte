<script lang="ts">
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';
	import 'dayjs/locale/ko';
	dayjs.locale('ko');

	dayjs.extend(relativeTime);
	export let title: string;
	export let category: string;
	export let time: string;
	export let points: number | null;
	export let progress: string | null;
	export let icon: string;

	$: timeAgo = dayjs(time).fromNow();
</script>

<li class="flex justify-between items-center bg-gray-50 rounded-lg px-4 py-3">
	<div class="flex gap-3 items-center">
		<img src={`/icons/${icon}.png`} alt="" class="w-6 h-6" />
		<div class="flex-1">
			<p class="text-sm font-medium text-gray-800">{title}</p>
			<p class="text-xs text-gray-500 mt-0.5">{category}</p>
		</div>
	</div>

	<div class="text-right text-sm text-gray-500 whitespace-nowrap">
		<p>{timeAgo}</p>
		{#if points}
			<p class="text-blue-500">+{points}점</p>
		{/if}
		{#if progress}
			<p class="text-green-600">{progress}</p>
		{/if}
	</div>
</li>
