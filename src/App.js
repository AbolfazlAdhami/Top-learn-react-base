import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopLearn from "./TopLearn";

function App() {
        return (
                <Router>
                        <Routes>
                                <Route path="/" element={<TopLearn />}>
                                        <Route path=":id" element={<TopLearn />} />
                                </Route>
                        </Routes>
                </Router>
        );
}

export default App;

// import { Routes, Route, useParams, BrowserRouter as Router } from "react-router-dom";

// function ProfilePage() {
//         // Get the userId param from the URL.
//         let { userId } = useParams();
//         // ...

//         return <h2 style={{ color: "red" }}>{userId}</h2>;
// }

// function App() {
//         return (
//                 <Routes>
//                         <Route path="/">
//                                 <Route path=":userId" element={<ProfilePage />} />
//
//                         </Route>
//                 </Routes>
//         );
// }
// export default App;
