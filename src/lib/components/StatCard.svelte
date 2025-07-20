<script lang="ts">
	export let title: string;
	export let value: string | number;
</script>

<div class="bg-white p-4 rounded-lg shadow">
	<p class="text-gray-600 text-sm">{title}</p>
	<p class="text-xl font-bold">{value}</p>
</div>
