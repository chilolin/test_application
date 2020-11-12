import React, { useEffect, lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.actions";

import Header from "./components/header/header.component";
import SignInAndSignUp from "./components/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Spinner from './components/spinner/spinner.component'

import "./App.css";

const HomePage = lazy(() => import("./pages/homepage/homepage.container"));
const CollectionPage = lazy(() =>
  import("./pages/collection/collection.component")
);
const EditPage = lazy(() => import("./pages/edit/edit.component"));
const DetailPage = lazy(() => import("./pages/detail/detail.component"));

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
      <div className="body-container">
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/catalog/:menuId" component={CollectionPage} />

            <Route
              exact
              path="/edit"
              render={() =>
                currentUser ? (
                  <EditPage currentUser={currentUser} />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              path="/edit/:itemId"
              render={() =>
                currentUser ? <DetailPage /> : <Redirect to="/" />
              }
            />
          </Suspense>
        </Switch>
      </div>
      {onSign ? <SignInAndSignUp {...signList} /> : null}
    </div>
  );
}

export default App;
