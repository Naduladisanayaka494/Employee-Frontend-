import React from 'react';

const ListEmployeeComponent = () => {
  const dummyData = [
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com"
    },
    {
      "id": 2,
      "firstName": "Jane",
      "lastName": "Smith",
      "email": "jane.smith@example.com"
    },
    {
      "id": 3,
      "firstName": "Bob",
      "lastName": "Johnson",
      "email": "bob.johnson@example.com"
    },
    {
      "id": 4,
      "firstName": "Alice",
      "lastName": "Williams",
      "email": "alice.williams@example.com"
    },
    {
      "id": 5,
      "firstName": "Charlie",
      "lastName": "Brown",
      "email": "charlie.brown@example.com"
    }
  ];

  return (
    <div className='container'>
      <h2 className='text-center'>List of Employees</h2>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
