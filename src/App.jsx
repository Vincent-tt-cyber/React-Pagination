import { useEffect, useState } from "react";
import axios from "axios";
import PostsList from "./components/PostsList/PostsList";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1); // Текущая страница
  const [itemsPerPage, setItemsPerPage] = useState(10); // Кол-во элементов на странице

  const getPosts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  // Вычесление индексов
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Отображение текущих 10 элементов
  const currentItems = data.slice(firstItemIndex, lastItemIndex);

  //Обработкчики кликов

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const handlePreviousePage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  const handleClickPageNumber = (number) => {
    setCurrentPage(number);
  };

  return (
    <div className="container">
      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousePage={handlePreviousePage}
        handleClickPageNumber={handleClickPageNumber}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      {isLoading ? <div>LOADING...</div> : <PostsList posts={currentItems} />}
    </div>
  );
}

export default App;
