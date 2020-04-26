import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = ({
    currentPage
    , totalUsersCount
    , pageSize
    , onPageChanged
    , users
    , followingInProgress
    , follow
    , unfollow
    , ...props }) => {

    return (
        <div>
            <Paginator
                currentPage={currentPage}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                onPageChanged={onPageChanged}
            />
            <div>
                {
                    users.map(u => <User
                        user={u}
                        followingInProgress={followingInProgress}
                        follow={follow}
                        unfollow={unfollow}
                        key={u.id}
                    />
                    )
                }
            </div>
        </div>
    )
}

export default Users;