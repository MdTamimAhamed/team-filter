import React, { useEffect, useState } from 'react';
import NavigationBar from './NavigationBar';
import axios from 'axios';
import Table from './reusables/Table';
import TableHead from './reusables/TableHead';
import TableBody from './reusables/TableBody';
import TableRow from './reusables/TableRow';
import UpdatePlayer from './update/UpdatePlayer';
import baseURL from '../utils/baseURL';
import CreatePlayer from './create/CreatePlayer';

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getLeaderboard();
  }, []);

  async function getLeaderboard() {
    try {
      const res = await axios.get(`${baseURL}/players`);
      setPlayers([...res?.data]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <NavigationBar />
      <div className='flex justify-center'>
        <div className='w-[850px] mt-10 flex flex-col justify-center'>
          <CreatePlayer />
          <h1 className='text-center text-[30px]'>Players</h1>

          <Table>
            <TableHead
              bgColor='bg-primary'
              titles={['Name', 'Goals', 'Team', 'Update', 'Delete']}
            ></TableHead>
            <TableBody>
              {players.map(player => (
                <TableRow
                  attributes={{
                    name: player.name,
                    goals: player.goals,
                    team: player.team,
                    update: <UpdatePlayer />,
                    delete: <>Delete</>
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

export default Players;
