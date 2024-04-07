import Home from 'features/web/guest/homepage';



// const CategoryChild = lazy(() => import('features/web/Guest/CategoryChild'));

const Page = [

  {
    path: ['/', '/home'],
    exact: true,
    main: Home,
  }

];
export default Page;