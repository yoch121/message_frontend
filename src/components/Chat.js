import axios from "axios"
import {useEffect, useState} from "react";
import {baseUrl} from "../constants";

export const Chat = () => {
    const [chatrooms, setChatrooms] = useState([]);

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: baseUrl + 'chat/chatroom/',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                setChatrooms(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    })

    return (
        <div>
            <h1>Chat</h1>
            <ul>
                {chatrooms.map((chatroom) => {
                    return <li key={chatroom.id}>{chatroom.name}</li>
                })}
            </ul>
        </div>
    );
}