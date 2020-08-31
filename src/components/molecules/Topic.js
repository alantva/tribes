// MUI Imports
import MuiAvatar from '@material-ui/core/Avatar'
import MuiCard from '@material-ui/core/Card'
import MuiCardHeader from '@material-ui/core/CardHeader'
import MuiCardMedia from '@material-ui/core/CardMedia'
import MuiCardContent from '@material-ui/core/CardContent'
import MuiCardActions from '@material-ui/core/CardActions'
import MuiTypography from '@material-ui/core/Typography'

// Atoms Imports
import Button from '../atoms/Button'

// MUI Styles
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'left',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}))

// Component
const Topic = (props) => {
  // MUI Styles
  const classes = useStyles()

  // Date Generation
  const localeOptions = { day: 'numeric', month: 'long', year: 'numeric' }
  const dateString = new Date().toLocaleDateString('pt-BR', localeOptions)

  // Render
  return (
    <MuiCard className={classes.root}>
      <MuiCardHeader
        avatar={<MuiAvatar alt="Profile Picture" src={props.profile_picture} />}
        title={props.username}
        subheader={dateString}
      />
      <MuiCardMedia
        className={classes.media}
        image={props.card_picture}
        title={props.card_title}
      />
      <MuiCardContent>
        <MuiTypography variant="body1" gutterBottom>
          {props.card_title}
        </MuiTypography>
        <MuiTypography variant="caption">
          {props.card_content}
        </MuiTypography>
      </MuiCardContent>
      <MuiCardActions>
        <Button>Leia mais</Button>
      </MuiCardActions>
    </MuiCard>
  )
}

export default Topic
