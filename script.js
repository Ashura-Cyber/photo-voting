const votes = {
    photo1: 53,
    photo2: 25
};

function vote(photoId) {
    votes[photoId]++;
    document.getElementById(`votes-${photoId}`).innerText = `${votes[photoId]} votes`;
}
