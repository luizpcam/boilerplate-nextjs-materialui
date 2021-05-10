import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@store/reducers'
import { counterUp, counterDown } from '@slices/counterSlice'

export default function Home(): JSX.Element {
  const counter = useSelector((state: RootState) => state.counter.data)
  const dispatch = useDispatch()

  return (
    <div>
      <Typography variant="h1">
        Almost before we knew it, we had left the ground.
      </Typography>
      <Typography>{counter}</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(counterUp())}
      >
        Increment
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(counterDown())}
      >
        Descrement
      </Button>
    </div>
  )
}
