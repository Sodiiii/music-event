const API_USERS = 'https://jsonplaceholder.typicode.com/users'

export const getUsers = async () => {
    try {
        const res = await fetch(API_USERS);
        return await res.json();
    } catch (error) {
        console.error('Could not fetch', error.message);
        return false;
    }
}

