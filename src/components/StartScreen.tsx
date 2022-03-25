import './StartScreen.css';

export default function StartScreen() {
  return (
    <div className="start-screen">
      <h1>
        Welcome to &nbsp; <b>WEATHER OR NOT</b> &nbsp; 🙂
      </h1>
      <h2>
        Enter a &nbsp;{' '}
        <b>
          <i>location</i>
        </b>{' '}
        &nbsp; and select an &nbsp;{' '}
        <b>
          <i>item</i>
        </b>{' '}
        &nbsp; above to get started
      </h2>
    </div>
  );
}
