import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import firebase from '../utils/firebase'
import Timer from "../components/Timer";
import NewTimer from "./NewTimer";
import TimerLists from "./TimerListNestContainer";

function CoffeeTimer() {
  return (
    <>
      <Timer />
    </>
  );
}

export default CoffeeTimer;
