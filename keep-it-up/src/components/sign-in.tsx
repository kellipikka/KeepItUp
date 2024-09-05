import { signIn } from '../../auth.ts';

export function SignIn() {
    return (
        <form
            onSubmit={async event => {
                event.preventDefault();
                await signIn('google');
            }}
        >
            <button type="submit">Sign-in with Google</button>
        </form>
    );
}
