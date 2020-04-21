import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true
    , baseURL: 'https://social-network.samuraijs.com/api/1.0/'
    , headers: { "API-KEY": "78de4df0-e8f0-40fa-b6ad-a9d4fd807306" }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
            {
                withCredentials: true
            })
            .then(response => response.data);
    }
    , follow(userId) {
        return instance.post(`follow/${userId}`);
    }
    , unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    }
    , getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object.');
        return profileAPI.getProfile(userId);
    }
}   

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/`+ userId);
    }
    , getStatus(userId) {
        return instance.get(`profile/status/`+ userId);
    }
    , updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    }
}   

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    } 
}

