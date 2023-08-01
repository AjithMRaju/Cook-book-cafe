import { db } from "./Firbase";
import { openModal, setCollectionDish ,setIndicatorColor} from "../Redux/UserSlice";
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import "firebase/firestore";
import { toast } from "react-toastify";






// SAVING FUCNTION..

export const addToSaved = async (
  idMeal,
  strMeal,
  strMealThumb,
  userAuth,
  dispatch
) => {
  if (userAuth?.uid || userAuth?.email) {
    const userUID=userAuth?.uid
    // const favoriteCollectionRef=collection(db,uid)
    await addDoc(collection(db,userUID), {
      idMeal: idMeal,
      strMeal: strMeal,
      strMealThumb: strMealThumb,
    });
    getDish(dispatch,userUID);
    dispatch(setIndicatorColor("red"));
    toast.success(`${strMeal} succesfully added to collection`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else {
    dispatch(openModal());
  }
};

// REMOVIENG ITEMS FUNCTION..
export const removeSavedDish = async (docId, dish, dispatch,userAuth) => {
  const userUID=userAuth?.uid;
  const dishRef=collection(db,userUID);
  const dishDocRef=doc(dishRef,docId);
  try {
    await deleteDoc(dishDocRef);
    toast.success(`${dish} removed succesfully`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    getDish(dispatch,userUID);
  } catch (error) {
    toast("Error deleting document:", error, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
};

// GETTING SAVED DISHES FROM FIRBASE
export const getDish = async (dispatch,userUID) => {
  const dishRef=collection(db,userUID);
  const data = await getDocs(dishRef);
  dispatch(
    setCollectionDish(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  );
};

// DATA CONTAINING SPECIALAREA COMPONRNT
export const categoryItems = [
  {
    urls: "c=Starter",
    imageThumb:
      "https://i.pinimg.com/564x/11/68/1e/11681e18563af170e0cee219ad511a94.jpg",
    caption: "Starter",
    contents:
      "Figur out what is your food have you ever looked at a commercial food product and wonderd how to make it? not a problum.Use the proffessional technique to create a recipe from any nututition label",
  },

  {
    urls: "c=Vegetarian",
    imageThumb:
      "https://i.pinimg.com/564x/ef/6b/2c/ef6b2c45c4aa36003fea9eccd603559b.jpg",
    caption: "Fresh Vegetarian",
    contents:
      "Figur out what is your food have you ever looked at a commercial food product and wonderd how to make it? not a problum.Use the proffessional technique to create a recipe from any nututition label",
  },
  {
    urls: "c=Chicken",
    imageThumb:
      "https://i.pinimg.com/564x/db/17/ae/db17aeabcaf486c798cc3c4abb253468.jpg",
    caption: "Special Chicken",
    contents:
      "Figur out what is your food have you ever looked at a commercial food product and wonderd how to make it? not a problum.Use the proffessional technique to create a recipe from any nututition label",
  },
  {
    urls: "c=Dessert",
    imageThumb:
      "https://i.pinimg.com/564x/3a/b1/80/3ab180f8a4564523b797a4b0f24758b7.jpg",
    caption: "Sweet Dessert",
    contents:
      "Figur out what is your food have you ever looked at a commercial food product and wonderd how to make it? not a problum.Use the proffessional technique to create a recipe from any nututition label",
  },
  {
    urls: "c=Pasta",
    imageThumb:
      "https://i.pinimg.com/564x/09/66/59/0966598b04caa32619229551f14fd550.jpg",
    caption: "Pasta",
    contents:
      "Figur out what is your food have you ever looked at a commercial food product and wonderd how to make it? not a problum.Use the proffessional technique to create a recipe from any nututition label",
  },

  {
    urls: "c=Lamb",
    imageThumb:
      "https://i.pinimg.com/564x/57/01/4e/57014e19232a5e5ec3ea80f61ef7c188.jpg",
    caption: "Lamb",
    contents:
      "Figur out what is your food have you ever looked at a commercial food product and wonderd how to make it? not a problum.Use the proffessional technique to create a recipe from any nututition label",
  },
  {
    urls: "c=Lamb",
    imageThumb:
      "https://i.pinimg.com/564x/44/db/87/44db879361a769a6e6b27d917bf5c0c1.jpg",
    caption: "Lamb",
    contents:
      "Figur out what is your food have you ever looked at a commercial food product and wonderd how to make it? not a problum.Use the proffessional technique to create a recipe from any nututition label",
  },
];

// --------()------------
// DISHES SEARCHING FUNCTION..
// export const getResult = async (query, dispatch) => {
//   try {
//     const response = await axiosinstance.get(`search.php?f=${query}`);
//     dispatch(setResultDish(response.data.meals));
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };


// [[[[[[[[[ ------ASSTS----- ]]]]]]]]]
export const content =
  "Figur out what is your food have you ever looked at a commercial food product and wonderd how to make it? not a problum.";

// [[[--FAQ--]]]
export const FAQ = [
  {
    question: "How do I add a Recipe/Meal?",
    answer:
      "All Patreon supporters get a link to add New meals, Just make sure you have a nice large JPG image to upload after you add them.",
  },
  {
    question: "How  to apply for an API key?",
    answer:
      "If you are a developer, then you can use the test api key of '1' to get started.Once you have written your app you can sing up on Patreon and you will be sent a private key via email. API keys usually take a couple of hours.",
  },
  {
    question: "How do I upload an image?",
    answer:
      "Just click the red upload image button and upload a picture that is square dimensions. We recomend 700x700 size.",
  },
  {
    question: "What is the limits on the API?",
    answer:
      "Just click the red upload image button and upload a picture that is square dimensions. We recomend 700x700 size.",
  },
  // {
  //   question: "I'm have a commercial app, can I use the database?",
  //   answer:
  //     "Yes! But we expect you to sign up on a commecial tier for Patreon support. This keeps our servers going and our service reliable. ",
  // },
];


// >>>>> NAVBAR ARRAY <<<<<<<<
export const navDetails = [
  {
    id: "Home",
    title: "Home",
    path: "/",
  },
  {
    id: "search",
    title: "Search",
    path: "/searchMeals",
  },
  {
    id: "saved",
    title: "Collectons",
    path: "/collctions",
  },
];
