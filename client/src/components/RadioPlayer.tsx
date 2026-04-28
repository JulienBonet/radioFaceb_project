const RadioPlayer = () => {
  return (
    <div>
      <h2>🔴 En direct</h2>
      <audio controls autoPlay>
        <source
          src="https://ecmanager6.pro-fhi.net:1405/stream"
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
};

export default RadioPlayer;