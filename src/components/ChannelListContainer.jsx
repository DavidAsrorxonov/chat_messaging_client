import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";
import { Hospital, LogOut } from "lucide-react";
import { ChannelSearch } from "./exports/index";

const SideBar = () => {
  return (
    <div className="channel-list__sidebar">
      <div className="channel-list__sidebar__icon1">
        <div className="icon1__inner">
          <Hospital width={30} />
        </div>
      </div>
      <div className="channel-list__sidebar__icon2">
        <div className="icon1__inner">
          <LogOut width={30} />
        </div>
      </div>
    </div>
  );
};

const CompanyHeader = () => {
  return (
    <div className="channel-list__header">
      <p className="channel-list__header__text">Medical Pager</p>
    </div>
  );
};

const ChannelListContainer = () => {
  return (
    <>
      <SideBar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
      </div>
    </>
  );
};

export default ChannelListContainer;
