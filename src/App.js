import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.actions";

import Header from "./components/header/header.component";
import SignInAndSignUp from "./components/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { default as HomePage } from "./pages/homepage/homepage.container";
import { default as CatalogPage } from "./pages/catalog/catalog.container";
import { default as EditPage } from "./pages/edit/edit.container";
import { default as DetailPage } from "./pages/detail/detail.container";

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

  const currentUser = useSelector((state) => state.user.currentUser);
  const onSign = useSelector(
    (state) => state.sign.onSignIn || state.sign.onSignUp
  );
  const signList = useSelector((state) => state.sign.signList);

  return (
    <div className="app">
      <Header currentUser={currentUser} />
      <div style={{ marginTop: "70px" }}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path={`/catalog/:menuId`} component={CatalogPage} />
          <Route
            path="/edit"
            render={() =>
              currentUser ? (
                <EditPage
                  isLoading={!!!currentUser}
                  currentUser={currentUser}
                />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path={`/detail/:collectionId`}
            render={() => (currentUser ? <DetailPage /> : <Redirect to="/" />)}
          />
        </Switch>
      </div>
      {onSign ? <SignInAndSignUp {...signList} /> : null}
    </div>
  );
}

export default App;
