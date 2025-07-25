<script>
	import StatCard from '$lib/components/StatCard.svelte';
	import RecentActivityCard from '$lib/components/RecentActivityCard.svelte';
	import TodoCard from '$lib/components/TodoCard.svelte';

	let user = '홍길동';
	let totalLessons = 12;
	let completedLessons = 3;
	let totalHours = 47;
	let streakDays = 12;

	let recentActivities = [
		{
			title: '상태 관리 이해하기',
			category: 'Svelte 기초',
			time: '2025-07-18T21:00:00',
			points: 150,
			progress: null,
			icon: 'check'
		},
		{
			title: '이벤트 핸들링',
			category: 'Svelte 기초',
			time: '2025-07-16T09:00:00',
			points: null,
			progress: null,
			icon: 'play'
		},
		{
			title: '컴포넌트 기초 퀴즈',
			category: 'Svelte 기초',
			time: '2025-07-15T09:00:00',
			points: 200,
			progress: '9/10',
			icon: 'star'
		}
	];

	const todoItems = [
		{
			title: '이벤트 핸들링 완료하기',
			category: 'Svelte 기초',
			date: '오늘',
			level: 'high'
		},
		{
			title: '조건부 렌더링 퀴즈',
			category: 'Svelte 기초',
			date: '내일',
			level: 'medium'
		},
		{
			title: '프로젝트: Todo 앱 만들기',
			category: 'Svelte 실습',
			date: '이번 주',
			level: 'low'
		}
	];
</script>

<div class="w-full min-w-0 flex-auto lg:static lg:max-h-full lg:overflow-visible">
	<div class="min-w-0 flex-auto">
		<div>
			<h1 class="text-xl font-bold leading-tight">안녕하세요, {user}님! 👋</h1>
			<p class="text-sm text-gray-600 mt-1">
				오늘도 새로운 것을 배워보세요. 현재 진행률을 확인해보세요.
			</p>
		</div>

		<div class="mt-6 grid gap-6 grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
			<StatCard title="총 강의 수" value={totalLessons} />
			<StatCard title="완료한 강의" value={completedLessons} />
			<StatCard title="학습 시간" value={`${totalHours}시간`} />
			<StatCard title="연속 학습" value={`${streakDays}일`} />
		</div>

		<div class="my-8 flex flex-col gap-x-7 gap-y-10 md:flex-row">
			<div class="flex-[7] flex flex-col gap-7">
				<div class="rounded-xl bg-white p-6 shadow">이번 주 학습현황</div>
				<div class="rounded-xl bg-white p-6 shadow">
					<h2 class="text-base font-semibold mb-4">최근 활동</h2>
					<ul class="space-y-4">
						{#each recentActivities as activity}
							<RecentActivityCard
								title={activity.title}
								category={activity.category}
								time={activity.time}
								points={activity.points}
								progress={activity.progress}
								icon={activity.icon}
							/>
						{/each}
					</ul>
				</div>
			</div>
			<div class="flex-[3] flex flex-col gap-7">
				<div class="rounded-xl bg-white p-6 shadow">
					<h2 class="text-base font-semibold mb-4">할 일</h2>
					<ul class="space-y-4">
						{#each todoItems as item}
							<TodoCard
								title={item.title}
								category={item.category}
								date={item.date}
								level={item.level}
							/>
						{/each}
					</ul>
				</div>
				<div class="rounded-xl bg-white p-6 shadow">성취도</div>
				<div class="rounded-xl bg-white p-6 shadow">빠른실행</div>
			</div>
		</div>
	</div>
</div>
