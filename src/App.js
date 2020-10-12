import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.actions";

import Header from "./components/header/header.component";
import SignInAndSignUp from "./components/sign-in-and-sign-up/sign-in-and-sign-up.component";

import HomePage from "./pages/homepage/homepage.component";
import CatalogPage from './pages/catalog/catalog.component';
import CreatePage from "./pages/create/create.component";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot((snapShot) => {
          dispatch(
            setCurrentUser({
              ...snapShot.data(),
              id: snapShot.id,
            })
            );
          });
        }
        
        dispatch(setCurrentUser(userAuth));
      });
      
      return () => unsubscribe();
    }, [dispatch]);
    
    const currentUser = useSelector(state => state.user.currentUser);
    const onSign = useSelector(
      (state) => state.sign.onSignIn || state.sign.onSignUp
    );
    const signList = useSelector(state => state.sign.signList);

  return (
    <div className="app">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path={`/catalog/:menuId`} component={CatalogPage} />
        <Route path="/create" component={CreatePage} />
      </Switch>
      {onSign ? <SignInAndSignUp {...signList} /> : null}
    </div>
  );
}

export default App;
