import { httpApiElearning } from '@/app/util/setting';
import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request) {
    try {
        const res = await httpApiElearning.get('/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc');
        return NextResponse.json(res.data, { status: 200 });
    } catch {
        return NextResponse.json({ content: 'Lỗi server', status: 500 });
    }
}