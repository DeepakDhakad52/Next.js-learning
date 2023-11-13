import { user } from "@/utils/db";
import { NextResponse } from "next/server";

export function GET(){
    const data = user
    return NextResponse.json(data, {status:200});
}

export async function POST(req){
    // console.log(req);
    let payload = await req.json();
    // console.log(payload.name);
    if(!payload.fullName || !payload.age || !payload.city || !payload.email){
        return NextResponse.json({
            result: "Required All fields",
            success: false
        },{status:400})
    }
    return NextResponse.json({
        result: "User Created",
        success: true
    }, {status:201})
}