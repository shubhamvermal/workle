import { lazy, useEffect } from 'react';
import './App.css';
import { ColorOption } from './common/Accordion/ColorOption';
import { Flush } from './common/Accordion/Flush';
import { WithIcons } from './common/Accordion/WithIcons';
import { AdditionalContent } from './common/Alerts/AdditionalContent';
import { AlertsWithIcon } from './common/Alerts/AlertsWithIcon';
import { AlertsWithlist } from './common/Alerts/AlertsWithlist';
import { BorderAccent } from './common/Alerts/BorderAccent';
import { Dismissing } from './common/Alerts/Dismissing';
import { AvatarSizes } from './common/Avatar/AvatarSizes';
import { Bordered } from './common/Avatar/Bordered';
import { DotIndicator } from './common/Avatar/DotIndicator';
import { PlaceholderIcon } from './common/Avatar/PlaceholderIcon';
import { PlaceholderInitials } from './common/Avatar/PlaceholderInitials';
import { Stacked } from './common/Avatar/Stacked';
import { BadgesLinks } from './common/Badges/BadgesLinks';
import { BadgesWithIcon } from './common/Badges/BadgesWithIcon';
import { BadgeWithOnlyIcon } from './common/Badges/BadgeWithOnlyIcon';
import { ButtonWithBadge } from './common/Badges/ButtonWithBadge';
import { DefaultBadge } from './common/Badges/DefaultBadge';
import { DismissableBadges } from './common/Badges/DismissableBadges';
import { LargeBadges } from './common/Badges/LargeBadges';
import { NotificationBadge } from './common/Badges/NotificationBadge';
import { DefaultBreadCrumbs } from './common/Breadcrumbs/DefaultBreadCrumbs';
import { SolidBackgroundBreadCrumbs } from './common/Breadcrumbs/SolidBackgroundBreadCrumbs';
import { ButtonWithIcons } from './common/Buttons/ButtonWithIcons';
import { ColouredShadowButton } from './common/Buttons/ColouredShadowButton';
import { DefaultButtons } from './common/Buttons/DefaultButtons';
import { IconButtons } from './common/Buttons/IconButtons';
import { LoaderButton } from './common/Buttons/LoaderButton';
import { MonoChromeButton } from './common/Buttons/MonoChromeButton';
import { MonoOutlineButton } from './common/Buttons/MonoOutlineButton';
import { OutlinedButton } from './common/Buttons/OutlinedButton';
import { PaymentButton } from './common/Buttons/PaymentButton';
import { PillsButton } from './common/Buttons/PillsButton';
import { SocialButton } from './common/Buttons/SocialButton';
import { CardWithList } from './common/Cards/CardWithList';
import { DefaultCarousel } from './common/Carousel/DefaultCarousel';
import { AvatarDropdown } from './common/Dropdown/AvatarDropdown';
import { Dropdown } from './common/Dropdown/Dropdown';
import { NotificationDropdown } from './common/Dropdown/NotificationDropdown';
import { ListGroupButton } from './common/ListGroup/ListGroupButton';
import { ListGroupWithIcon } from './common/ListGroup/ListGroupWithIcon';
import { DefaultModal } from './common/Modals/DefaultModal';
import { PopUp } from './common/Modals/PopUp';
import { Pagination } from './common/Pagination/Pagination';
import { ProgressBar } from './common/ProgressBar/ProgressBar';
import { StarRating } from './common/Rating/StarRating';
import { Sidebar } from './common/Sidebar/Sidebar';
import { InteractiveTab } from './common/Tabs/InteractiveTab';
import { UnderLineTab } from './common/Tabs/UnderLineTab';
import { MessageToast } from './common/Toast/MessageToast';
import { NotificationToast } from './common/Toast/NotificationToast';
import { PushNotification } from './common/Toast/PushNotification';
import { SimpleToast } from './common/Toast/SimpleToast';
import { Video } from './common/Video/Video';
import { Heading1 } from './common/Typography/Headings/Heading1';
import { Heading2 } from './common/Typography/Headings/Heading2';
import { Heading3 } from './common/Typography/Headings/Heading3';
import { Heading4 } from './common/Typography/Headings/Heading4';
import { Heading5 } from './common/Typography/Headings/Heading5';
import { Heading6 } from './common/Typography/Headings/Heading6';
import { Paragraph } from './common/Typography/Paragraphs/Paragraph';
import { Blokquote } from './common/Typography/Blockquote/Blokquote';
import { Images } from './common/Images/Images';
import { UnordoredList } from './common/Lists/UnordoredList';
import { IconsList } from './common/Lists/IconsList';
import { NestingList } from './common/Lists/NestingList';
import { FontSize } from './common/Typography/Text/FontSize';
import { FontWeight } from './common/Typography/Text/FontWeight';
import { TextDecoration } from './common/Typography/Text/TextDecoration';
import { OpacityText } from './common/Typography/Text/OpacityText';
import { DefaultHr } from './common/Typography/HorizontalLine/DefaultHr';
import { TrimmedHr } from './common/Typography/HorizontalLine/TrimmedHr';
import { Skeleton } from './common/Skeleton/Skeleton';


