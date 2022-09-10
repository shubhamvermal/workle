import { lazy, useEffect } from 'react';

import { ColorOption } from '../../common/Accordion/ColorOption';
import { Flush } from '../../common/Accordion/Flush';
import { WithIcons } from '../../common/Accordion/WithIcons';
import { AdditionalContent } from '../../common/Alerts/AdditionalContent';
import { AlertsWithIcon } from '../../common/Alerts/AlertsWithIcon';
import { AlertsWithlist } from '../../common/Alerts/AlertsWithlist';
import { BorderAccent } from '../../common/Alerts/BorderAccent';
import { Dismissing } from '../../common/Alerts/Dismissing';
import { AvatarSizes } from '../../common/Avatar/AvatarSizes';
import { Bordered } from '../../common/Avatar/Bordered';
import { DotIndicator } from '../../common/Avatar/DotIndicator';
import { PlaceholderIcon } from '../../common/Avatar/PlaceholderIcon';
import { PlaceholderInitials } from '../../common/Avatar/PlaceholderInitials';
import { Stacked } from '../../common/Avatar/Stacked';
import { BadgesLinks } from '../../common/Badges/BadgesLinks';
import { BadgesWithIcon } from '../../common/Badges/BadgesWithIcon';
import { BadgeWithOnlyIcon } from '../../common/Badges/BadgeWithOnlyIcon';
import { ButtonWithBadge } from '../../common/Badges/ButtonWithBadge';
import { DefaultBadge } from '../../common/Badges/DefaultBadge';
import { DismissableBadges } from '../../common/Badges/DismissableBadges';
import { LargeBadges } from '../../common/Badges/LargeBadges';
import { NotificationBadge } from '../../common/Badges/NotificationBadge';
import { DefaultBreadCrumbs } from '../../common/Breadcrumbs/DefaultBreadCrumbs';
import { SolidBackgroundBreadCrumbs } from '../../common/Breadcrumbs/SolidBackgroundBreadCrumbs';
import { ButtonWithIcons } from '../../common/Buttons/ButtonWithIcons';
import { ColouredShadowButton } from '../../common/Buttons/ColouredShadowButton';
import { DefaultButtons } from '../../common/Buttons/DefaultButtons';
import { IconButtons } from '../../common/Buttons/IconButtons';
import { LoaderButton } from '../../common/Buttons/LoaderButton';
import { MonoChromeButton } from '../../common/Buttons/MonoChromeButton';
import { MonoOutlineButton } from '../../common/Buttons/MonoOutlineButton';
import { OutlinedButton } from '../../common/Buttons/OutlinedButton';
import { PaymentButton } from '../../common/Buttons/PaymentButton';
import { PillsButton } from '../../common/Buttons/PillsButton';
import { SocialButton } from '../../common/Buttons/SocialButton';
import { CardWithList } from '../../common/Cards/CardWithList';
import { DefaultCarousel } from '../../common/Carousel/DefaultCarousel';
import { AvatarDropdown } from '../../common/Dropdown/AvatarDropdown';
import { Dropdown } from '../../common/Dropdown/Dropdown';
import { NotificationDropdown } from '../../common/Dropdown/NotificationDropdown';
import { ListGroupButton } from '../../common/ListGroup/ListGroupButton';
import { ListGroupWithIcon } from '../../common/ListGroup/ListGroupWithIcon';
import { DefaultModal } from '../../common/Modals/DefaultModal';
import { PopUp } from '../../common/Modals/PopUp';
import { Pagination } from '../../common/Pagination/Pagination';
import { ProgressBar } from '../../common/ProgressBar/ProgressBar';
import { StarRating } from '../../common/Rating/StarRating';
import { Sidebar } from '../../common/Sidebar/Sidebar';
import { InteractiveTab } from '../../common/Tabs/InteractiveTab';
import { UnderLineTab } from '../../common/Tabs/UnderLineTab';
import { MessageToast } from '../../common/Toast/MessageToast';
import { NotificationToast } from '../../common/Toast/NotificationToast';
import { PushNotification } from '../../common/Toast/PushNotification';
import { SimpleToast } from '../../common/Toast/SimpleToast';
import { Video } from '../../common/Video/Video';
import { Heading1 } from '../../common/Typography/Headings/Heading1';
import { Heading2 } from '../../common/Typography/Headings/Heading2';
import { Heading3 } from '../../common/Typography/Headings/Heading3';
import { Heading4 } from '../../common/Typography/Headings/Heading4';
import { Heading5 } from '../../common/Typography/Headings/Heading5';
import { Heading6 } from '../../common/Typography/Headings/Heading6';
import Paragraph from '../../common/Typography/Paragraphs/Paragraph';
import { Blokquote } from '../../common/Typography/Blockquote/Blokquote';
import { Images } from '../../common/Images/Images';
import { UnordoredList } from '../../common/Lists/UnordoredList';
import { IconsList } from '../../common/Lists/IconsList';
import { NestingList } from '../../common/Lists/NestingList';
import { FontSize } from '../../common/Typography/Text/FontSize';
import { FontWeight } from '../../common/Typography/Text/FontWeight';
import { TextDecoration } from '../../common/Typography/Text/TextDecoration';
import { OpacityText } from '../../common/Typography/Text/OpacityText';
import { DefaultHr } from '../../common/Typography/HorizontalLine/DefaultHr';
import { TrimmedHr } from '../../common/Typography/HorizontalLine/TrimmedHr';
import { Skeleton } from '../../common/Skeleton/Skeleton';
import { toggleTheme } from '../../helpers/themeFunc';


const AllComponent = () => {

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

      <button onClick={()=>toggleTheme()} className="z-[999] fixed bottom-4 left-4 bg-slate-700 p-4">click</button>
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
      <Heading5>DefaultButtons</Heading5>
      <DefaultButtons />
      <Heading5>PillsButton</Heading5>
      <PillsButton />
      <Heading5>MonoChromeButton</Heading5>
      <MonoChromeButton />
      <Heading5>OutlinedButton</Heading5>
      <OutlinedButton />
      <Heading5>ColouredShadowButton</Heading5>
      <ColouredShadowButton />
      <Heading5>SocialButton</Heading5>
      <SocialButton />
      <Heading5>PaymentButton</Heading5>
      <PaymentButton />
      <Heading5>MonoOutlineButton</Heading5>
      <MonoOutlineButton />
      <Heading5>ButtonWithIcons</Heading5>
      <ButtonWithIcons />
      <Heading5>IconButtons</Heading5>
      <IconButtons />
      <Heading5>LoaderButton</Heading5>
      <LoaderButton />
      <Heading5>CardWithList</Heading5>
      <CardWithList />
      <Heading5>DefaultCarousel</Heading5>
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
      <PopUp>
        <svg
        aria-hidden="true"
        className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
          Are you sure you want to delete this product?
        </h3>
        <button
          data-modal-toggle="popup-modal"
          type="button"
          className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
        >
          Yes, I'm sure
        </button>
        <button
          data-modal-toggle="popup-modal"
          type="button"
          className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
        >
          No, cancel
        </button>
        </PopUp>

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

      <Heading1>Heading1</Heading1>
      <Heading2>Heading2</Heading2>
      <Heading3>Heading3</Heading3>
      <Heading4>Heading4</Heading4>
      <Heading5>heading 5</Heading5>
      <Heading6 >heading 6</Heading6>
      <Paragraph>Paragraphs</Paragraph>
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
  )
}

export default AllComponent
