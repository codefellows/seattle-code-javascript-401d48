import { connect } from 'react-redux';
import { incrementVote, decrementVote, reset } from '../../store/actions';
import { Box, Button, ButtonGroup, Card, CardActions, CardContent, Typography } from '@mui/material';
// import lucky from '../../images/lucky-car.jpg'

const Candidates = (props) => {
  // notice that we have total votes and candidates in props
  console.log(props);
  const { candidates, totalVotes, incrementVote, decrementVote, reset } = props;
  console.log('our candidates', candidates)
  return (
    <>
      <h1>Total Candidate Votes {props.totalVotes}</h1>
      <Box sx={{ display: 'flex', flexDirection: 'row', textAlign: 'center', margin: '25px' }}>
        {
          candidates.map((candidate, index) => (
            <Card key={`candidate-${index}`} sx={{ margin: '25px' }} raised>
              <CardContent>
                <Typography variant="h5">{candidate.name}</Typography>
                <Typography >Votes: {candidate.votes}</Typography>
              </CardContent>
              <CardActions>
                <ButtonGroup variant="text">
                  <Button color="secondary" onClick={() => incrementVote(candidate)}>Vote</Button>
                  <Button color="error" onClick={() => decrementVote(candidate)}>UnVote</Button>

                </ButtonGroup>
              </CardActions>
            </Card>
          ))
        }

      </Box>
      <button onClick={reset}>Reset</button>
      {/* <img src={lucky} alt="lucky H. Dog" width="250px" /> */}
    </>
  )
}

// add redux state to the component prop chain
const mapStateToProps = ({ votes, candidates }) => {
  return {
    totalVotes: votes.totalVotes,
    candidates,
  }
}

// add dispatch actions to the component prop chain
const mapDispatchToProps = {
  incrementVote,
  decrementVote,
  reset
};

export default connect(mapStateToProps, mapDispatchToProps)(Candidates);
