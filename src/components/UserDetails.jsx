function UserDetails({ user, onClose }) {
  return (
    <div className="details-overlay">
      <div className="details-card">
        <img src={user.image} alt="Profile" />

        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default UserDetails;
