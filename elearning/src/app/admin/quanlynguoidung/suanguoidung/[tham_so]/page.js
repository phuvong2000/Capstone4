import FormUpdateUsers from '@/app/components/AdminForm/FormUpdateUsers';
import { getUserByName } from '@/app/server/action/users';
import Link from 'next/link';
import React from 'react'

const SuaNguoiDung = async (props) => {
    const { tham_so } = props.params;
    const userInf  = await getUserByName(tham_so);
    return (
        <div>
            <h1 className='mb-5 text-center'>Thông tin người dùng</h1>
            {/* <p>id: {tham_so}</p> */}
            <FormUpdateUsers userInf={userInf}></FormUpdateUsers>
            <Link href="/admin/quanlynguoidung" className='text-decoration-none'>
                <i className="fa fa-arrow-left"></i> Quay lại trang trước
            </Link>
        </div>
    )
}

export default SuaNguoiDung