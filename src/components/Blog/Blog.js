import React from 'react';

const Blog = () => {
    return (
        <div>
           <div className="blog">
            <h1> Question- 01: what is the purpose of react router?</h1>
            <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
           </div>
           <div className="blog">
            <h1>Question- 02: how does contex api works?</h1>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
           </div>
           <div className="blog">
            <h1>Use of ref.</h1>
           </div>
        </div>
    );
};

export default Blog;