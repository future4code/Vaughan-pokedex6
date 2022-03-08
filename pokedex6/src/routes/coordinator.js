export const goToHome = (navigate) => {
    navigate("/")
}
export const goToDetails = (navigate, id) => {
    navigate(`/pokemon/${id}`)
}
export const goToPokedex = (navigate) => {
    navigate("/pokedex")
}

