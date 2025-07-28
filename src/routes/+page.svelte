<script lang="ts">
	import StatCard from '$lib/components/StatCard.svelte';
	import RecentActivityCard from '$lib/components/RecentActivityCard.svelte';
	import TodoCard from '$lib/components/TodoCard.svelte';
	import AchievementCard from '$lib/components/AchievementCard.svelte';
	import QuickActionList from '$lib/components/QuickActionList.svelte';

	export let data: {
		user: { name: string };
		stats: {
			totalLessons: number;
			completedLessons: number;
			totalHours: number;
			streakDays: number;
		};
		recentActivities: {
			title: string;
			category: string;
			time: string;
			points: number | null;
			progress: { current: number; total: number } | null;
			icon: string;
		}[];
		todoItems: {
			title: string;
			category: string;
			dueDate: string;
			level: 'low' | 'medium' | 'high';
		}[];
		achievements: {
			icon: string;
			title: string;
			description: string;
			progress: { current: number; total: number };
			completedAt: string | null;
			achieved: boolean;
		}[];
	};

	const { user, stats, recentActivities, todoItems, achievements } = data;
</script>

<div class="w-full min-w-0 flex-auto lg:static lg:max-h-full lg:overflow-visible">
	<div class="min-w-0 flex-auto">
		<div>
			<h1 class="text-2xl font-bold leading-tight">안녕하세요, {user.name}님! 👋</h1>
			<p class="text-sm text-gray-600 mt-2">
				오늘도 새로운 것을 배워보세요. 현재 진행률을 확인해보세요.
			</p>
		</div>

		<div class="mt-6 grid gap-6 grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
			<StatCard title="총 강의 수" value={stats.totalLessons} />
			<StatCard title="완료한 강의" value={stats.completedLessons} />
			<StatCard title="학습 시간" value={`${stats.totalHours}시간`} />
			<StatCard title="연속 학습" value={`${stats.streakDays}일`} />
		</div>

		<div class="my-8 flex flex-col gap-x-7 gap-y-10 md:flex-row">
			<div class="flex-[7] flex flex-col gap-7">
				<div class="rounded-xl bg-white border p-6 shadow-sm">이번 주 학습현황</div>
				<div class="rounded-xl bg-white border p-6 shadow-sm">
					<h2 class="text-xl font-semibold mb-4">최근 활동</h2>
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
				<div class="rounded-xl bg-white border p-6 shadow-sm">
					<h2 class="text-xl font-semibold mb-4">할 일</h2>
					<ul class="space-y-4">
						{#each todoItems as todo}
							<TodoCard
								title={todo.title}
								category={todo.category}
								date={todo.dueDate}
								level={todo.level}
							/>
						{/each}
					</ul>
				</div>
				<div class="rounded-xl bg-white border p-6 shadow-sm">
					<h2 class="text-xl font-semibold mb-4">성취도</h2>
					<ul class="space-y-3">
						{#each achievements as achievement}
							<AchievementCard
								icon={achievement.icon}
								title={achievement.title}
								description={achievement.description}
								progress={achievement.progress}
								completedAt={achievement.completedAt}
								achieved={achievement.achieved}
							/>
						{/each}
					</ul>
				</div>
				<QuickActionList />
			</div>
		</div>
	</div>
</div>
