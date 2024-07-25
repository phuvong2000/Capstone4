import React from 'react'
import { getUserInfo } from '@/app/server/action/users';
const UpdateUser = async () => {
    const userInfo = await getUserInfo();
    console.log(userInfo);
    return (
        <div>UpdateUser</div>
    )
}

export default UpdateUser