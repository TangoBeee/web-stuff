import styled from "styled-components"
import SearchInput from "./SearchInput"
import Categories from "./Category/Categories"

const Navigation = ({ setFoodFilter }) => {
  return (
    <NavigationContainer className="container">

        <nav>
            <div className="logo">
                <a href="#">
                    F<span>oo</span>dy Z<span>o</span>ne
                </a>
            </div>

            <SearchInput setFoodFilter={setFoodFilter} />
        </nav>

        <Categories setFoodFilter={setFoodFilter} />

    </NavigationContainer>
  )
}

export default Navigation

const NavigationContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 55px;

    nav {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        .logo a {
            color: white;
            font-size: 32px;
            font-weight: 700;
            text-decoration: none;
        }

        .logo span {
            color: #FF0909;
        }
    }

    @media (max-width: 700px) {
        nav {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }
    }
    
    @media (max-width: 425px) {
        nav {
            .logo a {
                white-space: nowrap;
            }
        }
    }
`