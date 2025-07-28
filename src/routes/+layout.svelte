<script lang="ts">
	import { page } from '$app/stores';
	import '$lib/styles/global.css';

	export let data: {
		user: { name: string };
	};

	const user = data.user;
	$: pathname = $page.url.pathname;
</script>

<header class="flex justify-between items-center px-8 py-4 bg-white shadow">
	<div class="flex items-center gap-2">
		<span class="text-xl">📚</span>
		<span class="font-bold text-lg">project-name</span>
	</div>
	<nav class="flex gap-4 text-gray-600">
		<a
			href="/"
			class="px-4 py-2 rounded text-sm font-medium
				{pathname === '/' ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'}"
		>
			대시보드
		</a>
		<a
			href="/learn"
			class="px-4 py-2 rounded text-sm font-medium
				{pathname.startsWith('/learn') ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'}"
		>
			학습하기
		</a>
	</nav>
	<div class="flex items-center gap-2">
		<div class="w-8 h-8 rounded-full bg-gray-300"></div>
		<span>{user.name}</span>
	</div>
</header>

<main class="relative z-0 mx-auto mt-6 w-full max-w-7xl px-4 xl:px-0">
	<slot />
</main>
