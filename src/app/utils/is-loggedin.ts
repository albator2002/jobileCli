/**
 * Created by Alain on 5/10/2016.
 */
// is-loggedin.ts
export function isLoggedin() {
    return !!localStorage.getItem('token');
}