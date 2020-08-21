import styled from 'styled-components'

import Head from 'next/head'
import MuiContainer from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import AppMenu from '../components/templates/AppMenu'
import Logo from '../components/atoms/Logo'

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

const LayoutInternal = ({ title, children }) => {
  const classes = useStyles()

  return (
    <>
      {title
        ? (
          <Head>
            <title>{`Tribes >> ${title}`}</title>
          </Head>
        ) : null
      }
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

export default LayoutInternal
