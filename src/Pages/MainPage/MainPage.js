import { Header } from "../../App/layouts/Header/Header";
import { Modal } from "../../components/Modal/Modal";
import { CardList } from "../../components/CardList/CardList";

const MainPage = () => {
    return (
        <>
            <Header />
            <Modal/>
            <section>
                <CardList />
            </section>
        </>
   )
}

export default MainPage;