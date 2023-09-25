import React, { useEffect, useState } from "react";
import img from "../assets/smc-logo.png";

import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import Cookies from "js-cookie";

const Navbar = () => {

  const[login,setlogin]=useState(false);
  const navigate = useNavigate();
  // google sign in handler
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const res = await signInWithPopup(auth, provider);
      console.log("response", res);

      const accessToken = res.user.accessToken;
      const profile = {
        name: res.user.displayName,
        photo: res.user.photoURL,
      };
      // store credential for person who generate certificate
      Cookies.set("user-token", accessToken, { expires: 7 });
      Cookies.set("user", JSON.stringify(profile));

      // navigate to the home page after login
      navigate('/')
      setlogin(true)
    } catch (error) {
      console.error(error);
    }
  };

  let photolink
  
  if(Cookies.get('user')) {
    photolink=JSON.parse(Cookies.get('user')).photo;
  }

  useEffect(()=>{
    if(Cookies.get('user')){
      setlogin(true);
    }
  },[])

  // logout handeler
  const handellogout=()=>{
    console.log("clicked")
    Cookies.remove('user')
    Cookies.remove('user-token')
    setlogin(false)


  }

  console.log()
  return (
    <div className="bg-transparent bg-opacity-50  text-white p-3 flex justify-between fixed w-screen">
      <div className="flex justify-center items-center space-x-10  text-2xl">
        <div>
          <img src={img} className="invert" />
        </div>

        <ul className="hover:bg-gray-500 px-4 py-2 rounded-lg hover:cursor-pointer">
          Home
        </ul>

        <div class="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle border-0 text-2xl"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Departments
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="/">
                Street Light
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                Traffic cell
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                Hydraulics
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                Drainage system
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                Road Development
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                Bridge cell
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                Enviorment
              </a>
            </li>
          </ul>
        </div>
        <div class="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle border-0 text-2xl bg-transparent"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Zones
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="/">
                west zone
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                North zone
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                south zone
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                East zone
              </a>
            </li>
          </ul>
        </div>
        <ul className="hover:bg-gray-500 px-4 py-2 rounded-lg hover:cursor-pointer">
          Contact
        </ul>
      </div>

      <div className="flex space-x-3 justify-center items-center">
        {/* {!Cookies.get("user-token") ? (
          <button
            className="bg-gray-500  px-8  rounded-lg"
            onClick={signInWithGoogle}
          >
            Log in
          </button>
        ) : (
          <button className="bg-gray-500  px-8 rounded-lg" onClick={()=>handellogout()}>Log out</button>
        )} */}
        {
          <button className="bg-gray-500  px-8 rounded-lg py-2" onClick={login?(handellogout):(signInWithGoogle)}>{login?("logout"):("login")}</button>
        }
        <div className="h-10 w-10">
        <img src={photolink} alt="" className="h-10 w-10 rounded-[50%]"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
