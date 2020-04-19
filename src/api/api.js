import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true
    , baseURL: 'https://social-network.samuraijs.com/api/1.0'
    , headers: { "API-KEY": "78de4df0-e8f0-40fa-b6ad-a9d4fd807306" }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`,
            {
                withCredentials: true
            })
            .then(response => response.data);
    }
    , follow(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    }
    , unfollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    }
}