function App() {

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    // Whenever the user explicitly chooses light mode
    localStorage.theme = 'light'

    // Whenever the user explicitly chooses dark mode
    // localStorage.theme = 'dark'

    // Whenever the user explicitly chooses to respect the OS preference
    // localStorage.removeItem('theme')
  }, [])


  return (
    <div className="App dark:bg-black">

      <button onClick={() => {
        console.log('xxxxxxxxxxx', localStorage.theme)

        if(document?.getElementById('addressbar-color') ){
          const d: any = document?.getElementById('addressbar-color')
          d.content = localStorage.theme === 'dark' ? '#673ab6' : '#000000'

        }

        localStorage.theme = localStorage.theme === 'dark' ? 'light' : 'dark'
        

        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }} className="z-[999] fixed bottom-4 left-4 bg-slate-700 p-4">click</button>
      {/* alerts */}
      <AlertsWithIcon />
      <AlertsWithlist />
      <Dismissing />
      <BorderAccent />
      <AdditionalContent />

      <br />
      <hr />
      {/* accordian */}
      <Flush />
      <ColorOption />
      <WithIcons />
      <br />
      <hr />
      <br />
      <Bordered />
      <PlaceholderIcon />
      <PlaceholderInitials />
      <DotIndicator />
      <Stacked />
      <AvatarSizes />
      <br />
      <hr />
      <br />
      {/* Badge */}
      <DefaultBadge />
      <br />
      <LargeBadges />
      <br />
      <BadgesLinks />
      <br />
      <BadgesWithIcon />
      <br />
      <NotificationBadge />
      <br />
      <ButtonWithBadge />
      <br />
      <BadgeWithOnlyIcon />
      <br />
      <DismissableBadges />

      <br />
      <hr />
      <br />

      <DefaultBreadCrumbs />
      <SolidBackgroundBreadCrumbs />
      {/* buttons */}
      <DefaultButtons />
      <PillsButton />
      <MonoChromeButton />
      <OutlinedButton />
      <ColouredShadowButton />
      <SocialButton />
      <PaymentButton />
      <MonoOutlineButton />
      <ButtonWithIcons />
      <IconButtons />
      <LoaderButton />
      <CardWithList />
      <DefaultCarousel />

      {/* dropdown */}
      <Dropdown />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <NotificationDropdown />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <AvatarDropdown />

      {/* forms */}


      {/* listgroup */}
      <ListGroupButton />
      <ListGroupWithIcon />

      {/* Modal */}
      <DefaultModal />
      <PopUp />

      {/* tabs */}
      <UnderLineTab />
      <InteractiveTab />
      {/* sidebar */}
      {/* <Sidebar/> */}
      {/* pagination */}
      <Pagination />

      {/* rating */}
      <StarRating />


      {/* video */}
      <Video />

      {/* ProgressBar */}
      <ProgressBar />

      {/* Toast */}
      <SimpleToast />
      <NotificationToast />
      <MessageToast />
      <PushNotification />


      {/* Typography */}

      <Heading1 />
      <Heading2 />
      <Heading3 />
      <Heading4 />
      <Heading5 />
      <Heading6 />
      <Paragraph />
      <Blokquote />

      {/* images */}
      <Images />

      <br />
      <br />
      <UnordoredList />
      <IconsList />
      <NestingList />

      {/* fonts */}
      <FontSize />
      <FontWeight />
      <TextDecoration />
      <OpacityText />
      <DefaultHr />
      <TrimmedHr />
      <br />

      {/* skeleton */}
      <Skeleton />
    </div>
  );
}

export default App;
