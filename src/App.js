import { ReactComponent as DashboardIcon } from "./assets/Layout.svg";
import { ReactComponent as EditIcon } from "./assets/Edit.svg";
import { ReactComponent as StackIcon } from "./assets/stack-white.svg";
import { ReactComponent as CopyIcon } from "./assets/copy-white.svg";
import { ReactComponent as UsersIcon } from "./assets/Users.svg";
import { ReactComponent as ContactsIcon } from "./assets/Contacts.svg";

import { ReactComponent as ColoredStackIcon } from "./assets/Stack.svg";
import { ReactComponent as ColoredCopyIcon } from "./assets/Copy.svg";
import { ReactComponent as ArchiveIcon } from "./assets/Archive.svg";
import { ReactComponent as PenIcon } from "./assets/pen-tool.svg";

import { ReactComponent as Ecclipse1 } from "./assets/ecclipse-1.svg";
import { ReactComponent as Ecclipse2 } from "./assets/ecclipse-2.svg";
import { ReactComponent as Ecclipse3 } from "./assets/ecclipse-3.svg";
import { ReactComponent as Ecclipse4 } from "./assets/ecclipse-4.svg";
import { ReactComponent as BookIcon } from "./assets/Book-Open.svg";
import { ReactComponent as PlayIcon } from "./assets/Play.svg";
import { ReactComponent as Sun } from "./assets/Sun (1).svg";





import NavbarComp from "./components/Navbar elements/Navbar-comp";
import SearchBoxComp from "./components/searchbox/searchbox-comp";
import UserComp from "./components/user-details/user-comp";
import Category from "./components/categories/category-comp";
import Summary from "./components/summary/summary";
import RecentDesign from "./components/recent designs/design-comp";
import RecentProjects from "./components/recent projects/recent-projects";
import RecentProposal from "./components/recent proposals/RecentProposal";
import UserDropdown from "./components/user-dropdown/user-dropdown";

import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import { NotificationContext } from "./context/NotificationContext";
import Notification from "./components/notification-dropdown/notification";
import Toggle from "./components/toggle/toggle";


function App() {

    const {isOpen} = useContext(UserContext);
    const { isNotiOpen } = useContext(NotificationContext);

  return (
    <div className="App">
      <nav className="navbar-container">
        <p className="nav-title">
          <span>AV</span> DESIGNER
        </p>
        <NavbarComp ImageSource={DashboardIcon} navbarText="Dashboard" />
        <NavbarComp ImageSource={EditIcon} navbarText="Create Project" />
        <NavbarComp ImageSource={StackIcon} navbarText="All Projects" />
        <NavbarComp ImageSource={CopyIcon} navbarText="Proposals" />
        <NavbarComp ImageSource={UsersIcon} navbarText="Clients" />
        <NavbarComp ImageSource={ContactsIcon} navbarText="All Contacts" />

        <div className="nav-footer">
          <p>
            <span>
              <BookIcon />
            </span>
            Learn AV Designer
          </p>
          <p>
            <span>
              <PlayIcon />
            </span>
            Tutorials
          </p>
          <p className="help">Need Help?</p>
          <p className="support">Get Support/Feedback</p>

          <div className="toggle-mode">
            <Sun />
            <Toggle />
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="top-container">
          <SearchBoxComp />
          <UserComp />
        </div>

        {isNotiOpen ? <Notification /> : null}
        
       {isOpen ? <UserDropdown /> : null}

        <section className="categories-container">
          <Category
            Image={ColoredStackIcon}
            title="My Projects"
            Ecclipse={Ecclipse1}
          />
          <Category
            Image={ColoredCopyIcon}
            title="My Proposals"
            Ecclipse={Ecclipse2}
          />
          <Category
            Image={ArchiveIcon}
            title="My Designs"
            Ecclipse={Ecclipse3}
          />
          <Category Image={PenIcon} title="My Drawings" Ecclipse={Ecclipse4} />
        </section>
        <section className="section-2">
          <Summary />
          <RecentDesign />
        </section>
        <section className="section-3">
          <RecentProjects />
          <RecentProposal />
        </section>
      </div>
    </div>
  );
}

export default App;
