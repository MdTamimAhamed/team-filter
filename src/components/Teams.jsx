import React, { useEffect, useState } from 'react';
import NavigationBar from './NavigationBar';
import axios from 'axios';
import Table from './reusables/Table';
import TableHead from './reusables/TableHead';
import TableBody from './reusables/TableBody';
import TableRow from './reusables/TableRow';
import UpdateTeam from './update/UpdateTeam';
import baseURL from '../utils/baseURL';
import CreateTeam from './create/CreateTeam';
import DeleteTeam from './delete/DeleteTeam';

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams();
  }, []);

  async function getTeams() {
    try {
      const res = await axios.get(`${baseURL}/teams`);
      setTeams([...res?.data]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <NavigationBar />
      <div className='flex justify-center'>
        <div className='w-8/12 flex flex-col mt-6'>
          <CreateTeam />
          <h1 className='text-center text-2xl mt-6'>Teams Table</h1>
        </div>
      </div>
      <div className='flex w-full justify-center'>
        <div className='flex w-8/12 flex-col justify-center'>
          <Table>
            <TableHead
              bgColor='bg-primary'
              titles={['Team', 'Update', 'Delete']}
            ></TableHead>
            <TableBody>
              {teams.map(team => (
                <TableRow
                  attributes={{
                    team: team.name,
                    update: <UpdateTeam id={team.id} />,
                    delete: <DeleteTeam name={team.name} id={team.id} />
                  }}
                />
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Teams;
