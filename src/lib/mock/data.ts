export const mockUser = { name: '홍길동' };

export const mockStats = {
	totalLessons: 12,
	completedLessons: 3,
	totalHours: 47,
	streakDays: 12
};

export const mockRecentActivities = [
	{
		title: '상태 관리 이해하기',
		category: 'Svelte 기초',
		time: '2025-07-18',
		points: 150,
		progress: null,
		icon: 'check'
	},
	{
		title: '이벤트 핸들링',
		category: 'Svelte 기초',
		time: '2025-07-16',
		points: null,
		progress: null,
		icon: 'play'
	},
	{
		title: '컴포넌트 기초 퀴즈',
		category: 'Svelte 기초',
		time: '2025-07-15',
		points: 200,
		progress: {
			current: 9,
			total: 10
		},
		icon: 'star'
	}
];

export const mockTodoItems = [
	{
		title: '이벤트 핸들링 완료하기',
		category: 'Svelte 기초',
		dueDate: '2025-07-25',
		level: 'high'
	},
	{
		title: '조건부 렌더링 퀴즈',
		category: 'Svelte 기초',
		dueDate: '2025-07-26',
		level: 'medium'
	},
	{
		title: '프로젝트: Todo 앱 만들기',
		category: 'Svelte 실습',
		dueDate: '2025-07-28',
		level: 'low'
	}
];

export const mockAchievements = [
	{
		icon: '🎯',
		title: '첫 걸음',
		description: '첫 번째 강의 완료',
		progress: { current: 1, total: 1 },
		completedAt: '2025-01-15',
		achieved: true
	},
	{
		icon: '🔥',
		title: '연속 학습자',
		description: '7일 연속 학습',
		progress: { current: 7, total: 7 },
		completedAt: '2025-01-20',
		achieved: true
	},
	{
		icon: '🧠',
		title: '퀴즈 마스터',
		description: '퀴즈 10개 완료',
		progress: { current: 7, total: 10 },
		completedAt: null,
		achieved: false
	},
	{
		icon: '⚡',
		title: '코드 닌자',
		description: '100개 코드 예제 실행',
		progress: { current: 67, total: 100 },
		completedAt: null,
		achieved: false
	}
];
