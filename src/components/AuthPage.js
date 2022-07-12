import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import firebase from "../firebase";
import { ReactComponent as Pattern } from "../assets/patternpad.svg";

function AuthPage() {
    const { logout } = useAuth0();

    const [groupchat, setGroupchat] = useState("");
    const [success, setSuccess] = useState(false);

    function createRoom() {
        firebase.firestore().collection(groupchat).add({ "hello": "world" }).then(() => {
            setSuccess(true);
        })
    }


    return (

        <div className="grid grid-cols-2">
            <div>
                <Pattern className="h-screen w-full" />
            </div>
            <div>
                <div class="container items-center  px-8 mx-auto mt-32 xl:px-5">
                    <div class="flex flex-wrap items-center sm:-mx-3">
                        <div class="w-full  md:px-3">
                            <div class="w-full pb-6 space-y-6  md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                                <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                                    <span class="block xl:inline">Create New Room</span>
                                    <br />
                                    <span class="block text-indigo-600 xl:inline">To connect you with your friends</span>
                                </h1>
                                <input onChange={(e) => { setGroupchat(e.target.value) }} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                
                                {success &&

                                    <div class="flex w-full max-w-full mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                                    <div class="flex items-center justify-center w-12 bg-emerald-500">
                                        <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                                        </svg>
                                    </div>

                                    <div class="px-4 py-2 -mx-3 ">
                                        <div class="mx-3">
                                            <span class="font-semibold text-emerald-500 dark:text-emerald-400">Success</span>
                                            <p class="text-sm text-gray-600 dark:text-gray-200">Your GroupChat has been created!</p>
                                        </div>
                                    </div>
                                </div>
                                }
                                
                                <div class="relative flex flex-col sm:flex-row sm:space-x-4">
                                    <a onClick={() => { createRoom() }} class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto">
                                        Try It Free
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </a>
                                </div>

                                

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthPage;