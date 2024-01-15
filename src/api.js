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
  await axios
    .post(
      `https://api.trello.com/1/boards/?name=${name}&key=3c85a43b49f83b6b000746806f2a255e&token=ATTAa1284e9b81df870f8a39c3950b6544e0dace63bd2a5856a7a862b5eb92619f905855800A`,
      { method: "POST" }
    )
    .then((res) => console.log(res.status, res.statusText))
    .catch((err) => console.log(err));
};

export const boardLists = async (id) => {
  const da = await axios.get(
    `https://api.trello.com/1/boards/${id}/lists?key=3c85a43b49f83b6b000746806f2a255e&token=ATTAa1284e9b81df870f8a39c3950b6544e0dace63bd2a5856a7a862b5eb92619f905855800A`
  );
  //   console.log(da);
  return da.data;
};

export const createList = async (id, name) => {
  await axios
    .post(
      `https://api.trello.com/1/boards/${id}/lists?name=${name}&key=3c85a43b49f83b6b000746806f2a255e&token=ATTAa1284e9b81df870f8a39c3950b6544e0dace63bd2a5856a7a862b5eb92619f905855800A`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
      }
    )
    .then((res) => console.log(res.status))
    .catch((err) => console.log(err));
};
// console.log(await boardLists("65a2351f52c810bfb0e6ccc8"));
// const dataa = async () => {
//   const res = await data();
//   console.log(res);
// };

// dataa();
