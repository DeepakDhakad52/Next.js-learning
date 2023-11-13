import { user } from "@/utils/db";
import { NextResponse } from "next/server";

export function GET(req,res){
    console.log(res.params.Id);
    const data = user;
    const userData = data.filter(user => user.id == res.params.Id);
    return NextResponse.json(userData.length == 0 ? {result: 'Not Found',success: false} : userData, {status:200});
}