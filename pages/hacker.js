import GameLayout from '../components/GameLayout';
import HackerInfo from '../components/HackerInfo';
import Notes from '../components/Notes';
import { useRouter } from 'next/router';

const Hacker = (data) => {
  const router = useRouter();
  const gamecode = router.query.gamecode;

  return (
    <GameLayout>
      <HackerInfo></HackerInfo>
      <Notes></Notes>
    </GameLayout>
  );
};

export default Hacker;
