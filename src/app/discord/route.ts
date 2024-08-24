import { DISCORD_INVITE_LINK } from '@/constants';
import { permanentRedirect } from 'next/navigation';

export async function GET() {
	return permanentRedirect(DISCORD_INVITE_LINK);
}
