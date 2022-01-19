import Swal from "sweetalert2";
import successCoffeeImg from "../images/swal-success-pic.jpg";

export const swalLoginModal = (msg) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Please login to " + msg,
    footer:
      '<a href="https://brewsdrip.web.app/login">Click here to login.</a>',
  });
};

export const handleLoginModal = (e,uid,msg)=>{
  if(!uid){
  e.preventDefault()
  swalLoginModal(msg)}
  else return
}

export const timerFinishModal = ()=>{
  Swal.fire({
    title: "Sweet!",
    text: "Enjoy your coffee!",
    imageUrl: successCoffeeImg,
    imageWidth: 400,
    imageHeight: 266.25,
    imageAlt: "Cheers Coffee",
  });
}