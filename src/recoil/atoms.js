import {atom} from "recoil";
import {itemData} from "../components/allPhotos";


export const lightboxOpen = atom({
    key: "lightboxOpen",
    default: false,
});

export const filterVal = atom({
    key: "filterVal",
    default: '',
});

export const photos = atom({
    key: "photos",
    default: itemData
})

export const currentPhoto = atom({
    key: "currentPhoto",
    default: 0,
});