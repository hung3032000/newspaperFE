import HomePage from 'features/web/guest/homepage';


const Page = [

  {
    path: ['/', '/home'],
    exact: true,
    main: HomePage,
  },
  {
    path: ['/ss', '/sss'],
    exact: true,
    main: <>Hello</>,
  }

];
export default Page;