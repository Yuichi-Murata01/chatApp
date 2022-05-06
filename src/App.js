import './App.css';
import db from './firebase';
// import { doc, collection, getDocs, onSnapshot } from 'firebase/firestore';
import SignIn from './components/SignIn';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Line from './components/Line';


function App() {
  // const [posts, setPosts] = useState([]);


  // useEffect(() => {
    const [user] = useAuthState(auth);




  //   const postData = collection(db, 'posts');
  //   // データベースからデータを取得
  //   getDocs(postData).then((snapShot) => {
  //     // console.log(snapShot.docs.map((doc) => ({ ...doc.data() })));
  //     setPosts(snapShot.docs.map((doc) => ({ ...doc.data() })));
  //   });

  //   // リアルタイムでデータを取得
  //   const unSub = onSnapshot(postData, (post) => {
  //     setPosts(post.docs.map((doc) => ({ ...doc.data() })));
  //   })
  // },[]);

  return (
    <div>
      {/* {posts.map((post) => (
        <div key={post.title}>
          <h1>{post.title}</h1>
          <p>{post.text}</p>
        </div>
      ))} */}

      {/* <SignIn /> */}

      {user ? <Line /> : <SignIn />}

    </div>
  );
}

export default App;
