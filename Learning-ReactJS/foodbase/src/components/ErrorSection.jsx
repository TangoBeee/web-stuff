import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import styled from 'styled-components'

const ErrorSection = () => {
  return (
    <ErrorContainer>
            <Player
                src="src/assets/food-error.json"
                loop
                autoplay

                className='error-icon'
            />
    </ErrorContainer>
  )
}

export default ErrorSection

const ErrorContainer = styled.div`
    .error-icon {
        min-width: 500px;
        min-height: 500px;
    }
`