<script>
	import StatCard from '$lib/components/StatCard.svelte';

	let user = '홍길동';
	let totalLessons = 12;
	let completedLessons = 3;
	let totalHours = 47;
	let streakDays = 12;
</script>

<h2>안녕하세요, {user}님! 👋</h2>

<div class="card-grid">
	<StatCard title="총 강의 수" value={totalLessons} />
	<StatCard title="완료한 강의" value={completedLessons} />
	<StatCard title="학습 시간" value={`${totalHours}시간`} />
	<StatCard title="연속 학습" value={`${streakDays}일`} />
</div>
