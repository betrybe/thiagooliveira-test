import React, { useState } from 'react';
import Form from '../components/form';
import Header from '../components/header';
import Table from '../components/table';

const Wallet = () => {
  const INITIAL_EMPTY = -1;
  const [currentEdit, setCurrentEdit] = useState(INITIAL_EMPTY);

  return (
    <>
      <Header />
      <Form
        currentEdit={ currentEdit }
        endEditing={ () => setCurrentEdit(INITIAL_EMPTY) }
      />
      <Table handleEdit={ setCurrentEdit } />
    </>
  );
};

export default Wallet;
