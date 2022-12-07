import React from 'react'
import NavigationBar from './NavigationBar'

const Home = () => {
    const goldenBootWinner = [
        {id:1, playerName: 'Mohamed Salah', goal:'23'}
    ]
  return (
    <>
        <NavigationBar/>
        <div className='flex justify-center'>
            <div className='w-[850px] mt-10 flex flex-col justify-center'>
                <h1 className='text-center text-[30px] font-bold'>Winners of the Golden Boot</h1>
                <table className='mt-10 border border-grayBorder'>
                    <thead>
                        <tr>
                            <th className='w-1/2 py-4 text-xl font-bold'>Player Name</th>
                            <th className='w-1/2 py-4 text-xl font-bold'>Goals</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            goldenBootWinner.map((item) =>(
                                <tr key={item.id} className='border-t border-grayBorder'>
                                    <td className='w-1/2 text-center py-4'>{item.playerName}</td>
                                    <td className='w-1/2 text-center py-4'>{item.goal}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default Home