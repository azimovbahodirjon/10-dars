function Avatar({ user }) {
  const { displayName, photoURL } = user;
  return (
    <div className="avatar flex-col gap-3 items-center">
      <div className="w-24 rounded-full">
        <img src={photoURL} />
      </div>
      <h3 className="text-xl font-medium">Hello,{displayName} 😊</h3>
    </div>
  );
}

export default Avatar;
