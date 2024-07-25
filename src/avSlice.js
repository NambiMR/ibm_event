import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
        {
        img: "https://pixabay.com/images/download/business-20031_640.jpg",
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        img: "https://pixabay.com/images/download/speakers-4109274_640.jpg",
        name: "Speaker",
        cost: 35,
        quantity: 0,
    },
    {
        img: "https://pixabay.com/images/download/public-speaking-3926344_640.jpg",
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        img: "https://pixabay.com/images/download/whiteboard-2903269_640.png",
        name: "Whiteboards",
        cost: 80,
        quantity: 0,
    },

    {
        img: "https://pixabay.com/images/download/signpost-235079_640.jpg",
        name: "Signage",
        cost: 80,
        quantity: 0,
    },
    {
        img: "https://cdn.pixabay.com/photo/2017/04/04/17/22/netgear-2202273_1280.jpg",
        name: "Wi-fi",
        cost: 80,
        quantity: 0,
    },
    {
        img: "https://cdn.pixabay.com/photo/2018/02/20/14/51/menu-3167859_960_720.jpg",
        name: "Custom Menu",
        cost: 80,
        quantity: 0,
    },
    {
        img: "https://cdn.pixabay.com/photo/2016/10/03/18/52/stage-1712494_960_720.jpg",
        name: "Stage Setup",
        cost: 80,
        quantity: 0,
    },

  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item) {
            item.quantity++;
        }
    },
    decrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item && item.quantity > 0) {
            item.quantity--;
        }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
