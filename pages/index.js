import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from '@/styles/home.module.css';

export default function Home() {
  const router = useRouter();
  const [roomId, setRoomId] = useState('');

  const createAndJoin = () => {
    const roomId = uuidv4();
    router.push(`/${roomId}`);
  };

  const joinRoom = () => {
    if (roomId) {
      router.push(`/${roomId}`);
    } else {
      alert('Please provide a valid room id');
    }
  };

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>Google Meet Clone</h1>
      <div className={styles.enterRoom}>
        <input
          className={styles.enterInput}
          placeholder="Enter Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e?.target?.value)}
        />
        <button className={styles.joinButton} onClick={joinRoom}>
          Join Room
        </button>
      </div>
      <span className={styles.separatorText}>--------------- OR ---------------</span>
      <button className={styles.createButton} onClick={createAndJoin}>
        Create a new room
      </button>
    </div>
  );
}
