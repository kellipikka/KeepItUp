import { signIn } from '../../auth.ts';

export function SignIn() {
    return (
        <form
            onSubmit={async event => {
                event.preventDefault();
                ('use server');
                await signIn('google');
            }}
        >
            <button type="submit">Signin with Google</button>
        </form>
    );
}
