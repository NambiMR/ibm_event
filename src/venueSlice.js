// venueSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const venueSlice = createSlice({
  name: "venue",
  initialState: [
    {
      img: "https://pixabay.com/images/download/chairs-2181916_640.jpg",
      name: "Conference Room (Capacity:15)",
      cost: 3500,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/event-venue-1597531_640.jpg",
      name: "Auditorium Hall (Capacity:200)",
      cost: 5500,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/images/download/convention-center-3908238_640.jpg",
      name: "Presentation Room (Capacity:50)",
      cost: 700,
      quantity: 0,
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/02/03/16/56/meeting-1177453_960_720.jpg",
      name: "Large Meeting Room (Capacity:10)",
      cost: 900,
      quantity: 0,
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/02/03/16/56/meeting-1177454_1280.jpg",
      name: "Small Meeting Room (Capacity:5)",
      cost: 1100,
      quantity: 0,
    },
    {
      img: "https://cdn.pixabay.com/photo/2019/01/13/16/45/castle-3930759_960_720.jpg",
      name: "Heritage Hall (Capacity:500 )",
      cost: 2000 ,
      quantity: 0,
    },
    {
      img: "https://cdn.pixabay.com/photo/2017/05/04/16/37/meeting-2284501_960_720.jpg",
      name: "Business Atrium (Capacity:200)",
      cost: 1200,
      quantity: 0,
    },
    {
      img: "https://cdn.pixabay.com/photo/2013/02/26/01/10/auditorium-86197_1280.jpg",
      name: "Discovery Hall (Capacity:300)",
      cost: 1500,
      quantity: 0,
    },
  
  ],
  reducers: {
   
    incrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        if (state[index].name === " Auditorium Hall (Capacity:200)" && state[index].quantity >= 3) {
          return;        }
        state[index].quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = venueSlice.actions;
export default venueSlice.reducer;