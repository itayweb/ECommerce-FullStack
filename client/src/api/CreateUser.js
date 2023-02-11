import { API_URL } from "./Config";

export async function createUser(username, password) {
    const response = await fetch(`${API_URL}/users/`, {
        method: "POST",
        body: JSON.stringify({
            username,
            password
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response.json();
}