import React, { useState } from "react";
import CustomModal from "../components/modal/CustomModal";
import CustomPagination from "../components/Pagination/CustomPagination";
import Form from "../components/header/Form";
import SearchNav from "../components/searchComponents/SearchNav";
import SearchComponent from "../components/searchComponents/SearchComponent";
import Attribution from "../components/attribution/Attribution";

function Search() {
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [id, setId] = useState([]);
  const [apiValue, setApiValue] = useState("movie");
  const [search, setSearch] = useState("");

  //   API Value

  const handleApiValue = (apiValue) => {
    setApiValue(apiValue);
  };

  const modalDisplay = (value) => {
    setModal(value);
  };

  const [title, poster, releaseDate, rating, overview] = id;

  return (
    <>
      <Form search={search} setSearch={setSearch} />

      <SearchNav apiValue={apiValue} handleApiValue={handleApiValue} />

      {modal && (
        <CustomModal
          id={id}
          title={title}
          poster={poster}
          releaseDate={releaseDate}
          rating={rating}
          overview={overview}
          modalDisplay={modalDisplay}
        />
      )}
      <SearchComponent
        modalDisplay={modalDisplay}
        setId={setId}
        page={page}
        search={search}
        apiValue={apiValue}
      />
      <CustomPagination setPage={setPage} page={page} />
      <Attribution />
    </>
  );
}

export default Search;
