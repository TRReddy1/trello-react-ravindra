import axios from "axios";

// const axiosInstance = axios.create({ baseURL: "https://api.trello.com/1" });

export const getBoards = async () => {
  const boards = await axios
    .get(
      "https://api.trello.com/1/members/me/boards?key=3c85a43b49f83b6b000746806f2a255e&token=ATTAa1284e9b81df870f8a39c3950b6544e0dace63bd2a5856a7a862b5eb92619f905855800A"
    )
    .then((res) => res.data);
  return boards;
};

export const createBoard = async (name) => {
  const result = await axios
    .post(
      `https://api.trello.com/1/boards/?name=${name}&key=3c85a43b49f83b6b000746806f2a255e&token=ATTAa1284e9b81df870f8a39c3950b6544e0dace63bd2a5856a7a862b5eb92619f905855800A`,
      { method: "POST" }
    )
    .then((res) => res.data);
  return result;
};

// createBoard("helpme");

export const boardLists = async (id) => {
  const da = await axios.get(
    `https://api.trello.com/1/boards/${id}/lists?key=3c85a43b49f83b6b000746806f2a255e&token=ATTAa1284e9b81df870f8a39c3950b6544e0dace63bd2a5856a7a862b5eb92619f905855800A`
  );
  //   console.log(da);
  return da.data;
};

export const createList = async (id, name) => {
  const result = await axios
    .post(
      `https://api.trello.com/1/boards/${id}/lists?name=${name}&key=3c85a43b49f83b6b000746806f2a255e&token=ATTAa1284e9b81df870f8a39c3950b6544e0dace63bd2a5856a7a862b5eb92619f905855800A`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
      }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return result;
};

export const archiveList = async (id) => {
  const result = await axios
    .put(
      `https://api.trello.com/1/lists/${id}/closed?value=true&key=3c85a43b49f83b6b000746806f2a255e&token=ATTAa1284e9b81df870f8a39c3950b6544e0dace63bd2a5856a7a862b5eb92619f905855800A`,
      {
        method: "PUT",
      }
    )
    .then((res) => res.data);
  return result;
};

export const getCards = async (id) => {
  const result = axios
    .get(
      `https://api.trello.com/1/lists/${id}/cards?key=3c85a43b49f83b6b000746806f2a255e&token=ATTAa1284e9b81df870f8a39c3950b6544e0dace63bd2a5856a7a862b5eb92619f905855800A`
    )
    .then((res) => res.data);
  // .catch((err) => console.log(err));
  // console.log(result);
  return result;
};

// getCards("65a558e04d2f60a121c0d6e0");
export const createCard = async (id, name) => {
  const result = await axios
    .post(
      `https://api.trello.com/1/cards?idList=${id}&name=${name}&key=3c85a43b49f83b6b000746806f2a255e&token=ATTAa1284e9b81df870f8a39c3950b6544e0dace63bd2a5856a7a862b5eb92619f905855800A`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
      }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return result;
};

export const deleteCard = async (id) => {
  const result = axios
    .delete(
      `https://api.trello.com/1/cards/${id}?key=3c85a43b49f83b6b000746806f2a255e&token=ATTAa1284e9b81df870f8a39c3950b6544e0dace63bd2a5856a7a862b5eb92619f905855800A`,
      { method: "DELETE" }
    )
    .then((res) => console.log(res));
  return result;
};

// deleteCard("65a62a7e39ee4da02401cb07");
