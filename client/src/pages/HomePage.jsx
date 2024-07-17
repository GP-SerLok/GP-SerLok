import { useEffect } from "react";
import MapComponent from "../components/MapComponent";
import socket from "../helpers/socket";
import { useState } from "react";

export default function HomePage() {
  socket.on("online:users", (args) => {
    console.log(args);
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
      socket.auth = {
        name: localStorage.getItem("name"),
        position: [position.coords.latitude, position.coords.longitude],
      };

      socket.disconnect().connect();
    });
  }, []);
  return (
    <>
      <MapComponent />
    </>
  );
}
