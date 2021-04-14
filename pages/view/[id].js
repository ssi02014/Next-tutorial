import { useRouter } from 'next/router';

export default function About() {
    const router = useRouter();

    return <div>ID: {router.query.id}</div>
}