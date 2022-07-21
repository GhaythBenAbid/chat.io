import firebase from "../firebase";
import { useEffect, useState } from "react";

function Rooms() {

    const [rooms, setRooms] = useState([]);

    function getChatRooms() {
        firebase.firestore().collection("GroupChats").get().then(snapshot => {
            let rooms = [];
            snapshot.forEach(doc => {
                rooms.push(doc.data());
            });
            setRooms(rooms);
        });
    }


    useEffect(() => {
        getChatRooms();
    }, []);




    return (

        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">explore our <br /> awesome <span className="underline decoration-blue-500">Chat Rooms</span></h1>
                <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
                    You can join our chat rooms and chat with your friends.
                </p>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">



                    {rooms.map(room => (
                        <div className="hover:border-b-8 hover:border-l-8 transition-all duration-300     p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                            <span className="inline-block text-blue-500 dark:text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                </svg>
                            </span>

                            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">{room.name}</h1>

                            <p className="text-gray-500 dark:text-gray-300">
                                Join Now
                            </p>

                            <a href="#" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </a>
                        </div>
                    ))}




                </div>
            </div>
        </section>



    )
}

export default Rooms;