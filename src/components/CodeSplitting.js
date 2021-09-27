// 🚫 'import' and 'export' may only appear at the top level

// if (!user) {
//     import * as api from './api'
//  }

// if (editingPost === true) {
//     import * as edit from './editpost'

//    edit.showEditor()
//  }
// ES2020 spec
// if (editingPost === true) {
//     import('./editpost')
//         .then((module) => module.showEditor())
//         .catch((e) => )
// }


// import * as React from 'react'
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Link,
// } from 'react-router-dom'

// // import Home from './Home'

// import Topics from './Topics'
// import Settings from './Settings'

// const LazyHomeComponent = React.lazy(
//     () => import('./Home')
// )

// export default function App() {
//     return (
//         <Router>
//             <div>
//                 <ul>
//                     <li><Link to='/'>Home</Link></li>
//                     <li><Link to='/topics'>Topics</Link></li>
//                     <li><Link to='/settings'>Settings</Link></li>
//                 </ul>

//                 <hr />

//                 <Routes>
//                     <Route path='/' element={<LazyHomeComponent />} />
//                     <Route path='/topics' element={<Topics />} />
//                     <Route path='/settings' element={<Settings />} />
//                 </Routes>
//             </div>
//         </Router>
//     )
// }


// import * as React from 'react'
// import Loading from './Loading'

// const Settings = React.lazy(() => import('./Settings'))

// function App() {
//     return (
//         <div>
//             <React.Suspense fallback={<Loading />}>
//                 <Settings />
//             </React.Suspense>
//         </div>
//     )
// }

// import * as React from 'react'
// import Loading from './Loading'

// const AdDashboard = React.lazy(() => import('./AdDashboard'))
// const Analytics = React.lazy(() => import('./Analytics'))
// const Settings = React.lazy(() => import('./Settings'))

// function App() {
//     return (
//         <div>
//             <React.Suspense fallback={<Loading />}>
//                 <AdDashboard />
//                 <Analytics />
//                 <Settings />
//             </React.Suspense>
//         </div>
//     )
// }



import * as React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from 'react-router-dom'

import Loading from './Loading'

const Home = React.lazy(() => import('./Home'))
const Topics = React.lazy(() => import('./Topics'))
const Settings = React.lazy(() => import('./Settings'))

export default function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/topics'>Topics</Link></li>
                    <li><Link to='/settings'>Settings</Link></li>
                </ul>

                <hr />

                <React.Suspense fallback={<Loading />}>
                    {/* A React Element is what gets returned from components. It’s an object that virtually describes the DOM nodes that a component represents. */}
                    {/* React can create and destroy these element without much overhead. The JS objects are lightweight and low-cost */}
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/topics' element={<Topics />} />
                        <Route path='/settings' element={<Settings />} />
                    </Routes>
                </React.Suspense>
            </div>
        </Router>
    )
}


// You can get access to the history object's properties and the closest <Route>'s match via the withRouter higher-order component. withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.


import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

// A simple component that shows the pathname of the current location
class ShowTheLocation extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    render() {
        const { match, location, history } = this.props;

        return <div>You are now at {location.pathname}</div>;
    }
}

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
const ShowTheLocationWithRouter = withRouter(ShowTheLocation);