import React, { useState, useContext } from "react";
import { UserContext } from "../utils/UserContext";

const UserTable = () => {
  const { users, loading, error } = useContext(UserContext);
  const [visibleDetails, setVisibleDetails] = useState({});

  const toggleDetails = (id) => {
    setVisibleDetails((prevDetails) => ({
      ...prevDetails,
      [id]: !prevDetails[id],
    }));
  };

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users: {error}</p>;

  return (
    <table className="min-w-full border border-gray-200 dark:border-gray-700">
      <thead>
        <tr>
          <th className="p-2 border-b">ID</th>
          <th className="p-2 border-b">Name</th>
          <th className="p-2 border-b">Email</th>
          <th className="p-2 border-b">Company</th>
          <th className="p-2 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <React.Fragment key={user.id}>
            <tr>
              <td className="p-2 border-b">{user.id}</td>
              <td className="p-2 border-b">{user.name}</td>
              <td className="p-2 border-b">{user.email}</td>
              <td className="p-2 border-b">{user.company.name}</td>
              <td className="p-2 border-b">
                <button
                  onClick={() => toggleDetails(user.id)}
                  className="p-1 text-blue-500 hover:underline"
                >
                  {visibleDetails[user.id] ? "Hide" : "Show"} Details
                </button>
              </td>
            </tr>
            {visibleDetails[user.id] && (
              <tr className="bg-gray-100 dark:bg-gray-800">
                <td colSpan="5" className="p-2">
                  <p>
                    Address: {`${user.address.street}, ${user.address.city}`}
                  </p>
                  <p>Phone: {user.phone}</p>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
