// Next Imports
import Head from 'next/head'

// MUI Imports
import MuiContainer from '@material-ui/core/Container'

// Atoms Imports
import Logo from '../components/atoms/Logo'

// Organisms Imports
import AppMenu from '../components/organisms/AppMenu'

// MUI Styles
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  wrapper: {
    minHeight: '100vh',
    paddingTop: 56,
    [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: { 
      paddingTop: 48, 
    }, 
    [theme.breakpoints.up('sm')]: { 
      paddingTop: 64, 
    }, 
  },
}))

// Styled Components
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 400px;
`

const LogoWrapper = styled.div`
  max-width: 220px;
  margin: 50px 0;
`

const ChildrenWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
`

// Head Title Component
const HeadTitle = ({ title }) => (
  <Head>
    <title>{`Tribes >> ${title}`}</title>
  </Head>
)

// Component
const LayoutInternal = ({ title, children }) => {
  // MUI Styles
  const classes = useStyles()

  // Render
  return (
    <>
      {title ? <HeadTitle title={title} /> : null}
      <MuiContainer component="main" maxWidth="xs">
        <AppMenu title={title} />
        <Wrapper className={classes.wrapper}>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <ChildrenWrapper>
            {children}
          </ChildrenWrapper>
        </Wrapper>
      </MuiContainer>
    </>
  )
}

export default LayoutInternal
