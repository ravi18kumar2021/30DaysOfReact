export const posts = [
    {
        id: 1,
        title: "Welcome to My Blog",
        content: "This is the very first post in this simple React blog.",
    },
    {
        id: 2,
        title: "Learning React",
        content: "React makes UI development fun and interactive.",
    },
    {
        id: 3,
        title: "Understanding useEffect in React",
        content: `The useEffect hook is one of the most powerful features in React. It allows you to perform side effects in your functional components, such as fetching data, manually changing the DOM, or setting up subscriptions. 
        The hook takes two arguments: a callback function and a dependency array. If the dependency array is empty, the effect runs only once, mimicking componentDidMount. If values are passed, it runs when those values change. Cleanup functions can also be returned to prevent memory leaks. Learning to manage effects cleanly is key to writing performant React apps.`
    },
    {
  id: 4,
  title: "How to Build a Responsive Navbar in React",
  content: `
Creating a responsive navbar in React can be done using conditional rendering and CSS media queries. You'll typically start by building a layout with a logo, nav links, and a mobile menu icon. When the screen size changes, use CSS to show/hide elements or use a useState hook to toggle a mobile nav menu. You can integrate libraries like Tailwind CSS or styled-components for responsive styling. Accessibility is also important—ensure keyboard navigation and proper aria-labels. This approach ensures your site is user-friendly on both desktop and mobile.
`
},
{
  id: 5,
  title: "LocalStorage vs SessionStorage: What to Use When",
  content: `
Both localStorage and sessionStorage are part of the Web Storage API and allow developers to store key-value pairs in the browser. The key difference is lifespan: localStorage persists even after the browser is closed, while sessionStorage clears when the tab is closed. 

Use localStorage for long-term data like theme preferences or authentication tokens (with care), and sessionStorage for temporary data like form input or UI state. Neither should store sensitive data. Understanding their limitations helps you build more secure and performant web apps.
`
},
{
  id: 6,
  title: "React Router v6: What's New and How to Use It",
  content: `
React Router v6 introduced several improvements over v5, including simplified route matching, nested routes with layout components, and useRoutes() for programmatic route configs. One major change is how route components are rendered—element replaces component, and routes are now matched exclusively. 

Nested routes also no longer require switch wrappers. These changes streamline route declarations and improve performance. Migrating from v5 requires small syntax updates but offers more flexible route management and cleaner code.
`
}
]