export const goToHome = (navigate) => {
  navigate("/");
};
export const goToDetails = (navigate, id) => {

    navigate(`/details/${id}`)
}
export const goToPokedex = (navigate, id) => {
    navigate(`/pokedex/${id}`)
}

