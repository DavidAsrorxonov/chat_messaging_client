import "./App.css";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import COokies from "universal-cookie";
import {
  ChannelContainer,
  ChannelListContainer,
} from "./components/exports/index";

const client = StreamChat.getInstance(import.meta.env.VITE_STREAM_API_KEY);

function App() {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />

        <ChannelContainer />
      </Chat>
    </div>
  );
}

export default App;
