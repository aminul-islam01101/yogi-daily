const blogData = [
    {
        title: 'How does react works?',
        description:
            'Using html syntax (jsx) inside javascript !! yes literally its possible with react. A React app usually has a single root DOM node. Rendering an element into the DOM will change the user interface of the page. Virtual DOM allows ReactJS to update the DOM tree in the most efficient way possible. By storing Virtual DOM in the memory, React eliminates excessive re-rendering that may harm performance.',
    },
    {
        title: 'What is the difference between props and states?',
        description:
            'In react Props are used to pass data from one component to another.  On the oher hand, The state is a local data storage that is local to the component only and cannot be change from other components. 		Props are immutable and read-only. State changes can be asynchronous and mutable.',
    },
    {
        title: 'Use of useEffect hooks other than load data in website.',
        description:
            'The useEffect Hook handle side effects in components. Besides fetching data, it also handle updating the DOM directly, and timers as well as setTime out, setIntervals. ',
    },
];
export default blogData;
