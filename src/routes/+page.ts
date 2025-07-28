import { mockUser, mockStats, mockRecentActivities, mockTodoItems } from '$lib/mock/data';

export async function load() {
	return {
		user: mockUser,
		stats: mockStats,
		recentActivities: mockRecentActivities,
		todoItems: mockTodoItems
	};
}
