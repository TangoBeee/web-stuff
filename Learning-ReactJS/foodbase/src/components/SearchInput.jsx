import styled from "styled-components"

const SearchInput = ({ setFoodFilter }) => {

    const handleChange = (event) => {
        if(!event.target.value) setFoodFilter("Indian")
        else setFoodFilter(event.target.value)
    }

  return (
    <SearchInputContainer>
        <input className="search-input"
            type="search"
            name="search-item"
            id="food-search"
            placeholder="Search Country..."
            onChange={handleChange}
        />
    </SearchInputContainer>
  )
}

export default SearchInput

const SearchInputContainer = styled.div`
    .search-input {
        border: 1px solid #FF0909;
        padding: 10px 20px;
        background-color: transparent;
        font-size: 16px;
        color: white;
        font-weight: 400;
        border-radius: 5px;

        &::-webkit-search-cancel-button {
            -webkit-appearance: none;
            width: 24px;
            height: 24px;
            background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23777'><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>");
            cursor: pointer;
        }

        &::placeholder {
            color: #D3D3D3;
        }
    }
`