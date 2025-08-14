function UserAccountSidebar({ categories, handleCategory }) {
  return (
    <div className="user-account-sidebar">
      {categories.data.map((item) => {
        return (
          <li
            className={`category ${item.active ? "active" : null}`}
            key={item.id}
            onClick={() => {
              handleCategory(item.id);
            }}
          >
            {item.title}
          </li>
        );
      })}
    </div>
  );
}

export default UserAccountSidebar;
