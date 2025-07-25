import styled from 'styled-components';

const Card = styled.div`
  background: #2a2a2a;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Team = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 10px;
`;

const Score = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffcc00;
`;

const Time = styled.div`
  color: #aaa;
  font-size: 0.8rem;
`;

const BetCard = ({ match }) => {
  return (
    <Card>
      <Team>
        <Logo src={match.logo1} alt={match.team1} />
        <span>{match.team1}</span>
      </Team>

      <div>
        <Score>{match.score}</Score>
        <Time>الدقيقة {match.time}</Time>
      </div>

      <Team style={{ justifyContent: 'flex-end' }}>
        <span>{match.team2}</span>
        <Logo src={match.logo2} alt={match.team2} />
      </Team>
    </Card>
  );
};

export default BetCard;
