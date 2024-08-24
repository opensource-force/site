import { DISCORD_INVITE_LINK } from '@/constants';
import { redirect } from 'next/navigation';

export async function GET() {
	return redirect(DISCORD_INVITE_LINK);
}
