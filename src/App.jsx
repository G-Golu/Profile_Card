import { useState } from "react";
import UserCard from "./components/UserCard";
import UserDetails from "./components/UserDetails";
import "./App.css";

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    {
      name: "Isha Parmar",
      email: "isha457@gmail.com",
      role: "Intern",
      image: "/profile1.jpg",
    },
    {
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      role: "Developer",
      image: "/profile2.png",
    },
    {
      name: "Priya Goel",
      email: "priyag456@gmail.com",
      role: "Developper",
      image: "/profile3.png",
    },
    {
      name: "Golu Kumar",
      email: "golu.tech897@gmail.com",
      role: "Intern",
      image: "/image4.png",
    },
  ];

  return (
    <div className="app">
      {users.map((user, index) => (
        <UserCard
          key={index}
          user={user}
          onShow={setSelectedUser}
        />
      ))}

      {selectedUser && (
        <UserDetails
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
}

export default App;
