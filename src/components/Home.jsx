import axios from 'axios';
import React, { useState, useEffect } from 'react';
import NavigationBar from './NavigationBar';
import Table from './reusables/Table';
import TableBody from './reusables/TableBody';
import TableHead from './reusables/TableHead';
import TableRow from './reusables/TableRow';

const Home = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getLeaderboard();
  }, []);

  async function getLeaderboard() {
    try {
      const res = await axios.get('http://localhost:5000/leaderboard');
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
          <h1 className='text-center text-[30px]'>Golden Boot Leaderboard</h1>

          <Table>
            <TableHead
              bgColor='bg-primary'
              titles={['Name', 'Goals', 'Team']}
            ></TableHead>
            <TableBody>
              {players.map(player => (
                <TableRow
                  attributes={{
                    name: player.name,
                    goals: player.goals,
                    team: player.team
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

export default Home;
