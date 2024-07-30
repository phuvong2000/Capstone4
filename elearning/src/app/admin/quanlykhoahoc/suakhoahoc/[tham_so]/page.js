import React from 'react'

const SuaKhoaHoc = (props) => {
    const { tham_so } = props.params
    return (
        <div>
            <p>Id: {tham_so}</p>
        </div>
    )
}

export default SuaKhoaHoc