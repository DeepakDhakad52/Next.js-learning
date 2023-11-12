import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({
        fullName: 'Deepak Dhakad',
        age: 22,
        city: 'Indore'
    },{status:200});
}