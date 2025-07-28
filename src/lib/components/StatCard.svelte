<script lang="ts">
	export let title: string;
	export let value: string | number;
</script>

<div class="bg-white border p-4 rounded-lg shadow-sm">
	<p class="text-gray-600 text-sm">{title}</p>
	<p class="text-xl font-bold">{value}</p>
</div>
