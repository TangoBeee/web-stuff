import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import styled from 'styled-components'

const LoadingSection = () => {
  return (
    <LoadingContainer>
            <Player
                src="src/assets/loading.json"
                loop
                autoplay

                className='loading-icon'
            />
    </LoadingContainer>
  )
}

export default LoadingSection

const LoadingContainer = styled.div`
    .loading-icon {
        width: 200px;
        height: 200px;
    }
`