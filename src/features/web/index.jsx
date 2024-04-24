import HomePage from 'features/web/guest/homepage';
import Contentpage from 'features/web/guest/contentpage';

const Page = [
  {
    path: '/home',
    main: <HomePage/>,
  },
  {
    path: '/content',
    main: <Contentpage/>,
  }
];
export default Page;