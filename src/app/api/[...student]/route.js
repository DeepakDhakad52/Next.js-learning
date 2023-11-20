import { NextResponse } from "next/server";

 export async function GET(req, content) {
    // console.log(content);
    const studentDetails = content.params.student;
    console.log(studentDetails);
    return NextResponse.json({
        result: studentDetails,
        success: true
    },{status: 200});
 }