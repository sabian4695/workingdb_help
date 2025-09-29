import React from 'react';
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Backdrop from "@mui/material/Backdrop";
import {useRecoilState} from "recoil";
import {currentPhoto, filterVal, lightboxOpen, photos} from "../recoil/atoms";
import Image from 'next/image'

export default function Lightbox() {
    const [openModal, setOpenModal] = useRecoilState(lightboxOpen)
    const [curPhoto, setCurPhoto] = useRecoilState(currentPhoto)
    const [photosList, setPhotosList] = useRecoilState(photos)
    const [filtVal, setFiltValue] = useRecoilState(filterVal)
    //@ts-ignore
    const handleKeyDown = event => {
        if(event.key === 'ArrowLeft') {
            if (curPhoto === 0) {
                return
            }
            setCurPhoto(curPhoto-1)
        } else if(event.key === 'ArrowRight') {
            if (curPhoto === photosList.length-1) {
                return
            }
            setCurPhoto(curPhoto+1)
        }
    };
    return (
        <>
            <Backdrop
                open={openModal}
                sx={{zIndex:1200, backgroundColor:'rgba(12,12,12,0.91)'}}
                onKeyDown={handleKeyDown}
                tabIndex={0}
            >
                <IconButton
                    sx={{position:'fixed',
                        right:5,
                        top:5,
                        color: '#FFFFFF',
                        backgroundColor:'rgba(162,122,122,0.73)',
                        "&:hover": { backgroundColor: "error.main" }}}
                    onClick={() => setOpenModal(false)}
                >
                    <CloseIcon/>
                </IconButton>
                <IconButton
                    disabled={curPhoto === 0}
                    sx={{position:'fixed',
                        left:5,
                        top:'50%',
                        color: '#FFFFFF',
                        backgroundColor:'rgba(93,93,93,0.73)',
                        "&:hover": { backgroundColor: "primary.main" }}}
                    onClick={() => setCurPhoto(curPhoto-1)}
                >
                    <ChevronLeftIcon/>
                </IconButton>
                <IconButton
                    disabled={curPhoto === photosList.length-1}
                    sx={{position:'fixed',
                        right:5,
                        top:'50%',
                        color: '#FFFFFF',
                        backgroundColor:'rgba(93,93,93,0.73)',
                        "&:hover": { backgroundColor: "primary.main" }}}
                    onClick={() => setCurPhoto(curPhoto+1)}
                >
                    <ChevronRightIcon/>
                </IconButton>
                <Image
                    style={{maxWidth:'92%', maxHeight:'92%', borderRadius:10, objectFit:'scale-down'}}
                    src={photosList[curPhoto].img}
                    alt={photosList[curPhoto].title}
                    loading="lazy"
                />
            </Backdrop>
        </>
    )
}