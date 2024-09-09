import React, { useState } from 'react'
import EmojiPicker from 'emoji-picker-react';
import { Toast, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function () {
    let [chosenEmoji,setChosenEmoji]=useState('')
    function copyEmoji(emoji){
        const text=document.createElement('textarea');
        text.value=emoji;
        document.body.appendChild(text);
        text.select();
        document.execCommand('copy');
        document.body.removeChild(text);
    }
    function emojiPicker(emojiObject){
        const emojiContainer=emojiObject.emoji;
        setChosenEmoji(emojiContainer)
        copyEmoji(emojiContainer)
        toast.success('Copied to clipboard',{
            position: 'top-right', 
            autoClose: 2000, 
            hideProgressBar: true, 
            closeOnClick: true, 
            pauseOnHover: false, 
            draggable: false, 
            progress: undefined, 
        })
    }
  return (
    <>
    <div className="container d-flex justify-content-center align-items-center vh-100 ">
        <div className="row">
            <div className="col-md-12 ">
                <div className="card p-4">
                        <h5 className="card-title text-center mb-3 fs-2">Pick your Emoji</h5>
                        {chosenEmoji && (
                        <div className="selected-emoji"> 
                        <span>{chosenEmoji}</span> 
                        </div>
                        )}

                        <EmojiPicker onEmojiClick={emojiPicker} />
                        <ToastContainer />
                    </div>
            </div>
        </div>
    </div>
    </>
  )
}
