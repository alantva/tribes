import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'

const ContainerSelectYourTribe = () => {
  const [activeStep, setActiveStep] = React.useState(0)
  // stepProps.completed = false

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  return (
    <>
      <Stepper activeStep={activeStep}>
        <Step>
          <StepLabel>Step 1</StepLabel>
        </Step>
        <Step>
          <StepLabel>Step 2</StepLabel>
        </Step>
      </Stepper>
      <button onClick={handleNext}>Next!</button>
    </>
  )
}

export default ContainerSelectYourTribe
