import { user } from "@/utils/db";
import { NextResponse } from "next/server";

export function GET(req,res){
    // console.log(res.params.Id);
    const data = user;
    const userData = data.filter(user => user.id == res.params.Id);
    return NextResponse.json(userData.length == 0 ? {result: 'Not Found',success: false} : userData, {status:200});
}

export async function PUT(req, content){
    let payload = await req.json();
    // console.log(payload);

    payload.Id = content.params.Id;

    if(!payload.Id || !payload.fullName || !payload.city || !payload.email || !payload.age) {
        return NextResponse.json({
            result: "Required all fields",
            success: false
        },{status:400});
    }

    return NextResponse.json({result: payload, success: true},{status: 200});
}

export function DELETE(req, content){
    let id = content.params.Id;
    console.log(id);
    if(id) {
        return NextResponse.json({result: 'User Deleted',success: true},{status:200});
    } else {
        return NextResponse.json({result: 'Something went Wrong...', success: false},{status: 400});
    }
}