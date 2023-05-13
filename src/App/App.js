import { Suspense, lazy } from 'react';
import { Spinner } from "../components/Spinner/Spinner"

const MainPage = lazy(() => import('../Pages/MainPage/MainPage'));

export const App = () => {
    return (
        <Suspense fallback={<Spinner/>}>
            <MainPage/>
        </Suspense>
    );
}