import React, { useEffect, useState } from 'react';

export default () => {
  const [msg, setMsg] = useState<string>('');
  useEffect(() => {
    const socket = new WebSocket('ws://45.32.64.228:8080');
    socket.addEventListener('open', () => {
      socket.send('Hello Server!');
    });

    socket.addEventListener('message', (event) => {
      setMsg(event.data.trim());
    });
  }, []);

  return (
    <>
      <pre>{msg}</pre>
    </>
  );
};
