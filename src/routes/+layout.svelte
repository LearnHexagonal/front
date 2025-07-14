<script>
	import '$lib/styles/global.css';
</script>

<header class="header">
	<div class="header-left">
		<span class="logo">📚</span>
		<span class="project-name">project-name</span>
	</div>
	<nav class="menu">
		<a href="/">대시보드</a>
		<a href="/learn">학습하기</a>
	</nav>
	<div class="profile">
		<div class="profile-dot"></div>
		<span class="profile-name">홍길동</span>
	</div>
</header>

<main>
	<slot />
</main>

<style>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2rem;
		background: #fff;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
	}

	.header-left {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.logo {
		font-size: 1.4rem;
	}

	.profile {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.profile-dot {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background-color: #ddd;
	}

	.project-name {
		font-weight: bold;
		font-size: 1.2rem;
	}

	.menu a {
		margin-left: 1rem;
		padding: 0.5rem 1rem;
		text-decoration: none;
		color: #666;
		border-radius: 4px;
	}

	.menu a:hover {
		background: #eee;
	}
</style>
