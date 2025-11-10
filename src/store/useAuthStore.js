import { signInWithEmailAndPassword } from 'firebase/auth';
import { create } from 'zustand';
import { auth } from '../firebase/firebase';

export const useAuthStore = create((set, get) => ({
    user: null,

    onLogin: async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            set({ user: userCredential.user });
            alert('로그인 성공');
        } catch (err) {
            alert(err.message);
        }
    },
}));
