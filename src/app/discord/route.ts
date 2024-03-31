import { permanentRedirect } from 'next/navigation'

export async function GET() {
    return (
        permanentRedirect('https://discord.com/invite/DCznYuU4Ms')
    )
}