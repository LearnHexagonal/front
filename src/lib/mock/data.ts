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
