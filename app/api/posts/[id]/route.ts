import { NextResponse } from 'next/server'
import { headers, cookies } from 'next/headers'
<<<<<<< HEAD
// import { redirect } from 'next/navigation'
=======
import { redirect } from 'next/navigation'
>>>>>>> d7fa3ecb2635f94823de2b4d3c54f290a2e7d0ec

// Працювати з header cookie
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const id = params.id

  const headerList = headers()
  const type = headerList.get('Content-Type')

  const cookiesList = cookies()
  const coo2 = cookiesList.get('Cookie_2')?.value

  // logic delete post
  // redirect('/blog')

  return NextResponse.json({ id, type, coo2 });
}