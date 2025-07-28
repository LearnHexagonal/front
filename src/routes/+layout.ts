import { mockUser } from '$lib/mock/data';

export async function load() {
	return { user: mockUser };
}
