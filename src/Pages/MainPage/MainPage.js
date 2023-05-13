import { Header } from "../../App/layouts/Header/Header";
import { Modal } from "../../components/Modal/Modal";
import { CardList } from "../../components/CardList/CardList";

const MainPage = () => {
    return (
        <div className="body__wrapper">
            <Header />
            <Modal/>
            <main>
                <CardList />
            </main>
        </div>
   )
}

export default MainPage;