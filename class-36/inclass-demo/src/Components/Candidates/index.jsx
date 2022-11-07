import { connect } from 'react-redux';
import { incrementVote, decrementVote, reset } from '../../store/votes';

const Candidates = (props) => {
  // notice that we have total votes and candidates in props
  console.log(props);
  const { candidates, totalVotes, incrementVote, decrementVote, reset } = props;
  return (
    <>
      <h1>Total Candidate Votes {props.totalVotes}</h1>
      {
        candidates.map((candidate, index) => (
          <div key={`candidate-${index}`}>
            <h5>{candidate.name} has {candidate.votes} votes</h5>
            <button onClick={() => incrementVote(candidate)}>Vote</button>
            <button onClick={() => decrementVote(candidate)}>UnVote</button>
          </div>
        ))
      }
      <button onClick={reset}>Reset</button>
    </>
  )
}

// add redux state to the component prop chain
const mapStateToProps = ({ votes }) => {
  return {
    totalVotes: votes.totalVotes,
    candidates: votes.candidates
  }
}

// add dispatch actions to the component prop chain
const mapDispatchToProps = {
  incrementVote,
  decrementVote,
  reset
};

export default connect(mapStateToProps, mapDispatchToProps)(Candidates);
