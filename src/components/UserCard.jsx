function UserCard({ user, onShow }) {
  return (
    <div className="card">
      <img src={user.image} alt="Profile" className="card-img" />

      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>

      <button onClick={() => onShow(user)}>Show Details</button>
    </div>
  );
}

export default UserCard;
